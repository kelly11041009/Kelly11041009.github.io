function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    // frameRate(0.5)
}

function draw() {
    // background(255)
    strokeWeight(2)
    let x = random(width),
        y = random(height)
    if ( random() < 0.5){
        fill(0)
        rect(x,y,200,50,20)
        textSize(30)
        fill(255)
        text( random(["YES","YEAH","THAT’S CORRECT","YEP"]) ,x+20,y+40)
    }else{
        //指定文字大小
        textSize(30)
        textFont("Arial");

        //白底黑字
        let myText = random(["YEAH","THAT’S CORRECT","YUP"])
        let w = textWidth(myText)
        //對話框
        fill(255)
        rect(x,y,w+50,50,20)

        fill(0)
         // 计算居中的 x 坐标
        let textX = x + 25 + (w + 50 - w) / 2;
      
        //文字
        text(myText,x+20,y+40)
    
    }
}  