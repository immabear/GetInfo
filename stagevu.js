var CsU=[], CsS=[], CsX=[], CN=0;
CsU[CN]="html~http://stagevu.com/search?for=|&in=Videos";
CsS[CN]="*";
CsX[CN]='//div[@id="resultsbox1"]';
function parsestagevu(id,data){
 var src=[], alt=[], desc=[], com=[], loc=[], lng=[], tablerow, tablecd='', idobj=document.getElementById(id);
 idobj.innerHTML='';
 $(data).find('div').each(function(index){
  if($(this).find('div').attr('class')=='searcherror'){
   tablecd="...I'm sorry, Dave, I'm afraid I can't do that.";
   error(idobj.id);
  }
  else if($(this).attr('class')=='result1'||$(this).attr('class')=='result2'){
   $(this).find('img').each(function(){
    if($(this).attr('class')=='mvthumb'){
     src[index]=$(this).attr('src');
    }
	else{
	 com[index]=$(this).attr('alt');
	 return false;
	}
   });
   $(this).find('h2').each(function(){
     $(this).find('a').each(function(){
	  alt[index]=$(this).text();
	  loc[index]=$(this).attr('href');
	  loc[index]=loc[index].split('/')[4];
	 });
   });
   $(this).find('p').each(function(){
	desc[index]=$(this).text();
	return false;
   });
   $(this).find('div').each(function(){
    if($(this).attr('class')=='floatright'){
	 lng[index]=$(this).html();
	 lng[index]=lng[index]+'';
     lng[index]=lng[index].split('>')[7];
     lng[index]=lng[index].split('\;')[0];
	}
   });
   com[index]='<table><tr><td class="comoverlap">'+com[index]+'/5 Stars | Length: '+lng[index]+'</td></tr></table>';
   tablerow=
    '<div id="result'+index+'" class="resultimgsm" style="background:url('+src[index]+')">'+
	 com[index]+
	'</div>'+
	'<div class="tooltipbig">'+
	 '<table>'+
	  '<tr>'+
	   '<td><b id="searchresult'+index+'">'+alt[index]+'</b><br>'+
	    desc[index]+
	   '</td>'+
	  '</tr>'+
	  '<tr>'+
	   '<td style="height:30px">'+
	    '<button onclick="IMDb(\'searchresult'+index+'\')" class="buttonbig">IMDb</button>'+
	    '<button onclick="downloadstagevu(\''+loc[index]+'\');" class="buttonbig">View/Download</button>'+
	   '</td>'+
	  '</tr>'+
	 '</table>'+
	'</div>';
   tablecd=tablecd+tablerow;
  }
 });
 idobj.innerHTML=tablecd;
 aligntd();
 $('#'+idobj.id+' div[id]').last().css('margin-bottom', '10px');
 $('#'+idobj.id+' div[id]').tooltip({effect: 'slide',offset: [27, 10],relative: 'true'});
 var src=[], alt=[], desc=[], com=[], loc=[], lng=[], tablerow, tablecd='';
}
function downloadstagevu(loc){
 minmaximize(0);
 document.getElementById('searchframe').innerHTML="<iframe style='overflow:hidden;border:0;width:100%;height:100%' src='http://stagevu.com/embed?width=780&amp;height=600&amp;background=transparent&amp;uid="+loc+"'scrolling='no'></iframe>";
 $("#searchframe").show(600);
}
