var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start(){
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var content=event.results[0][0].transcript.toLowerCase();
    console.log(content);
    if(content=="selfie."){
        speak();
    }
    localStorage.setItem("content",content)
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function() {
        img_id="selfie1";
        speak_data="taking your next selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        takesnapshot1();
        save();
    }, 5000);    setTimeout(function() {
        img_id="selfie2";
        speak_data="taking your next selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        takesnapshot2();
        save();
    }, 10000);
    setTimeout(function() {
        img_id="selfie3";
        takesnapshot3();
        save();
    }, 15000);
}

Webcam.set({
    width:500,
    height:450,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");

function takesnapshot1(){
    Webcam.snap(function (data_uri){
        document.getElementById("column1").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}
function takesnapshot2(){
    Webcam.snap(function (data_uri){
        document.getElementById("column2").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}
function takesnapshot3(){
    Webcam.snap(function (data_uri){
        document.getElementById("column3").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}
