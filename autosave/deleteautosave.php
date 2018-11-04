<?php
$fileID = $_POST['fileID'];
$file = $fileID.".json";
//echo $file;
unlink($file);
echo "Success";
?>