<?php
function yt_converter_tool_multi_platform() {
    ob_start(); ?>
    
    <div class="ytc-tool-section">
        <h2 class="ytc-heading">🔀 YouTube Multi-Platform Converter Toolkit</h2>
        <p class="ytc-description">Select a format and get instant, optimized content ideas based on your YouTube video.</p>

        <input type="text" id="ytc-multi-url" placeholder="Paste YouTube video URL">
        
        <select id="ytc-format" style="margin-top:10px; width:100%; padding:10px; border-radius:10px; background-color:#1E293B; color:#F8FAFC; border:1px solid #22D3EE;">
            <option value="">🎯 Choose a content format</option>
            <option value="short">YouTube Shorts</option>
            <option value="reel">Instagram Reel</option>
            <option value="podcast">Podcast Snippet</option>
            <option value="tweet">Tweet Thread</option>
            <option value="linkedin">LinkedIn Post</option>
        </select>

        <button onclick="ytcGenerateMultiContent()">Generate Format</button>
        <div id="ytc-multi-output" class="ytc-output" style="white-space: pre-wrap;"></div>
    </div>

    <?php
    return ob_get_clean();
}
add_shortcode('yt_multi_toolkit', 'yt_converter_tool_multi_platform');
