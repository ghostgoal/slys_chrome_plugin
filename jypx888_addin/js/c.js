//alert('a');

var error_func = function(q,w,e)
{

	alert(q.readyState+':'+w+':'+q.status);
}
var close_func= function()
{
	chrome.extension.sendRequest({'close':url}, function(response) {
  //console.log(response.farewell);
  
	
})
}

var url = document.URL;

var p_p = /http:\/\/\w+.qeo.cn\/\d+/;
var p_2 = /http:\/\/\d+.qeo.cn\/xuexi\/\d+.htm/;


if(p_p.test(url))
{
	 $('a').each(function( index ){
	 
	 var href = $(this).attr('href');
	 
	 if(p_2.test(href))
	 {
		//alert(href);
		//$(this).click();
		//$(this).children('img').click();
		
		//alert('a1');
		
		chrome.extension.sendRequest({'url':href}, function(response) {
  //console.log(response.farewell);
  
	
})

	
	 }
	 
	 
	 }); 

	alert('a');
}
else
{	



	
		if(p_2.test(url))
		{
			
		
			var px_t = $('#title').children('span').text();
	  $( "#content" ).each(function( index ) {
	
	  var params = {};

     params[0] = /QQ:([1-9][0-9]{4,})/.exec($( this ).text())[1];
	 params[1] = /招生地址：(([^\x00-\xff]|[A-Za-z0-9_])+)/.exec($( this ).text())[1];//$( this ).text().match(/招生地址：([^\x00-\xff]|[A-Za-z0-9_])+/);
	 params[2] = /培训机构：(([^\x00-\xff]|[A-Za-z0-9_])+)/.exec($( this ).text())[1];
	 params[3] = /所在城市：([\u4e00-\u9fbb]+)/.exec($( this ).text())[1];//$( this ).text().match(/所在城市：[\u4e00-\u9fbb]+/);
	 params[4] = /报名咨询：(([^\x00-\xff]|[A-Za-z0-9_])+)/.exec($( this ).text())[1];//$( this ).text().match(/报名咨询：[\u4e00-\u9fbb]+/);
	// params[5] = /(\d{3}-\d{8}|\d{4}-\d{7})/.exec($( this ).text())[1];
	params[5] = $( this ).text().match(/(\d{3}-\d{8}|\d{3,4}-\d{7}|\d{3}-\d{3}-\d{4})/);
	params[6] = $( this ).text().match(/\d{10,11}/);// /(\d{11})/.exec($( this ).text())[1];//
	params[7] = document.URL;
	
	params[5] = params[5]==null?null:params[5][0];
	params[6] = params[6]==null?null:params[6][0];
	


	var p ={qq:params[0],addr:params[1],'org':params[2],'city':params[3],'client':params[4],'tel':params[5],'mobile':params[6],'url':params[7],'type':px_t};
	

	/* for(var i=0;i <8;i ++)
	{
		//p+=params[i]+'\r\n';
		p.key[i] = params[i];
	
	} */
	
	
	$.ajax({url:"http://localhost/home/record.php",success:close_func,data:p,error:error_func});

	
	
 });

 
	//alert('b');
	
	//document.close();
	//Window.close();
	
	}
	
	
	
}