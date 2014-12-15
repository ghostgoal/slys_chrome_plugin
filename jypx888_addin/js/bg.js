var err = function()
{
	alert(Chrome.extension.lastError )
}
var c = function(info,tab)
{
	alert(info.selectionText  );
}
var res ={};
 
var c_name = function(info,tab){res["name"]= info.selectionText;};
var c_qq= function(info,tab){alert(info.selectionText  );};
var c_email= function(info,tab){alert(info.selectionText  );};
var c_tel= function(info,tab){alert(info.selectionText  );};
var cp_name = {title:"JYPX",contexts:["all"],documentUrlPatterns:["http://*/*"],onclick:c_name};
var cp_qq = {title:"QQ",contexts:["all"],documentUrlPatterns:["http://*/*"],onclick:c_qq};
var cp_email = {title:"EMAIL",contexts:["all"],documentUrlPatterns:["http://*/*"],onclick:c_email};
var cp_tel = {title:"TEL",contexts:["all"],documentUrlPatterns:["http://*/*"],onclick:c_tel};

var tid = chrome.contextMenus.create(cp_name,err);
var tid = chrome.contextMenus.create(cp_qq,err);
var tid = chrome.contextMenus.create(cp_email,err);
var tid = chrome.contextMenus.create(cp_tel,err);
	



 alert("succeed to install!");
 
