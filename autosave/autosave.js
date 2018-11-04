function saveItems(){
	var fileID = getCookie("fileID");
	//create the json
	jsonObj = {};
    $(".autosave").each(function() {

        var id = $(this).attr("id");
        var content = $(this).val();
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
	var fileID = getCookie("fileID");
	$.get(fileID+".json", function(data, status){
		//populate the fields with data
		console.log(data);
	Object.keys(data).forEach(function(key) {
		$("#"+key).val(data[key]);
		})
	});
}

function pageLoad(){
	var fileID = getCookie("fileID");
	if(fileID != ""){
		console.log("cookie found. cookie id: "+ fileID+". restoring previous session");
		loadItems();
	}else{
		console.log("cookie not found. creating new cookie id");
		createCookie();
	}
}
	
function createCookie(){
	var id = makeid(10);
	document.cookie = "fileID=" + id;
	console.log("cookie created. fileID= "+id);
	return id;
}

function deleteCookie(){
	var fileID = getCookie("fileID");
	document.cookie = "fileID=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
	deleteFile(fileID);
	console.log("cookie deleted.");
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