ClientsU[2]="html~http://immabear.comoj.com/debug.php?q=|";
ClientsS[2]='*';
ClientsX[2]='*';
function parsedebug(id,data){
 var idobj=document.getElementById(id);
 idobj.innerHTML='<textarea style="width:100%;height:100%">DEBUGGING:\nFetching Page...Success!\n'+data+'</textarea>';
 idobj.style.display='';
}