//https://teachablemachine.withgoogle.com/models/4yLQfGPWf/
Webcam.set({
    width:320,
    height:290,
    image_format:'png',
    png_quality:90
});
cam = document.getElementById("camera");
Webcam.attach(cam);

function captureMe(){
    Webcam.snap(function(image){
        document.getElementById("result").innerHTML = "<img id='resultImage' src="+image+">";
    });
}
console.log("ml5 version is - "+ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4yLQfGPWf/model.json",confirm);

function confirm(){
    console.log("model has loaded.");
}

function classifyMe(){
    img = document.getElementById("resultImage");
    classifier.classify(img,output);
}
function output(error,result){
    if(error){
        console.log(error);
    }else{
        console.log(result);
        document.getElementById("result_emotion_name").innerHTML = result[0].label;
        document.getElementById("result_emotion_name2").innerHTML = result[1].label;

        if(result[0].label == "Happy"){
            document.getElementById("pre1_emoji").innerHTML = "&#128512;";
        }else if(result[0].label == "Sad"){
            document.getElementById("pre1_emoji").innerHTML = "&#128532;";
        }else if(result[0].label == "Angry"){
            document.getElementById("pre1_emoji").innerHTML = "&#128545;";
        }

        if(result[1].label == "Happy"){
            document.getElementById("pre2_emoji").innerHTML = "&#128512;";
        }else if(result[1].label == "Sad"){
            document.getElementById("pre2_emoji").innerHTML = "&#128532;";
        }else if(result[1].label == "Angry"){
            document.getElementById("pre2_emoji").innerHTML = "&#128545;";
        }
    }
}