// clock and date stuff 
let pad = x => ("0" + x).slice(-2);

function tick() {
    let d = new Date();
    document.getElementById('clock').innerText = pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
    document.getElementById('date-text').innerText = d.getFullYear() + "-" + pad(d.getMonth()+1) + "-" + pad(d.getDate());

    let h = d.getHours();
    let msg = document.getElementById('greeting');
    if(h < 12) msg.innerText = "morning, time to build.";
    else if(h < 18) msg.innerText = "afternoon hack club session."; 
    else msg.innerText = "late night embedded dev, grab coffee."; 
}
setInterval(tick, 1000); tick();

// search bar commands (dont touch this it took me forever)
document.getElementById('cmd-form').onsubmit = e => {
    e.preventDefault(); 
    let v = document.getElementById('cmd-input').value.trim();
    if(!v) return; // do nothing if empty
    
    // cuts off the first 4 letters and searches the rest
    if(v.startsWith('/gh ')) location = "https://github.com/search?q=" + v.slice(4);
    else if(v.startsWith('/so ')) location = "https://stackoverflow.com/search?q=" + v.slice(4);
    else if(v.startsWith('/yt ')) location = "https://youtube.com/results?search_query=" + v.slice(4);
    else location = "https://google.com/search?q=" + v;
};

// random quotes
let q = [
    "read the docs before asking on discord.",
    "hardware breaks. software works.",
    "console.log > debugger.",
    "commit your code bro.",
    "if it works, don't touch it."
];
document.getElementById('quote-text').innerText = q[Math.floor(Math.random()*q.length)];

// save mission so i dont forget it
let box = document.getElementById('focus-obj');
if(localStorage.getItem('mis')) box.value = localStorage.getItem('mis');
box.oninput = () => localStorage.setItem('mis', box.value);

// wifi check 
window.onoffline = () => {
    document.getElementById('net-status').innerText = "WIFI DEAD";
    document.getElementById('net-status').style.color = "red";
    document.querySelector('.dot').style.background = "red";
};

window.ononline = () => {
    document.getElementById('net-status').innerText = "SYS.ONLINE";
    document.getElementById('net-status').style.color = "cyan";
    document.querySelector('.dot').style.background = "lime";
};