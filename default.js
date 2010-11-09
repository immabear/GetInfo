function parse(id,data){
 var src=[],alt=[],com=[],tablerow,tablecd='';
 $(data).find('div[class=movie]').each(function(index){
  $(this).find('img[class=thePoster]').each(function(){
   src[index]=$(this).attr('src');
   alt[index]=$(this).attr('alt');
  });
  $(this).find('div[class=thisWeek]').each(function(){
   com[index]=$(this).text();
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
       '<td><b id="defaultresult'+index+'">'+alt[index]+'</b></td>'+
     '</tr>'+
     '<tr>'+
      '<td style="height:30px">'+
       '<button onclick="IMDb(\'defaultresult'+index+'\')" class="btn">IMDb</button>'+
       '<button onclick= "advsearch(\'defaultresult'+index+'\');" class="btn">Search</button>'+
      '</td>'+
     '</tr>'+
    '</table>'+
   '</div>';
  tablecd=tablecd+tablerow;
 });
 $('#'+id).html(tablecd);
 atd();
 $('#'+id+' div[id]').last().css('margin-bottom','10px');
 $('#'+id+' div[id]').tooltip({effect:'slide',offset:[27,10],relative:'true'});
 var src=[],alt=[],com=[],tablerow,tablecd='';
}