<?php
function yt_converter_tool_quote_image() {
    ob_start(); ?>
    
    <div class="ytc-tool-section">
        <h2 class="ytc-heading">🖼️ YouTube Quote Image Generator</h2>
        <p class="ytc-description">Paste a powerful quote from your video and generate a shareable image with it.</p>

        <textarea id="ytc-quote-text" rows="4" placeholder="Paste your favorite quote here..."></textarea>
        <button onclick="ytcGenerateQuoteImage()">Generate Image</button>
        <canvas id="ytc-quote-canvas" width="600" height="300" style="display:none; margin-top:20px;"></canvas>
        <button id="ytc-download-btn" style="display:none; margin-top:10px;" onclick="ytcDownloadQuoteImage()">Download Image</button>
    </div>

    <?php
    return ob_get_clean();
}
add_shortcode('yt_quote_image', 'yt_converter_tool_quote_image');
