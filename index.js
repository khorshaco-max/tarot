function getYear(){
    const year = new Date().getFullYear()
    document.getElementById('current-year').textContent = " "+ year
}

// getYear()

// Toggle transcript visibility for the About section
// Toggle transcript visibility
function setupTranscriptToggle() {
    const btn = document.getElementById('toggle-transcript')
    const transcript = document.getElementById('about-transcript')
    if(!btn || !transcript) return

    btn.addEventListener('click', function() {
        const isHidden = transcript.hasAttribute('hidden')
        if(isHidden) {
            transcript.removeAttribute('hidden')
            btn.setAttribute('aria-expanded','true')
            btn.textContent = 'Transkript verbergen'
        } else {
            transcript.setAttribute('hidden','')
            btn.setAttribute('aria-expanded','false')
            btn.textContent = 'Transkript anzeigen'
        }
    })
}

// Run after DOM ready
document.addEventListener('DOMContentLoaded', function(){
    setupTranscriptToggle()
})

const aboutVideo = document.getElementById("about-video");

if (aboutVideo) {
    aboutVideo.addEventListener("ended", function () {
        const poster = this.getAttribute("poster");

        // توقف کامل
        this.pause();

        // بازگرداندن فریم اول
        this.currentTime = 0;

        // ترفند مهم: ریست سورس → اجباری برای اینکه پوستر نمایش داده شود
        const src = this.querySelector("source").getAttribute("src");
        this.querySelector("source").setAttribute("src", "");
        this.load();

        // یک تأخیر خیلی کوتاه تا مرورگر ریست را کامل کند
        setTimeout(() => {
            this.querySelector("source").setAttribute("src", src);
            this.setAttribute("poster", poster);
            this.load(); // پوستر را دوباره بارگذاری می‌کند
        }, 50);
    });
}


  // وقتی ویدیو تموم شد
//   video.addEventListener("ended", function () {
//     // پخش رو به ابتدا برمی‌گردونه
//     video.currentTime = 0;
//     // و پوستر دوباره ظاهر میشه
//     video.load();
//       // اطمینان از اینکه پوستر دوباره ظاهر بشه
//   setTimeout(() => {
//     video.removeAttribute("src");
//     video.load();
//     video.setAttribute("poster", "bilder/PORT.jpg");
//   }, 100);
// });


//گالری صفحه تاروت 
const carousel = document.getElementById("carousel");

const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

btnLeft.addEventListener("click", scrollLeft)
btnRight.addEventListener("click", scrollRight)

function scrollLeft() {
    carousel.scrollBy({
    left: -300,
    behavior: "smooth"
    });
}

function scrollRight() {
    carousel.scrollBy({
    left: 300,
    behavior: "smooth"
    });
}

//پاپ اپ در صفحه پوکر روی کروزال

// انتخاب کارت‌ها و عناصر پاپ‌آپ
const cards = document.querySelectorAll(".card");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");
const closeBtn = document.getElementById("close-btn");

// وقتی روی کارت کلیک شد
cards.forEach(card => {
  card.addEventListener("click", () => {
    const text = card.getAttribute("data-text"); // متن از خاصیت data-text گرفته میشه
    popupText.textContent = text;
    popup.style.display = "flex"; // پاپ‌آپ نمایش داده میشه
  });
});

// بستن پاپ‌آپ
 closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
 });

