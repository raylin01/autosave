function getFileID(){
	var url = new URL(window.location.href);
	var fileID = url.searchParams.get("id");
	return fileID;
}

function saveItems(){
	var fileID = getFileID();
	//create the json
	jsonObj = {};
    $(".autosave").each(function() {

        var id = $(this).attr("id");
        var content = $(this).val();
		//console.log(id);
		//console.log(content);
        jsonObj [id] = content;

    });
	//post the json
	$.post("autosave.php",
    {
        json: JSON.stringify(jsonObj),
        fileID: fileID
    },
    function(data, status){
        console.log("Save Status: " + data);
    });
    console.log(jsonObj);
}

function loadItems(){
	var fileID = getFileID();
	$.get(fileID+".json", function(data, status){
		//populate the fields with data
		console.log(data);
	Object.keys(data).forEach(function(key) {
		//console.log('Key : ' + key + ', Value : ' + data[key]);
		$("#"+key).val(data[key]);
		})
	});
}

function pageLoad(){
	var fileID = getFileID();
	console.log(fileID);
	if(fileID){
		console.log("cookie found. cookie id: "+ fileID+". restoring previous session");
		loadItems();
	}else{
		console.log("cookie not found. creating new cookie id");
		window.location.href = window.location.href + "?id="+makeid(10);
	}
}

function deleteFile(id){
	$.post("deleteautosave.php",
    {
        fileID: id
    },
    function(data, status){
        console.log("Delete Status: " + data);
    });
}

function makeid(num) {
  var text = "";
  var possible = "RSqrstuDQ04TxHEtuvwxyzIJKLMNOPIJKLMNOPQvwEFFG1ABC23HRSqrsx89";

  for (var i = 0; i < num; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}