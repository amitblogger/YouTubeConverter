<?php
function yt_converter_tool_timestamp_clipper() {
    ob_start(); ?>
    
    <div class="ytc-tool-section">
        <h2 class="ytc-heading">🎬 YouTube Timestamp Clipper</h2>
        <p class="ytc-description">Paste your YouTube URL and select start and end time to create a timestamped clip link.</p>

        <input type="text" id="ytc-url" placeholder="Paste YouTube video URL">
        <div class="ytc-row">
            <input type="number" id="ytc-start" placeholder="Start Time (seconds)">
            <input type="number" id="ytc-end" placeholder="End Time (seconds)">
        </div>
        <button onclick="ytcGenerateTimestamp()">Generate Timestamp Link</button>
        <p id="ytc-result" class="ytc-output"></p>
    </div>

    <?php
    return ob_get_clean();
}
add_shortcode('yt_timestamp_clipper', 'yt_converter_tool_timestamp_clipper');
