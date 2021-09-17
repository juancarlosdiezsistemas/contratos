<?php

include_once("PHP/Estado_Municipio.php"); 

?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Compraventa</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<script type="text/javascript" src="lib/jquery-3.5.1.min.js"></script>
	<script type="text/javascript" src="js/validaciones-COMPRAVENTA.js"></script>
	<script type="text/javascript" src="js/logica-COMPRAVENTA.js"></script>
	<script type="text/javascript" src="js/contrato-COMPRAVENTA.js"></script>
	<script type="text/javascript" src="js/numeroLetras.js"></script>
	<script type="text/javascript" src="js/diasLetras.js"></script>
	<script type="text/javascript" src="js/moment.min.js"></script>

	<link rel="stylesheet" type="text/css" href="css/styles_form.css">

</head>
<body>
<?php
include_once("PHP/modal-inicio.php");
include_once("PHP/headers/header_COMPRAVENTA.php");
?>

	<div class="container contenido">
<?php
include_once("PHP/headers/secciones_compraventa.php");
?>
		<!-- inicio del form -->
		<form id="compraventa" action="pdfs/CCONF_pdf.php"  method="POST" class="g-3 needs-validation" novalidate>
		<section id="parte1">
			<div id="F1_1">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F1.1 ¿Qué tipo de persona es la persona que venderá? *</label>
				</div>
				<br>
				<div class="form-check">	
				  <input class="form-check-input text-capitalize required" name="F1_1" type="radio" value="a" required>
				  <label class="form-check-label" >
				    Persona física
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input text-capitalize" name="F1_1" type="radio" value="b" required>
				  <label class="form-check-label">
				   	Persona moral
				  </label>
				  <div id="" class="form-text">La persona moral es una sociedad mercantil o una sociedad o asociación civil.
				</div>
				</div>
			</div>
			<div id="F1_2">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F1.2 ¿Cuál es el nombre completo de la persona que venderá? *</label>
				</div>
				<br>
				<div class="row">
			    <div class="col">
			      <input type="text" class="form-control" id="F1_2R1" placeholder="Nombre" data-field="F1_2R1">
			      
			    </div>
			    <div class="col">
			      <input type="text" class="form-control" id="F1_2R2" placeholder="Apellidos" data-field="F1_2R2">
			      
			    </div>
			  	</div>
			</div>
			<div id="F1_3">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F1.3 ¿Cuál es la denominación o razón social de la persona que está vendiendo? *</label>
				</div>
				<br>
				<div id="" class="form-text">Es el nombre de su empresa. Lo puede encontrar en su acta constitutiva.
				</div>
				<div class="row">
			    <div class="col">
			      <input type="text" class="form-control" id="F1_3R1" data-field="F1_3R1">
			      
				</div>
				</div>
			</div>	

			<div id="F1_4">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F1.4 ¿Quién firmará el contrato de compraventa en representación de la persona moral? *</label>
				</div>
				<br>
				<div id="" class="form-text">Recomendamos revisar si el apoderado legal cuenta con dichas facultades.
				</div>
				<div class="row">
			    <div class="col">
			      <input type="text" class="form-control" id="F1_4R1" data-field="F1_4R1" placeholder="Nombre">
			      
			    </div>
			    <div class="col">
			      <input type="text" class="form-control" id="F1_4R2" data-field="F1_4R2" placeholder="Apellidos">
			      
			    </div>
			  	</div>
			</div>

			<div id="F1_5">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F1.5 ¿Qué tipo de persona es la persona que comprará? *</label>
				</div>
				<br>
				<div class="form-check">
				
				  <input class="form-check-input text-capitalize required" name="F1_5" type="radio" value="a" required>
				  <label class="form-check-label" >
				    Persona física
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input text-capitalize" name="F1_5" type="radio" value="b" required>
				  <label class="form-check-label">
				   	Persona moral
				  </label>
				  <div id="" class="form-text">La persona moral es una sociedad mercantil o una sociedad o asociación civil.
				</div>
				</div>
			</div>

			<div id="F1_6">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F1.6 ¿Cuál es el nombre completo de la persona que venderá? *</label>
				</div>
				<br>
				<div class="row">
			    <div class="col">
			      <input type="text" class="form-control" id="F1_6R1" placeholder="Nombre" data-field="F1_6R1">
			      
			    </div>
			    <div class="col">
			      <input type="text" class="form-control" id="F1_6R2" placeholder="Apellidos" data-field="F1_6R2">
			      
			    </div>
			  	</div>
			</div>

			<div id="F1_7">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F1.7 ¿Cuál es la denominación o razón social de la persona que comprará? *</label>
				</div>	
				<br>
				<div id="" class="form-text">Es el nombre de su empresa. Lo puede encontrar en su acta constitutiva.
				</div>
				<div class="row">
			    <div class="col">
			      <input type="text" class="form-control" id="F1_7R1" data-field="F1_7R1">
			      
				</div>
				</div>
			</div>	

			<div id="F1_8">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F1.8 ¿Quién firmará el Contrato en representación de la persona moral? *</label>
				</div>
				<br>
				<div id="" class="form-text">Recomendamos revisar si el apoderado legal cuenta con dichas facultades.
				</div>
				<div class="row">
			    <div class="col">
			      <input type="text" class="form-control" id="F1_8R1" data-field="F1_8R1" placeholder="Nombre">
			      
			    </div>
			    <div class="col">
			      <input type="text" class="form-control" id="F1_8R2" data-field="F1_8R2" placeholder="Apellidos">
			      
			    </div>
			  	</div>
			</div>
			<br>
			<h3>Datos del vendedor.</h3>
			<div id="" class="form-text">Datos de la persona que venderá el bien o los bienes.
			</div>
		</section>
		<section id="parte2">
			<!-- fase 2 -->
			<div id="F2_1">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F2.1 ¿Su nacionalidad es mexicana? *</label>
				</div>
				<br>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_1" value="a">
				  <label class="form-check-label" >
				    Sí
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_1" value="b">
				  <label class="form-check-label">
				   	No
				  </label>
				</div>
				<div class="row">
				<div class="col col-md-4" id="F2_1Otro">
			      <input type="text" class="form-control" id="F2_1R1" name="F2_1R1" placeholder="Indique la nacionalidad">
			      
			    </div>
				</div>
			</div>
			<div id="F2_2">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F2.2 ¿Con qué documento oficial se identifica? *</label>
				</div>
				<br>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_2" value="credencial para votar (IFE o INE)">
				  <label class="form-check-label" >
				   Credencial para votar (IFE o INE)
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_2" value="pasaporte">
				  <label class="form-check-label">
				   Pasaporte
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_2" value="cédula Profesional">
				  <label class="form-check-label">
				   Cédula Profesional
				  </label>
				</div>
			</div>
			<div id="F2_3">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F2.3 ¿Cuál es su domicilio a efecto de oír y recibir notificaciones? *</label>
				</div>
				<br>
				<div class="row">
					<div class="col">
					<label for="inputAddress">Calle *</label>
					<input type="text" class="form-control" id="F2_3R1" data-field="F2_3R1">
					 
					</div>
					<div class="col">
				      <label for="inputCity">Número ext *</label>
				      <input type="text" class="form-control" id="F2_3R2" data-field="F2_3R2">
				       
				    </div>
				    <div class="col">
				      <label for="inputCity">Número int</label>
				      <input type="text" class="form-control" id="F2_3R3" data-field="F2_3R3">
				       
				    </div>
				    <div class="col">
				      <label for="inputCity">Colonia *</label>
				      <input type="text" class="form-control" id="F2_3R4" data-field="F2_3R4">
				       
				    </div>
				    <div class="row">
				    <div class="col">
				      <label for="inputZip">Código postal *</label>
				      <input type="text" class="form-control" id="F2_3R5" data-field="F2_3R5">
				       
				    </div>
				    <div class="col">
				      <label for="inputZip">Ciudad *</label>

				      <select id="F2_3R6" class="form-control">
						<option value="">--Seleccione una ciudad--</option>
					  </select>

				      
				    </div>
				    <div class="col">
				      <label for="inputState">Estado *</label>
				      <select id="F2_3R7" class="form-control">
				        <?php Estados()?>

				      </select>
				    </div>
				    <div class="col">
				      <label for="inputConutry">País *</label>
				      <select id="F2_3R8" class="form-control">
				        <option value="México">México</option>
				      </select>
				    </div>
				  </div>
				</div>
			</div>
			<div id="F2_4">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F2.4 ¿Desea que se utilicen medios electrónicos para la comunicación entre los involucrados? *</label>
				</div>
				<br>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_4" value="a">
				  <label class="form-check-label" >
				   Sí
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_4" value="b">
				  <label class="form-check-label">
				   No
				  </label>
				</div>
			</div>
			<div id="F2_5">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F2.5 Ingrese su dirección de correo electrónico. *</label>
				</div>
				<br>
	    		<input type="email" class="form-control" id="F2_5R1" data-field="F2_5R1">
	    		
    		</div>
    		<div id="F2_6">
    			<br>
    			<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
    			<label class="form-label">
				F2.6 Llene los campos siguientes: *</label>
				</div>
				<br>
				<div class="row">
					<div class="col">
						<label class="form-label">Cantidad *</label>
						<div id="" class="form-text">Unidades que se venden
						</div>
	    				<input type="text" class="form-control" id="F2_6R1" data-field="F2_6R1">
	    					
					</div>
					<div class="col">
						<label class="form-label">Descripción del bien *</label>
						<div id="" class="form-text">Características detalladas de lo que se venden.
						</div>
	    				<input type="text" class="form-control" id="F2_6R2" data-field="F2_6R2">
	    					
					</div>
				</div>
    		</div>
    		<div id="F2_7">
    			<br>
    			<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F2.7 ¿Se encuentra inscrito en el Registro Federal de Contribuyentes? *</label>
				</div>
				<br>
				<div class="form-check ">
				  <input class="form-check-input" type="radio" name="F2_7" value="a">
				  <label class="form-check-label" >
				   Sí
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_7" value="b">
				  <label class="form-check-label">
				   No
				  </label>
				</div>
			</div>
			<div id="F2_8">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F2.8 Ingrese su clave de Registro Federal de Contribuyentes *</label>
				</div>
				<br>
				<div class="row">
			    <div class="col">
			      <input type="text" class="form-control" id="F2_8R1" data-field="F2_8R1">
			      
			    </div>
				</div>		
			</div>
			<div id="F2_9">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F2.9 ¿Conoce los datos de constitución de su empresa? *</label>
				</div>
				<br>
				<div id="" class="form-text">Esta información puede encontrarla en el acta constitutiva de su empresa.
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_9" value="a">
				  <label class="form-check-label" >
				   Sí
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_9" value="b">
				  <label class="form-check-label">
				   No
				  </label>
				</div>
			</div>
			<div id="F2_10">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F2.10 Número del instrumento público en el cual se constituye como persona moral: *</label>
				</div>
				<br>
				<div class="row">
			    <div class="col">
			      <input type="text" class="form-control" id="F2_10R1" data-field="F2_10R1">
			      
			    </div>
				</div>		
			</div>
			<div id="F2_11">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F2.11 Fecha del instrumento público en la cual se constituye como persona moral: *</label>
				</div>
				<br>
				<div class="row">
			    <div class="col col-md-3">
			      <input type="date" class="form-control" id="F2_11R1" data-field="F2_11R1">
			      
			    </div>
				</div>		
			</div>
			<div id="F2_12">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F2.12 Nombre completo del fedatario que realizó la el instrumento público en la cual se constituye como persona moral *</label>
				</div>
				<br>
				<div class="row">
			    <div class="col">
			      <input type="text" class="form-control" id="F2_12R1" data-field="F2_12R1" placeholder="Nombre">
			      
			    </div>
			    <div class="col">
			      <input type="text" class="form-control" id="F2_12R2" data-field="F2_12R2" placeholder="Apellidos">
			      
			    </div>
			  	</div>
			</div>
			<div id="F2_13">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F2.13 Especifique el tipo de fedatario público? *</label>
				</div>
				<br>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_13" value="Notario Público">
				  <label class="form-check-label" >
				   Notario Público
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_13" value="Corredor Público">
				  <label class="form-check-label">
				   Corredor Público
				  </label>
				</div>
			</div>
			<div id="F2_14">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F2.14 Número de Notaría o Correduría pública *</label>
				</div>
				<br>
				<div class="row">
			    <div class="col">
			      <input type="text" class="form-control" id="F2_14R1" data-field="F2_14R1">
			      
			    </div>
				</div>		
			</div>
			<div id="F2_15">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F2.15 Ciudad y entidad federativa *</label>
				</div>
				<br>
				<div class="row">
					<div class="col">
				      <label for="inputCity">Ciudad</label>
				      <select id="F2_15R1" class="form-control">
							<option value="">--Seleccione una ciudad--</option>
					   </select>
				    </div>
				    <div class="col">
				    <label for="inputState">Estado</label>
				     <select id="F2_15R2" class="form-control">
				         <?php Estados()?>
				     </select>
				    </div>
				    <div class="col">
				     <label for="inputState">País</label>
				     <select id="F2_15R3" class="form-control">
				        <option value="México">México</option>
				      </select>
				    </div>
				  </div>
			</div>
			
			<div id="F2_16">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F2.16 ¿Fue inscrita ante el Registro Público del Comercio? *</label>
				</div>
				<br>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_16" value="a">
				  <label class="form-check-label" >
				   Sí
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_16" value="b">
				  <label class="form-check-label">
				   No
				  </label>
				</div>
			</div>
			
			<div id="F2_17">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F2.17 ¿En qué ciudad?</label>
				</div>
				<br>
				<div class="row">
					<div class="col">
				      <label for="inputCity">Ciudad *</label>
						<select id="F2_17R1" class="form-control">
							<option value="">--Seleccione una ciudad--</option>
						</select>
				    </div>
				    <div class="col">
				    <label for="inputState">Estado *</label>
				     <select id="F2_17R2" class="form-control">
				         <?php Estados()?>
				     </select>
				    </div>
				    <div class="col">
				     <label for="inputState">País *</label>
				     <select id="F2_17R3" class="form-control">
				        <option value="México">México</option>
				      </select>
				    </div>
				  </div>
			</div>
		
			<div id="F2_18">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F2.18 Número del registro *</label>
				</div>
				<br>
				<div class="row">
			    <div class="col">
			      <input type="text" class="form-control" id="F2_18R1" data-field="F2_18R1">
			      
			    </div>
				</div>		
			</div>
			
			<div id="F2_19">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F2.19 Fecha del registro *</label>
				</div>
				<br>
				<div class="row">
			    <div class="col col-md-3">
			      <input type="date" class="form-control" id="F2_19R1" data-field="F2_19R1">
			      
			    </div>
				</div>		
			</div>
			
			<div id="F2_20">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F2.20 ¿Conoce los datos con los que el apoderado legal de su empresa acredita su carácter? *</label>
				</div>
				<br>
				<div id="" class="form-text">Es la persona que tiene autorización legal para actuar en nombre de otra persona o de la empresa.
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_20" value="a" required>
				  <label class="form-check-label" >
				   Sí
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_20" value="b" required>
				  <label class="form-check-label">
				   No
				  </label>
				</div>
			</div>
			
			<div id="F2_21">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F2.21 ¿Con qué instrumento acredita su personalidad el apoderado legal? *</label>
				</div>
				<br>
				<div class="row">
			    <div class="col">
			      <input type="text" class="form-control" id="F2_21R1" data-field="F2_21R1">
			      
			    </div>
				</div>		
			</div>
			
			<div id="F2_22">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F2.22 Nombre del notario que lo expide *</label>
				</div>
				<br>
				<div class="row">
			    <div class="col">
			      <input type="text" class="form-control" id="F2_22R1" placeholder="Nombre" data-field="F2_22R1">
			      
			    </div>
			    <div class="col">
			      <input type="text" class="form-control" id="F2_22R2" placeholder="Apellidos" data-field="F2_22R2">
			      
			    </div>
			  	</div>
			</div>
			
			<div id="F2_23">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F2.23 Número de la notaría *</label>
				</div>
				<br>
				<div class="row">
			    <div class="col">
			      <input type="text" class="form-control" id="F2_23R1" data-field="F2_23R1">
			      
			    </div>
				</div>		
			</div>
			<div id="F2_24">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F2.24 Ciudad y entidad Federativa *</label>
				</div>
				<br>
				<div class="row">
					<div class="col">
				      <label for="inputCity">Ciudad *</label> 
						<select id="F2_24R1" class="form-control">
							<option value="">--Seleccione una ciudad--</option>
						</select>
				    </div>
				    <div class="col">
				    <label for="inputState">Estado *</label>
				     <select id="F2_24R2" class="form-control">
				         <?php Estados()?>
				     </select>
				    </div>
				    <div class="col">
				     <label for="inputState">País *</label>
				     <select id="F2_24R3" class="form-control">
				        <option value="Querétaro">México</option>
				      </select>
				    </div>
				</div>
			</div>
			
			<div id="F2_25">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F2.25 ¿Con qué documento oficial se identifica? *</label>
				</div>
				<br>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_25" value="credencial para votar (IFE o INE)" required>
				  <label class="form-check-label" >
				   Credencial para votar (IFE o INE)
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_25" value="pasaporte" required>
				  <label class="form-check-label">
				   Pasaporte
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_25" value="cédula Profesional" required>
				  <label class="form-check-label">
				   Cédula Profesional
				  </label>
				</div>
			</div>
			<div id="F2_26">
    			<br>
    			<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
    			<label class="form-label">
				F2.26 Llene los campos siguientes: *</label>
				</div>
				<br>
				<div class="row">
					<div class="col">
						<label class="form-label">Cantidad *</label>
						<div id="" class="form-text">Unidades que se venden.
						</div>
	    				<input type="text" class="form-control" id="F2_26R1" data-field="F2_26R1" required>
	    					
					</div>
					<div class="col">
						<label class="form-label">Descripción del bien *</label>
						<div id="" class="form-text">Características detalladas de lo que se venden.
						</div>
	    				<input type="text" class="form-control" id="F2_26R2" data-field="F2_26R2" required>
	    					
					</div>
				</div>
    		</div>
			
			<div id="F2_27">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F2.27 ¿Cuál es el domicilio de su empresa, a efecto de oír y recibir notificaciones? *</label>
				</div>
				<br>
				<div class="row">
					<div class="col">
					<label for="inputAddress">Calle *</label>
					<input type="text" class="form-control" id="F2_27R1" data-field="F2_27R1" required>
					
					</div>
					<div class="col">
				      <label for="inputCity">Número ext *</label>
				      <input type="text" class="form-control" id="F2_27R2" data-field="F2_27R2" required>
				      
				    </div>
				    <div class="col">
				      <label for="inputCity">Número int</label>
				      <input type="text" class="form-control" id="F2_27R3" data-field="F2_27R3">
				    </div>
				    <div class="col">
				      <label for="inputCity">Colonia *</label>
				      <input type="text" class="form-control" id="F2_27R4" data-field="F2_27R4" required>
				      
				    </div>
				    <div class="row">
				    <div class="col">
				      <label for="inputZip">Código postal *</label>
				      <input type="text" class="form-control" id="F2_27R5" data-field="F2_27R5" required>
				      
				    </div>
				    <div class="col">
				      <label for="inputZip">Ciudad *</label>
				      <select id="F2_27R6" class="form-control" required>
						<option value="">--Seleccione una ciudad--</option>
					  </select>
				    </div>
				    <div class="col">
				      <label for="inputState">Estado *</label>
				      <select id="F2_27R7" class="form-control" required>
				         <?php Estados()?>
				      </select>
				    </div>
				    <div class="col">
				      <label for="inputConutry">País *</label>
				      <select id="F2_27R8" class="form-control" required>
				        <option>México</option>
				      </select>
				    </div>
				  </div>
				</div>
			</div>
			
			<div id="F2_28">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F2.28 ¿Desea que se utilicen medios electrónicos para la comunicación entre los involucrados? *</label>
				</div>
				<br>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_28" value="a" required>
				  <label class="form-check-label" >
				   Sí
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_28" value="b" required>
				  <label class="form-check-label">
				   No
				  </label>
				</div>
			</div>
			
			<div id="F2_29">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F2.29 Ingrese su dirección de correo electrónico. *</label>
				</div>
				<br>
	    		<input type="email" class="form-control" id="F2_29R1" data-field="F2_29R1">
	    		
    		</div>
    		
    		<div id="F2_30">
    			<br>
    			<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F2.30 ¿Se encuentra inscrito en el Registro Federal de Contribuyentes? *</label>
				</div>
				<br>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_30" value="a">
				  <label class="form-check-label" >
				   Sí
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_30" value="b">
				  <label class="form-check-label">
				   No
				  </label>
				</div>
			</div>
			
			<div id="F2_31">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F2.31 Ingrese su clave del Registro Federal de Contribuyentes *</label>
				</div>
				<br>
	    		<input type="text" class="form-control" id="F2_31R1" data-field="F2_31R1">
	    		
    		</div>
    		<br>
			<h3>Datos del Comprador.</h3>
			<div id="" class="form-text">Datos de la persona que comprará el bien o los bienes.
			</div>
    		<!-- seccion 3 -->
    		<div id="F3_1">
    			<br>
    			<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F3.1 ¿Su nacionalidad es mexicana? *</label>
				</div>
				<br>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_1" value="a">
				  <label class="form-check-label" >
				    Sí
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_1" value="b">
				  <label class="form-check-label">
				   	No
				  </label>
				</div>
				<div class="row">
				<div class="col col-md-4" id="F3_1Otro">
			      <input type="text" class="form-control" id="F3_1R1" placeholder="Indique la nacionalidad" data-field="F3_1R1">
			      
			    </div>
				</div>
			</div>

			<div id="F3_2">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F3.2 ¿Con qué documento oficial se identifica? *</label>
				</div>
				<br>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_2" value="credencial para votar (IFE o INE)">
				  <label class="form-check-label" >
				   Credencial para votar (IFE o INE)
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_2" value="pasaporte">
				  <label class="form-check-label">
				   Pasaporte
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_2" value="cédula Profesional">
				  <label class="form-check-label">
				   Cédula Profesional
				  </label>
				</div>
			</div>
			
			<div id="F3_3">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F3.3 ¿Cuál es su domicilio a efecto de oír y recibir notificaciones? *</label>
				</div>
				<br>
				<div class="row">
					<div class="col">
					<label for="inputAddress">Calle *</label>
					<input type="text" class="form-control" id="F3_3R1" data-field="F3_3R1">
					
					</div>
					<div class="col">
				      <label for="inputCity">Número ext *</label>
				      <input type="text" class="form-control" id="F3_3R2" data-field="F3_3R2">
				      
				    </div>
				    <div class="col">
				      <label for="inputCity">Número int</label>
				      <input type="text" class="form-control" id="F3_3R3">  
				    </div>
				    <div class="col">
				      <label for="inputCity">Colonia *</label>
				      <input type="text" class="form-control" id="F3_3R4">
				    </div>
				    <div class="row">
				    <div class="col">
				      <label for="inputZip">Código postal *</label>
				      <input type="text" class="form-control" id="F3_3R5" data-field="F3_3R5">
				      
				    </div>
				    <div class="col">
				      <label for="inputZip">Ciudad *</label>
				      <select id="F3_3R6" class="form-control">
							<option value="">--Seleccione una ciudad--</option>
					   </select>
				    </div>
				    <div class="col">
				      <label for="inputState">Estado *</label>
				      <select id="F3_3R7" class="form-control">
				        <?php Estados()?>
				      </select>
				    </div>
				    <div class="col">
				      <label for="inputConutry">País *</label>
				      <select id="F3_3R8" class="form-control">
				        <option value="México">México</option>
				      </select>
				    </div>
				  </div>
				</div>
			</div>
			
			<div id="F3_4">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F3.4 ¿Desea que se utilicen medios electrónicos para la comunicación entre los involucrados? *</label>
				</div>
				<br>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_4" value="a">
				  <label class="form-check-label" >
				   Sí
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_4" value="b">
				  <label class="form-check-label">
				   No
				  </label>
				</div>
			</div>
			
			<div id="F3_5">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F3.5 Ingrese su dirección de correo electrónico. *</label>
				</div>
				<br>
	    		<input type="email" class="form-control" id="F3_5R1" data-field="F3_5R1">
	    		
			</div>
		
			<div id="F3_6">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F3.6 ¿Se encuentra inscrito en el Registro Federal de Contribuyentes? *</label>
				</div>
				<br>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_6" value="a">
				  <label class="form-check-label" >
				   Sí
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_6" value="b">
				  <label class="form-check-label">
				   No
				  </label>
				</div>
			</div>
			
			<div id="F3_7">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F3.7 Ingrese su clave de Registro Federal de Contribuyentes *</label>
				</div>
				<br>
				<div class="row">
			    <div class="col">
			      <input type="text" class="form-control" id="F3_7R1" data-field="F3_7R1">
			      
			    </div>
				</div>		
			</div>
			
			<div id="F3_8">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F3.8 ¿Conoce los datos de constitución de su empresa? *</label>
				</div>
				<br>
				<div id="helpF3_8" class="form-text">Esta información puede encontrarla en el acta constitutiva de su empresa.
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_8" value="a">
				  <label class="form-check-label" >
				   Sí
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_8" value="c">
				  <label class="form-check-label">
				   No
				  </label>
				</div>
			</div>
			
			<div id="F3_9">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F3.9 Número del instrumento público en el cual se constituye como persona moral *</label>
				</div>
				<br>
				<div class="row">
			    <div class="col">
			      <input type="text" class="form-control" id="F3_9R1" data-field="F3_9R1">
			      
			    </div>
				</div>		
			</div>
			
			<div id="F3_10">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F3.10 Fecha del instrumento público en la cual se constituye como persona moral *</label>
				</div>
				<br>
				<div class="row">
			    <div class="col col-md-3">
			      <input type="date" class="form-control" id="F3_10R1" data-field="F3_10R1">
			      
			    </div>
				</div>		
			</div>
			
			<div id="F3_11">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F3.11 Nombre completo del fedatario que realizó el instrumento público en la cual se constituye como persona moral *</label>
				</div>
				<br>
				<div class="row">
			    <div class="col">
			      <input type="text" class="form-control" id="F3_11R1" placeholder="Nombre">
			      
			    </div>
			    <div class="col">
			      <input type="text" class="form-control" id="F3_11R2" placeholder="Apellidos">
			      
			    </div>
			  	</div>
			</div>
		
			<div id="F3_12">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F3.12 Especifique el tipo de fedatario público? *</label>
				</div>
				<br>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_12" value="Notario Público">
				  <label class="form-check-label" >
				   Notario Público
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_12" value="Corredor Público">
				  <label class="form-check-label">
				   Corredor Público
				  </label>
				</div>
			</div>
			
			<div id="F3_13">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F3.13 Número de Notaría o Correduría pública *</label>
				</div>
				<br>
				<div class="row">
			    <div class="col">
			      <input type="text" class="form-control" id="F3_13R1" data-field="F3_13R1">
			       
			    </div>
				</div>		
			</div>
			
			<div id="F3_14">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F3.14 Ciudad y entidad federativa *</label>
				</div>
				<br>
				<div class="row">
					<div class="col">
				      <label for="inputCity">Ciudad *</label>
				      
				      <select id="F3_14R1" class="form-control">
							<option value="">--Seleccione una ciudad--</option>
					  </select>
				    </div>
				    <div class="col">
				    <label for="inputState">Estado *</label>
				     <select id="F3_14R2" class="form-control">
				         <?php Estados()?>
				     </select>
				    </div>
				    <div class="col">
				     <label for="inputState">País *</label>
				     <select id="F3_14R3" class="form-control">
				        <option value="México">México</option>
				      </select>
				    </div>
				  </div>
			</div>
			
			<div id="F3_15">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F3.15 ¿Fue inscrita ante el Registro Público del Comercio? *</label>
				</div>
				<br>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_15" value="a">
				  <label class="form-check-label" >
				   Sí
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_15" value="b">
				  <label class="form-check-label">
				   No
				  </label>
				</div>
			</div>
			
			<div id="F3_16">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F3.16 ¿En qué ciudad? *</label>
				</div>
				<br>
				<div class="row">
					<div class="col">
				      <label for="inputCity">Ciudad *</label>
				      
				      <select id="F3_16R1" class="form-control">
						<option value="">--Seleccione una ciudad--</option>
					  </select>

				    </div>
				    <div class="col">
				    <label for="inputState">Estado *</label>
				     <select id="F3_16R2" class="form-control">
				        <?php Estados()?>
				     </select>
				    </div>
				    <div class="col">
				     <label for="inputState">País *</label>
				     <select id="F3_16R3" class="form-control">
				        <option value="México">México</option>
				      </select>
				    </div>
				  </div>
			</div>
			
			<div id="F3_17">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F2.17 Número del registro *</label>
				</div>
				<br>
				<div class="row">
			    <div class="col">
			      <input type="text" class="form-control" id="F3_17R1">
			      
			    </div>
				</div>		
			</div>
			
			<div id="F3_18">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F3.18 Fecha del registro *</label>
				</div>
				<br>
				<div class="row">
			   	<div class="col col-md-3">
			      <input type="date" class="form-control" id="F3_18R1" data-field="F3_18R1">
			      
			    </div>
				</div>		
			</div>
			
			<div id="F3_19">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F3.19 ¿Conoce los datos con los que el apoderado legal de su empresa acredita su carácter? *</label>
				</div>
				<br>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_19" value="a">
				  <label class="form-check-label" >
				   Sí
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_19" value="b">
				  <label class="form-check-label">
				   No
				  </label>
				</div>
			</div>
			
			<div id="F3_20">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F3.20 ¿Con que número de instrumento acredita su personalidad el apoderado legal? *</label>
				</div>
				<br>
				<div class="row">
			    <div class="col">
			      <input type="text" class="form-control" id="F3_20R1" data-field="F3_20R1">
			      
			    </div>
				</div>		
			</div>
			
			<div id="F3_21">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F3.21 Nombre del notario que lo expide *</label>
				</div>
				<br>
				<div class="row">
			    <div class="col">
			      <input type="text" class="form-control" id="F3_21R1" placeholder="Nombre" data-field="F3_21R1">
			      
			    </div>
			    <div class="col">
			      <input type="text" class="form-control" id="F3_21R2" placeholder="Apellidos" data-field="F3_21R2">
			      
			    </div>
			  	</div>
			</div>
			
			<div id="F3_22">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F3.22 Número de la notaría *</label>
				</div>
				<br>
				<div class="row">
			    <div class="col">
			      <input type="text" class="form-control" id="F3_22R1" data-field="F3_22R1">
			      
			    </div>
				</div>		
			</div>
			
			<div id="F3_23">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F3.23 Ciudad y entidad federativa *</label>
				</div>
				<br>
				<div class="row">
					<div class="col">
				      <label for="inputCity">Ciudad *</label>
				      
				      <select id="F3_23R1" class="form-control">
							<option value="">--Seleccione una ciudad--</option>
					   </select>
				    </div>
				    <div class="col">
				    <label for="inputState">Estado *</label>
				     <select id="F3_23R2" class="form-control">
				         <?php Estados()?>
				     </select>
				    </div>
				    <div class="col">
				     <label for="inputState">País *</label>
				     <select id="F3_23R3" class="form-control">
				        <option value="México">México</option>
				      </select>
				    </div>
				  </div>
			</div>
			
			<div id="F3_24">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F3.24 ¿Con qué documento oficial se identifica? *</label>
				</div>
				<br>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_24" value="credencial para votar (IFE o INE)">
				  <label class="form-check-label" >
				   Credencial para votar (IFE o INE)
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_24" value="pasaporte">
				  <label class="form-check-label">
				   Pasaporte
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_24" value="cédula Profesional">
				  <label class="form-check-label">
				   Cédula Profesional
				  </label>
				</div>
			</div>
			
			<div id="F3_25">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F3.25 ¿Cuál es su domicilio a efecto de oír y recibir notificaciones? *</label>
				</div>
				<br>
				<div class="row">
					<div class="col">
					<label for="inputAddress">Calle *</label>
					<input type="text" class="form-control" id="F3_25R1" data-field="F3_25R1">
					 
					</div>
					<div class="col">
				      <label for="inputCity">Número ext *</label>
				      <input type="text" class="form-control" id="F3_25R2" data-field="F3_25R2">
				       
				    </div>
				    <div class="col">
				      <label for="inputCity">Número int</label>
				      <input type="text" class="form-control" id="F3_25R3" data-field="F3_25R3">
				    </div>
				    <div class="col">
				      <label for="inputCity">Colonia *</label>
				      <input type="text" class="form-control" id="F3_25R4">
				    </div>
				    <div class="row">
				    <div class="col">
				      <label for="inputZip">Código postal *</label>
				      <input type="text" class="form-control" id="F3_25R5" data-field="F3_25R5">
				       
				    </div>
				    <div class="col">
				      <label for="">Ciudad *</label>

				      <select id="F3_25R6" class="form-control">
							<option value="">--Seleccione una ciudad--</option>
					   </select>

				    </div>
				    <div class="col">
				      <label for="inputState">Estado *</label>
				      <select id="F3_25R7" class="form-control">
				         <?php Estados()?>
				      </select>
				    </div>
				    <div class="col">
				      <label for="inputConutry">País *</label>
				      <select id="F3_25R8" class="form-control">
				        <option value="México">México</option>
				      </select>
				    </div>
				  </div>
				</div>
			</div>
			
			<div id="F3_26">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F3.26 ¿Desea que se utilicen medios electrónicos para la comunicación entre los involucrados? *</label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_26" value="a">
				  <label class="form-check-label" >
				   Sí
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_26" value="b">
				  <label class="form-check-label">
				   No
				  </label>
				</div>
			</div>
			
			<div id="F3_27">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F3.27 Ingrese su dirección de correo electrónico. *</label>
				</div>
				<br>
	    		<input type="email" class="form-control" id="F3_27R1" data-field="F3_27R1">
	    		
	    		
    		</div>
    		
			<div id="F3_28">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F3.28 ¿Se encuentra inscrito en el Registro Federal de Contribuyentes? *</label>
				</div>
				<br>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_28" value="a">
				  <label class="form-check-label" >
				   Sí
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_28" value="b">
				  <label class="form-check-label">
				   No
				  </label>
				</div>
			</div>

			<div id="F3_29">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F2.29 Ingrese su clave del Registro Federal de Contribuyentes. *</label>
				</div>
				<br>
	    		<input type="text" class="form-control" id="F3_29R1" data-field="F3_29R1">
	    		
    		</div>
    	</section>
    	<section id="parte3">
    		<!-- fase 5	 -->
    		<div id="F5_1">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F5.1 ¿Cuál es el precio acordado para la Compraventa? *</label>
				</div>
				<br>
				<div class="row">
					<div class="col col-md-4">
					<input type="text" class="form-control" id="F5_1R1" data-field="F5_1R1" required>
					
				</div>
				<div class="col col-md-4">
					<select id="F5_1R2" class="form-control" required>
					<option value="M.N.">Peso mexicano (mn)</option>
					<option value="USD">Dólar (usd)</option>
					</select>
				</div>
				</div>
			</div>
			<div id="F5_2">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
    			<label class="form-label">
				F5.2 ¿El precio incluye el Impuesto al Valor Agregado (IVA)? *</label>
				</div>
				<br>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F5_2" value="a" required>
				  <label class="form-check-label" >
				   Sí
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F5_2" value="b" required>
				  <label class="form-check-label">
				   No
				  </label>
    			</div>	
    		</div>

    		<!-- fase 6 -->
    		<div id="F6_1">
    			<br>
    			<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
    			<label class="form-label">
				F6.1 Ingrese los datos que se solicitan a continuación *</label>
				</div>
				<br>
				<div class="row">
					<div class="col">
						<label class="form-label">Exhibición *</label>
	    				<input type="text" class="form-control" id="F6_1R1" data-field="F6_1R1" required>
	    						
					</div>
					<div class="col">
						<label class="form-label">Cantidad *</label>
	    				<input type="text" class="form-control" id="F6_1R2" data-field="F6_1R2" required>
	    					
					</div>
					<div class="col">
						<label class="form-label">Divisa *</label>
						<select id="F6_1R3" class="form-control" required>
							<option value="M.N.">Peso mexicano (mn)</option>
							<option value="USD">Dólar (usd)</option>
						</select>
					</div>
					<div class="col">
						<label class="form-label">Fecha *</label>
	    				<input type="date" class="form-control" id="F6_1R4" data-field="F6_1R3" required>
	    					
					</div>
					<div class="col">
						<label class="form-label">Método de Pago *</label>
	    				<select id="F6_1R5" class="form-control" required>
	    				<option value="Efectivo">Efectivo</option>
				        <option value="Deposito">Deposito</option>
				        <option value="Transferencia">Transferencia</option>
				        <option value="Cheque">Cheque</option>
				        <option value="Tarjeta de crédito/débito">Tarjeta de crédito/débito</option>
				      </select>	
					</div>
				</div>
    		</div>
    		<div id="F6_2">
    			<br>
    			<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F6.2 ¿Cuántos días se tendrán para entregar el recibo correspondiente al pago? *</label>
				</div>
				<br>
				<div class="col col-md-3">
	    		<input type="text" class="form-control " id="F6_2R1" data-field="F6_2R1" required>
	    		
	    		</div>
    		</div>
    		<!-- fase 7 -->
    		<div id="F7_1">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F7.1 ¿Cuál es el plazo que se establecerá para que se entregue el objeto de la compraventa? *</label>
				</div>
				<br>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F7_1" value="a" required>
				  <label class="form-check-label" >
				    Al momento de la firma del presente Contrato
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F7_1" value="b" required>
				  <label class="form-check-label">
				   	En un plazo determinado
				  </label>
				</div>
				<div class="row">
				<div class="col col-md-4" id="F7_1Otro">
			      <input type="text" class="form-control" id="F7_1R1" placeholder="Indique el plazo" data-field="F7_1R1">
			      <div id="" class="form-text">Solo ingresa el numero. El plazo es en dias.
				  </div>
			      
			    </div>
				</div>
			</div>

			<!-- fase 10 -->
    		<div id="F10_1">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F10.1 El contrato podrá rescindirse, es decir, darse por terminado anticipadamente cuando: *</label>
				</div>
				<br>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F10_1" value="a" required>
				  <label class="form-check-label" >
				     El vendedor incumpla con las obligaciones pactadas en el Contrato
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F10_1" value="b" required>
				  <label class="form-check-label">
				   	El comprador incumpla con las obligaciones pactadas en el Contrato
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F10_1" value="c" required>
				  <label class="form-check-label">
				   	Ambas partes incumplan con las obligaciones pactadas en el Contrato
				  </label>
				</div>

			</div>

			<!-- fase 11 -->
			<div id="F11_1">
    			<br>
    			<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
    			<label class="form-label">
				F11.1 En caso de incumplimiento al Contrato por alguna de las partes que lo firmará, ¿se deberá pagar alguna cantidad a la otra parte como pena convencional? *</label>
				</div>
				<br>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F11_1" value="a" required>
				  <label class="form-check-label" >
				   Sí
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F11_1" value="b" required>
				  <label class="form-check-label">
				   No
				  </label>
    			</div>	
    		</div>

    		<div id="F11_2">
    			<br>
    			<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
    			<label class="form-label">
				F11.2 Deseas que la pena convencional sea impuesta a: *</label>
				</div>
				<br>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F11_2" value="a">
				  <label class="form-check-label" >
				   El Comprador
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F11_2" value="b">
				  <label class="form-check-label">
				   El Vendedor
				  </label>
    			</div>
    			<div class="form-check">
				  <input class="form-check-input" type="radio" name="F11_2" value="c">
				  <label class="form-check-label">
				   Para ambas partes
				  </label>
    			</div>	
    		</div>
    		
    		<div id="F11_3">
    			<br>
    			<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F11.3 ¿Qué cantidad deberá pagar la persona que incumpla con el Contrato? *</label>
				</div>
				<br>
				<div class="row">
			    <div class="col col-md-4">
			      <input type="text" class="form-control" id="F11_3R1" data-field="F11_3R1">
			      
			      <div id="" class="form-text">Solo especifica el número 
			    </div>
				</div>
			    <div class="col col-md-4">
			    	<select id="F11_3R2" class="form-control">
					<option value="M.N.">Peso mexicano (mn)</option>
					<option value="USD">Dólar (usd)</option>
					</select>
			    </div>
				</div>
			</div>	

			<!-- fase 12 -->
			<div id="F12_1">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F12.1 ¿Cuál será la vigencia del Contrato? *</label>
				</div>
				<br>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F12_1" value="a" required>
				  <label class="form-check-label">
				   	Tiempo definido
				  </label>
				  <div id="" class="form-text">Es aquel que tiene una duración determinada, ya sea establecer una fecha en específico o condicionar a un hecho en particular.
				</div>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F12_1" value="b" required>
				  <label class="form-check-label">
				   	Tiempo Indefinido
				  </label>
				  <div id="" class="form-text">Es decir, no se establece un límite de tiempo para los efectos que tendrá el instrumento más allá de cumplir con el objeto de este.
				</div>
				</div>
			</div>
			
			<div id="F12_2">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
    			<label class="form-label">
				F12.2 ¿Cuánto tiempo durará el Contrato que usted quiere celebrar? *</label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F12_2" value="días">
				  <label class="form-check-label" >
				   Días
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F12_2" value="Meses">
				  <label class="form-check-label">
				  Meses
				  </label>
    			</div>	
    			<div class="form-check">
				  <input class="form-check-input" type="radio" name="F12_2" value="años">
				  <label class="form-check-label">
				  Años
				  </label>
    			</div>
    			<div class="form-check">
				  <input class="form-check-input" type="radio" name="F12_2" value="otro">
				  <label class="form-check-label">
				  Otro plazo
				  </label>
    			</div>
    			<div class="col col-md-4" id="F12_2Tabla">
						<label class="form-label">Seleccione el número de tiempo según la seleción anterior</label>
						<select id="F12_2R2" class="form-control">
				        <option value="1">1</option>
				        <option value="2">2</option>
				        <option value="3">3</option>
				        <option value="4">4</option>
				        <option value="5">5</option>
				        <option value="6">6</option>
				        <option value="7">7</option>
				        <option value="8">8</option>
				        <option value="9">9</option>
				        <option value="10">10</option>
				        <option value="11">11</option>
				        <option value="12">12</option>
				        <option value="13">13</option>
				        <option value="14">14</option>
				        <option value="15">15</option>
				        <option value="16">16</option>
				        <option value="17">17</option>
				        <option value="18">18</option>
				        <option value="19">19</option>
				        <option value="20">20</option>
				        <option value="21">21</option>
				        <option value="22">22</option>
				        <option value="23">23</option>
				        <option value="24">24</option>
				        <option value="25">25</option>
				        <option value="26">26</option>
				        <option value="27">27</option>
				        <option value="28">28</option>
				        <option value="29">29</option>
				        <option value="30">30</option>
				        <option value="31">31</option>
				        <option value="32">32</option>
				        <option value="33">33</option>
				        <option value="34">34</option>
				        <option value="35">35</option>
				        <option value="36">36</option>
				        <option value="37">37</option>
				        <option value="38">38</option>
				        <option value="39">39</option>
				        <option value="40">40</option>
				        <option value="41">41</option>
				        <option value="42">42</option>
				        <option value="43">43</option>
				        <option value="44">44</option>
				        <option value="45">45</option>
				        <option value="46">46</option>
				        <option value="47">47</option>
				        <option value="48">48</option>
				        <option value="49">49</option>
				        <option value="50">50</option>
					    </select>	
				</div>
				<div class="col" id="F12_2Otro">
					<input type="text" class="form-control" id="F12_2R1" data-field="F12_2R1">
					
					<div id="" class="form-text">Favor de indicar el plazo se la siguiente manera: “2 años”, “5 años y 6 meses"
					</div>	
				</div>
    		</div>
    		
    		<div id="F12_3">
    			<br>
    			<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F12.3 ¿Qué día comenzará a surtir efectos el Contrato? *</label>
				</div>
				<br>
				<div class="row">
			    <div class="col col-md-3">
			      <input type="date" class="form-control" id="F12_3R1" data-field="F12_3R1">
			      
			    </div>
				</div>
			</div>

			<div id="F12_4">
    			<br>
    			<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F12.4 ¿Qué día dejará de surtir efectos el Contrato? *</label>
				</div>
				<br>
				<div class="row">
			    <div class="col col-md-3">
			      <input type="date" class="form-control" id="F12_4R1" data-field="F12_4R1" >
			      
			    </div>
				</div>
			</div>	

			<!-- fase 14 -->
			<div id="F14_1">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F14.1 ¿Desea que alguna de las partes pueda ceder los derechos u obligaciones derivados del presente Contrato? *</label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F14_1" value="a" required>
				  <label class="form-check-label" >
				    Sí, la persona que venderá
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F14_1" value="b" required>
				  <label class="form-check-label">
				   	Sí, la persona que comprará
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F14_1" value="c" required>
				  <label class="form-check-label">
				   	Sí, ambas partes
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F14_1" value="d" required>
				  <label class="form-check-label">
				   	No, ninguna de las partes
				  </label>
				</div>	
			</div>
			
			<div id="F14_2">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F14.2 ¿Con cuántos días se deberá informar a la otra parte de la cesión de derechos? *</label>
				</div>
				<br>
				<div class="row">
				  <div class="col col-md-3">
				  <input class="form-control" type="text" id="F14_2R1" data-field="F14_2R1" required>
				  
				  </div>
				</div>
			</div>

			<!-- fase 16 -->
			<div id="F16_1">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F16.1 ¿Desea que se agregue una cláusula de confidencialidad? Es decir, ¿quiere que se guarde confidencialidad respecto de la información compartida entre usted y la otra parte? *</label>
				</div>
				<br>
				<div id="" class="form-text"> Se recomienda que usted agregue una cláusula de confidencialidad si desea que la otra persona que firmará el Contrato y usted, no le mencionen a nadie sobre los efectos del presente Contrato
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F16_1" value="a" required>
				  <label class="form-check-label" >
				    Sí
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F16_1" value="b" required>
				  <label class="form-check-label">
				   	No
				  </label>
				</div>	
			</div>

			<!-- fase 20 -->
			<div id="F20_1">
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F20.1 ¿En caso de alguna controversia, en qué ciudad y entidad federativa de la República le gustaría que se llevará el proceso? *</label>
				</div>
				<br>
				<div id="" class="form-text">Se recomienda señalar la entidad federativa en el que están sus oficinas principales, en el que no le costaría el traslado, o bien, en el que se le facilitaría estar acudiendo a distintos trámites.
				</div>
				<div class="row">
					<div class="col">
				      <label for="inputCity">Ciudad *</label>
				      <select id="F20_1R1" class="form-control" required>
							<option value="">--Seleccione una ciudad--</option>
					  </select>
				    </div>
				    <div class="col">
				    <label for="inputState">Estado *</label>
				     <select id="F20_1R2" class="form-control" required>
				        <?php Estados()?>
				     </select>
				    </div>
				  </div>
			</div>
		</section>
		<section id="parte4">
		<!-- fase 21 -->
		<div id="F21_1">
			<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F21.1 ¿Cuántas copias se firmarán del Contrato? Es decir, éste se firmará por: *</label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F21_1" value="duplicado" required>
				  <label class="form-check-label" >
				    Duplicado
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F21_1" value="triplicado" required>
				  <label class="form-check-label">
				   	Triplicado
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F21_1" value="cuadruplicado" required>
				  <label class="form-check-label">
				   	Cuadruplicado
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F21_1" value="quintuplicado" required>
				  <label class="form-check-label">
				   	Quintuplicado
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F21_1" value="sextuplicado" required>
				  <label class="form-check-label">
				   	Sextuplicado
				  </label>
				</div>
		</div>
		
		<div id="F21_2">
			<br>
			<span class="triangulo">&#x25BC;</span>
			<div class="pregunta">
			<label class="form-label">
			F21.2 ¿En dónde se firmará el Contrato? *</label>
			</div>
			<br>
			<div class="row">
				<div class="col">
			      <label for="inputCity">Ciudad *</label>
			      <select id="F21_2R1" class="form-control" required>
						<option value="">--Seleccione una ciudad--</option>
				   </select>
			    </div>
			    <div class="col">
			    <label for="inputState">Estado *</label>
			     <select id="F21_2R2" class="form-control" required>
			         <?php Estados()?>
			     </select>
			    </div>
			    <div class="col">
			     <label for="inputState">País *</label>
			     <select id="F21_2R3" class="form-control" required>
			        <option value="México">México</option>
			      </select>
			    </div>
			</div>
		</div>
		
		<div id="F21_3">
			<br>
			<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F21.3 ¿En qué fecha se firma el Contrato? *</label>
			</div>
			<br>
				<div class="row">
			    <div class="col col-md-3">
			      <input type="date" class="form-control" id="F21_3R1" data-field="F21_3R1" required>
			      
			    </div>
				</div>		
		</div>
		
		<div id="F21_4">
			<br>
			<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				F21.4 ¿Desea agregar testigos en el presente Convenio? *</label>
				</div>
				<br>
				<div id="" class="form-text"> Con el fin de dar certeza jurídica dentro del Contrato se recomienda contemplar 2 dos testigos.
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F21_4" value="a" required>
				  <label class="form-check-label" >
				    Sí
				  </label>
				</div>
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F21_4" value="b" required>
				  <label class="form-check-label">
				   	No
				  </label>
				</div>
		</div>
	
		<div id="F21_4T">
			<br>
			<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				¿Cuál es el nombre completo del Testigo 1? *</label>
			</div>
			<br>
				<div class="row">
				<div class="col">
			      <input type="text" class="form-control" id="F21_4TR1" data-field="F21_4TR1" placeholder="Nombre">
			      
			    </div>
			    <div class="col">
			      <input type="text" class="form-control" id="F21_4TR2" data-field="F21_4TR2" placeholder="Apellidos">
			      
			    </div>
				</div>
				<br>
				<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">
				¿Cuál es el nombre completo del Testigo 2? *</label>
				</div>
				<br>
				<div class="row">
				<div class="col">
			      <input type="text" class="form-control" id="F21_4TR3" data-field="F21_4TR3" placeholder="Nombre">
			      
			    </div>
			    <div class="col">
			      <input type="text" class="form-control" id="F21_4TR4" data-field="F21_4TR4" placeholder="Apellidos">
			      
			    </div>
				</div>
			</div>
		</section>
			<br>
			<br>
			<input type="text" name="html" id="html">
	       	<input type="text" name="html2" id="html2">
	       	<input type="text" name="html3" id="html3">
	       	<input type="text" name="name" id="name">
	   	<button type="submit" class="btn btnGenera" data-field="btnGenerar" name="btnGenerar" id="btnGenerar"> Generar pdf</button>	
	</form>
	</div>
	<br>
	<br>
	</body>
</html>	