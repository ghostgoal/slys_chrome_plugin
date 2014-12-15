var c =function(i,t){	if(i.selectionText == undefined) return;
	
	var f = i.selectionText;
	
	
	
	for( x in mid)
	{
		if(i.menuItemId == mid[x][0]) 
		{
			mid[x][1] = f;
			break;
		}
		
	}
	
	
	
	}
var cb = function(){};
var cp_client = {title:"客户: %s",contexts:["all"],documentUrlPatterns:[ "http://*/*"],targetUrlPatterns:[ "src:*"],onclick:c};
var cp_qq = {title:"QQ: %s",contexts:["all"],documentUrlPatterns:[ "http://*/*"],targetUrlPatterns:[ "src:*"],onclick:c};
var cp_addr = {title:"地址: %s",contexts:["all"],documentUrlPatterns:[ "http://*/*"],targetUrlPatterns:[ "src:*"],onclick:c};
var cp_email = {title:"EMAIL: %s",contexts:["all"],documentUrlPatterns:[ "http://*/*"],targetUrlPatterns:[ "src:*"],onclick:c};
var cp_tel = {title:"TEL: %s",contexts:["all"],documentUrlPatterns:[ "http://*/*"],targetUrlPatterns:[ "src:*"],onclick:c};
var mid = {};

for(var i=0;i <5;i++)
{
	mid[i]={};
}
 mid[0][0] = chrome.contextMenus.create(cp_client, cb);
 mid[1][0] = chrome.contextMenus.create(cp_qq,cb);
 mid[2][0] = chrome.contextMenus.create(cp_addr, cb);
 mid[3][0] = chrome.contextMenus.create(cp_email, cb);
 mid[4][0] = chrome.contextMenus.create(cp_tel, cb);
alert(mid[4][0]);