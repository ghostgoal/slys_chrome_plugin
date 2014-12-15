
 //var t = {title:"bk.js"}
 
//var d ={path:"android.png"}
//chrome.browserAction.setTitle(t)
//chrome.browserAction.setIcon(d)


// http://www.storetorrent.net/s/
//http://www.javlibrary.com/cn/vl_searchbyid.php?keyword=

// add new tab

var add_new_tab = function(p,s)
{
	var url = p+s;
	var prop = {url:url};

	chrome.tabs.create(prop);
}



//”“º¸≤Àµ•
var c= function(info, t)
{
	//document.location.href = "http://www.baidu.com"
	if(info.selectionText == undefined) return;
	
	var f = info.selectionText;
	//alert(f);
	
	
	f=f.replace(/-/," ");
	//alert(f);
	var url = "http://sukebei.nyaa.se/?page=search&cats=0_0&filter=0&term="+f
	var tab_prop = {url:url};
chrome.tabs.create(tab_prop);

	//var f = info.selectionText;
	
	//f.replace("-"," ");

add_new_tab("http://www.storetorrent.net/s/",f);
//	add_new_tab("http://www.javlibrary.com/cn/vl_searchbyid.php?keyword=",f);

	
} 
var r= function(info, t)
{
	//document.location.href = "http://www.baidu.com"
	if(info.selectionText == undefined) return;
	
	var url = "http://sukebei.nyaa.se/?page=search&cats=0_0&filter=0&term="+info.selectionText
	var tab_prop = {url:url};
chrome.tabs.create(tab_prop);


	
	
} 

var  createProperties = {title:"ÊêúÁ¥¢ %s",contexts:["all"],documentUrlPatterns:[ "http://*/*"],targetUrlPatterns:[ "src:*"],onclick:c}
var callback = function(){alert("Succeed to install.")}
var id = chrome.contextMenus.create(createProperties, callback)
//tab
//var  createProperties2 = {title:"Magnet",contexts:["all"],documentUrlPatterns:[ "http://*/*"],onclick:r}
//var id = chrome.contextMenus.create(createProperties2, callback)
//omnibox
//
var s =function(k)
{
alert(k)
	if(k == undefined) return;
	
	var url = "http://sukebei.nyaa.se/?page=search&cats=0_0&filter=0&term="+k
	var tab_prop = {url:url};
chrome.tabs.create(tab_prop);

}
chrome.omnibox.onInputEntered.addListener(s);
//chrome.pageAction.show(1)
