let http = require('http');
let fs = require('fs');
let path = require('path')
let url = require('url');

//获取轮播图 /sliders

let sliders = require('./sliders')

function read(cb) {
  //relative path need add current path
  fs.readFile(path.join(__dirname, './book.json'), 'utf8', function (err, data) {
    if (err || data.length == 0) {
      cb([])
    } else {
      cb(JSON.parse(data));
    }
  })
}

function write(data, cb) {
  fs.writeFile(path.join(__dirname, './book.json'),
    JSON.stringify(data), cb)
}

// read(function(books){//所有图书

//   console.log(books)
// });

http.createServer((req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.setHeader("X-Powered-By", ' 3.2.1')
  if (req.method == "OPTIONS") return res.end();

  let {
    pathname,
    query
  } = url.parse(req.url, true) //当为true的时候，可以把query解析成对象

  if (pathname === '/sliders') {
    res.setHeader('Content-Type', 'application/json;charset=utf8')
    return res.end(JSON.stringify(sliders));
  }

  if (pathname === '/hot') {
    read(function (books) {
      let hot = books.reverse().slice(0, 6);
      res.setHeader('Content-Type', 'application/json;charset=utf8')
      res.end(JSON.stringify(hot))
    });
    return
  }

  if (pathname === '/book') { //对书的增删改查
    let id = parseInt(query.id) //取出的字符串
    switch (req.method) {
      case 'GET':
        if (!isNaN(id)) {
          read(function (books) {
            let book = books.find(item => item.bookId === id)
            if (!book) book = {} // 找不到bookID时返回空对象
            res.setHeader('Content-Type', 'application/json;charset=utf8')
            res.end(JSON.stringify(book))
          })
        } else {
          read(function (books) {
            let booksList = books.reverse();
            res.setHeader('Content-Type', 'application/json;charset=utf8')
            res.end(JSON.stringify(booksList))
          })
        }
        break;
      case 'POST':
        let str='';
        req.on('data',chunk=>{
          str+=chunk;
        })
        req.on('end',()=>{
          let book=JSON.parse(str)
          read(function(books){
            book.bookId=books.length>0?books[books.length-1].bookId+1:1;
            books.push(book)
            write(books,function(){
              res.end(JSON.stringify(book))
            })
          })
        })
        break;
      case 'PUT':
        if (id) {
          let str = ''
          req.on('data', chunk => {
            str += chunk;
          });
          req.on('end', () => {
            let book = JSON.parse(str); //book是要改成的样子
            read(function (books) {
              books = books.map(item => {
                if (item.bookId === id) { //找到ID相同的那一本
                  return book
                }
                return item
              })
              write(books, function () {
                res.end(JSON.stringify(book))
              })
            });


          })
        }
        break;
      case 'DELETE':
        read(function (books) {
          books = books.filter(item => item.bookId !== id)
          write(books, function () {
            res.setHeader('Content-Type', 'application/json;charset=utf8')
            res.end(JSON.stringify({}))
          })
        })

        // console.log(id)
        break;
    }

    return
  }
}).listen(3000)
