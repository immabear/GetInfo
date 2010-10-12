ClientsU[1]="html~http://btjunkie.org/search?q=|";
ClientsS[1]='a, content';
ClientsX[1]=
	'//div[@id="main"]/table[1]/tr/th/table/tr/th/table/tr//th/p | '+
	'//div[@id="main"]/table[1]/tr/th/table/tr/th/table/tr//th/font | '+
	'//div[@id="main"]/table[1]/tr/th/table/tr/th/table/tr//th/a/strong';
function parsebtjunkie(id,data){
 var dataarray=[], title=[], temp=[], seed=[], leech=[], cat=[], size=[], date=[], com=[], loc=[], tablerow, tablecd='', idobj=document.getElementById(id);
 dataarray=data.split("<p");
 $.each(dataarray,function(index, value){
  if(index!==0&&index<((dataarray.length)-6)&&index<3){
   dataarray[index]='<p'+value;
   dataarray[index]=dataarray[index].replace(/p>(\s+)</g,'').replace(/\s+/g,' ').replace(/<\/strong>/,'<strong>').replace(/strong>|font>/,'p>');
   alert(dataarray[index]);
  }
 });
}
function parsebtjunkie1(id,data){
 var dataarray=[], title=[], temp=[], seed=[], leech=[], cat=[], size=[], date=[], com=[], loc=[], tablerow, tablecd='', idobj=document.getElementById(id);
 dataarray=data.split("<p");
 $.each(dataarray,function(index, value){
  if(index!==0&&index<((dataarray.length)-6)){
   dataarray[index]='<p'+value;
   dataarray[index]=dataarray[index].replace(/p>(\s+)</g,'').replace(/\s+/g,' ').replace(/<\/strong>/,'<strong>|||');
   alert(dataarray[index]);
   var temparray=$(dataarray[index]).text();
   title[index]=temparray.split('|||')[0];
   loc[index]=dataarray[index].replace(/<a.*href=\"|\".*/g,'');
   temp=temparray.split('|||')[1].split(' ');
   $.each(temp,function(i,val){
    switch(i){
	 case 0:
	  cat[index]=val;
	  break;
     case 1:
	  size[index]=val;
	  break;
     case 2:
	  date[index]=val;
	  break;
     case 3:
	  seed[index]=val;
	  leech[index]='X';
	  break;
     case 4:
	  leech[index]=val;
	  break;
	}
   });
   com[index]=
   '<table style="margin:0;width:100%;border-spacing:2px">'+
    '<tr>'+
     '<td class="comoverlap">Seeds: '+seed[index]+' | Leechs: '+leech[index]+'</td>'+
    '</tr>'+
    '<tr>'+
     '<td class="comoverlap">Size: '+size[index]+'</td>'+
    '</tr>'+
    '<tr>'+
     '<td class="comoverlap">Category: '+cat[index]+'</td>'+
    '</tr>'+
    '<tr>'+
     '<td class="comoverlap">Date: '+date[index]+'</td>'+
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
  }
 });
 idobj.innerHTML=tablecd;
 aligntd();
 $('#'+idobj.id+' div[id]').tooltip({effect: 'slide',offset: [27, 10],relative: 'true'});
 var dataarray=[], title=[], temp=[], seed=[], leech=[], cat=[], size=[], date=[], com=[], loc=[], tablerow, tablecd='';
}
function downloadbtjunkie(loc){
 minmaximize(0);
 document.getElementById('searchframe').innerHTML="<iframe src='http://dl.btjunkie.org"+loc+"/download.torrent' class='searchframe' frameborder='0'></frame>";
 $("#searchframe").show(600);
}