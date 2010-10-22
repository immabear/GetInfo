function Retriever(){
var Cs=["stagevu","btjunkie","nyaatorrents","debug"], CsS=[], CsC=[], CsD=[], CsC2=[], CsSC=[],
Db=["http://github.com/immabear/GetInfo/raw/master/","jquery.xdomainajax.js","tasks.js","default.js"], DbS=[];
String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1);};
for(var t=0;t<Cs.length;t++){
 CsS[t]='<script src="'+Db[0]+Cs[t]+'.js"></script>';
 CsC[t]='case "'+Cs[t]+'": parse'+Cs[t]+'(id,data.responseText); break;';
 CsD[t]='case "'+Cs[t]+'": parse'+Cs[t]+'(id,data); break;';
 var CF='("searchbox",CUF[1].replace("|",tags)+"&rrr="+Math.random(),"'+Cs[t]+'",CsS['+t+'],CsX['+t+'])';
 switch(Cs[t]){
  case Cs[0]:
   CsC2[t]=
    'default:
	 var CUF=CsU['+t+'].split("~");
	 switch(CUF[0]){
	  case "html": fetchPage'+CF+';
	   break;
	  case "rss": fetchRss'+CF+';
	   break;
	 }
	 break;';
   break;
  default:
   CsC2[t]=
    'case "'+Cs[t]+'":
	 var CUF=CsU['+t+'].split("~");
	 switch(CUF[0]){
	  case "html": fetchPage'+CF+';
	   break;
	  case "rss": fetchRss'+CF+';
	   break;
	 }
	 break;';
   break;
 }
 CsSC[t]='<option value="'+Cs[t]+'">'+Cs[t].capitalize()+':</option>';
}
for(var t=1;t<Db.length;t++){
 DbS[t]='<script src="'+Db[0]+Db[t]+'"></script>';
}
var page="
<!doctype html> 
<html lang='en'> 
<head>
<meta http-equiv='Content-Type' content='text/html;charset=utf-8'/>
<link rel='shortcut icon' href='"+Db[0]+"favicon.jpg'/>
<link rel='stylesheet' type='text/css' href='"+Db[0]+"stylesb.css'/>
<title>\u22D8GET: INFO\u22D9 by IMMABEAR</title>
<script src=\"http://cdn.jquerytools.org/1.2.5/full/jquery.tools.min.js\"></script>
"+DbS.join(' ')+CsS.join(' ')+"
<script>
 function parseswitch(id,data,parser,type){
  switch(type){
   case 'rss':
    switch(data){
     case '': error(id); break;
     default:
      switch(parser){
       "+CsD.join(' ')+"
       default: parsedebug(id,data);
      }
    }
    break;
   default:
    switch(data.responseText){
     case '': error(id); break;
     default:
      switch(parser){
       "+CsC.join(' ')+"
       default: parse(id,data.responseText);
      }
    }
  }
 }
 function search(){
  var tags=document.getElementById('searchtags').value.replace(/ /g,\"+\"),
  type=$('#searchtype').attr('value');
  switch(type){
    "+CsC2.join(' ')+"
   }
 }
</script>
</head>
<body onload='aligntd();fetchPage(\"homebox\",sources[0],\"\",\"*\",\"*\");'>
<div id='bodydiv'>
 <table id='maintaskbar'>
  <tr id='taskbar'>
   <td id='hometasktd' class='middle'><button id='hometask' class='buttonmed activebutton' onclick='tab(this.parentNode.id);show(\"home\",\"homebox\")'>Home</button></td>
   <td id='searchtasktd' class='right'><button id='searchtask' class='buttonmed' onclick='tab(this.parentNode.id);show(\"search\",\"searchbox\")'>Search</button></td>
   <td id='infotasktd' class='right'><button id='infotask' class='buttonmed' onclick='tab(this.parentNode.id);show(\"info\")'>Info</button></td>
   <td id='fillertask'>&nbsp;</td>
   <td class='farright' id='minmaxtd'><button id='minmax' class='buttonmed' onclick='minmaximize(0)'>Minimize</button></td>
  </tr>
 </table>
 <div id='home'>
  <table id='hometaskbar'>
   <tr id='movietask'>
    <td id='theatertasktd' class='middle'><button id='theatertask' class='buttonbig activebutton' onclick='tab(this.parentNode.id);fetchPage(\"homebox\",sources[0],\"\",\"*\",\"*\");'>In Theaters</button></td>
    <td id='soontasktd' class='right'><button id='soontask' class='buttonbig' onclick='tab(this.parentNode.id);fetchPage(\"homebox\",sources[1],\"\",\"*\",\"*\");'>Coming Soon</button></td>
    <td id='dvdtasktd' class='right'><button id='dvdtask' class='buttonbig' onclick='tab(this.parentNode.id);fetchPage(\"homebox\",sources[2],\"\",\"*\",\"*\");'>On DVD/Bluray</button></td>
    <td id='fillertasktd'>&nbsp;</td>
   </tr>
  </table>
  <div id='homebox'>
  </div>
 </div>
 <div id='search' style='display:none'>
  <table id='searchtaskbar'>
   <tr>
    <td class='farleft' id='Cselect'>
     <select id='searchtype'>
      <option value=''>Choose Type</option>
      "+CsSC.join(' ')+"
     </select>
    </td>
    <td id='searchcont'><input id='searchtags' type='text' size='25' value='Search Tags'></td>
    <td class='farright' id='searchbuttd'><button id='searchbut' class='buttonmed' onclick='search()'>Search</button></td>
   </tr>
  </table>
  <div id='searchbox'>
  </div>
 </div>
 <div id='info' style='display:none'>
  <table id='infotaskbar'>
   <tr>
    <td id='infobox' onclick='tab(this)'>
     GET: INFO by IMMABEAR<br>Version: 1.00 (10/08/2010)
    </td>
   </tr>
  </table>
 </div>
</div>
<div id='background'></div>
<div id='searchframe' style='display:none'></div>
</body>
</html>";
var CsS=[], CsC=[], CsD=[], CsC2=[], CsSC=[], DbS=[];
return page;
}