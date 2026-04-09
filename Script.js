// ❤️ LOVE
setInterval(()=>{
  const h=document.createElement("div");
  h.innerHTML="💖";
  h.style.position="fixed";
  h.style.top="0";
  h.style.left=Math.random()*100+"vw";
  h.style.animation="fall 3s linear";
  h.style.zIndex="999";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),3000);
},300);


// 🎉 CONFETTI
window.onload=()=>{
  initStory();
}


// 🎵 MUSIC
document.addEventListener("click", ()=>{
  const music=document.getElementById("music");
  if(music) music.play();
},{once:true});


// ==========================
// 📱 IG STORY SYSTEM
// ==========================
let index = 0;
let duration = 5000; // 5 detik per slide
let timer;

function initStory(){
  createProgress();
  showSlide(index);
  startProgress();

  document.getElementById("rightTap").onclick = next;
  document.getElementById("leftTap").onclick = prev;
}


// PROGRESS BAR
function createProgress(){
  const container = document.getElementById("progress");
  const total = document.querySelectorAll("#slider > div").length;

  for(let i=0;i<total;i++){
    const bar = document.createElement("div");
    bar.className="flex-1 h-1 bg-pink-200 rounded overflow-hidden";

    const fill = document.createElement("div");
    fill.className="h-full bg-pink-500 w-0";

    bar.appendChild(fill);
    container.appendChild(bar);
  }
}


// TAMPILKAN SLIDE
function showSlide(i){
  const slider = document.getElementById("slider");
  slider.style.transform = `translateX(-${i*100}%)`;
  handleVideo();
}


// NEXT
function next(){
  const total = document.querySelectorAll("#slider > div").length;
  index = (index+1)%total;
  resetProgress();
}


// PREV
function prev(){
  const total = document.querySelectorAll("#slider > div").length;
  index = (index-1+total)%total;
  resetProgress();
}


// PROGRESS ANIMATION
function startProgress(){
  const bars = document.querySelectorAll("#progress div div");
  let current = bars[index];

  let width = 0;

  timer = setInterval(()=>{
    width+=2;
    current.style.width = width + "%";

    if(width>=100){
      clearInterval(timer);
      next();
    }
  }, duration/50);
}


// RESET
function resetProgress(){
  clearInterval(timer);

  const fills = document.querySelectorAll("#progress div div");
  fills.forEach(f=>f.style.width="0");

  showSlide(index);
  startProgress();
}


// VIDEO CONTROL
function handleVideo(){
  const slides = document.querySelectorAll("#slider > div");

  slides.forEach((slide,i)=>{
    const video = slide.querySelector("video");
    if(video){
      if(i === index){
        video.play();
      } else {
        video.pause();
      }
    }
  });
}