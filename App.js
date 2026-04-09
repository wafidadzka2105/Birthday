// ==========================
// 📱 APP SYSTEM (iPhone feel)
// ==========================

// SIMPAN MUSIK POSISI
let music = document.getElementById("music");

if(music){
  let savedTime = localStorage.getItem("musicTime");
  if(savedTime){
    music.currentTime = savedTime;
  }

  // save posisi tiap detik
  setInterval(()=>{
    localStorage.setItem("musicTime", music.currentTime);
  },1000);
}


// ==========================
// 🎬 PAGE TRANSITION
// ==========================
document.querySelectorAll("a").forEach(link=>{
  link.addEventListener("click", function(e){
    e.preventDefault();

    const href = this.getAttribute("href");

    document.body.classList.add("opacity-0","scale-95");

    setTimeout(()=>{
      window.location.href = href;
    },300);
  });
});


// ==========================
// ✨ MASUK HALAMAN (FADE IN)
// ==========================
window.addEventListener("load", ()=>{
  document.body.classList.add("transition-all","duration-500");
  document.body.classList.remove("opacity-0","scale-95");
});


// ==========================
// 🎬 SPLASH SCREEN
// ==========================
window.addEventListener("load", ()=>{
  const splash = document.getElementById("splash");

  if(splash){
    setTimeout(()=>{
      splash.classList.add("opacity-0");

      setTimeout(()=>{
        splash.style.display="none";
      },500);

    },2000);
  }
});