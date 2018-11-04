<?php
$json = $_POST['json'];
$fileID = $_POST['fileID'];

file_put_contents($fileID.".json", $json);
echo "Success";
?>