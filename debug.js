var CN=CN+1;
CsU[CN]="http://immabear.comoj.com/debug.php?q=|";
CsS[CN]='*';
CsX[CN]='*';
function parsedebug(id,data){
 $('#'+id).html('<textarea style="width:100%;height:100%">DEBUGGING:\nFetching Page...Success!\n'+data+'</textarea>');
}