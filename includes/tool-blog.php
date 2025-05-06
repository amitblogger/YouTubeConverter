<?php
function yt_converter_tool_blog_generator() {
    ob_start(); ?>
    
    <div class="ytc-tool-section">
        <h2 class="ytc-heading">📰 YouTube to Blog Article Generator</h2>
        <p class="ytc-description">Paste a YouTube transcript or summary text to simulate a structured blog post with headings and clean paragraphs.</p>

        <textarea id="ytc-blog-input" rows="8" placeholder="Paste video transcript or summary here..."></textarea>
        <button onclick="ytcGenerateBlog()">Generate Blog</button>

        <div id="ytc-blog-output" class="ytc-output" style="white-space: pre-wrap;"></div>
    </div>

    <?php
    return ob_get_clean();
}
add_shortcode('yt_video_blog', 'yt_converter_tool_blog_generator');
