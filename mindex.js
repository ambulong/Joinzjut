$(document).ready(function(){ 
	$("#nav").css("height",$(".header").width()*0.5);
	$("#nav").css("width",$("#nav").height());
	$(".header").css("height",$(".header").width()*0.5);
	$(".logo").css("height",$(".header").height());
	$(".hide").hide();
	$(".join-detail").hide();
	
	/*招新要求的展开*/
	$(document).scroll(function(){
			if ( $(document).scrollTop() > $(".join-tech").offset().top && $(document).scrollTop() < $(".join-product").offset().top){
				$("nav").hide();
				$(".tech-detail").slideDown(1000);
			}
			else if ( $(document).scrollTop() > $(".join-product").offset().top && $(document).scrollTop() < $(".join-routine").offset().top){
				$(".product-detail").slideDown(1000);
					$("nav").hide();
			}
			else if ( $(document).scrollTop() > $(".join-routine").offset().top && $(document).scrollTop() < $(".join-discuss").offset().top){
					$("nav").hide();
				$(".routine-detail").slideDown(1000);
			}
			else {
				$(".discuss-detail").slideDown(500);
				if($(document).scrollTop() >1)
					$("nav").hide();
			}
	});
	
	/*表单部分*/

	var stunum = /^(20[0-1][0-4]\d{8})$/;
	var phonenum = /^(1\d{10})$/;
	var qqnum = /^([1-9]\d{4,10})$/;
	function check(){
		if(!($("#name").val())){
			$("#wrong_name").css("display","block");
			$(".form-btn").css("background-color","#555");
			$(".form-btn").attr("disabled",true);
		}
		else if(!stunum.test($("#stunum").val())){
			$("#wrong_stunum").css("display","block");
			$(".form-btn").css("background-color","#555");
			$(".form-btn").attr("disabled",true);
		}
		else if(!phonenum.test($("#phone").val())){
			$("#wrong_phonenum").css("display","block");
			$(".form-btn").css("background-color","#555");
			$(".form-btn").attr("disabled",true);
		}
		else if(!qqnum.test($("#qq").val())){
			$("#wrong_qq").css("display","block");
			$(".form-btn").css("background-color","#555");
			$(".form-btn").attr("disabled",true);
		}
		else if(!$("input:radio:checked").val()){
			$(".form-right ul li h4 span").show();
			$(".form-right ul table").css("border","1px #FF0000 solid");
		}
		else if(!$(".form-textarea textarea").val()){
			$(".form-textarea span").css("color", "#F00");
			}
		else{
			$(".form-btn").attr("disabled",false);
			$(".form-btn").css("background-color","#008d78");
		}
		}
		
	$("#name").blur(function(){
	if(!($("#name").val())){
		$("#wrong_name").css("display","block");
		$(".form-btn").css("background-color","#555");
		$(".form-btn").attr("disabled",true);
	}
	else{
		$("#wrong_name").css("display","none");
		if($("#stunum").val()){
			check();
		}
		
	}
		
	});	
		
	$("#stunum").blur(function(){
	if(!stunum.test($("#stunum").val())){
		$("#wrong_stunum").css("display","block");
		$(".form-btn").css("background-color","#555");
		$(".form-btn").attr("disabled",true);
	}
	else{
		$("#wrong_stunum").css("display","none");
		if($("#phone").val())
			check();
	}
		
	});
	
	$("#phone").blur(function(){

	if(!phonenum.test($("#phone").val())){
		$("#wrong_phonenum").css("display","block");
		$(".form-btn").css("background-color","#555");
		$(".form-btn").attr("disabled",true);
	}
	else{
		$("#wrong_phonenum").css("display","none");
		if($("#qq").val())
		check();
	}
		
	});
	
	
	$("#qq").blur(function(){

	if(!qqnum.test($("#qq").val())){
		$("#wrong_qq").css("display","block");
		$(".form-btn").css("background-color","#555");
		$(".form-btn").attr("disabled",true);
	}
	else{
		$("#wrong_qq").css("display","none");
		if($("input:radio:checked").val())
		check();
	}
	});
	$("input:radio").click(function(){
		$('input:radio').parent().css("background-color","#f2e6c9");
		$('input:radio').parent().css("color","#555");
		$(this).parent().css("color","#fff");
		$(this).parent().css( "background-color","#f25e2f");
		$(".form-right ul li h4 span").hide();
		$(".form-right ul table").css("border","none");
		
		if($("#textarea").val())
		check();

});
$(".form-textarea textarea").focus(function(){
		$(".form-textarea span").hide();
	});
	$(".form-textarea textarea").blur(function(){
		if(!$("#textarea").val())
			$(".form-textarea span").show();
		
		
		check();
		
	});
	
	//ajax  部分的 没有测试哦  
	/*
$("#submit").click(function(){
		$.ajax({
			type:POST,
			url:"http://join.zjut.com/api.php?id=32",
			data:{
				"name" : $("#name").val(),
				"sutnum" : $("#stunum").val(),
				"qq" : $("#qq").val(),
				"phone" : $("#phone").val(),
				"job" : $("input:radio:checked").val(),
				"desc" : $("#textarea").val()
			},
			datatype : 'json',
			 success: function(data){
				 if(data.staus){
					alert("信息已收到，我们会尽快安排面试");
				 }
				 else
				 	alert("出错了，请重新填写");
			 },
			 error: function(){
				 alert("服务器出错,请重新填写");
			}
		});
	});
*/
	
});