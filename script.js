//your JS code here. If required.
let activeAudio = null
function playaudio(){
	activeAudio.play();
}
function stopAudio(){
	if(activeAudio){
		activeAudio.pause()
		activeAudio =null
	}
}
let audio = [
	"applause.mp3",
	"boo.mp3",
	"gasp.mp3",
	"tada.mp3",
	"victory.mp3",
	"wrong.mp3"
]
const button = document.getElementsByClassName("btn")
for(let i=0;i<button.length;i++){
	button[i].addEventListener("click",(event)=>{
		let innertext = event.target.innerText
		if(audio.includes(innertext)){
			//play particular audio
			const audioElement = document.createElement("audio")
			 audioElement.src = `./applause.mp3`
			audioElement.controls = true
			activeAudio = audioElement
			playaudio()
			
		}else{
			//stop playing audio
			stopAudio()
		}
	})
}