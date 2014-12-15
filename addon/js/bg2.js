var m= function(name){
var value= "";
this.c = function(i,t){if(i.selectionText == undefined) return;value =i.selectionText;}
this.cp={title:name+":%s",contexts:["all"],documentUrlPatterns:[ "http://*/*"],targetUrlPatterns:[ "src:*"],onclick:this.c};
this.id = chrome.contextMenus.create(this.cp, this.callback);
this.callback=function(){};
this.text = function(){return value;};
this.title = name;
}

var title=["客户","地址","EMAIL","QQ","TEL"];
var mid ={};
for(x in title)
{
	mid[x] = new m(title[x]);
	
}

alert(mid[0].text());