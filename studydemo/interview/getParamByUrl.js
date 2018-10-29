function showWindowHref(){
  let url='http://www.runoob.com/jquery/misc-trim.html?channelid=12333&name=xiaoming&age=23';
  let sHref=url || window.location.href ;
  let args=sHref.split('?')
  if(sHref[0]==sHref)
  {
    return ""
  }

  let arr=args[1].split('&');
  let obj={}
  for (let index = 0; index < arr.length; index++) {
    const arg=arr[index].split('=');
    obj[arg[0]]=arg[1]
  }

  return obj;
}

let href=showWindowHref();
console.log(href['name'])