var CN=CN+1;
CsU[CN]="html~http://btjunkie.org/search?q=|";
CsS[CN]='a, content';
CsX[CN]=
	'//div[@id="main"]/table[1]/tr/th/table/tr/th/table/tr//th/p | '+
	'//div[@id="main"]/table[1]/tr/th/table/tr/th/table/tr//th/font | '+
	'//div[@id="main"]/table[1]/tr/th/table/tr/th/table/tr//th/a/strong';
function parsebtjunkie0(id,data){
 $('#'+id).html('<textarea style="width:100%;height:100%">DEBUGGING:\nFetching Page...Success!\n'+data+'</textarea>');
}
function parsebtjunkie(id,data){
 var dataarray=[], title=[], temp=[], seed=[], leech=[], cat=[], size=[], date=[], com=[], loc=[], tablerow, tablecd='';
 dataarray=data.split("<p");
 $.each(dataarray,function(index, value){
  if(index!==0&&index<((dataarray.length)-6)&&index<6){
   dataarray[index]='<p'+value;
   dataarray[index]=dataarray[index].replace(/p>(\s+)</g,'').replace(/\s+/g,' ').replace(/<\/strong>/,'<strong>|||');
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
	  if(val&&val!==' ')seed[index]=val;
	  else seed[index]='X';
	  leech[index]='X';
	  break;
     case 4:
	  if(val&&val!==' ')leech[index]=val;
	  else leech[index]='X';
	  break;
	}
   });
   com[index]=
   '<table>'+
    '<tr>'+
     '<td class="comoverlap" colspan="5" style="height:10px;width:630px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+title[index]+'</td>'+
    '</tr>'+
    '<tr>'+
     '<td class="comoverlap">Seeds: '+seed[index]+'</td>'+
     '<td class="comoverlap">Leechs: '+leech[index]+'</td>'+
     '<td class="comoverlap">Size: '+size[index]+'</td>'+
     '<td class="comoverlap">Category: '+cat[index]+'</td>'+
     '<td class="comoverlap">Date: '+date[index]+'</td>'+
    '</tr>'+
   '</table>';
   tablerow=
    '<div id="result'+index+'" class="resultimgsm"  style="width:720px;height:34px">'+
     com[index]+
    '</div>'+
    '<div class="tooltip">'+
     '<table>'+
      '<tr>'+
       '<td>'+
	    '<b id="searchresult'+index+'" style="display:none">'+title[index]+'</b>'+
       '</td>'+
	  '</tr>'+
	  '<tr>'+
	   '<td style="height:30px">'+
	    '<button onclick="IMDb(\'searchresult'+index+'\')" class="buttonmed">IMDb</button>'+
	    '<button onclick="downloadbtjunkie(\''+loc[index]+'\');" class="buttonmed">Download</button>'+
	   '</td>'+
	  '</tr>'+
	 '</table>'+
    '</div>';
   tablecd=tablecd+tablerow;
  }
 });
 $('#'+id).html(tablecd);
 aligntd();
 $('#'+id+' div[id]').last().css('margin-bottom', '10px');
 $('#'+id+' div[id]').tooltip({effect: 'slide',offset: [27, 10],relative: 'true'});
 var dataarray=[], title=[], temp=[], seed=[], leech=[], cat=[], size=[], date=[], com=[], loc=[], tablerow, tablecd='';
}
function downloadbtjunkie(loc){
 minmaximize(0);
 document.getElementById('searchframe').innerHTML="<iframe src='http://dl.btjunkie.org"+loc+"/download.torrent' class='searchframe' frameborder='0'></frame>";
 $("#searchframe").show(600);
}