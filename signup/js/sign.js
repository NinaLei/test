

function checkPost(){
    var atten=document.getElementById('attention');
    if(document.myform.username.value==""){
      atten.setAttribute("class","show");
      atten.innerHTML="请输入你的用户名";
      myform.username.focus();
      return false;

    }
    if(document.myform.pwd.value.length<6){
      atten.setAttribute("class","show");
      atten.innerHTML="密码不能少于6位";
      myform.pwd.focus();
      return false;
      }

    if(document.myform.date.value==""){
      atten.setAttribute("class","show");
      atten.innerHTML="请填写出生日期";
      myform.date.focus();
      return false;
      }


      var obj=document.getElementsByName('skill');
      var x='';
      for(var i=0; i<obj.length; i++){
        if(obj[i].checked) x+=obj[i].value + " ";
      }


    alert ("用户名: "+myform.username.value + "\n" +
    	"出生日期："+myform.date.value+'\n'+
        "技能: " + x);
    return true;
  }


function myformPassword(){
	var pwdr=document.getElementById("pwd_r").value;
	var pwd=document.getElementById("pwd").value;
	if(pwd != pwdr){
		document.getElementById("notice_pwd").innerHTML="*两次输入的密码不同";		
	}else{
		document.getElementById("notice_pwd").innerHTML="";
	}
}

  function setStyle(tagid){
    var element=document.getElementById(tagid);
    if(element.value==""){
      element.setAttribute("class","focus");
    }else{
      element.setAttribute("class","unfocus");
    }
}


var xmlHttp;
function creatxmlHttpRequest(){
  if (window.ActiveXObject){
  xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  }else if (window.XMLHttpRequest){
  xmlHttp = new XMLHttpRequest();
}
}



  function doPOST(url,data){
    creatxmlHttpRequest();
    var attentt= document.getElementById("attention");
    xmlHttp.open("POST",url,true);
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xmlHttp.send(data);
    xmlHttp.onreadystatechange=function(){
      if ((xmlHttp.readyState == 4)&&(xmlHttp.status == 200)) {
        attentt.innerHTML=xmlHttp.responseText;
        attentt.setAttribute("class","show");
      }
    }
}


function checkuser(){
  var url="http://www.1ke.co/backend/teach/js/checkuser_post.php";
  data="username="+myform.username.value;
  doPOST(url,data);
}
