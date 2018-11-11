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
        if (id) {

        } else {
          read(function (books) {
            let booksList = books.reverse();
            res.setHeader('Content-Type', 'application/json;charset=utf8')
            res.end(JSON.stringify(booksList))
          })
        }
        break;
      case 'POST':
        break;
      case 'PUT':
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
