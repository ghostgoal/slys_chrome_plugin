 var fso = new ActiveXObject("Scripting.FileSystemObject");  
var f1 = fso.createtextfile("c:\\myjstest.txt",true);
alert("File last modified: "+f1.DateLastModified);