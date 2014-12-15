var m = function(title)
{
	var val= "";
	this.title = title;
	this.cb = function(){};
	this.c = function(i,t){ if(i.selectionText== undefined) return; val =i.selectionText;};
	this.cp = {title:this.title+":%s",contexts:["all"],documentUrlPatterns:["http://*/*"],onclick:this.c};
	this.value = function(){return val;};
	this.id = chrome.contextMenus.create(this.cp,this.cb);

}

ns = ["client","addr","email","qq","tel"];
ms ={};
for( n in ns)
{
	ms[n]= new m(ns[n]);
	
}

var close_tab = function(t)
{

	chrom.tabs.remove(t);
}
var new_tab = function(t)
{

	var m = new map(t.id,t.url);
	tids.push(m);
	//alert(m.tid);
	
}
var map = function(t,u)
{
	this.tid = t;
	this.url = u;
	this.is =function(u1){if(this.url ==u1) return this.tid;return 0;};
}


var tids =new Array();

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
   
	
	
		//alert(request.url);
		var m;
		
		
		if(request.url)
		{
		
			
				 chrome.tabs.create({url:request.url},new_tab);
		
		}

		if(request.close)
		{
			
			//chrome.tabs.query({url:request.close,callback:close_tab});
			//alert(request.close);
			
		
			for(var i =0;i <tids.length;i++)
			{
				m =tids[i];
				
		
				if(m.is(request.close))
				{
							
					chrome.tabs.remove(m.tid);
					
				}
				
			}
			
			
			
			
		}
	
  
  });

alert("ok");


          