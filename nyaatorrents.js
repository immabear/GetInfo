var CN=CN+1;
CsU[CN]="html~http://www.nyaatorrents.org/?page=search&cat=0_0&filter=0&term=|";
CsS[CN]="*";
CsX[CN]='//table[@class="tlist"]/tr[@class!="tlisthead"]';
function parsenyaatorrents0(id,data){
 var idobj=document.getElementById(id);
 idobj.innerHTML='<textarea style="width:100%;height:100%">DEBUGGING:\nFetching Page...Success!\n'+data+'</textarea>';
 idobj.style.display='';
}

function parsenyaatorrents(id,data){
 var dataarray=[], title=[], seed=[], leech=[], cat=[], size=[], com=[], loc=[], dls=[], tablerow, tablecd='', idobj=document.getElementById(id);
 dataarray=data.split("<tr");
 $.each(dataarray,function(index, value){
  if(index!==0&&index<5){
   dataarray[index]='<tr'+value;
   $(dataarray[index]).find('td').each(function(){
    switch($(this).attr('class')){
	 case 'tlisticon':
	  $(this).find('a').each(function(){cat[index]=$(this).attr('href')});
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
     '<td class="comoverlap" colspan="5">'+title[index]+'</td>'+
    '</tr>'+
    '<tr>'+
     '<td class="comoverlap">Seeds: '+seed[index]+'</td>'+
     '<td class="comoverlap">Leechs: '+leech[index]+'</td>'+
     '<td class="comoverlap">Size: '+size[index]+'</td>'+
     '<td class="comoverlap">Downloads: '+dls[index]+'</td>'+
     '<td class="comoverlap"><img src="'+cat[index]+'"/></td>'+
    '</tr>'+
   '</table>';
   tablerow=
    '<div id="result'+index+'" class="resultimgsm" style="width:680px">'+
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
 $('#'+idobj.id+' div[id]').last().css('margin-bottom', '10px');
 $('#'+idobj.id+' div[id]').tooltip({effect: 'slide',offset: [27, 10],relative: 'true'});
 var dataarray=[], title=[], seed=[], leech=[], cat=[], size=[], com=[], loc=[], dls=[], tablerow, tablecd='';
}

function parsebtjunkie00(id,data){
 var dataarray=[], title=[], temp=[], seed=[], leech=[], cat=[], size=[], date=[], com=[], loc=[], tablerow, tablecd='', idobj=document.getElementById(id);
 dataarray=data.split("<p");
 $.each(dataarray,function(index, value){
  if(index!==0&&index<((dataarray.length)-6)){
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
 $('#'+idobj.id+' div[id]').last().css('margin-bottom', '10px');
 $('#'+idobj.id+' div[id]').tooltip({effect: 'slide',offset: [27, 10],relative: 'true'});
 var dataarray=[], title=[], temp=[], seed=[], leech=[], cat=[], size=[], date=[], com=[], loc=[], tablerow, tablecd='';
}