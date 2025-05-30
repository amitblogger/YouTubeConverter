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
// Quote Image Generator Logic
function ytcGenerateQuoteImage() {
    const quote = document.getElementById("ytc-quote-text").value.trim();
    const canvas = document.getElementById("ytc-quote-canvas");
    const ctx = canvas.getContext("2d");

    if (!quote) {
        alert("❗ Please enter a quote.");
        return;
    }

    // Canvas background
    ctx.fillStyle = "#0F172A";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Quote styling
    ctx.fillStyle = "#22D3EE";
    ctx.font = "bold 22px Inter";
    ctx.textAlign = "center";

    const words = quote.split(" ");
    let line = "";
    let y = 150;
    const maxWidth = 500;

    for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + " ";
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            ctx.fillText(line, canvas.width / 2, y);
            line = words[n] + " ";
            y += 30;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, canvas.width / 2, y);

    canvas.style.display = "block";
    document.getElementById("ytc-download-btn").style.display = "inline-block";
}

function ytcDownloadQuoteImage() {
    const canvas = document.getElementById("ytc-quote-canvas");
    const link = document.createElement('a');
    link.download = 'quote.png';
    link.href = canvas.toDataURL();
    link.click();
}
// Multi-Platform Toolkit Generator Logic
function ytcGenerateMultiContent() {
    const url = document.getElementById("ytc-multi-url").value.trim();
    const format = document.getElementById("ytc-format").value;
    const output = document.getElementById("ytc-multi-output");

    if (!url || !format) {
        output.innerHTML = "❗ Please enter the video URL and select a format.";
        output.style.color = "red";
        return;
    }

    let result = "";
    switch (format) {
        case "short":
            result = `🎥 Turn this video into a 60-second YouTube Short.\nFocus on: One impactful quote or highlight.\nAdd caption: "Watch the full version here 👇"\nLink: ${url}`;
            break;
        case "reel":
            result = `📱 Convert the video into a vertical Instagram Reel.\nUse background music and overlay text for engagement.\nCTA: “Save for later!”\nLink: ${url}`;
            break;
        case "podcast":
            result = `🎙️ Extract audio and convert into a 2-min podcast snippet.\nUse intro/outro template.\nSuggested Title: “Quick Take from [Your Video Topic]”\nLink: ${url}`;
            break;
        case "tweet":
            result = `🐦 Create a Tweet Thread:\n1. Hook headline from the video\n2. Bullet points from highlights\n3. CTA to watch: ${url}`;
            break;
        case "linkedin":
            result = `💼 Convert into a LinkedIn Thought Post:\n- Start with insight quote from video\n- Add 2–3 reflections\n- CTA: “Watch how this idea unfolds 👇”\nLink: ${url}`;
            break;
        default:
            result = "Please choose a valid format.";
    }

    output.innerHTML = result;
    output.style.color = "#F8FAFC";
}
