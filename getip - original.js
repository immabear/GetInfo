function Retriever(){
var Clients=["stagevu","btjunkie","debug"];
var ClientsS=[]; var ClientsC=[]; var ClientsD=[]; var ClientsC2=[]; var ClientsSC=[];
var Db=["http://github.com/immabear/GetInfo/raw/master/","jquery.xdomainajax.js","tasks.js","default.js"];
var DbS=[];
String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1);};
for(var t=0;t<Clients.length;t++){
 ClientsS[t]='<script src="'+Db[0]+Clients[t]+'.js"></script>';
 ClientsC[t]='case "'+Clients[t]+'": parse'+Clients[t]+'(id,data.responseText); break;';
 ClientsD[t]='case "'+Clients[t]+'": parse'+Clients[t]+'(id,data); break;';
 var casefunction='("searchbox",ClientUF[1].replace("|",tags)+"&rrr="+Math.random(),"'+Clients[t]+'")';
 switch(Clients[t]){
  case Clients[0]:
   ClientsC2[t]=
    'default:
	 var ClientUF=ClientsU['+t+'].split("~");
	 switch(ClientUF[0]){
	  case "html": fetchPage'+casefunction+';
	   break;
	  case "rss": fetchRss'+casefunction+';
	   break;
	 }
	 break;';
   break;
  default:
   ClientsC2[t]=
    'case "'+Clients[t]+'":
	 var ClientUF=ClientsU['+t+'].split("~");
	 switch(ClientUF[0]){
	  case "html": fetchPage'+casefunction+';
	   break;
	  case "rss": fetchRss'+casefunction+';
	   break;
	 }
	 break;';
   break;
 }
 ClientsSC[t]='<option value="'+Clients[t]+'">'+Clients[t].capitalize()+':</option>';
}
for(var t=1;t<Db.length;t++){
 DbS[t]='<script src="'+Db[0]+Db[t]+'"></script>';
}
var page="
<!doctype html> 
<html lang='en'> 
<head>
<link rel='shortcut icon' href='"+Db[0]+"favicon.jpg'/>
<link rel='stylesheet' type='text/css' href='"+Db[0]+"stylesb.css'/>
<title>\u22D8GET: INFO\u22D9 by IMMABEAR</title>
<script src=\"http://cdn.jquerytools.org/1.2.5/full/jquery.tools.min.js\"></script>
"+DbS.join(' ')+ClientsS.join(' ')+"
<script>
 function parseswitch(id,data,parser,type){
  switch(type){
   case 'rss':
    switch(data){
     case '': error(id); break;
     default:
      switch(parser){
       "+ClientsD.join(' ')+"
       default: parsedebug(id,data);
      }
    }
    break;
   default:
    switch(data.responseText){
     case '': error(id); break;
     default:
      switch(parser){
       "+ClientsC.join(' ')+"
       default: parse(id,data.responseText);
      }
    }
  }
 }
 function search(){
  var tags=document.getElementById('searchtags').value.replace(/ /g,\"+\");
  var type=document.getElementById('searchtype').value;
  switch(type){
    "+ClientsC2.join(' ')+"
   }
 }
</script>
</head>
<body onload='aligntd();fetchPage(\"homebox\",sources[0]);'>
<div id='bodydiv'>
 <table id='maintaskbar' cellspacing='0'>
  <tr id='taskbar'>
   <td id='hometasktd' class='middle'><button id='hometask' class='buttonmed activebutton' onclick='tab(this.parentNode);show(\"home\",\"homebox\")'>Home</button></td>
   <td id='searchtasktd' class='right'><button id='searchtask' class='buttonmed' onclick='tab(this.parentNode);show(\"search\",\"searchbox\")'>Search</button></td>
   <td id='infotasktd' class='right'><button id='infotask' class='buttonmed' onclick='tab(this.parentNode);show(\"info\")'>Info</button></td>
   <td id='fillertask'>&nbsp;</td>
   <td class='farright' id='minmaxtd'><button id='minmax' class='buttonmed' onclick='minmaximize(0)'>Minimize</button></td>
  </tr>
 </table>
 <div id='home'>
  <table id='hometaskbar' cellspacing='0'>
   <tr id='movietask'>
    <td id='theatertasktd' class='middle'><button id='theatertask' class='buttonbig activebutton' onclick='tab(this.parentNode);fetchPage(\"homebox\",sources[0]);'>In Theaters</button></td>
    <td id='soontasktd' class='right'><button id='soontask' class='buttonbig' onclick='tab(this.parentNode);fetchPage(\"homebox\",sources[1]);'>Coming Soon</button></td>
    <td id='dvdtasktd' class='right'><button id='dvdtask' class='buttonbig' onclick='tab(this.parentNode);fetchPage(\"homebox\",sources[2]);'>On DVD/Bluray</button></td>
    <td id='fillertasktd'>&nbsp;</td>
   </tr>
  </table>
  <div id='homebox'>
  </div>
 </div>
 <div id='search' style='display:none'>
  <table id='searchtaskbar' cellspacing='0'>
   <tr id='searchtasktr'>
    <td class='farleft' id='clientselect'>
     <select id='searchtype'>
      <option value=''>Choose Type</option>
      "+ClientsSC.join(' ')+"
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
  <table id='infotaskbar' cellspacing='0'>
   <tr id='infotasktr'>
    <td id='infobox' onclick='tab(this)'>
     GET: INFO by IMMABEAR<br><br><br><br><br><br><br><br>Version: 1.00 (10/08/2010)<br><button onclick='alert(\"Nope.\")'>Update</button>
    </td>
   </tr>
  </table>
 </div>
</div>
<div id='background'></div>
<div id='searchframe' style='display:none'></div>
</body>
</html>";
return page;
}