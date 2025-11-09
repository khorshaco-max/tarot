function getYear(){
    const year = new Date().getFullYear()
    document.getElementById('current-year').textContent = " "+ year
}

getYear()

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
