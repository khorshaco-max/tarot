function getYear(){
    const year = new Date().getFullYear()
    document.getElementById('current-year').textContent = " "+ year
}

getYear()