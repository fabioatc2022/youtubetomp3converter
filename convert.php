<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
  $videoUrl = $_GET["videoUrl"];
  $videoId = substr($videoUrl, strpos($videoUrl, "v=") + 2);
  $videoId = substr($videoId, 0, 11);
  $cmd = "youtube
