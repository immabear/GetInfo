var CN=CN+1;
CsU[CN]="html~http://www.nyaatorrents.org/?page=search&cat=0_0&filter=0&term=|";
CsS[CN]="*";
CsX[CN]='//table[@class="tlist"]/tr[@class!="tlisthead"]';
function parsenyaatorrents0(id,data){
 $('#'+id).html('<textarea style="width:100%;height:100%">DEBUGGING:\nFetching Page...Success!\n'+data+'</textarea>');
}
function parsenyaatorrents(id,data){
 var dataarray=[],title=[],seed=[],leech=[],cat=[],alt=[],size=[],com=[],loc=[],dls=[],tablerow,tablecd='';
 dataarray=data.split("<tr");
 $.each(dataarray,function(index, value){
  if(index!==0){
   dataarray[index]='<tr'+value;
   $(dataarray[index]).find('td[class]').each(function(){
    switch($(this).attr('class')){
	 case 'tlisticon':
	  $(this).find('img').each(function(){cat[index]=$(this).attr('src'); alt[index]=$(this).attr('alt');});
	  break;
	 case 'tlistname':
	  $(this).find('a').each(function(){title[index]=$(this).attr('title')});
	  break;
	 case 'tlistdownload':
	  $(this).find('a').each(function(){loc[index]=$(this).attr('href')});
	  break;
	 case 'tlistsize':
	  size[index]=$(this).find('p').text();
	  break;
	 case 'tlistsn':
	  seed[index]=$(this).find('p').text();
	  break;
	 case 'tlistln':
	  leech[index]=$(this).find('p').text();
	  break;
	 case 'tlistcn':
	  dls[index]=$(this).find('p').text();
	  break;
	}
   });
   com[index]=
   '<table>'+
    '<tr>'+
     '<td class="comoverlap" rowspan="2" style="width:80px;border:0">'+
	  '<div class="nohide" style="width:80px;height:28px;border:0;background:url('+cat[index]+')"> </div>'+
	 '</td>'+
     '<td class="comoverlap" colspan="4" style="height:10px;width:630px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+title[index]+'</td>'+
    '</tr>'+
    '<tr>'+
     '<td class="comoverlap">Seeds: '+seed[index]+'</td>'+
     '<td class="comoverlap">Leechs: '+leech[index]+'</td>'+
     '<td class="comoverlap">Size: '+size[index]+'</td>'+
     '<td class="comoverlap">Downloads: '+dls[index]+'</td>'+
    '</tr>'+
   '</table>';
   tablerow=
    '<div id="result'+index+'" class="resultimgsm" style="width:720px;height:34px">'+
     com[index]+
    '</div>'+
    '<div class="tooltip">'+
     '<table>'+
      '<tr>'+
       '<td>'+
	    '<b id="searchresult'+index+'" style="display:none">'+title[index]+'</b>'+
	    '<div class="nohide" alt="'+alt[index]+'" style="width:80px;height:28px;border:0;background:url('+cat[index]+')"> </div>'+
       '</td>'+
	  '</tr>'+
	  '<tr>'+
	   '<td style="height:30px">'+
	    '<button onclick="IMDb(\'searchresult'+index+'\')" class="buttonmed">IMDb</button>'+
	    '<button onclick="downloadnyaatorrents(\''+loc[index]+'\');" class="buttonmed">Download</button>'+
	   '</td>'+
	  '</tr>'+
	 '</table>'+
    '</div>';
   tablecd=tablecd+tablerow;
  }
 });
 $('#'+id).html(tablecd);
 aligntd();
 $('#'+id+' div[id]').last().css('margin-bottom','10px');
 $('#'+id+' div[id]').tooltip({effect:'slide',offset:[27,10],relative:'true'});
 var dataarray=[],title=[],seed=[],leech=[],cat=[],alt=[],size=[],com=[],loc=[],dls=[],tablerow,tablecd='';
}
function downloadnyaatorrents(loc){
 $("#searchframe").html("<iframe src='"+loc+"' class='searchframe' frameborder='0'></frame>").show(600);
}