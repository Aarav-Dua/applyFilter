function preload(){

}

function setup(){

    var Canvas = createCanvas(540, 380);
    Canvas.position(90, 300);

    video = createCapture(VIDEO);
    video.hide();
    tintColor = "";
}

function draw(){

image(video, 0, 0, 540, 380);
tint(tintColor);

}

function take_snapshot(){

save('SUSpicious.png');
}

function apply_filter999(){

    tintColor = document.getElementById("INPUTARE").value;
}