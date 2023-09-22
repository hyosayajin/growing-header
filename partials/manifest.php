<?php 
$myManifest = null; 

$myJson; 

$myManifest;
$manifest;
$css;
$js;

if (defined("ROOT") && defined("DS") && defined("CREATIONS_FOLDER")) {
    $DS = constant("DS");
    $myJson = constant("ROOT") . constant("CREATIONS_FOLDER") . $DS . basename(dirname(__DIR__)) . $DS . "manifest.json";
   
} else {
    
    $myJson = __DIR . "manifest.json";
}

if (is_file($myJson)) {

    $myManifest = file_get_contents($myJson);
    
    $manifest = json_decode($myManifest, true);
    
    $css = "../../". basename(dirname(__DIR)) . "/" . basename(__DIR) . "/" . $manifest["app.css"]["file"];

    $js = "../../". basename(dirname(__DIR)) . "/" . basename(__DIR) . "/" . $manifest["app.js"]["file"];
}      