//alert('c_mail');


//alert($('#to').text('hele'));
//alert($('#subject').text('ewew'));


var mf = document.getElementById('mainFrame');
var md = mf.contentDocument;

var mf2s = md.getElementsByTagName('iframe');

var subject = md.getElementById('subject');

var to = md.getElementById('toAreaCtrl').getElementsByTagName('input')[0];

var send  = md.getElementsByName('sendbtn')[0];
// var var_0 = mf2s[2].contentDocument.getElementById('var_0');
// var var_1 = mf2s[2].contentDocument.getElementById('var_1');
// var var_2 =mf2s[2].contentDocument.getElementById('var_2');
// var var_3 =mf2s[2].contentDocument.getElementById('var_3');
// var_0.innerText = '3222'


var is_ready =function(r){to.value = '323';send.click();};

chrome.extension.sendRequest({'next':'1'}, is_ready);



//send.click();

