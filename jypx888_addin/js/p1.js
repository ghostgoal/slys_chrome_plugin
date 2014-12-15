//$("#nav").css("display","none");

var bg = chrome.extension.getBackgroundPage(); 

var setup_input = function(pid,name,val){

$(pid).append(		'<input name="'+name+'"   type="text" value="'+ val+'"></input>');
}


for( i in bg.ms)
{
	setup_input("#t_mail",bg.ms[i].title,bg.ms[i].value());
}
var send_mail_by_auto =function(){

	  chrome.tabs.executeScript(null,
                           {file:'js/c_mail.js'})
						   
				//		   alert('qq');
};
$('#auto_qq_mail').click(send_mail_by_auto);

