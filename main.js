var data_storage;
var username;

function setCookie(c_name,value,expiredays)
{
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie = c_name + "=" + escape(value)
		+ ((expiredays==null) ? "" : ";expires=" + exdate.toGMTString());
}

function getCookie(c_name)
{
	if (document.cookie.length>0)
	{
		c_start = document.cookie.indexOf(c_name + "=");
		if (c_start != -1)
		{ 
			c_start = c_start + c_name.length + 1 ;
			c_end = document.cookie.indexOf(";", c_start);
			if (c_end == -1)
			{
				c_end = document.cookie.length;
			}
			return unescape(document.cookie.substring(c_start, c_end));
		} 
	}
	return "";
}

$(document).ready(function()
{
	$.post("//121.42.141.42/dps/banner.html", {},
		function(data, status){
			data_storage = data;
			$("#banner").html(data_storage);
		});
	username = getCookie('username');
	if (username == null || username == "")
	{
		$.post("//121.42.141.42/dps/login.html", {},
			function(data, status){
				data_storage = data;
				$("#main").html(data_storage);
				$("#status").html("用户登录");
				$(".banner-detail").toggleClass("hidden");
			});
	}
	else
	{
		
	}
});