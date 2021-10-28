//playing music code 

window.addEventListener("keydown",(e)=>
{
   
    var audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
  
    if(audio)
    {
        audio.play();//this function plays audio
        audio.currentTime=0;//this is to repeat audio quickly on another press  of same key
        key.classList.add("playing");// this is used for transition
    }
  
   
        return ;
       
})


//Remove Transion Code..

const keys=document.querySelectorAll(".key");
keys.forEach(key=>  key.addEventListener('transitionend',hi));
function hi(a)
{
    if(a.propertyName !== 'transform') return;
    this.classList.remove('playing');

}
