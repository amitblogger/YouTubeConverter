<?php
function yt_converter_tool_subtitle_notes() {
    ob_start(); ?>
    
    <div class="ytc-tool-section">
        <h2 class="ytc-heading">📝 YouTube Subtitle to Notes Generator</h2>
        <p class="ytc-description">Paste subtitles copied from a YouTube video, and get clean bullet-point notes.</p>

        <textarea id="ytc-subtitles-input" rows="8" placeholder="Paste YouTube subtitles or transcript here..."></textarea>
        <button onclick="ytcGenerateNotes()">Generate Notes</button>

        <div id="ytc-notes-output" class="ytc-output" style="white-space: pre-wrap;"></div>
    </div>

    <?php
    return ob_get_clean();
}
add_shortcode('yt_subtitle_notes', 'yt_converter_tool_subtitle_notes');
