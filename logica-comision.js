$(document).ready(function(){

	$(".circulo2").css('display','none');
	//fin hover

	$("#cajaSeccion1").hover(function(){
		$("#c1").fadeIn(700);
		$("#cajaSeccion1").css('background','rgba(73, 14, 234, 0.2)');
		$("#cajaSeccion1").css('border-bottom','solid')
		$("#cajaSeccion1").css('border-color','#490eea')
	},
		function(){
			$("#c1").fadeOut(700);
			$("#cajaSeccion1").css('background','#ffffff');
			$("#cajaSeccion1").css('border-bottom','solid')
			$("#cajaSeccion1").css('border-color','#b3b2b4')
	});

	$("#cajaSeccion2").hover(function(){
		$("#c2").fadeIn(700);
		$("#cajaSeccion2").css('background','rgba(73, 14, 234, 0.2)');
		$("#cajaSeccion2").css('border-bottom','solid')
		$("#cajaSeccion2").css('border-color','#490eea')
	},
		function(){
			$("#c2").fadeOut(700);
			$("#cajaSeccion2").css('background','#ffffff');
			$("#cajaSeccion2").css('border-bottom','solid')
			$("#cajaSeccion2").css('border-color','#b3b2b4')
	});
	$("#cajaSeccion3").hover(function(){
		$("#c3").fadeIn(700)
		$("#cajaSeccion3").css('background','rgba(73, 14, 234, 0.2)');
		$("#cajaSeccion3").css('border-bottom','solid')
		$("#cajaSeccion3").css('border-color','#490eea')
	},
		function(){
			$("#c3").fadeOut(700);
			$("#cajaSeccion3").css('background','#ffffff')
			$("#cajaSeccion3").css('border-bottom','solid')
			$("#cajaSeccion3").css('border-color','#b3b2b4')
	});

	$("#cajaSeccion4").hover(function(){
		$("#c4").fadeIn(700)
		$("#cajaSeccion4").css('background','rgba(73, 14, 234, 0.2)');
		$("#cajaSeccion4").css('border-bottom','solid')
		$("#cajaSeccion4").css('border-color','#490eea')
	},
		function(){
			$("#c4").fadeOut(700);
			$("#cajaSeccion4").css('background','#ffffff')
			$("#cajaSeccion4").css('border-bottom','solid')
			$("#cajaSeccion4").css('border-color','#b3b2b4')
	});


	$("#parte1").css('display','none');
	$("#parte2").css('display','none');
	$("#parte3").css('display','none');
	$("#parte4").css('display','none');

	$('#parte1').fadeIn(500);
	$('#modal').fadeIn(500);

	$("#ok").click(function(){
		$('#modal').fadeOut(500);
	});

	$("#sec1").click(function(){
		$('#parte1').fadeIn(500);
		$("#parte2").css('display','none');
		$("#parte3").css('display','none');
		$("#parte4").css('display','none');
	});

	$("#sec2").click(function(){
		$('#parte2').fadeIn(500);
		$("#parte1").css('display','none');
		$("#parte3").css('display','none');
		$("#parte4").css('display','none');
	});

	$("#sec3").click(function(){
		$('#parte3').fadeIn(500);
		$("#parte1").css('display','none');
		$("#parte2").css('display','none');
		$("#parte4").css('display','none');
	});

	$("#sec4").click(function(){
		$('#parte4').fadeIn(500);
		$("#parte1").css('display','none');
		$("#parte2").css('display','none');
		$("#parte3").css('display','none');
	});


	$('#F2_3R7').on('change', function() {
	// alert($("#F2_3R7").val())
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F2_3R7").val()},
		success:function(result){
			// alert(result);
			$("#F2_3R6").html(result);
		}
		})    
 	});





	$('#F2_14R2').on('change', function() {
	// alert($("#F2_3R7").val())
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F2_14R2").val()},
		success:function(result){
			// alert(result);
			$("#F2_14R1").html(result);
		}
		})    
 	});



	$('#F2_16R2').on('change', function() {
	// alert($("#F2_3R7").val())
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F2_16R2").val()},
		success:function(result){
			// alert(result);
			$("#F2_16R1").html(result);
		}
		})    
 	});



	$('#F2_23R2').on('change', function() {
	// alert($("#F2_3R7").val())
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F2_23R2").val()},
		success:function(result){
			// alert(result);
			$("#F2_23R1").html(result);
		}
		})    
 	});



	$('#F2_25R7').on('change', function() {
	// alert($("#F2_3R7").val())
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F2_25R7").val()},
		success:function(result){
			// alert(result);
			$("#F2_25R6").html(result);
		}
		})    
 	});



	$('#F3_3R7').on('change', function() {
	// alert($("#F2_3R7").val())
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F3_3R7").val()},
		success:function(result){
			// alert(result);
			$("#F3_3R6").html(result);
		}
		})    
 	});




	$('#F3_14R2').on('change', function() {
	// alert($("#F2_3R7").val())
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F3_14R2").val()},
		success:function(result){
			// alert(result);
			$("#F3_14R1").html(result);
		}
		})    
 	});




	$('#F3_16R2').on('change', function() {
	// alert($("#F2_3R7").val())
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F3_16R2").val()},
		success:function(result){
			// alert(result);
			$("#F3_16R1").html(result);
		}
		})    
 	});


	$('#F3_23R2').on('change', function() {
	// alert($("#F2_3R7").val())
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F3_23R2").val()},
		success:function(result){
			// alert(result);
			$("#F3_23R3").html(result);
		}
		})    
 	});



	$('#F3_25R7').on('change', function() {
	// alert($("#F2_3R7").val())
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F3_25R7").val()},
		success:function(result){
			// alert(result);
			$("#F3_25R6").html(result);
		}
		})    
 	});



	$('#F19_1R2').on('change', function() {
	// alert($("#F2_3R7").val())
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F19_1R2").val()},
		success:function(result){
			// alert(result);
			$("#F19_1R1").html(result);
		}
		})    
 	});




	$('#F20_2R2').on('change', function() {
	// alert($("#F2_3R7").val())
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F20_2R2").val()},
		success:function(result){
			// alert(result);
			$("#F20_2R1").html(result);
		}
		})    
 	});




	$('#F2_3R7').on('change', function() {
	// alert($("#F2_3R7").val())
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F2_3R7").val()},
		success:function(result){
			// alert(result);
			$("#F2_3R6").html(result);
		}
		})    
 	});






		//Preguntas ocultas
	$("#html").css('display','none');
	$("#html2").css('display','none');
	$("#html3").css('display','none');
	$("#name").css('display','none');
	$("#F1_2").css('display','none');
	$("#F1_3").css('display','none');
	$("#F1_4").css('display','none');


 	// pregunta f1_5
	$("#F1_6").css('display','none');
	$("#F1_7").css('display','none');
	$("#F1_8").css('display','none');


	// pregunta f2_1
	$("#F2_1").css('display','none');
	$("#F2_2").css('display','none');
	$("#F2_3").css('display','none');
	$("#F2_1R1").css('display','none');


	// pruntas f2_4

	$("#F2_5").css('display','none');

	// pregunta f2_7

	$("#F2_7").css('display','none');

	// pregunta f2_8

	$("#F2_8").css('display','none');

	// pregunta f2_8

	$("#F2_9").css('display','none');
	$("#F2_10").css('display','none');
	$("#F2_11").css('display','none');
	$("#F2_12").css('display','none');
	$("#F2_13").css('display','none');
	$("#F2_14").css('display','none');


	// pregunta f2_15

	$("#F2_16").css('display','none');
	$("#F2_17").css('display','none');
	$("#F2_18").css('display','none');


	// pregunta f2_19


	$("#F2_20").css('display','none');
	$("#F2_21").css('display','none');
	$("#F2_22").css('display','none');
	$("#F2_23").css('display','none');
	$("#F2_24").css('display','none');
	$("#F2_25").css('display','none');


	// pregunta f2_26

	$("#F2_27").css('display','none');

	// pregunta f2_26

	$("#F2_29").css('display','none');

	// pregunta f1_5

	$("#F3_1").css('display','none');
	$("#F3_2").css('display','none');
	$("#F3_3").css('display','none');

	// pregunta f3_4
	
	$("#F3_5").css('display','none');

	// pregunta f3_1

	$("#F3_1R3").css('display','none');
	$("#F3_5").css('display','none');
	$("#F3_7").css('display','none');
	$("#F3_8").css('display','none');
	$("#F3_9").css('display','none');
	$("#F3_10").css('display','none');
	$("#F3_11").css('display','none');
	$("#F3_12").css('display','none');
	$("#F3_13").css('display','none');
	$("#F3_14").css('display','none');
	$("#F3_16").css('display','none');
	$("#F3_17").css('display','none');
	$("#F3_18").css('display','none');
	$("#F3_20").css('display','none');
	$("#F3_21").css('display','none');
	$("#F3_22").css('display','none');
	$("#F3_23").css('display','none');
	$("#F3_24").css('display','none');
	$("#F3_25").css('display','none');
	$("#F3_27").css('display','none');
	$("#F3_29").css('display','none');


	// pregunta f5_4

	$("#F5_5").css('display','none');


	// pregunta f6_11

	$("#F6_2").css('display','none');

	// pregunta f9_1

	$("#F9_3R6").css('display','none'
	$("#F9_3").css('display','none');

	// // pregunta f10_1 

	 $("#F10_2").css('display','none');
	 $("#F10_3").css('display','none');
	 $("#F10_4").css('display','none');


	//  // pregunta f10_1 
	// $("#F20_5").css('display','none');
	// $("#F20_6").css('display','none');
	

	 // pregunta f20_14
	$("#F20_5T").css('display','none');
	$("#F20_6T").css('display','none');











	$('input:radio[name="F1_1"]').change(function(){
        if (this.checked && this.value == 'a') {

        	$("#F1_2").css('display','inline'); //mostrar 
        	$("#F2_1").css('display','inline'); //mostrar
        	$("#F2_2").css('display','inline'); //mostrar
        	$("#F2_3").css('display','inline'); //mostrar
        	$("#F1_5").css('display','inline'); //mostrar

        	$("#F1_2").find('input').attr('required', true);
        	$("#F1_5").find('input').attr('required', true);
        	$("#F2_1").find('input').attr('required', true);
        	$("#F2_2").find('input').attr('required', true);
        	$("#F2_3").find('input').attr('required', true);



        	$("#F1_3").find('input').removeAttr('required');
        	$("#F1_4").find('input').removeAttr('required');

        	$("#F1_3").css('display','none');
			$("#F1_4").css('display','none');



        }else{

        	$("#F1_2").find('input').removeAttr('required');
        	$("#F2_1").find('input').removeAttr('required');
        	$("#F2_2").find('input').removeAttr('required');
        	$("#F2_3").find('input').removeAttr('required');

        	$("#F1_2").css('display','none'); //ocultar
        	$("#F2_1").css('display','none'); //ocultar
        	$("#F2_2").css('display','none'); //ocultar
        	$("#F2_3").css('display','none'); //ocultar

        	$("#F1_2").find('input').removeAttr('required');
        	$("#F2_1").find('input').removeAttr('required');
        	$("#F2_2").find('input').removeAttr('required');
        	$("#F2_3").find('input').removeAttr('required');


	
        	$("#F1_3").css('display','inline'); //mostrar 
        	$("#F1_4").css('display','inline'); //mostrar 
        	$("#F1_5").css('display','inline'); //mostrar

        	$("#F1_3").find('input').attr('required', true);
         	$("#F1_4").find('input').attr('required', true);
        	$("#F1_5").find('input').attr('required', true); 	
        }
	});


	$('input:radio[name="F1_5"]').change(function(){
        if (this.checked && this.value == 'a') {

        	$("#F1_6").css('display','inline'); //mostrar 
        	$("#F1_6").find('input').attr('required', true);

        	$("#F1_7").find('input').removeAttr('required');
        	$("#F1_8").find('input').removeAttr('required');

        	$("#F1_7").css('display','none');
			$("#F1_8").css('display','none');

		   

        }else{

        	$("#F1_6").css('display','none'); //ocultar

        	$("#F1_6").find('input').removeAttr('required');

        	$("#F1_7").css('display','inline'); //mostrar 
        	$("#F1_8").css('display','inline'); //mostrar 

        	$("#F1_7").find('input').attr('required', true);
        	$("#F1_8").find('input').attr('required', true);
        	
        }
	});


	$('input:radio[name="F1_1"]').change(function(){
        if (this.checked && this.value == 'a') {
        	
        	$("#F2_1").css('display','inline'); //mostrar 
        	$("#F2_2").css('display','inline'); //mostrar
			$("#F2_3").css('display','inline'); //mostrar

			$("#F2_1").find('input').attr('required', true);
        	$("#F1_8").find('input').attr('required', true);

        }else{

        	$("#F2_1").find('input').removeAttr('required');
        	$("#F2_2").find('input').removeAttr('required');
        	$("#F2_3").find('input').removeAttr('required');

        	$("#F2_1").css('display','none'); //ocultar
        	$("#F2_2").css('display','none'); //ocultar
        	$("#F2_3").css('display','none'); //ocultar  


        }
		});


		$('input:radio[name="F2_1"]').change(function(){
        if (this.checked && this.value == 'a') {

			$("#F2_1R1").find('input').removeAttr('required');
       		$("#F2_1R1").css('display','none'); //ocultar
		    


        }else{

        	$("#F2_1R1").css('display','inline'); //mostrar   
            $("#F2_1R1").find('input').attr('required', true);
    	
        }
	});







	$('input:radio[name="F2_4"]').change(function(){
        if (this.checked && this.value == 'a') {

        	$("#F2_5").css('display','inline'); //mostrar 
            
            $("#F2_5").find('input').attr('required', true);

       		

        }else{

        	$("#F2_5").find('input').removeAttr('required');
        	
        	$("#F2_5").css('display','none'); //ocultar
		    

        	
              	
        }
	});



	$('input:radio[name="F2_6"]').change(function(){
        if (this.checked && this.value == 'a') {

        	$("#F2_7").css('display','inline'); //mostrar 

            $("#F2_7").find('input').attr('required', true);
     		

        }else{


        	$("#F2_7").find('input').removeAttr('required');

        	$("#F2_7").css('display','none'); //oculta
		   
              	
        }
	});


		$('input:radio[name="F1_1"]').change(function(){
        if (this.checked && this.value == 'a') {

        	 
        	$("#F2_8").find('input').removeAttr('required');
        	$("#F2_8").css('display','none'); //oculta       		
		   

        }else{

        	$("#F2_8").css('display','inline'); //mostrar
           
            $("#F2_8").find('input').attr('required', true);
		 
              	
        }
	});




		$('input:radio[name="F2_8"]').change(function(){
        if (this.checked && this.value == 'a') {

        	 
        	$("#F2_9").css('display','inline'); //mostrar 
        	$("#F2_10").css('display','inline'); //mostrar
        	$("#F2_11").css('display','inline'); //mostrar
        	$("#F2_12").css('display','inline'); //mostrar
        	$("#F2_13").css('display','inline'); //mostrar
        	$("#F2_14").css('display','inline'); //mostrar
			$("#F2_15").css('display','inline'); //mostrar	

   	        $("#F2_9").find('input').attr('required', true);
            $("#F2_10").find('input').attr('required', true);
            $("#F2_11").find('input').attr('required', true);
            $("#F2_12").find('input').attr('required', true);
            $("#F2_13").find('input').attr('required', true);
            $("#F2_14").find('input').attr('required', true);
 		 	$("#F2_15").find('input').attr('required', true);
 		

        }else{



		    $("#F2_9").find('input').removeAttr('required');
		    $("#F2_10").find('input').removeAttr('required');
		    $("#F2_11").find('input').removeAttr('required');
		    $("#F2_12").find('input').removeAttr('required');
		    $("#F2_13").find('input').removeAttr('required');
		    $("#F2_14").find('input').removeAttr('required');
  			$("#F2_15").find('input').removeAttr('required');

        	$("#F2_9").css('display','none'); //oculta 
        	$("#F2_10").css('display','none'); //oculta
        	$("#F2_11").css('display','none'); //oculta
        	$("#F2_12").css('display','none'); //oculta
        	$("#F2_13").css('display','none'); //oculta
        	$("#F2_14").css('display','none'); //oculta  
			$("#F2_15").css('display','none'); //oculta 


        	
        }
	});



		$('input:radio[name="F2_15"]').change(function(){
        if (this.checked && this.value == 'a') {

        	 
        	$("#F2_16").css('display','inline'); //mostrar 
        	
   	        $("#F2_16").find('input').attr('required', true);
   	        $("#F2_16R1").attr('required', true);
   	        $("#F2_16R2").attr('required', true);
   	        $("#F2_16R3").attr('required', true);

			$("#F2_17").css('display','inline'); //mostrar
        	$("#F2_18").css('display','inline'); //mostrar

   	        $("#F2_17").find('input').attr('required', true);
   	        $("#F2_18").find('input').attr('required', true);

   		

        }else{


		    $("#F2_16R1").removeAttr('required');
		    $("#F2_16R2").removeAttr('required');
		    $("#F2_16R3").removeAttr('required');

        	$("#F2_16").css('display','none'); //oculta 
        
		    $("#F2_16").find('input').removeAttr('required');

  			$("#F2_17").find('input').removeAttr('required');
		    $("#F2_18").find('input').removeAttr('required');

		    
		    $("#F2_17").css('display','none'); //oculta
        	$("#F2_18").css('display','none'); //oculta

		  
         
              	
        }
	});



		$('input:radio[name="F2_19"]').change(function(){
        if (this.checked && this.value == 'a') {

        	 
        	$("#F2_20").css('display','inline'); //mostrar 
        	$("#F2_21").css('display','inline'); //mostrar
        	$("#F2_22").css('display','inline'); //mostrar
           	$("#F2_23").css('display','inline'); //mostrar 
	        $("#F2_24").css('display','inline'); //mostrar 
	        $("#F2_25").css('display','inline'); //mostrar 
 			$("#F2_26").css('display','inline'); //mostrar 
   	       
   	        $("#F2_20").find('input').attr('required', true);
   	        $("#F2_21").find('input').attr('required', true);
   	        $("#F2_22").find('input').attr('required', true);
   	        $("#F2_23").find('input').attr('required', true);
   	       
   	       $("#F2_23R1").attr('required', true);
   	       $("#F2_23R2").attr('required', true);
   	       $("#F2_23R3").attr('required', true);

   	       $("#F2_24").find('input').attr('required', true);

   	       $("#F2_25").find('input').attr('required', true);
   	       $("#F2_25R6").attr('required', true);
   	       $("#F2_25R7").attr('required', true);
   	       $("#F2_25R8").attr('required', true);



        }else{

        	$("#F2_20").find('input').removeAttr('required');
		    $("#F2_21").find('input').removeAttr('required');
		    $("#F2_22").find('input').removeAttr('required');
		    $("#F2_23").find('input').removeAttr('required');
		    $("#F2_26").find('input').removeAttr('required');

		    $("#F2_23R1").removeAttr('required');
		    $("#F2_23R2").removeAttr('required');
		    $("#F2_23R3").removeAttr('required');

		    $("#F2_24").find('input').removeAttr('required');
		    $("#F2_25").find('input').removeAttr('required');
		    $("#F2_25R6").removeAttr('required');
		    $("#F2_25R7").removeAttr('required');
		    $("#F2_25R8").removeAttr('required');


        	$("#F2_20").css('display','none'); //oculta 
        	$("#F2_21").css('display','none'); //oculta
        	$("#F2_22").css('display','none'); //oculta
        	$("#F2_23").css('display','none'); //oculta
        	$("#F2_24").css('display','none'); //oculta
        	$("#F2_25").css('display','none'); //oculta
			$("#F2_26").css('display','none'); //oculta
		   

         
              	
        }
	});




		$('input:radio[name="F2_26"]').change(function(){
        if (this.checked && this.value == 'a') {

        	 
        	$("#F2_27").css('display','inline'); //mostrar 
   	        $("#F2_27").find('input').attr('required', true);

        	$("#F2_28").css('display','inline'); //mostrar 
   	        $("#F2_28").find('input').attr('required', true);


        }else{

        	$("#F2_27").find('input').removeAttr('required');
           
        	$("#F2_27").css('display','none'); //oculta 
		    
            
            $("#F2_28").find('input').removeAttr('required'); 

            $("#F2_28").css('display','none'); //oculta 
		   
        }
	});




		$('input:radio[name="F2_28"]').change(function(){
        if (this.checked && this.value == 'a') {

        	 
        	$("#F2_29").css('display','inline'); //mostrar 
        	
   	        $("#F2_29").find('input').attr('required', true);

        }else{

        	$("#F2_29").find('input').removeAttr('required');

        	$("#F2_29").css('display','none'); //oculta 
		    
              	
        }
	});



		$('input:radio[name="F1_5"]').change(function(){
        if (this.checked && this.value == 'a') {

        	$("#F3_1").find('input').removeAttr('required');
		    $("#F3_2").find('input').removeAttr('required');
		    $("#F3_3").find('input').removeAttr('required');	
        	$("#F3_4").find('input').removeAttr('required');	


        	$("#F3_1").css('display','none'); //oculta 
        	$("#F3_2").css('display','none'); //oculta 	
        	$("#F3_3").css('display','none'); //oculta 	
			$("#F3_4").css('display','none'); //oculta 	


	        


        }else{

			$("#F3_1").css('display','inline'); //mostrar         
			$("#F3_2").css('display','inline'); //mostrar         
			$("#F3_3").css('display','inline'); //mostrar  
			$("#F3_4").css('display','inline'); //mostrar  

	        
	        $("#F3_1").find('input').attr('required', true);
   	        $("#F3_2").find('input').attr('required', true);
   	        $("#F3_3").find('input').attr('required', true);
          	$("#F3_4").find('input').attr('required', true);	
        }
	});




	// 	$('input:radio[name="F1_5"]').change(function(){
 //        if (this.checked && this.value == 'a') {

        	 	
 //        	$("#F3_1R1").css('display','none'); //oculta 
	//         $("#F3_1R1").find('input').removeAttr('required');

 //        }else{

	// 		$("#F3_1R1").css('display','inline'); //mostrar         
 //   	        // $("#F3_1R1").find('input').attr('required', true);
			    
              	
 //        }
	// });






	// 	$('input:radio[name="F3_1"]').change(function(){
 //        if (this.checked && this.value == 'a') {

	// 	    $("#F3_1R1").css('display','none'); //oculta 			       
		
        	
	

 //        }else{


	// 		$("#F3_1R1").css('display','inline'); //mostrar         
        	 	              	
 //        }
	// });



	// 	$('input:radio[name="F3_1"]').change(function(){
 //        if (this.checked && this.value == 'a') {


 //       		$("#F3_1R3").css('display','none'); //ocultar
	//         $("#F3_1R3").find('input').removeAttr('required');


 //        }else{

 //        	$("#F3_1R3").css('display','inline'); //mostrar  
	//         // $("#F3_1R3").find('input').attr('required', true);

 //        }
	// });



		$('input:radio[name="F3_4"]').change(function(){
        if (this.checked && this.value == 'a') {


        	$("#F3_5").css('display','inline'); //mostrar       	
	        $("#F3_5").find('input').attr('required', true);


        }else{

			$("#F3_5").find('input').removeAttr('required');
       		$("#F3_5").css('display','none'); //ocultar
	       
       		$("#F3_6").find('input').removeAttr('required');
       		$("#F3_6").css('display','none'); //ocultar
        }
	});




		$('input:radio[name="F3_6"]').change(function(){
        if (this.checked && this.value == 'a') {


        	$("#F3_7").css('display','inline'); //mostrar       	

	        $("#F3_7").find('input').attr('required', true);

        }else{

			$("#F3_7").find('input').removeAttr('required');

       		$("#F3_7").css('display','none'); //ocultar
	        
        }
	});




		$('input:radio[name="F1_5"]').change(function(){
        if (this.checked && this.value == 'a') {

      	
 		$("#F3_8").find('input').removeAttr('required');
       	$("#F3_8").css('display','none'); //ocultar
	   


        }else{

       $("#F3_8").css('display','inline'); //mostrar 
	   $("#F3_8").find('input').attr('required', true);

        }
	});









		$('input:radio[name="F3_8"]').change(function(){
        if (this.checked && this.value == 'a') {

   		$("#F3_9").css('display','inline'); //ocultar
		$("#F3_10").css('display','inline'); //mostrar 
		$("#F3_11").css('display','inline'); //mostrar 
		$("#F3_12").css('display','inline'); //mostrar 
		$("#F3_13").css('display','inline'); //mostrar 
		$("#F3_14").css('display','inline'); //mostrar
		$("#F3_15").css('display','inline'); //mostrar  

	    $("#F3_9").find('input').attr('required', true);
	    $("#F3_10").find('input').attr('required', true);
	    $("#F3_11").find('input').attr('required', true);
	    $("#F3_12").find('input').attr('required', true);
	    $("#F3_13").find('input').attr('required', true);
	    $("#F3_14").find('input').attr('required', true); 		
 		$("#F3_15").find('input').attr('required', true); 		


        }else{

    

         $("#F3_9").find('input').removeAttr('required');
	    $("#F3_10").find('input').removeAttr('required');
	    $("#F3_11").find('input').removeAttr('required');
	    $("#F3_12").find('input').removeAttr('required');
	    $("#F3_13").find('input').removeAttr('required');
	    $("#F3_14").find('input').removeAttr('required');
 		$("#F3_15").find('input').removeAttr('required');

	     $("#F3_9").css('display','none'); //ocultar
 		 $("#F3_10").css('display','none'); ////ocultar 		  
		 $("#F3_11").css('display','none'); ////ocultar
		 $("#F3_12").css('display','none'); ////ocultar
		 $("#F3_13").css('display','none'); ////ocultar
		 $("#F3_14").css('display','none'); ////ocultar 
		 $("#F3_15").css('display','none'); ////ocultar 



       


        }
	});




		$('input:radio[name="F3_15"]').change(function(){
        if (this.checked && this.value == 'a') {

      	
 		$("#F3_16").css('display','inline'); //mostrar
		$("#F3_17").css('display','inline'); //mostrar 
		$("#F3_18").css('display','inline'); //mostrar 


	    $("#F3_16").find('input').attr('required', true);
		$("#F3_16R1").attr('required', true);
		$("#F3_16R2").attr('required', true);
		$("#F3_16R3").attr('required', true);

	    $("#F3_17").find('input').attr('required', true);
	    $("#F3_18").find('input').attr('required', true);


        }else{


		 $("#F3_16R1").removeAttr('required');
		 $("#F3_16R2").removeAttr('required');
		 $("#F3_16R3").removeAttr('required');


        $("#F3_16").find('input').removeAttr('required');
        $("#F3_17").find('input').removeAttr('required');
        $("#F3_18").find('input').removeAttr('required');
       
		 $("#F3_16").css('display','none'); //ocultar 
 		 $("#F3_17").css('display','none'); //ocultar  		  
		 $("#F3_18").css('display','none'); //ocultar 

		


        }
	});

		$('input:radio[name="F3_19"]').change(function(){
        if (this.checked && this.value == 'a') {

      	
 		$("#F3_20").css('display','inline'); //mostrar
		$("#F3_21").css('display','inline'); //mostrar 
		$("#F3_22").css('display','inline'); //mostrar 
		$("#F3_23").css('display','inline'); //mostrar
 		
 		$("#F3_24").css('display','inline'); //mostrar
 		$("#F3_25").css('display','inline'); //mostrar
		$("#F3_26").css('display','inline'); //mostrar

	    $("#F3_20").find('input').attr('required', true);
	    $("#F3_21").find('input').attr('required', true);
	    $("#F3_22").find('input').attr('required', true);
	    $("#F3_23").find('input').attr('required', true);
	    
	    $("#F3_23R1").attr('required', true);
	    $("#F3_23R2").attr('required', true);
	    $("#F3_23R3").attr('required', true);


	    $("#F3_24").find('input').attr('required', true);
	    $("#F3_25").find('input').attr('required', true);
		$("#F3_26").find('input').attr('required', true);




        }else{


        $("#F3_20").find('input').removeAttr('required');
        $("#F3_21").find('input').removeAttr('required');
        $("#F3_22").find('input').removeAttr('required');
      	$("#F3_23").find('input').removeAttr('required');
      	
      	$("#F3_23R1").removeAttr('required');
      	$("#F3_23R2").removeAttr('required');
      	$("#F3_23R3").removeAttr('required');

        $("#F3_24").find('input').removeAttr('required');
        $("#F3_25").find('input').removeAttr('required');
	    $("#F3_26").find('input').removeAttr('required');
       
		 $("#F3_20").css('display','none'); //ocultar 
 		 $("#F3_21").css('display','none'); //ocultar  		  
		 $("#F3_22").css('display','none'); //ocultar 
		 $("#F3_23").css('display','none'); //ocultar
		 $("#F3_24").css('display','none'); //ocultar 
		 $("#F3_25").css('display','none'); //ocultar 
 		 $("#F3_26").css('display','none'); //ocultar 


  

        }
	});





	// 	$('input:radio[name="F3_15"]').change(function(){
 //        if (this.checked && this.value == 'a') {

      	
 // 		$("#F3_16").css('display','inline'); //mostrar
	// 	$("#F3_17").css('display','inline'); //mostrar 
	// 	$("#F3_18").css('display','inline'); //mostrar 

	//     // $("#F3_16").find('input').attr('required', true);
	//     // $("#F3_17").find('input').attr('required', true);
	//     // $("#F3_18").find('input').attr('required', true);


 //        }else{

       
	// 	 $("#F3_16").css('display','none'); //ocultar 
 // 		 $("#F3_17").css('display','none'); //ocultar  		  
	// 	 $("#F3_18").css('display','none'); //ocultar 

 //        $("#F3_16").find('input').removeAttr('required');
 //        $("#F3_17").find('input').removeAttr('required');
 //        $("#F3_18").find('input').removeAttr('required');

 //        }
	// });



	// 	$('input:radio[name="F3_19"]').change(function(){
 //        if (this.checked && this.value == 'a') {

      	
 // 		$("#F3_20").css('display','inline'); //mostrar
	// 	$("#F3_21").css('display','inline'); //mostrar 
	// 	$("#F3_22").css('display','inline'); //mostrar 
	// 	$("#F3_23").css('display','inline'); //mostrar
 // 		$("#F3_24").css('display','inline'); //mostrar
 // 		$("#F3_25").css('display','inline'); //mostrar

	//     // $("#F3_20").find('input').attr('required', true);
	//     // $("#F3_21").find('input').attr('required', true);
	//     // $("#F3_22").find('input').attr('required', true);
	//     // $("#F3_23").find('input').attr('required', true);
	//     // $("#F3_24").find('input').attr('required', true);
	//     // $("#F3_25").find('input').attr('required', true);



 //        }else{

       
	// 	 $("#F3_20").css('display','none'); //ocultar 
 // 		 $("#F3_21").css('display','none'); //ocultar  		  
	// 	 $("#F3_22").css('display','none'); //ocultar 
	// 	 $("#F3_23").css('display','none'); //ocultar 
	// 	 $("#F3_24").css('display','none'); //ocultar 
	// 	 $("#F3_25").css('display','none'); //ocultar 

 //        $("#F3_20").find('input').removeAttr('required');
 //        $("#F3_21").find('input').removeAttr('required');
 //        $("#F3_22").find('input').removeAttr('required');
 //        $("#F3_23").find('input').removeAttr('required');
 //        $("#F3_24").find('input').removeAttr('required');
 //        $("#F3_25").find('input').removeAttr('required');


 //        }
	// });





		$('input:radio[name="F3_26"]').change(function(){
        if (this.checked && this.value == 'a') {

      	
 		$("#F3_27").css('display','inline'); //mostrar
	    $("#F3_27").find('input').attr('required', true);

		$("#F3_28").css('display','inline'); //mostrar
	    $("#F3_28").find('input').attr('required', true);

        }else{

        $("#F3_27").find('input').removeAttr('required');
		$("#F3_27").css('display','none'); //ocultar

		$("#F3_28").find('input').removeAttr('required');
		$("#F3_28").css('display','none'); //ocultar

       

        }
	});



		$('input:radio[name="F3_28"]').change(function(){
        if (this.checked && this.value == 'a') {

      	
 		$("#F3_29").css('display','inline'); //mostrar
	    $("#F3_29").find('input').attr('required', true);

        }else{

        $("#F3_29").find('input').removeAttr('required');
		$("#F3_29").css('display','none'); //ocultar 
       

        }
	});



		$('input:radio[name="F5_4"]').change(function(){
        if (this.checked && this.value == 'a') {

      	
 		$("#F5_5").css('display','inline'); //mostrar
	    $("#F5_5").find('input').attr('required', true);

        }else{

        $("#F5_5").find('input').removeAttr('required');
       
		$("#F5_5").css('display','none'); //ocultar 

      
        }
	});



		$('input:radio[name="F6_1"]').change(function(){
        	if (this.checked && this.value == 'a') {

      	
 		$("#F6_2").css('display','inline'); //mostrar
	    $("#F6_2").find('input').attr('required', true);

        }else{

        $("#F6_2").find('input').removeAttr('required');
       
		$("#F6_2").css('display','none'); //ocultar 
       

        }
	});



		$('input:radio[name="F9_1"]').change(function(){       
        	if (this.checked && this.value == 'a') {

      	
 		$("#F9_3").css('display','inline'); //mostrar
	    $("#F9_3").find('input').attr('required', true);

        }else{

        $("#F9_3").find('input').removeAttr('required');    
		$("#F9_3").css('display','none'); //ocultar 
        
        }
	});




	$('input:radio[name="F10_1"]').change(function(){
        if (this.checked && this.value == 'a') {

      	
 		$("#F10_2").css('display','inline'); //mostrar
 		$("#F10_3").css('display','inline'); //mostrar
 		$("#F10_4").css('display','inline'); //mostrar

	    $("#F10_2").find('input').attr('required', true);
	    $("#F10_3").find('input').attr('required', true);
	    $("#F10_4").find('input').attr('required', true);


        }else{
       

       	 $("#F10_2").find('input').removeAttr('required');
       	 $("#F10_3").find('input').removeAttr('required');
       	 $("#F10_4").find('input').removeAttr('required');

		 $("#F10_2").css('display','none'); //ocultar 
		 $("#F10_3").css('display','none'); //ocultar 
		 $("#F10_4").css('display','none'); //ocultar 

       

        }
	});



	// 		$('input:radio[name="F10_2"]').change(function(){
 //        if (this.checked && this.value == 'a') {

      	
 // 		$("#F10_2").css('display','inline'); //mostrar
 // 		$("#F10_3").css('display','inline'); //mostrar
 // 		$("#F10_4").css('display','inline'); //mostrar


 //        }else{
       
	// 	 $("#F10_2").css('display','none'); //ocultar 
	// 	 $("#F10_3").css('display','none'); //ocultar 
	// 	 $("#F10_4").css('display','none'); //ocultar 


 //        }
	// });





		//fase 10 pregunta 2
	$("#F11_2Tabla").css('display','none'); //ocultar
	$("#F10_2Otro").css('display','none'); //ocultar

	$('input:radio[name="F10_2"]').change(
    function(){
        if (this.checked && this.value != 'otro') {

			$("#F11_2Tabla").css('display','inline'); //mostrar
	   		$("#F11_2Tabla").find('input').attr('required', true);

	   
	   		 $("#F10_2Otro").css('display','none');
       		 $("#F10_2Otro").find('input').removeAttr('required');
			

        }else{

		$("#F10_2Otro").css('display','inline'); //mostrar
	   	$("#F10_2Otro").find('input').attr('required', true);

		$("#F11_2Tabla").find('input').removeAttr('required');

		$("#F11_2Tabla").css('display','none'); //ocultar
      
			
        }
	});




	$('input:radio[name="F20_4"]').change(function(){
        if (this.checked && this.value == 'a') {

      	
 		$("#F20_5T").css('display','inline'); //mostrar
 		$("#F20_6T").css('display','inline'); //mostrar

	    $("#F20_5T").find('input').attr('required', true);
	    $("#F20_6T").find('input').attr('required', true);

        }else{

        $("#F20_5T").find('input').removeAttr('required');
        $("#F20_6T").find('input').removeAttr('required');
       
		$("#F20_5T").css('display','none'); //ocultar 
		$("#F20_6T").css('display','none'); //ocultar 

        

        }
	});


	$('input:radio[name="F9_3"]').change(
    function(){
        if (this.checked && this.value != 'otro') {

			$("#F9_3R6").css('display','inline'); //mostrar
			$("#F9_3R6").find('input').attr('required', true);

        }else{

			$("#F9_3R6").find('input').removeAttr('required');
      		$("#F9_3R6").css('display','none'); //ocultar 
			
        }
	});


			





});