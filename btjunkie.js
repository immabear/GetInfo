ClientsU[1]="html~http://btjunkie.org/search?q=|";
ClientsS[1]='*'; //p.a.href, p.a.content, font.content
ClientsX[1]='//div[@id="main"]/table[1]/tr/th/table/tr/th/table/tr//th[position()<(last()-2)]/p/a';
function parsebtjunkie(id,data){
 var idobj=document.getElementById(id);
 //idobj.innerHTML='<textarea style="width:100%;height:100%">'+data+'</textarea>';
 idobj.innerHTML=data;
}
function parsebtjunkie2(id,data){
 var title=[]; var seed=[]; var leech=[]; var cat=[]; var size=[]; var com=[];var loc=[];var tablerow; var tablecd='';
 var idobj=document.getElementById(id);
 idobj.innerHTML=data;
 $('#'+idobj.id).find('tr').each(function(index){
  tablerow=(this).innerHTML;
  tablecd=tablecd+'/n'+tablerow;
 });
 //idobj.innerHTML='<textarea style="width:100%;height:100%">'+tablecd+'</textarea>';
 idobj.innerHTML=tablecd;
}
function parsebtjunkie3(id,data){
 var title=[]; var seed=[]; var leech=[]; var cat=[]; var size=[]; var com=[];var loc=[];var tablerow; var tablecd='';
 var idobj=document.getElementById(id);
 idobj.innerHTML=data;
 $('#'+id+' th').each(function(index){
  (this).find('a').each(function(){
   title=(this).innerHTML;
   loc=(this).href;
   });
  (this).find('font').each(function(index){
   switch(index){
    case 0:
	 
   }
  });
  tablerow='';
  tablecd=tablecd+tablerow;
 });
 idobj.innerHTML='<textarea style="width:100%;height:100%">';
 $(data.th).find('th').each(function(index){
  idobj.innerHTML=idobj.innerHTML+'\n'+(this).innerHTML;
 })
 idobj.innerHTML=idobj.innerHTML+'</textarea>';
 idobj.style.display='';
}
function parsebtjunkie1(id,data){
 var title=[]; var seed=[]; var leech=[]; var cat=[]; var size=[]; var com=[];var loc=[];var tablerow; var tablecd='';
 $.each(data.query.results.item,function(index){
  title[index]=(this).title.split("  [")[0];
  loc[index]=(this).link.replace("http://btjunkie.org/","http://dl.btjunkie.org/")+"/download.torrent";
  leech[index]=(this).title.split("  [")[1].split("/")[0];
  seed[index]=(this).title.split("  [")[1].split("/")[1].split("]")[0];
  cat[index]=(this).description.split(" ")[1];
  size[index]=(this).description.split(" ")[3];
  com[index]=
   '<table style="margin:0;width:100%">'+
    '<tr>'+
	 '<td class="comoverlap">Seeds: '+seed[index]+' | Leechs: '+leech[index]+'</td>'+
	'</tr>'+
	'<tr>'+
	 '<td class="comoverlap">Size: '+size[index]+'</td>'+
	'</tr>'+
	'<tr>'+
	 '<td class="comoverlap">Category: '+cat[index]+'</td>'+
	'</tr>'+
   '</table>';
  tablerow=
   '<div id="result'+index+'" class="resultimgsm">'+
   com[index]+
   '</div>'+
   '<div class="tooltipbig">'+
    '<table>'+
     '<tr>'+
      '<td><b id="searchresult'+index+'">'+title[index]+'</b>'+
	  '</td>'+
	 '</tr>'+
	 '<tr>'+
	  '<td style="height:30px">'+
	   '<button onclick="IMDb(\'searchresult'+index+'\')" class="buttonbig">IMDb</button>'+
	   '<button onclick="downloadbtjunkie(\''+loc[index]+'\');" class="buttonbig">Info/Download</button>'+
	  '</td>'+
	 '</tr>'+
	'</table>'+
   '</div>';
  tablecd=tablecd+tablerow; 
 });
 document.getElementById(id).innerHTML=tablecd;
 aligntd();
 $('#searchbox div[id]').tooltip({effect: 'slide',offset: [27, 10],relative: 'true'});
 var title=[]; var seed=[]; var leech=[]; var cat=[]; var size=[]; var com=[];var loc=[];var tablerow; var tablecd='';
}
function downloadbtjunkie(loc){
 minmaximize(0);
 document.getElementById('searchframe').innerHTML="<iframe src='"+loc+"' class='searchframe' frameborder='0'></frame>";
 $("#searchframe").show(600);
}