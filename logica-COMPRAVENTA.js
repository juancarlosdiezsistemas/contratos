$(document).ready(function(){
console.log("Funcionandoo");

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
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F2_3R7").val()},
		success:function(result){
			$("#F2_3R6").html(result);
		}
		})    
 	});
 	$('#F2_15R2').on('change', function() {
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F2_15R2").val()},
		success:function(result){
			$("#F2_15R1").html(result);
		}
		})    
 	});

 	$('#F2_17R2').on('change', function() {
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F2_17R2").val()},
		success:function(result){
			$("#F2_17R1").html(result);
		}
		})    
 	});

 	$('#F2_24R2').on('change', function() {
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F2_24R2").val()},
		success:function(result){
			$("#F2_24R1").html(result);
		}
		})    
 	});

 	$('#F2_27R7').on('change', function() {
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F2_27R7").val()},
		success:function(result){
			$("#F2_27R6").html(result);
		}
		})    
 	});

 	$('#F3_3R7').on('change', function() {
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F3_3R7").val()},
		success:function(result){
			$("#F3_3R6").html(result);
		}
		})    
 	});

 	$('#F3_14R2').on('change', function() {
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F3_14R2").val()},
		success:function(result){
			$("#F3_14R1").html(result);
		}
		})    
 	});

 	$('#F3_16R2').on('change', function() {
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F3_16R2").val()},
		success:function(result){
			$("#F3_16R1").html(result);
		}
		})    
 	});

 	$('#F3_23R2').on('change', function() {
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F3_23R2").val()},
		success:function(result){
			$("#F3_23R1").html(result);
		}
		})    
 	});

 	$('#F3_25R7').on('change', function() {
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F3_25R7").val()},
		success:function(result){
			$("#F3_25R6").html(result);
		}
		})    
 	});

 	$('#F20_1R2').on('change', function(){
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F20_1R2").val()},
		success:function(result){
			$("#F20_1R1").html(result);
		}
		})    
 	});

 	$('#F21_2R2').on('change', function(){
		$.ajax({
		type:'POST',
		url:'PHP/municipios.php',
		data:{"option":$("#F21_2R2").val()},
		success:function(result){
			$("#F21_2R1").html(result);
		}
		})    
 	});
	//
	$("#html").css('display','none');
	$("#html2").css('display','none');
	$("#html3").css('display','none');
	$("#name").css('display','none');
	

	//Preguntas ocultas
	//fase 1
	$("#F1_2").css('display','none');
	$("#F1_3").css('display','none');
	$("#F1_4").css('display','none');
	$("#F1_6").css('display','none');
	$("#F1_7").css('display','none');
	$("#F1_8").css('display','none');

	//fase2

	$("#F2_1").css('display','none');
	$("#F2_2").css('display','none');
	$("#F2_3").css('display','none');
	$("#F2_4").css('display','none');
	$("#F2_5").css('display','none');
	$("#F2_6").css('display','none');
	$("#F2_7").css('display','none');

	$("#F2_8").css('display','none');
	$("#F2_9").css('display','none');
	$("#F2_10").css('display','none');
	$("#F2_11").css('display','none');
	$("#F2_12").css('display','none');
	$("#F2_13").css('display','none');
	$("#F2_14").css('display','none');
	$("#F2_15").css('display','none');
	$("#F2_16").css('display','none');
	$("#F2_17").css('display','none');
	$("#F2_18").css('display','none');
	$("#F2_19").css('display','none');

	$("#F2_21").css('display','none');
	$("#F2_22").css('display','none');
	$("#F2_23").css('display','none');
	$("#F2_24").css('display','none');

	$("#F2_29").css('display','none');
	$("#F2_30").css('display','none');
	$("#F2_31").css('display','none');
	$("#F2_1Otro").css('display','none');

	//fase 3

	$("#F3_1").css('display','none');
	$("#F3_2").css('display','none');
	$("#F3_3").css('display','none');
	$("#F3_4").css('display','none');
	$("#F3_5").css('display','none');
	$("#F3_6").css('display','none');
	$("#F3_7").css('display','none');
	$("#F3_8").css('display','none');
	$("#F3_9").css('display','none');
	$("#F3_10").css('display','none');
	$("#F3_11").css('display','none');
	$("#F3_12").css('display','none');
	$("#F3_13").css('display','none');
	$("#F3_14").css('display','none');
	$("#F3_15").css('display','none');
	$("#F3_16").css('display','none');
	$("#F3_17").css('display','none');
	$("#F3_18").css('display','none');
	$("#F3_19").css('display','none');
	$("#F3_20").css('display','none');
	$("#F3_21").css('display','none');
	$("#F3_22").css('display','none');
	$("#F3_23").css('display','none');
	$("#F3_24").css('display','none');
	$("#F3_25").css('display','none');
	$("#F3_26").css('display','none');
	$("#F3_27").css('display','none');
	$("#F3_28").css('display','none');
	$("#F3_29").css('display','none');


	//fase 7
	$("#F7_1Otro").css('display','none');

	//fase 11
	$("#F11_2").css('display','none');
	$("#F11_3").css('display','none');

	//fase 12
	$("#F11_2").css('display','none');
	$("#F11_3").css('display','none');
	$("#F11_4").css('display','none');

	$("#F12_2Tabla").css('display','none');
	$("#F12_2Otro").css('display','none');

	//fase 21
	$("#F21_4T").css('display','none');




	$('input:radio[name="F1_1"]').change(function(){
        if (this.checked && this.value == 'a') {
        	$("#F1_2").css('display','inline'); //mostrar 2
        	$("#F1_2").find('input').attr('required', true);

        	$("#F1_3").css('display','none');
			$("#F1_4").css('display','none');

			$("#F1_3").find('input').removeAttr('required');
			$("#F1_4").find('input').removeAttr('required');

        }else{
        	$("#F1_2").css('display','none'); //ocultar
        	$("#F1_2").find('input').removeAttr('required');

        	$("#F1_3").css('display','inline'); //mostrar 3
        	$("#F1_4").css('display','inline'); //mostrar 4

        	$("#F1_3").find('input').attr('required', true);
        	$("#F1_4").find('input').attr('required', true);
        	
        }
	});

	$('input:radio[name="F1_5"]').change(function(){
        if (this.checked && this.value == 'a') {
        	$("#F1_6").css('display','inline'); //mostrar 2
        	$("#F1_6").find('input').attr('required', true);

        	$("#F1_7").css('display','none');
			$("#F1_8").css('display','none');

			$("#F1_7").find('input').removeAttr('required');
			$("#F1_8").find('input').removeAttr('required');
			
        }else{
        	$("#F1_6").css('display','none'); //ocultar
			$("#F1_6").find('input').removeAttr('required');

        	$("#F1_7").css('display','inline'); //mostrar 3
        	$("#F1_8").css('display','inline'); //mostrar 4

        	$("#F1_7").find('input').attr('required', true);
			$("#F1_8").find('input').attr('required', true);
        	
        }
	});

	$('input:radio[name="F1_1"]').change(function(){
        if (this.checked && this.value == 'a') {
        	$("#F2_1").css('display','inline'); //mostrar 
        	$("#F2_2").css('display','inline');
			$("#F2_3").css('display','inline');
			$("#F2_4").css('display','inline');
			$("#F2_6").css('display','inline');
			$("#F2_7").css('display','inline');

			$("#F2_1").find('input').attr('required', true);
			$("#F2_2").find('input').attr('required', true);
			$("#F2_3").find('input').attr('required', true);
			$("#F2_4").find('input').attr('required', true);
			$("#F2_6").find('input').attr('required', true);
			$("#F2_7").find('input').attr('required', true);

			$("#F2_3R6").attr('required', true);
			$("#F2_3R7").attr('required', true);

        }else{
        	$("#F2_1").css('display','none'); //ocultar
        	$("#F2_2").css('display','none'); 
        	$("#F2_3").css('display','none');
        	$("#F2_4").css('display','none'); 
        	$("#F2_6").css('display','none');
        	$("#F2_7").css('display','none');

        	$("#F2_1").find('input').removeAttr('required');
        	$("#F2_2").find('input').removeAttr('required');
        	$("#F2_3").find('input').removeAttr('required');
        	$("#F2_4").find('input').removeAttr('required');
        	$("#F2_6").find('input').removeAttr('required');
        	$("#F2_7").find('input').removeAttr('required');

        	$("#F2_3R6").removeAttr('required');
        	$("#F2_3R7").removeAttr('required');

        	
        }
	});

	$('input:radio[name="F2_4"]').change(function(){
        if (this.checked && this.value == 'a') {
        	$("#F2_5").css('display','inline'); //mostrar 
        	$("#F2_5").find('input').attr('required', true);
        }else{
        	$("#F2_5").css('display','none');  //ocultar
        	$("#F2_5").find('input').removeAttr('required');
        	
        }
	});

	$('input:radio[name="F2_1"]').change(function(){
        if (this.checked && this.value == 'b') {
        	$("#F2_1Otro").css('display','inline'); //mostrar 
        	$("#F2_1Otro").attr('required', true);
        }else{
        	$("#F2_1Otro").css('display','none'); //ocultar
        	$("#F2_1Otro").removeAttr('required');
        	
        }
	});

	$('input:radio[name="F2_7"]').change(function(){
        if (this.checked && this.value == 'a') {
        	$("#F2_8").css('display','inline'); //mostrar 
        	$("#F2_8").find('input').attr('required', true);
        }else{
        	$("#F2_8").css('display','none'); //ocultar
        	$("#F2_8").find('input').removeAttr('required');
        	
        }
	});

	$('input:radio[name="F1_1"]').change(function(){
        if (this.checked && this.value == 'b') {
        	$("#F2_9").css('display','inline'); //mostrar 
        	$("#F2_30").css('display','inline');

        	$("#F2_9").find('input').attr('required', true);
        	$("#F2_30").find('input').attr('required', true);

        }else{
        	$("#F2_9").css('display','none'); //ocultar
        	$("#F2_30").css('display','none');

        	$("#F2_9").find('input').removeAttr('required');
        	$("#F2_30").find('input').removeAttr('required');
        	
        }
	});

	$('input:radio[name="F2_9"]').change(function(){
        if (this.checked && this.value == 'a') {
        	$("#F2_10").css('display','inline'); //mostrar 
        	$("#F2_11").css('display','inline');
        	$("#F2_12").css('display','inline');
        	$("#F2_13").css('display','inline');
        	$("#F2_14").css('display','inline');
        	$("#F2_15").css('display','inline');
        	$("#F2_16").css('display','inline');

        	$("#F2_10").find('input').attr('required', true);
        	$("#F2_11").find('input').attr('required', true);
        	$("#F2_12").find('input').attr('required', true);
        	$("#F2_13").find('input').attr('required', true);
        	$("#F2_14").find('input').attr('required', true);
        	$("#F2_15").find('input').attr('required', true);
        	$("#F2_16").find('input').attr('required', true);

        	$("#F2_15R1").attr('required', true);
        	$("#F2_15R2").attr('required', true);

        }else{
        	$("#F2_10").css('display','none'); //ocultar
        	$("#F2_11").css('display','none');
        	$("#F2_12").css('display','none');
        	$("#F2_13").css('display','none');
        	$("#F2_14").css('display','none');
        	$("#F2_15").css('display','none');
        	$("#F2_16").css('display','none');

        	$("#F2_10").find('input').removeAttr('required');
        	$("#F2_11").find('input').removeAttr('required');
        	$("#F2_12").find('input').removeAttr('required');
        	$("#F2_13").find('input').removeAttr('required');
        	$("#F2_14").find('input').removeAttr('required');
        	$("#F2_15").find('input').removeAttr('required');
        	$("#F2_16").find('input').removeAttr('required');

        	$("#F2_15R1").removeAttr('required');
        	$("#F2_15R2").removeAttr('required');
        	
        }
	});

	$('input:radio[name="F2_16"]').change(function(){
        if (this.checked && this.value == 'a') {
        	$("#F2_17").css('display','inline'); //mostrar 
        	$("#F2_18").css('display','inline');
        	$("#F2_19").css('display','inline');

        	$("#F2_17").find('input').attr('required', true);
        	$("#F2_18").find('input').attr('required', true);
        	$("#F2_19").find('input').attr('required', true);

        	$("#F2_17R1").attr('required', true);
        	$("#F2_17R2").attr('required', true);

        }else{
        	$("#F2_17").css('display','none'); //ocultar
        	$("#F2_18").css('display','none');
        	$("#F2_19").css('display','none');

        	$("#F2_17").find('input').removeAttr('required');
        	$("#F2_18").find('input').removeAttr('required');
        	$("#F2_19").find('input').removeAttr('required');

        	$("#F2_17R1").removeAttr('required');
        	$("#F2_17R2").removeAttr('required');
        	
        }
	});

	$('input:radio[name="F2_20"]').change(function(){
        if (this.checked && this.value == 'a') {
        	$("#F2_21").css('display','inline'); //mostrar 
        	$("#F2_22").css('display','inline');
        	$("#F2_23").css('display','inline');
        	$("#F2_24").css('display','inline');

        	$("#F2_21").find('input').attr('required', true);
        	$("#F2_22").find('input').attr('required', true);
        	$("#F2_23").find('input').attr('required', true);
        	$("#F2_24").find('input').attr('required', true);

        	$("#F2_24R1").attr('required', true);
        	$("#F2_24R2").attr('required', true);
        	
        }else{
        	$("#F2_21").css('display','none'); //ocultar
        	$("#F2_22").css('display','none');
        	$("#F2_23").css('display','none');
        	$("#F2_24").css('display','none');

        	$("#F2_21").find('input').removeAttr('required');
        	$("#F2_22").find('input').removeAttr('required');
        	$("#F2_23").find('input').removeAttr('required');
        	$("#F2_24").find('input').removeAttr('required');

        	$("#F2_24R1").removeAttr('required');
        	$("#F2_24R2").removeAttr('required');
        }
	});

	$('input:radio[name="F2_28"]').change(function(){
        if (this.checked && this.value == 'a') {
        	$("#F2_29").css('display','inline'); //mostrar 
        	$("#F2_29").find('input').attr('required', true);
        }else{
        	$("#F2_29").css('display','none'); //ocultar
        	$("#F2_29").find('input').removeAttr('required');
        }
	});

	$('input:radio[name="F2_30"]').change(function(){
        if (this.checked && this.value == 'a') {
        	$("#F2_31").css('display','inline'); //mostrar 
        	$("#F2_31").find('input').attr('required', true);
        }else{
        	$("#F2_31").css('display','none'); //ocultar
        	$("#F2_31").find('input').removeAttr('required');
        }
	});

	$('input:radio[name="F1_5"]').change(function(){
        if (this.checked && this.value == 'a') {
        	$("#F3_1").css('display','inline'); //mostrar 
        	$("#F3_2").css('display','inline');
        	$("#F3_3").css('display','inline');
        	$("#F3_4").css('display','inline');
        	$("#F3_6").css('display','inline');

        	$("#F3_1").find('input').attr('required', true);
        	$("#F3_2").find('input').attr('required', true);
        	$("#F3_3").find('input').attr('required', true);
        	$("#F3_4").find('input').attr('required', true);
        	$("#F3_6").find('input').attr('required', true);

        	$("#F3_3R6").attr('required', true);
        	$("#F3_3R7").attr('required', true);
        }else{
        	$("#F3_1").css('display','none'); //ocultar
        	$("#F3_2").css('display','none');
        	$("#F3_3").css('display','none');
        	$("#F3_4").css('display','none');
        	$("#F3_6").css('display','none');

        	$("#F3_1").find('input').removeAttr('required');
        	$("#F3_2").find('input').removeAttr('required');
        	$("#F3_3").find('input').removeAttr('required');
        	$("#F3_4").find('input').removeAttr('required');
        	$("#F3_6").find('input').removeAttr('required');

        	$("#F3_3R6").removeAttr('required');
        	$("#F3_3R7").removeAttr('required');
        }
	});

	
	$("#F3_1Otro").css('display','none');
	$('input:radio[name="F3_1"]').change(function(){
        if (this.checked && this.value == 'b') {
        	$("#F3_1Otro").css('display','inline'); //mostrar 
        	$("#F3_1Otro").attr('required', true);
        }else{
        	$("#F3_1Otro").css('display','none'); //ocultar
        	$("#F3_1Otro").removeAttr('required');

        }
	});

	$('input:radio[name="F3_4"]').change(function(){
        if (this.checked && this.value == 'a') {
        	$("#F3_5").css('display','inline'); //mostrar 
        	$("#F3_5").find('input').attr('required', true);

        }else{
        	$("#F3_5").css('display','none'); //ocultar
        	$("#F3_5").find('input').removeAttr('required');
        }
	});

	$('input:radio[name="F3_6"]').change(function(){
        if (this.checked && this.value == 'a') {
        	$("#F3_7").css('display','inline'); //mostrar
        	$("#F3_7").find('input').attr('required', true); 
        }else{
        	$("#F3_7").css('display','none'); //ocultar
        	$("#F3_7").find('input').removeAttr('required');
        }
	});

	$('input:radio[name="F1_5"]').change(function(){
        if (this.checked && this.value == 'b') {
        	$("#F3_8").css('display','inline'); //mostrar 
        	$("#F3_19").css('display','inline');
        	$("#F3_24").css('display','inline');
        	$("#F3_25").css('display','inline');
        	$("#F3_26").css('display','inline');
        	$("#F3_28").css('display','inline');

        	$("#F3_8").find('input').attr('required', true);
        	$("#F3_19").find('input').attr('required', true);
        	$("#F3_24").find('input').attr('required', true);
        	$("#F3_25").find('input').attr('required', true);
        	$("#F3_26").find('input').attr('required', true);
        	$("#F3_28").find('input').attr('required', true);

        	$("#F3_25R6").attr('required', true);
        	$("#F3_25R7").attr('required', true);

        }else{
        	$("#F3_8").css('display','none'); //ocultar
        	$("#F3_19").css('display','none');
        	$("#F3_24").css('display','none');
        	$("#F3_25").css('display','none');
        	$("#F3_26").css('display','none');
        	$("#F3_28").css('display','none');

        	$("#F3_8").find('input').removeAttr('required');
        	$("#F3_19").find('input').removeAttr('required');
        	$("#F3_24").find('input').removeAttr('required');
        	$("#F3_25").find('input').removeAttr('required');
        	$("#F3_26").find('input').removeAttr('required');
        	$("#F3_28").find('input').removeAttr('required');

        	$("#F3_25R6").removeAttr('required');
        	$("#F3_25R7").removeAttr('required');
        }
	});

	$('input:radio[name="F3_8"]').change(function(){
        if (this.checked && this.value == 'a') {
        	$("#F3_9").css('display','inline'); //mostrar 
        	$("#F3_10").css('display','inline');
        	$("#F3_11").css('display','inline');
        	$("#F3_12").css('display','inline');
        	$("#F3_13").css('display','inline');
        	$("#F3_14").css('display','inline');
        	$("#F3_15").css('display','inline');

        	$("#F3_9").find('input').attr('required', true);
        	$("#F3_10").find('input').attr('required', true);
        	$("#F3_11").find('input').attr('required', true);
        	$("#F3_12").find('input').attr('required', true);
        	$("#F3_13").find('input').attr('required', true);
        	$("#F3_14").find('input').attr('required', true);
        	$("#F3_15").find('input').attr('required', true);

        	$("#F3_14R1").attr('required', true);
        	$("#F3_14R2").attr('required', true);

        }else{
        	$("#F3_9").css('display','none'); //ocultar
        	$("#F3_10").css('display','none');
        	$("#F3_11").css('display','none');
        	$("#F3_12").css('display','none');
        	$("#F3_13").css('display','none');
        	$("#F3_14").css('display','none');
        	$("#F3_15").css('display','none');

        	$("#F3_9").find('input').removeAttr('required');
        	$("#F3_10").find('input').removeAttr('required');
        	$("#F3_11").find('input').removeAttr('required');
        	$("#F3_12").find('input').removeAttr('required');
        	$("#F3_13").find('input').removeAttr('required');
        	$("#F3_14").find('input').removeAttr('required');
        	$("#F3_15").find('input').removeAttr('required');

        	$("#F3_14R1").removeAttr('required');
        	$("#F3_14R2").removeAttr('required');
        }
	});

	$('input:radio[name="F3_15"]').change(function(){
        if (this.checked && this.value == 'a') {
        	$("#F3_16").css('display','inline'); //mostrar 
        	$("#F3_17").css('display','inline');
        	$("#F3_18").css('display','inline');

        	$("#F3_16").find('input').attr('required', true);
        	$("#F3_17").find('input').attr('required', true);
        	$("#F3_18").find('input').attr('required', true);

        	$("#F3_16R1").attr('required', true);
        	$("#F3_16R2").attr('required', true);
        }else{
        	$("#F3_16").css('display','none'); //ocultar
        	$("#F3_17").css('display','none');
        	$("#F3_18").css('display','none');

        	$("#F3_16").find('input').removeAttr('required');
        	$("#F3_17").find('input').removeAttr('required');
        	$("#F3_18").find('input').removeAttr('required');

        	$("#F3_16R1").removeAttr('required');
        	$("#F3_16R2").removeAttr('required');
        }
	});

	$('input:radio[name="F3_19"]').change(function(){
        if (this.checked && this.value == 'a') {
        	$("#F3_20").css('display','inline'); //mostrar 
        	$("#F3_21").css('display','inline');
        	$("#F3_22").css('display','inline');
        	$("#F3_23").css('display','inline');

        	$("#F3_20").find('input').attr('required', true);
        	$("#F3_21").find('input').attr('required', true);
        	$("#F3_22").find('input').attr('required', true);
        	$("#F3_23").find('input').attr('required', true);

        	$("#F3_23R1").attr('required');
        	$("#F3_23R2").attr('required');



        }else{
        	$("#F3_20").css('display','none'); //ocultar
        	$("#F3_21").css('display','none');
        	$("#F3_22").css('display','none');
        	$("#F3_23").css('display','none');

        	$("#F3_20").find('input').removeAttr('required');
        	$("#F3_21").find('input').removeAttr('required');
        	$("#F3_22").find('input').removeAttr('required');
        	$("#F3_23").find('input').removeAttr('required');

        	$("#F3_23R1").removeAttr('required');
        	$("#F3_23R2").removeAttr('required');
        }
	});

	$('input:radio[name="F3_26"]').change(function(){
        if (this.checked && this.value == 'a') {
        	$("#F3_27").css('display','inline'); //mostrar 
        	$("#F3_27").find('input').attr('required', true);
        }else{
        	$("#F3_27").css('display','none'); //ocultar
        	$("#F3_27").find('input').removeAttr('required');
        }
	});

	$('input:radio[name="F3_28"]').change(function(){
        if (this.checked && this.value == 'a') {
        	$("#F3_29").css('display','inline'); //mostrar 
        	$("#F3_29").find('input').attr('required', true);
        }else{
        	$("#F3_29").css('display','none'); //ocultar
        	$("#F3_29").find('input').removeAttr('required');
        }
	});


	//fase 7

	$('input:radio[name="F7_1"]').change(function(){
        if (this.checked && this.value == 'b') {
        	$("#F7_1Otro").css('display','inline'); //mostrar 
        	$("#F7_1Otro").find('input').attr('required', true);
        }else{
        	$("#F7_1Otro").css('display','none'); //
        	$("#F7_1Otro").find('input').removeAttr('required');
        }
	});

	//fase 11

	$('input:radio[name="F11_1"]').change(function(){
        if (this.checked && this.value == 'a') {
        	$("#F11_2").css('display','inline'); //mostrar 
        	$("#F11_3").css('display','inline');

        	$("#F11_2").find('input').attr('required', true);
        	$("#F11_3").find('input').attr('required', true);
        }else{
        	$("#F11_2").css('display','none'); //ocultar
        	$("#F11_3").css('display','none');

        	$("#F11_2").find('input').removeAttr('required');
        	$("#F11_3").find('input').removeAttr('required');
        }
	});

	//fase 12

	$("#F12_2").css('display','none'); 
	$("#F12_3").css('display','none');
	$("#F12_4").css('display','none');
	$('input:radio[name="F12_1"]').change(function(){
        if (this.checked && this.value == 'a') {
        	$("#F12_2").css('display','inline'); //mostrar 
        	$("#F12_3").css('display','inline');
        	$("#F12_4").css('display','inline');

        	$("#F12_2").find('input').attr('required', true);
        	$("#F12_3").find('input').attr('required', true);
        	$("#F12_4").find('input').attr('required', true);
        }else{
        	$("#F12_2").css('display','none'); //ocultar
        	$("#F12_3").css('display','none');
        	$("#F12_4").css('display','none');

        	$("#F12_2").find('input').removeAttr('required');
        	$("#F12_3").find('input').removeAttr('required');
        	$("#F12_4").find('input').removeAttr('required');
        }
	});

	$('input:radio[name="F12_2"]').change(function(){
        if (this.checked && this.value != 'otro') {
			$("#F12_2Tabla").css('display','inline'); //mostrar
			$("#F12_2Otro").css('display','none'); //ocultar

			$("#F12_2Tabla").attr('required', true);
			$("#F12_2Otro").removeAttr('required');
				
        }else{
			$("#F12_2Otro").css('display','inline'); //mostrar
			$("#F12_2Tabla").css('display','none'); //ocultar

			$("#F12_2Otro").attr('required', true);
			$("#F12_2Tabla").removeAttr('required');
        }
	});

	//fase 21
	$('input:radio[name="F21_4"]').change(function(){
        if (this.checked && this.value == 'a') {
			$("#F21_4T").css('display','inline'); //mostrar
			$("#F21_4T").find('input').attr('required', true);

        }else{
			$("#F21_4T").css('display','none'); //ocultar
			$("#F21_4T").find('input').removeAttr('required');
        }
	});





});
