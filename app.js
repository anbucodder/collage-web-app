var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
}