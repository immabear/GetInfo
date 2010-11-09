var humanerror=["WARNING: XDA Disabled\n","It can only be attributable to human error:","1)The script was initiated from an offline xul page (e.g. 'About:Blank') removing domain access.","2)An internet connection is not present.","3)The search query came back empty-handed, and the script threw a tantrum.","4)An unknown error occured, but it's your fault."],
hal=["...I'm sorry, Dave, I'm afraid I can't do that."],
sources=["http://www.moviefone.com/new-movie-releases","http://www.moviefone.com/coming-soon","http://www.moviefone.com/dvd"];
$('#sct').live('keypress',function(e){
 if(e.keyCode==13)search();
});
function fetch(id,url,parser,select,xpath){
 $("#"+id).html('<img src="http://github.com/immabear/GetInfo/raw/master/ajax-loader-d.gif" style="width:128px;height:15px"/>');
 if(!parser)parser='';
 if(!select)select='*';
 if(!xpath)xpath='*';
 if(url.search(/DOMAIN/)!==-1){
  var temp=url.split("/");
  url=temp[0]+"//"+temp[2]+"/";
 };
 $.ajax({
  select: select,
  xpath: xpath,
  type: "GET",
  url: url,
  error: function(request, status){
   error(id);
  },
  success: function(data){
   parseswitch(id,data,parser);
  }
 });
}
function fetchRss(id,url,parser){
 $("#"+id).html('Searching...');
  var rssresults=[],
  query="select * from feed where url='"+url+"'",
  yqlurl="http://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent(query)+"&format=json&callback=?";
  $.getJSON(yqlurl, function(data){parseswitch(id,data,parser);});
}
function error(id){
 $("#"+id).html(hal[0]);
 alert(humanerror.join('\n'));
}
function tab(id){
 var i=$("#"+id).attr("cellIndex");
 $("#"+id).attr("class","m");
 $("#"+id+" button").addClass('active');
 $("#"+$('#'+id).parent().attr('id')+" td[class]").each(function(){
  var ti=(this).cellIndex;
  if(ti!==i)$(this).find("button").removeClass('active');
  if(ti<i){
   if(ti==0)$(this).attr("class","fl");
   else $(this).attr("class","l");
  }
  else if(ti>i&&(this).className!=="fr")$(this).attr("class","r");
 })
}
function show(id){
 $("#bd").children("div").css("display","none");
 $("#"+id).css("display","");
}
function mm(x){
 switch(x){
  case 0:
   $("#sf").show(600);
   $("#bd").animate({'marginTop':'-30px','top':'100%','height':'30px'},600,
    function(){
	 $("#bd").animate({'width':'260px'},600,
	  function(){
	   $("#mm").text("Maximize").each(function(){(this).onclick=function(){mm()}});
	  }
	 );
	}
   );
   break;
  default:
   $("#sf").hide(600);
   $("#bd").animate({'width':'800px'},600,
    function(){
	 $("#bd").animate({'marginTop':'-300px','top':'50%','height':'600px'},600,
	  function(){
	   $("#mm").text("Minimize").each(function(){(this).onclick=function(){mm(0)}});
	  }
	 );
	}
   );
 }
}
function atd(){
 $("td[class!=noalign]").attr("align","center");
}
function advsearch(id){
 tab('std');
 show('s');
 $("#sct").attr("value",$("#"+id).html());
}
function IMDb(id){
mm(0);
$("#sf").html("<iframe src='http://www.imdb.com/find?s=all&q="+$("#"+id).html().replace(/ /g,'+')+"' class='sf' frameborder='0'></frame>").show(600);
}