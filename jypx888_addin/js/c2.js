
//alert($("a").attr('href'));
//alert($("a").attr("href"));
//alert($("a").get(1));

alert('a');
 var addr_list='';
// $( "a" ).each(function( index ) {
   // addr_list += $( this ).attr("href")+"\r\n";
// });




//if( typeof zszx == 'undefined') alert("und");


//var zszx;// = "hello world!";

//alert(zszx);
var params ={};
//alert(document.URL.match(/\d{4,}.qeo.cn\/xuexi/))

var error_func = function(q,w,e)
{

	alert(q.readyState+':'+w+':'+q.status);
}
var url = document.URL;

var p_p = /http:\/\/\d+.qeo.cn\/\d+/;
var p_2 = /http:\/\/\d+.qeo.cn\/xuexi\/\d+.htm/;

		
if(p_p.test(url))
{
	 // $( "a" ).each(function( index ){
	 
	 // alert($(this).attr('href'));
	 // }); 


}
else
{
	if(!p_2.test(url)) break;
 
	  $( "#content" ).each(function( index ) {

     params[0] = /QQ:([1-9][0-9]{4,})/.exec($( this ).text())[1];
	 params[1] = /招生地址：([^\x00-\xff]|[A-Za-z0-9_])+/.exec($( this ).text())[0];//$( this ).text().match(/招生地址：([^\x00-\xff]|[A-Za-z0-9_])+/);
	 params[2] = /培训机构：([\u4e00-\u9fbb]+)/.exec($( this ).text())[1];
	 params[3] = /所在城市：([\u4e00-\u9fbb]+)/.exec($( this ).text())[1];//$( this ).text().match(/所在城市：[\u4e00-\u9fbb]+/);
	 params[4] = /报名咨询：([\u4e00-\u9fbb]+)/.exec($( this ).text())[1];//$( this ).text().match(/报名咨询：[\u4e00-\u9fbb]+/);
	// params[5] = /(\d{3}-\d{8}|\d{4}-\d{7})/.exec($( this ).text())[1];
	params[5] = $( this ).text().match(/\d{3}-\d{8}|\d{4}-\d{7}/);
	params[6] = $( this ).text().match(/\d{11}/);// /(\d{11})/.exec($( this ).text())[1];//
	params[7] = document.URL;

	
	var p ='';
	for(var i=0;i <8;i ++)
	{
		p+=params[i]+'\r\n';
	
	}
	
	$.ajax({url:"http://localhost/home/record.php",data:{'qq':params[0]},error:error_func});
	alert(p);
	

 });



}







/*   $( "#content" ).each(function( index ) {

     params[0] = /QQ:([1-9][0-9]{4,})/.exec($( this ).text())[1];
	 params[1] = /招生地址：([^\x00-\xff]|[A-Za-z0-9_])+/.exec($( this ).text())[0];//$( this ).text().match(/招生地址：([^\x00-\xff]|[A-Za-z0-9_])+/);
	 params[2] = /培训机构：([\u4e00-\u9fbb]+)/.exec($( this ).text())[1];
	 params[3] = /所在城市：([\u4e00-\u9fbb]+)/.exec($( this ).text())[1];//$( this ).text().match(/所在城市：[\u4e00-\u9fbb]+/);
	 params[4] = /报名咨询：([\u4e00-\u9fbb]+)/.exec($( this ).text())[1];//$( this ).text().match(/报名咨询：[\u4e00-\u9fbb]+/);
	// params[5] = /(\d{3}-\d{8}|\d{4}-\d{7})/.exec($( this ).text())[1];
	params[5] = $( this ).text().match(/\d{3}-\d{8}|\d{4}-\d{7}/);
	params[6] = $( this ).text().match(/\d{11}/);// /(\d{11})/.exec($( this ).text())[1];//
	params[7] = document.URL;

	
	var p ='';
	for(var i=0;i <8;i ++)
	{
		p+=params[i]+'\r\n';
	
	}
	
	$.ajax({url:"http://localhost/home/record.php",data:{'qq':params[0]},error:error_func});
	alert(p);
	

 });
  
  
 if ( addr_list !== '')
 {
  alert(   addr_list);
 } */