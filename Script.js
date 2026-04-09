// LOVE
setInterval(()=>{
  const h=document.createElement("div");
  h.innerHTML="💖";
  h.style.position="fixed";
  h.style.top="0";
  h.style.left=Math.random()*100+"vw";
  h.style.animation="fall 3s linear";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),3000);
},300);

// CONFETTI
window.onload=()=>{
  for(let i=0;i<30;i++){
    const c=document.createElement("div");
    c.style.position="fixed";
    c.style.width="6px";
    c.style.height="6px";
    c.style.background=["pink","white","deeppink"][Math.floor(Math.random()*3)];
    c.style.left=Math.random()*100+"vw";
    c.style.animation="fall 3s linear";
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),3000);
  }

  initSlider(); // 🔥 INIT SLIDER
}

// MUSIC
document.addEventListener("click", ()=>{
  const music=document.getElementById("music");
  if(music) music.play();
},{once:true});


// ==========================
// 🔥 SLIDER PRO SYSTEM
// ==========================
let index = 0;
let startX = 0;
let slider = document.getElementById("slider");
let slides = slider.children;
let total = slides.length;
let dotsContainer = document.getElementById("dots");

// BUAT DOTS
function createDots(){
  for(let i=0;i<total;i++){
    const dot=document.createElement("div");
    dot.className="w-2 h-2 bg-pink-300 rounded-full cursor-pointer";
    dot.onclick=()=>goToSlide(i);
    dotsContainer.appendChild(dot);
  }
}

// UPDATE DOT
function updateDots(){
  const dots=dotsContainer.children;
  for(let i=0;i<dots.length;i++){
    dots[i].classList.remove("bg-pink-500","scale-125");
    dots[i].classList.add("bg-pink-300");
  }
  dots[index].classList.add("bg-pink-500","scale-125");
}

// PINDAH SLIDE
function goToSlide(i){
  index=i;
  slider.style.transform=`translateX(-${index*100}%)`;
  updateDots();
  handleVideo();
}

// AUTO SLIDE (50 detik)
setInterval(()=>{
  index=(index+1)%total;
  goToSlide(index);
},50000);

// SWIPE MOBILE
slider.addEventListener("touchstart",(e)=>{
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchend",(e)=>{
  let endX = e.changedTouches[0].clientX;

  if(startX - endX > 50){
    index = (index+1)%total;
  } else if(endX - startX > 50){
    index = (index-1+total)%total;
  }

  goToSlide(index);
});

// VIDEO AUTO PAUSE
function handleVideo(){
  const videos = document.querySelectorAll("video");

  videos.forEach((v,i)=>{
    if(i === index){
      v.play();
    } else {
      v.pause();
    }
  });
}

// INIT
function initSlider(){
  createDots();
  updateDots();
  handleVideo();
}