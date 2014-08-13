$(document).ready(function(){
	/*网页布局适应不同的宽度*/
	
	$(".logo img").mouseenter(function(){
		var nsrc = 	$(this)[0].src.split('/image')[1];
		$(this).attr("src", "images"+nsrc);	
		$(this).parent().parent().css("background-color", "#f25e2f");
	})
	$(".logo img").mouseout(function(){
		var nsrc = 	$(this)[0].src.split('/images')[1];
		$(this).parent().parent().css("background-color", "#f2e6c9");
		$(this).attr("src", "image"+nsrc);	
	})
	
	function adaptwidth(){
	var width = $(document.body).width()*0.16;
		$("#top").css("height",width*2);
		$(".grid-row1").css("height",width*1);
		$(".grid-row2").css("height",width*2);
		$(".grid-row3").css("height",width*3);
		$(".grid-row4").css("height",width*4);
		$(".grid-row5").css("height",width*5);
		$(".grid-row6").css("height",width*6);
		$(".grid-row7").css("height",width*7);
		$(".grid-row8").css("height",width*2);
		$("#mjoinus-header").hide();
		
		
		if($(document.body).width() > 1566 ){
			$(".mention").css("margin-top","50px");
			$(".header p").css("font-size","65px");
			$(".whatwedo-detail h4").css("font-size","36px");
			$(".whatwedo-detail h4").css("margin-top","15%");
			$(".whatwedo-detail h5").css("font-size","17px");
			$(".dream-detail h3").css("font-size","24px");
			$(".whatwedo-header header h1").css("font-size","55px");
			$("h2").css("font-size","25px");
			$("h3").css("font-size","20px");
		}
		else if($(document.body).width() > 1252 ){
			$(".mention").css("margin-top","0");
			$(".header p").css("font-size","65px");
			$(".whatwedo-detail h4").css("font-size","36px");
			$(".whatwedo-detail h4").css("margin-top","15%");
			$(".whatwedo-detail h5").css("font-size","17px");
			$(".dream-detail h3").css("font-size","24px");
			$(".whatwedo-header header h1").css("font-size","55px");
			$("h2").css("font-size","25px");
			$("h3").css("font-size","20px");
		}
		else if($(document.body).width() > 1238){
			$(".mention").css("margin-top","0");
			$(".header p").css("font-size","60px");
			$(".whatwedo-detail h4").css("font-size","30px");
			$(".whatwedo-detail h4").css("margin-top","15%");
			$(".whatwedo-detail h5").css("font-size","15px");
			$(".dream-detail h3").css("font-size","24px");
			$(".whatwedo-header header h1").css("font-size","55px");
			$("h2").css("font-size","25px");
			$("h3").css("font-size","20px");
			}
		else if($(document.body).width() > 1106){
			$(".mention").css("margin-top","0");
			$(".header p").css("font-size","58px");
			$(".whatwedo-detail h4").css("font-size","30px");
			$(".whatwedo-detail h4").css("margin-top","15%");
			$(".whatwedo-detail h5").css("font-size","15px");
			$(".dream-detail h3").css("font-size","20px");
			$(".whatwedo-header header h1").css("font-size","55px");
			$("h2").css("font-size","25px");
			$("h3").css("font-size","20px");
			}
		else if($(document.body).width() > 1067){
			$(".mention").css("margin-top","0");
			$(".header p").css("font-size","56px");
			$(".whatwedo-detail h4").css("font-size","30px");
			$(".whatwedo-detail h4").css("margin-top","15%");
			$(".whatwedo-detail h5").css("font-size","15px");
			$(".dream-detail h3").css("font-size","20px");
			$(".whatwedo-header header h1").css("font-size","55px");
			$("h2").css("font-size","18px");
			$("h3").css("font-size","16px");
			}
		else if($(document.body).width() > 1047){
			$(".mention").css("margin-top","0");
			$(".header p").css("font-size","55px");
			$(".whatwedo-detail h4").css("font-size","28px");
			$(".whatwedo-detail h4").css("margin-top","15%");
			$(".whatwedo-detail h5").css("font-size","14px");
			$(".dream-detail h3").css("font-size","18px");
			$(".whatwedo-header header h1").css("font-size","40px");
			$("h2").css("font-size","18px");
			$("h3").css("font-size","16px");
			}
			else if($(document.body).width() > 975){
			$(".mention").css("margin-top","0");
			$(".header p").css("font-size","53px");
			$(".whatwedo-detail h4").css("font-size","28px");
			$(".whatwedo-detail h4").css("margin-top","10%");
			$(".whatwedo-detail h5").css("font-size","14px");
			$(".dream-detail h3").css("font-size","18px");
			$("h3").css("font-size","16px");
			}
			else{
			$(".mention").css("margin-top","0");
			$(".header p").css("font-size","45px");
			$(".whatwedo-detail h4").css("font-size","26px");
			$(".whatwedo-detail h4").css("margin-top","10%");
			$(".whatwedo-detail h5").css("font-size","13px");
			$(".dream-detail h3").css("font-size","16px");
			$("h3").css("font-size","16px");
			}
	}
	adaptwidth();

	
	$(window).resize(function(){
		adaptwidth();	
	});

	
	
	
	$("#joo").click(function (){$(document.body).animate({scrollTop:$("#joinus").offset().top},200);});
	$(document).scroll(function(){
			if ( $(document).scrollTop() > $("#joinus").offset().top+100){
				if($(".tech-detail").css("display") == "none")
					if($(".product-detail").css("display") == "none")
						if($(".discuss-detail").css("display") == "none")
							if($(".routine-detail").css("display") == "none"){
								if($(document).width() > 1749 ){
									$(".tech-opreation").css("margin-top","0");
									$(".tech-detail ul").css("margin-left","5%");
								}
								else if($(document).width() > 1500 ){
									$(".tech-opreation").css("margin-top","-55px");
									$(".tech-detail ul").css("margin-left","6%");
								}
								else if($(document).width() > 1122 ){
									$(".tech-opreation").css("margin-top","-200px");
									$(".tech-detail ul").css("margin-left","10%");
								}			
								else if($(document).width() > 1010 ){
									$(".tech-opreation").css("margin-top","0");
									$(".tech-detail ul").css("margin-left","10%");
								}
								else{
									$(".tech-opreation").css("margin-top","-367px");
									$(".tech-detail ul").css("margin-left","10%");
								}
								
								if($(document).width() > 1749 )
									$(".grid-row8").css("margin-top","420px")
								else if($(document).width() > 1500 )
									$(".grid-row8").css("margin-top","500px");
								else if($(document).width() > 1122 )
									$(".grid-row8").css("margin-top","500px");
								else if($(document).width() > 923 )
									$(".grid-row8").css("margin-top","655px");					
								else 
									$(".grid-row8").css("margin-top","805px");		
								$(".join-detail").fadeOut();
								$(".tech-detail").slideDown();
				}		
			}	
	});
	
	
	
/*招新要求的展示*/
	$(".tlogo img").mouseenter(function(){
		var nsrc = 	$(this)[0].src.split('/image')[1];
		$(this).attr("src", "images"+nsrc);	
	
	})
	$(".tlogo img").mouseout(function(){
		var nsrc = 	$(this)[0].src.split('/images')[1];
		$(this).attr("src", "image"+nsrc);	
	})

	$(".join-tech").click(function(){
		if($(document).width() > 1749 ){
			$(".tech-opreation").css("margin-top","0");
			$(".tech-detail ul").css("margin-left","5%");
		}
		else if($(document).width() > 1500 ){
			$(".tech-opreation").css("margin-top","-55px");
			$(".tech-detail ul").css("margin-left","6%");
		}
		else if($(document).width() > 1122 ){
			$(".tech-opreation").css("margin-top","-200px");
			$(".tech-detail ul").css("margin-left","10%");
		}			
		else if($(document).width() > 1010 ){
			$(".tech-opreation").css("margin-top","0");
			$(".tech-detail ul").css("margin-left","10%");
		}
		else{
			$(".tech-opreation").css("margin-top","-367px");
			$(".tech-detail ul").css("margin-left","10%");
		}
		
		if($(document).width() > 1749 )
			$(".grid-row8").css("margin-top","420px")
		else if($(document).width() > 1500 )
			$(".grid-row8").css("margin-top","500px");
		else if($(document).width() > 1122 )
			$(".grid-row8").css("margin-top","500px");
		else if($(document).width() > 923 )
			$(".grid-row8").css("margin-top","655px");					
		else 
			$(".grid-row8").css("margin-top","805px");		
		$(".join-detail").fadeOut();
		$(".tech-detail").slideDown();
	});
	
	$(".join-product").click(function(){
		if($(document).width() > 990 )
			$(".grid-row8").css("margin-top","300px");
		else if($(document).width() > 953 )
			$(".grid-row8").css("margin-top","340px");					
		else 
			$(".grid-row8").css("margin-top","490px");
		$(".grid-row8").css("margin-top","300px");
		$(".join-detail").fadeOut();
		$(".product-detail").slideDown();
		
	});
	
	$(".join-routine").click(function(){
		if($(document).width() > 1214 )
			$(".routine-detail ul").css("margin-left","2%")
		else
			$(".routine-detail ul").css("margin-left","1%")


		if($(document).width() > 1057 )
			$(".grid-row8").css("margin-top","530px"); 
		else if($(document).width() > 990 )
			$(".grid-row8").css("margin-top","885px"); 
		else
			$(".grid-row8").css("margin-top","1045px"); 
		$(".join-detail").fadeOut();
		$(".routine-detail").slideDown();
	});
	
	
	
		$(".join-discuss").click(function(){
		if($(document).width() > 990 )
			$(".grid-row8").css("margin-top","210px"); 
		else if($(document).width() > 953 )
			$(".grid-row8").css("margin-top","235px"); 
		else
			$(".grid-row8").css("margin-top","385px");
			$(".join-detail").fadeOut();
		$(".discuss-detail").slideDown();
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
		check();
	});
	$(".form-textarea textarea").blur(function(){
		if(!$("#textarea").val())
			$(".form-textarea span").show();
		
		
		
		
	});
	
// AJAX 部分 没有测试	
	
$("#submit").click(function(){
		$.ajax({
			type:"POST",
			url:"http://join.zjut.com/api.php?id=32",
			data:{
				"name" : $("#name").val(),
				"stunum" : $("#stunum").val(),
				"qq" : $("#qq").val(),
				"phone" : $("#phone").val(),
				"job" : $("input:radio:checked").val(),
				"desc" : $("#textarea").val()
			},
			datatype : 'json',
			 success: function(data){
				 if(data.status){
					$(".form").hide();
					$("thank").show();
				 }
				 else
				 	alert("出错了，请重新填写");
			 },
			 error: function(){
				 alert("服务器出错,请重新填写");
				 }
		});
	});

		
});
