function runClock() {
    let dateObj = new Date();
    
    let hrs = String(dateObj.getHours()).padStart(2, '0');
    let mins = String(dateObj.getMinutes()).padStart(2, '0');
    let secs = String(dateObj.getSeconds()).padStart(2, '0');
    
    document.getElementById('clock').textContent = `${hrs}:${mins}:${secs}`;
    
    let y = dateObj.getFullYear();
    let m = String(dateObj.getMonth() + 1).padStart(2, '0');
    let d = String(dateObj.getDate()).padStart(2, '0');
    document.getElementById('date-text').textContent = `${y}-${m}-${d}`;
    
    let greetText = document.getElementById('greeting');
    let currentHour = dateObj.getHours();
    
    if (currentHour < 12) {
        greetText.textContent = "morning, time to build.";
    } else if (currentHour < 18) {
        greetText.textContent = "afternoon session active.";
    } else {
        greetText.textContent = "late night coding, grab coffee.";
    }
}

setInterval(runClock, 1000);
runClock(); 

const searchForm = document.getElementById('cmd-form');
const searchBox = document.getElementById('cmd-input');

searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let query = searchBox.value.trim();
    
    if (query === "") return; 
    
    if (query.startsWith('/gh ')) {
        let term = query.replace('/gh ', '');
        window.location.href = `https://github.com/search?q=${encodeURIComponent(term)}`;
    } else if (query.startsWith('/so ')) {
        let term = query.replace('/so ', '');
        window.location.href = `https://stackoverflow.com/search?q=${encodeURIComponent(term)}`;
    } else if (query.startsWith('/yt ')) {
        let term = query.replace('/yt ', '');
        window.location.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(term)}`;
    } else {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
});

const randomQuotes = [
    "read the docs before asking on discord.",
    "hardware eventually breaks. software eventually works.",
    "console.log is cool but debugger is better.",
    "commit your code. seriously, do it now.",
    "if it works, don't touch it."
];

let selectedQuote = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
document.getElementById('quote-text').textContent = selectedQuote;

const focusObj = document.getElementById('focus-obj');

let savedMission = localStorage.getItem('myMission');
if (savedMission) {
    focusObj.value = savedMission;
}

focusObj.addEventListener('input', function(e) {
    localStorage.setItem('myMission', e.target.value);
});

window.addEventListener('offline', function() {
    document.getElementById('net-status').textContent = "WIFI DEAD";
    document.getElementById('net-status').style.color = "#ff5555";
    document.querySelector('.dot').style.backgroundColor = "#ff5555";
});

window.addEventListener('online', function() {
    document.getElementById('net-status').textContent = "SYS.ONLINE";
    document.getElementById('net-status').style.color = "#0ae8f0";
    document.querySelector('.dot').style.backgroundColor = "#4ade80";
});
