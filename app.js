var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    localStorage.setItem("content",content)
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking three selfies in 2 seconds intraval";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function() {
        takesnapshot();
        save();
    }, 2000);    setTimeout(function() {
        takesnapshot();
        save();
    }, 4000);
    setTimeout(function() {
        takesnapshot();
        save();
    }, 6000);
}

Webcam.set({
    width:360,
    height:650,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");

function takesnapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}
