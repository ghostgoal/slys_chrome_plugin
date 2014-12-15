var bg = chrome.extension.getBackgroundPage(); 

var setup_input = function(pid,name,text)
{
	
 $("#"+pid).append('<input  name="'+name+'"+ type="text" value="'+text+'"></input>');
}

if(bg)
{
	for(x in bg.mid)
	{
		setup_input("info",bg.mid[x].title,bg.mid[x].text());
	}
}

//alert("jp");