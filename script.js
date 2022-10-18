function play() {
    var a_idx = 0;    
    var a = new Array("功德+1");
    var heart = document.createElement("b"); //创建b元素
    heart.onselectstart = new Function('event.returnValue=false'); //防止拖动
    document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
    a_idx = (a_idx + 1) % a.length;
    heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式
    var f = 17, // 字体大小
        x = event.clientX - f / 2, // 横坐标
        y = event.clientY - f, // 纵坐标
        c = "black", // 颜色
        a = 0.8, // 透明度
        s = 1.2; // 放大缩小
    var timer = setInterval(function () { //添加定时器
        if (a <= 0) {
            document.body.removeChild(heart);
            clearInterval(timer);
        } else {
            heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" +
                c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
                s + ");";
            y-=1.05;
            a -= 0.016;
            s += 0.004;
        }
    }, 15)

    

    //声音
    var audio = document.getElementById('music'); 
    if(audio.paused){
        audio.play();
    }
    else{        
        audio.currentTime=0;
    }          
                 
}

function add(){
    var x=document.getElementById("number");
    var a=x.value;
    a++;
    x.value=a;
}

