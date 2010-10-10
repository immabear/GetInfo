var humanerror=["WARNING: XDA Disabled\n","It can only be attributable to human error:","1)The script was initiated from an offline xul page (e.g. 'About:Blank') removing domain access.","2)An internet connection is not present.","3)An unknown error occured, but it's your fault."];
var hal=["...I'm sorry, Dave, I'm afraid I can't do that."];
var sources=["http://www.moviefone.com/new-movie-releases","http://www.moviefone.com/coming-soon","http://www.moviefone.com/dvd"];
function fetchPage(id,url,parser){
 document.getElementById(id).innerHTML='Searching...';
 $.ajax({
  testing: "loltest",
  type: "GET",
  url: url,
  error: function(request, status){
   error(id);
  },
  success: function(data){
   parseswitch(id,data,parser);
  }
 });
}
function fetchRss(id,url,parser){
 document.getElementById(id).innerHTML='Searching...';
  var rssresults=[];
  var query = "select * from feed where url='"+url+"'";
  var yqlurl = "http://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent(query)+"&format=json&callback=?";
  $.getJSON(yqlurl, function(data){parseswitch(id,data,parser,"rss");});
}
function error(id){
 document.getElementById(id).innerHTML=hal[0];
 alert(humanerror.join('\n'));
}
function tab(id){
 switch(id){
  case 'searchtasktd':
   var taskbar=document.getElementById(id).parentNode;
   id=document.getElementById(id);
   break;
 default:
   var taskbar=id.parentNode; 
 }
 id.className="middle";
 $("#"+id.id+" button").each(function(){
  (this).className=(this).className.split(' ')[0]+' activebutton';
 });
 $("#"+taskbar.id+" td[class]").each(function(){
  if((this).cellIndex!==id.cellIndex){
   $(this).find("button").each(function(){
    (this).className=(this).className.split(' ')[0];
   });
  }
  if((this).cellIndex<id.cellIndex){
   if((this).cellIndex==0){(this).className="farleft";}
   else(this).className="left";
  }
  else if((this).cellIndex>id.cellIndex&&(this).className!=="farright"){
   (this).className="right";
  }
 })
};
function show(id,idbox){
 var divs=document.getElementsByTagName('div');
 for(var t=0;t<divs.length;t++){
  if(divs[t].id!=='bodydiv'&&divs[t].className!=='resultimg'&&divs[t].className!=='resultimgsm'&&divs[t].id!=='background'){
   divs[t].style.display='none';
  }
 }
 document.getElementById(id).style.display='';
 if (idbox)document.getElementById(idbox).style.display='';
}
function insert(title,onc){
 var x=document.getElementById('taskbar').insertCell(2);
 x.onclick=function(){tab(this)};
 switch(onc){
  case 0:
   x.innerHTML=title+' <img src="http://www.casino770.com/new3/FrPages_html/close.gif" onclick="remove(this.parentNode.cellIndex);document.getElementById(\'searchframe\').style.display=\'none\'" style="border:2px solid black;">';
   break;
  default:
   x.innerHTML=title+' <img src="http://www.casino770.com/new3/FrPages_html/close.gif" onclick="remove(this.parentNode.cellIndex);" style="border:2px solid black;">';
 }
 x.style.width='100px';
 aligntd();
}
function remove(index){
 var x=document.getElementById('taskbar').deleteCell(index);
}
function minmaximize(x){
 switch(x){
  case 0:
   $("#searchframe").show(600);
   $("#bodydiv").animate({'marginTop': '-30px', 'top': '100%', 'height': '30px'}, 600,
    function(){
     $("#minmax").text("Maximize");
     document.getElementById('minmax').onclick=function(){minmaximize()};
	}
   );
   break;
  default:
   $("#searchframe").hide(600);
   $("#bodydiv").animate({'marginTop': '-300px', 'top': '50%', 'height': '600px'}, 600,
    function(){
     $("#minmax").text("Minimize");
     document.getElementById('minmax').onclick=function(){minmaximize(0)};
	}
   );
 }
}
function aligntd(){
 var tds=document.getElementsByTagName('td');
 for(var t=0;t<tds.length;t++){
  if(tds[t].className!=='noalign'){ 
   tds[t].align='center';
  }
 }
}
function exit(){
 self.close();
}
function advsearch(id){
 var tags=document.getElementById(id).innerHTML;
 tab('searchtasktd');
 show('search','searchbox');
 document.getElementById('searchtags').value=tags;
}
function IMDb(id){
minmaximize(0);
var tags=document.getElementById(id).innerHTML.replace(/ /g,'+');
document.getElementById('searchframe').innerHTML="<iframe src='http://www.imdb.com/find?s=all&q="+tags+"' class='searchframe' frameborder='0'></frame>";
$("#searchframe").show(600);
}