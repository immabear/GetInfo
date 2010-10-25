function Retriever(){
var Cs=["stagevu","btjunkie","nyaatorrents","debug"],CsS=[],CsC=[],CsC2=[],CsSC=[],CF,
Db=["http://github.com/immabear/GetInfo/raw/master/","jquery.tools.min","jquery.xdomainajax","tasks","default"],DbS=[];
String.prototype.cap=function(){return this.charAt(0).toUpperCase()+this.slice(1);};
for(var t=0;t<Cs.length;t++){
 CsS[t]='<script src="'+Db[0]+Cs[t]+'.js"></script>';
 CsC[t]='case "'+Cs[t]+'": parse'+Cs[t]+'(id,data.responseText); break;';
 CF='("sb",CsU['+t+'].replace("|",tags)+"&rrr="+Math.random(),"'+Cs[t]+'",CsS['+t+'],CsX['+t+'])';
 switch(Cs[t]){
  case Cs[0]:
   CsC2[t]='default: fetch'+CF+';break;';
   break;
  default:
   CsC2[t]='case "'+Cs[t]+'": fetch'+CF+';break;';
   break;
 }
 CsSC[t]='<option value="'+Cs[t]+'">'+Cs[t].cap()+':</option>';
}
for(var t=1;t<Db.length;t++){DbS[t]='<script src="'+Db[0]+Db[t]+'.js"></script>';}
var page="
<!doctype html> 
<html lang='en'> 
<head>
<meta http-equiv='Content-Type' content='text/html;charset=utf-8'/>
<link rel='shortcut icon' href='"+Db[0]+"favicon.jpg'/>
<link rel='stylesheet' type='text/css' href='"+Db[0]+"stylesb.css'/>
<title>\u22D8GET: INFO\u22D9 by IMMABEAR -- Version: 1.00 (10/08/2010)</title>
"+DbS.join(' ')+CsS.join(' ')+"
<script>
 function parseswitch(id,data,parser){
  switch(data.responseText){
   case '': error(id); break;
   default:
    switch(parser){
     "+CsC.join(' ')+"
     default: parse(id,data.responseText);
    }
  }
 }
 function search(){
  var tags=document.getElementById('sct').value.replace(/ /g,'+'),type=$('#ss').attr('value');
  if(tags=='')tags='DOMAIN';
  switch(type){
    "+CsC2.join(' ')+"
  }
 }
</script>
</head>
<body onload=\"atd();fetch('hb',sources[0])\">
<div id='bd'>
 <table id='mtb'><tr id='mt'>
   <td id='htd' class='m'><b_ id='ht' class='btm active' onclick='tab(this.parentNode.id);show(\"h\")'>Home</b_></td>
   <td id='std' class='r'><b_ id='st' class='btm' onclick='tab(this.parentNode.id);show(\"s\")'>Search</b_></td>
   <td id='ftd'>&nbsp;</td>
   <td id='mtd' class='fr'><b_ id='mm' class='btm' onclick='mm(0)'>Minimize</b_></td>
 </tr></table>
 <div id='h'>
  <table id='htb'><tr id='ht'>
    <td id='ttd' class='m'><b_ id='tt' class='btb active' onclick=\"tab(this.parentNode.id);fetch('hb',sources[0])\">In Theaters</b_></td>
    <td id='sntd' class='r'><b_ id='snt' class='btb' onclick=\"tab(this.parentNode.id);fetch('hb',sources[1])\">Coming Soon</b_></td>
    <td id='dtd' class='r'><b_ id='dt' class='btb' onclick=\"tab(this.parentNode.id);fetch('hb',sources[2])\">On DVD/Bluray</b_></td>
    <td id='ftd'>&nbsp;</td>
  </tr></table>
  <div id='hb'>
  </div>
 </div>
 <div id='s' style='display:none'>
  <table id='stb'><tr>
    <td class='fl' id='ctd'>
     <select id='ss'>
      <option value=''>Choose Type</option>
      "+CsSC.join(' ')+"
     </select>
    </td>
    <td id='sctd'><input id='sct' type='text' size='25' value='Search Tags'></td>
    <td class='fr' id='sbd'><b_ id='sb' class='btm' onclick='search()'>Search</b_></td>
  </tr></table>
  <div id='sb'>
  </div>
 </div>
</div>
<div id='bg'></div>
<div id='sf' style='display:none'></div>
</body>
</html>";
var Cs=[],CsS=[],CsC=[],CsC2=[],CsSC=[],Db=[],DbS=[];
page=page.replace(/b_/g,'button');
return page;
}