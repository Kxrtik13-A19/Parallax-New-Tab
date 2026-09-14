// 1. Live Developer Clock & Date
function updateSystemTime() {
    const now = new Date();
    
    // Time Format
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    
    // Date Format (YYYY-MM-DD)
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    document.getElementById('date-display').textContent = `${year}-${month}-${day}`;

    // Dynamic Context Greeting
    const greetingElement = document.getElementById('greeting');
    if (now.getHours() < 12) greetingElement.textContent = "Good Morning, Full-Stack Engineer.";
    else if (now.getHours() < 18) greetingElement.textContent = "Good Afternoon. Compiling workspace...";
    else greetingElement.textContent = "Late night coding session detected. Stay caffeinated.";
}
setInterval(updateSystemTime, 1000);
updateSystemTime();

// 2. Command Line Interface (CLI) Search Router
document.getElementById('cmd-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('cmd-input').value.trim();
    
    if (!input) return;

    // Routing Logic based on prefixes
    if (input.startsWith('/gh ')) {
        // Search GitHub
        const query = input.replace('/gh ', '');
        window.location.href = `https://github.com/search?q=${encodeURIComponent(query)}`;
    } else if (input.startsWith('/so ')) {
        // Search StackOverflow
        const query = input.replace('/so ', '');
        window.location.href = `https://stackoverflow.com/search?q=${encodeURIComponent(query)}`;
    } else if (input.startsWith('/yt ')) {
        // Search YouTube
        const query = input.replace('/yt ', '');
        window.location.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    } else {
        // Default Google Search
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(input)}`;
    }
});

// 3. Dynamic Dev Tips Array
const devTips = [
    "Always read the documentation before pasting from StackOverflow.",
    "Commit early, commit often. Write meaningful commit messages.",
    "console.log() is good, but learning the debugger is a superpower.",
    "Don't reinvent the wheel unless you are learning how wheels work.",
    "Code is read more often than it is written. Keep it clean.",
    "Hardware eventually fails. Software eventually works."
];

// Inject a random tip on load
const randomTip = devTips[Math.floor(Math.random() * devTips.length)];
document.getElementById('tip-text').textContent = randomTip;

// 4. Network Status Listener
window.addEventListener('offline', () => {
    document.getElementById('network-status').textContent = "ERR_CONNECTION_LOST";
    document.getElementById('network-status').style.color = "#ff5555";
    document.querySelector('.pulse-dot').style.backgroundColor = "#ff5555";
});

window.addEventListener('online', () => {
    document.getElementById('network-status').textContent = "NETWORK.ONLINE";
    document.getElementById('network-status').style.color = "#00f3ff";
    document.querySelector('.pulse-dot').style.backgroundColor = "#50fa7b";
});