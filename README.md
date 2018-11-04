# Autosave.JS Project
Easy to implement AutoSave JS library using Javascript. Can use PHP with JS as well

# ./autosave/
This is the Easy to implement AutoSave JS Library. Just import the the autosave library with this easy line of code:
```
<head>
<script src="autosave.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
```
And also import the autosave script that will autorun when typing:
```
<script>
//autosave script
var timer;
//input your own time here, 3000 is 3 seconds
var time = 3000;
//choose your own input tag, for example, right now it is using the class 'autosave'
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
```
As long as your fields are marked with class = autosave, the section will automatically store it. Make sure to have an ID for each of the fields, that is how Autosave stores data!

Here is sample code (found in ./autosave/autosavetest.php):
```
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
<BR>
<p>Delete the Cookie</p>
<button onClick='deleteCookie()'>Delete</button>
```

# ./autosavephp/
This is the Easy to Implement PHP and JS library for autosaving. Just import the the autosave library with this easy line of code:
```
<head>
<script src="autosave.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
```
And also import the autosave script that will autorun when typing:
```
<script>
fID = getFileID();
function deleteFileFunction(){
	deleteFile(fID);
}
//autosave script
var timer;
//input your own time here, 3000 is 3 seconds
var time = 3000;
//choose your own input tag, for example, right now it is using the class 'autosave'
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
```
As long as your fields are marked with class = autosave, the section will automatically store it. Make sure to have an ID for each of the fields, that is how Autosave stores data!

Here is sample code (found in ./autosavephp/autosavetest.php):
```
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
</body>
```

# Future Versions
Future version will include the option to store the file on HTML Local Storage instead of the server.
