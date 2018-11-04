<head>
<script src="autosave.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body onLoad="pageLoad();">
<h1>AutoSave Test</h1>
<p id='indicator'></p>
<p>Input your stuff here and it will autosave!</p>
<textarea class='autosave' id='textarea1'></textarea>
<p>Multiple fields? No Problem!</p>
<textarea class='autosave' id='textarea2'></textarea>
<p>Does it work with inputs? Of Course!</p>
<input class='autosave' id='input1' type='text'>
<BR>
<p>Manual Save Button</p>
<button onClick='saveItems()'>Save</button>
<BR>-
<p>Delete the File</p>
<button onClick='deleteFileFunction()'>Delete</button>

<script>
fID = getFileID();
function deleteFileFunction(){
	deleteFile(fID);
}
//autosave script
var timer;
var time = 1000;
var $input = $('.autosave');

$input.bind('input', function() {
	$("#indicator").html("Saving...");
    window.clearTimeout(timer);
    timer = window.setTimeout(function(){
        saveItems();
		$("#indicator").html("Saved");
		}, time);
});

</script>
</body>