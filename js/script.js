// Timestamp Clipper Tool Logic
function ytcGenerateTimestamp() {
    const url = document.getElementById("ytc-url").value.trim();
    const start = document.getElementById("ytc-start").value.trim();
    const end = document.getElementById("ytc-end").value.trim();
    const result = document.getElementById("ytc-result");

    if (!url || !start || !end) {
        result.innerHTML = "❗ Please fill all fields correctly.";
        result.style.color = "red";
        return;
    }

    let baseURL = url;
    if (url.includes("youtube.com/watch?v=")) {
        baseURL = url.split("&")[0]; // remove extra params
    } else if (url.includes("youtu.be/")) {
        const videoId = url.split("youtu.be/")[1].split("?")[0];
        baseURL = `https://www.youtube.com/watch?v=${videoId}`;
    }

    const newUrl = `${baseURL}&start=${start}&end=${end}`;
    result.innerHTML = `✅ Timestamped Clip: <br><a href="${newUrl}" target="_blank" style="color:#22D3EE;">${newUrl}</a>`;
    result.style.color = "#F8FAFC";
}
// Subtitle to Notes Generator Logic
function ytcGenerateNotes() {
    const input = document.getElementById("ytc-subtitles-input").value.trim();
    const output = document.getElementById("ytc-notes-output");

    if (!input) {
        output.innerHTML = "❗ Please paste some subtitle content.";
        output.style.color = "red";
        return;
    }

    // Simple cleaning: remove timestamps, deduplicate lines, add bullets
    let lines = input.split('\n');
    let cleanLines = [];

    lines.forEach(line => {
        if (
            line.trim() &&
            !line.match(/\d{2}:\d{2}/) && // remove lines with timecodes
            !cleanLines.includes(line.trim())
        ) {
            cleanLines.push("• " + line.trim());
        }
    });

    output.style.color = "#F8FAFC";
    output.innerHTML = cleanLines.join("\n");
}
// Video to Blog Generator Logic
function ytcGenerateBlog() {
    const input = document.getElementById("ytc-blog-input").value.trim();
    const output = document.getElementById("ytc-blog-output");

    if (!input) {
        output.innerHTML = "❗ Please paste a transcript or description.";
        output.style.color = "red";
        return;
    }

    let paragraphs = input.split(/\.\s|\n/); // break by sentence or newline
    let blog = "<h3>📌 Introduction</h3>\n";
    blog += `<p>${paragraphs.slice(0, 2).join('. ')}</p>\n`;

    blog += "<h3>📋 Key Insights</h3>\n<ul>";
    paragraphs.slice(2, 6).forEach(p => {
        if (p.trim()) blog += `<li>${p.trim()}.</li>`;
    });
    blog += "</ul>\n";

    blog += "<h3>🧠 Conclusion</h3>\n";
    blog += `<p>${paragraphs.slice(-2).join('. ')}</p>\n`;

    output.innerHTML = blog;
    output.style.color = "#F8FAFC";
}
