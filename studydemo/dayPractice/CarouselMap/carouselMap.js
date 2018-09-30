window.onload = function () {

    //得到imglist
    var imgList = document.getElementsByClassName('divimg');

    let arr = Array.from(imgList);

    setInterval(() => {
        arr.forEach((item, index) => {

            if (index > 0) {
                
                    var distance = -600 * index;
                    item.style.left = distance + "px";
                    item.style.opacity=1;
                    item.style.zIndex=1;

                    //其他item默认还是opacity=0,zindex=0;
                    
            }

        arr.forEach(item)
        });
    }, 200);

}