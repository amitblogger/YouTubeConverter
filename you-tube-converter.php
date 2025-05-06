<?php
/**
 * Plugin Name: YouTube Converter – All-in-One Toolkit
 * Plugin URI: https://github.com/yourusername/YouTubeConverter
 * Description: 5-in-1 YouTube tool: Timestamp Clipper, Subtitle Notes, Blog Generator, Quote Image Creator, Multi-Platform Content Toolkit.
 * Version: 1.0
 * Author: Your Name
 * Author URI: https://yourwebsite.com
 * License: GPL2
 */

if (!defined('ABSPATH')) exit; // Prevent direct access

// Enqueue custom styles and scripts
function yt_converter_enqueue_assets() {
    wp_enqueue_style('ytc-style', plugin_dir_url(__FILE__) . 'css/style.css');
    wp_enqueue_script('ytc-script', plugin_dir_url(__FILE__) . 'js/script.js', array(), false, true);
}
add_action('wp_enqueue_scripts', 'yt_converter_enqueue_assets');

// Register all tool shortcodes
function yt_converter_register_shortcodes() {
    include_once plugin_dir_path(__FILE__) . 'includes/tool-timestamp.php';
    include_once plugin_dir_path(__FILE__) . 'includes/tool-subtitles.php';
    include_once plugin_dir_path(__FILE__) . 'includes/tool-blog.php';
    include_once plugin_dir_path(__FILE__) . 'includes/tool-quote.php';
    include_once plugin_dir_path(__FILE__) . 'includes/tool-multiplatform.php';
}
add_action('init', 'yt_converter_register_shortcodes');
