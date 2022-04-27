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
    speak_data=localStorage.getItem("content")
    var utterThis = new speechSynthesisUtterance(speak_data);
    synth.speek(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width:360,
    height:650,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
