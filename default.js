function parse(id,data){
 var src=[], alt=[], com=[], tablerow, tablecd='';
 $(data).find('div').each(function(index){
  if($(this).attr('class')=='movie'){
   $(this).find('img').each(function(){
    if($(this).attr('class')=='thePoster'){
     src[index]=$(this).attr('src');
     alt[index]=$(this).attr('alt');
    }
   });
   $(this).find('div').each(function(){
    if($(this).attr('class')=='thisWeek'){
	 com[index]=$(this).text();
    }
   });
   if(!com[index]) com[index]='&nbsp;';
   else com[index]='<table><tr><td class="comoverlap">'+com[index]+'</td></tr></table>';
   tablerow=
    '<div id="result'+index+'" class="resultimg" style="background:url('+src[index]+')">'+
	 com[index]+
	'</div>'+
	'<div class="tooltip">'+
	 '<table>'+
	  '<tr>'+
	   '<td><b id="searchresult'+index+'">'+alt[index]+'</b></td>'+
	  '</tr>'+
	  '<tr>'+
	   '<td style="height:30px">'+
	    '<button onclick="IMDb(\'searchresult'+index+'\')" class="button">IMDb</button>'+
	    '<button onclick= "advsearch(\'searchresult'+index+'\');" class="button">Search</button>'+
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
 var src=[], alt=[], com=[], tablerow, tablecd='';
}
