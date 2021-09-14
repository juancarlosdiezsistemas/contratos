<?php
include_once("PHP/Estado_Municipio.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
	<title>Contrato de comision</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<script type="text/javascript" src="lib/jquery-3.5.1.min.js"></script>
	<script type="text/javascript" src="js/moment.min.js"></script>
	<script type="text/javascript" src="js/logica-comision.js"></script>
	<script type="text/javascript" src="js/validaciones_Comision.js"></script>
	<script type="text/javascript" src="js/contrato_comision.js"></script>
	<script type="text/javascript" src="js/numeroLetras.js"></script>
	<script type="text/javascript" src="js/diasLetras.js"></script>
	<link rel="stylesheet" type="text/css" href="css/styles_form.css">

</head>

<body>

<?php
include_once("PHP/modal-inicio.php");
include_once("PHP/headers/header_comision.php");
?>

    <div class="container contenido">
<?php
include_once("PHP/headers/secciones_comision.php");
?>
        <!-- inicio del form -->
        <!-- Seccion preguntas face II -->
    <form id="comision" action="pdfs/CCONF_pdf.php" method="POST" class="g-3 needs-validation"novalidate>
    	<section id="parte1">
            <div id="F1_1">
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
                    <label class="form-label">F1.1 ¿Quién es la persona encargada de la comisión? *</label>
                </div>

                <div id="" class="form-text">La comisión, es la actividad de comercio que se encargará a otra persona. 
				</div>

                <br>
                <div class="form-check">

                   <input class="form-check-input text-capitalize" name="F1_1" type="radio" value="a" required>
                    <label class="form-check-label">
                        Persona física
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input text-capitalize" name="F1_1" type="radio" value="b" required>
                    <label class="form-check-label">
                        Persona moral
                    </label>
                </div>

                <div id="" class="form-text">La persona moral es una sociedad mercantil o una
				sociedad o asociación civil.
				</div>
            </div>

            <div id="F1_2">
            	<br>

                <span class="triangulo">&#x25BC;</span>

				<div class="pregunta">
                	<label class="form-label">F1.2 ¿Cuál es el nombre completo de la persona que encarga la comisión?   *</label>
                </div>

                <div id="" class="form-text">La
				comisión, es la actividad de comercio que se encargará a otra persona.
				</div>

                <br>

                <div class="row">
                    <div class="col">
                       
						<input type="text" class="form-control" id="F1_2R1" placeholder="Nombre"  >
                    </div>

                    <div class="col">

                        <input type="text" class="form-control" id="F1_2R2" placeholder="Apellidos"  >

                    </div>

                    <br>

                </div>
            </div>


            <div id="F1_3">
                <br>

                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
                	<label class="form-label">F1.3 ¿Cuál es la denominación o razón de la persona que encarga la comisión?* </label>
                </div>

                 <br>


                 <div id="" class="form-text">Es el nombre de su empresa. Lo puede encontrar en su acta
				constitutiva.
				</div>

             
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" id="F1_3R1" data-field="F1_3R1" >

                    </div>
                </div>
				
            </div>

            <div id="F1_4">
                <br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
                	<label class="form-label">F1.4 ¿Quién firmará el Contrato en representación de la persona moral?*</label>
                    
                </div>

                <br>


                 <div id="" class="form-text">Recomendamos revisar si el apoderado legal cuenta con dichas facultades.
				</div>

                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" id="F1_4R1" data-field="F1_4R1" placeholder="Nombre" >

                    </div>
                    <div class="col">
                        <input type="text" class="form-control" id="F1_4R2" data-field="F1_4R2" placeholder="Apellidos" >

                    </div>
                </div>
            </div>

            <div id="F1_5">
                <br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
                	<label class="form-label">F1.5 ¿Quién es la persona que realizará la comisión?</label>
                    
				</div>
                <br>    
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="F1_5" value="a" required>
                    <label class="form-check-label">
                        Persona física
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="F1_5" value="b"required >
                    <label class="form-check-label">
                        Persona moral
                    </label>
                </div>
            </div>

            <div id="F1_6">
                <br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
                	<label class="form-label">F1.6 ¿Cuál es el nombre completo de la persona que realizará la comisión? *</label>
                   
                </div>
                <br>
                
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Nombre" id="F1_6R1" data-field="F1_6R1" >

                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Apellidos" id="F1_6R2" data-field="F1_6R2" >

                    </div>
                </div>
            </div>

            <div id="F1_7">
                <br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
               	 	<label class="form-label">F1.7 ¿Cuál es la denominación o razón social de la persona que realizara la
                      comisión? *
               	 	</label>

                </div>


                 <div id="" class="form-text">Es el nombre de su empresa.Lo puede encontrar en su acta constitutiva.
				</div>
                <br>

                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" id="F1_7R1" data-field="F1_7R1" >

                    </div>
                </div>
            </div>

            <div id="F1_8">
                <br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
                	
					<label class="form-label">F1.8 ¿Quién firmará el Contrato en representacion de la persona moral?  * </label>
                
                </div>

                 <div id="" class="form-text">Recomendamos revisar si el apoderado legal cuenta con dichas facultades.
				</div>

                <br>



                

                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" id="F1_8R1" data-field="F1_8R1" placeholder="Nombre" >

                    </div>
                    <div class="col">
                        <input type="text" class="form-control" id="F1_8R2" data-field="F1_8R2" placeholder="Apellidos" >

                    </div>
                </div>
            </div>
    </section>
    <section id="parte2">
           
        	<!-- Seccion preguntas face II -->

            <div id="F2_1">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
					<label class="form-label">F2.1 ¿Su nacionalidad es mexicana? *</label>
                </div>
                <br>	
            
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_1" value="a" >
				  <label class="form-check-label" >
				    Sí
				  </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_1" value="b" >
				  <label class="form-check-label">
				   		No
				  </label>
				</div>

				<div class="row">
					<div class="col col-md-4" id="F2_1Otro">
			      		<input type="text" class="form-control" id="F2_1R1" name="F2_1R1" placeholder="Indique la nacionalidad" >
			     
			   		 </div>
				</div>
			</div>

			<div id="F2_2">
				<br>
                <span class="triangulo">&#x25BC;</span>
				
				<div class="pregunta">

                	<label class="form-label">F2.2 ¿Con qué documento oficial se identifica? *</label>
				
				</div>

                <br>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_2" value="credencial para votar (IFE o INE)" >
				  <label class="form-check-label" >
				  	 Credencial para votar (IFE o INE)
				  </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_2" value="pasaporte" >
				  <label class="form-check-label">
				   		Pasaporte
				  </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_2" value="cédula Profesional" >
				  <label class="form-check-label">
				  		 Cédula Profesional
				  </label>
				</div>
			</div>

			<div id="F2_3">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">

                	<label class="form-label">F2.3 ¿Cuál es su domicilio a efecto de oír y recibir notificaciones? *</label>
				
                </div>

                <br>

				<div class="row">
					<div class="col">
						<label for="inputAddress">Calle *</label>
						<input type="text" class="form-control" id="F2_3R1" data-field="F2_3R1" >
					 
					</div>

					<div class="col">
				      <label for="inputCity">Número ext *</label>
				      <input type="text" class="form-control" id="F2_3R2" data-field="F2_3R2" >
				       
				    </div>

				    <div class="col">
				      <label for="inputCity">Número int</label>
				      <input type="text" class="form-control" id="F2_3R3" data-field="F2_3R3" >
				       
				    </div>

				    <div class="col">
				      <label for="inputCity">Colonia *</label>
				      <input type="text" class="form-control" id="F2_3R4" data-field="F2_3R4" >
				    </div>
				</div>
				<div class="row">  

				    
					<div class="col">
						<label for="inputZip">Código postal *</label>
							<input type="text" class="form-control" id="F2_3R5" data-field="F2_3R5" >
					</div>
					

				    <div class="col">
				      <label for="">Ciudad *</label>

				      <select id="F2_3R6" class="form-control" >
				      		<option value="">--Seleccione una ciudad--</option>
				      </select>
				       
				    </div>

				    <div class="col">
				      <label for="inputState">Estado *</label>
				      	<select id="F2_3R7" class="form-control" >
							<?php Estados()?>

							<!-- <option value="Querétaro">Querétaro</option> -->
				      	</select>
				    </div>

				    <div class="col">
				      <label for="inputConutry">País *</label>

				      	<select id="F2_3R8" class="form-control" >
				       	 	<option value="México">México</option>
				    	</select>
					</div>
				</div>
			</div>



			<div id="F2_4">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
               	 
					<label class="form-label">F2.4 ¿Desea que se utilicen medios electrónicos para la comunicación entre los involucrados? *</label>
                </div>

                <br>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_4" value="a" required>
				  <label class="form-check-label" >
				   		Sí
				  </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_4" value="b" required>
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

	    		<input type="email" class="form-control" id="F2_5R1" data-field="F2_5R1" >
	    		
    		</div>

    		<div id="F2_6">
    			<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">    
               	 	<label class="form-label">F2.6 ¿Se encuentra inscrito en el Registro Federal de Contribuyentes? *</label>
                </div>
                <br>

				<div class="form-check ">
				  <input class="form-check-input" type="radio" name="F2_6" value="a" required>
				  <label class="form-check-label" >
				  	 Sí
				  </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_6" value="b" required>
				  <label class="form-check-label">
				   		No
				  </label>
				</div>
			</div>

			<div id="F2_7">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
					<label class="form-label">F2.7 Ingrese su clave de Registro Federal de Contribuyentes *</label>
                </div>
                <br>

				<div class="row">
					<div class="col">
					<input type="text" class="form-control" id="F2_7R1" data-field="F2_7R1" >
					
					</div>
				</div>		
			</div>

			<div id="F2_8">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
                	<label class="form-label"> F2.8 ¿Conoce los datos de constitución de su empresa? *</label>
                </div>
                <div id="" class="form-text">Esta información
				puede encontrarla en el acta constitutiva de su empresa..
				</div>

                <br>

               


				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_8" value="a" >
				  <label class="form-check-label" >
				   		Sí
				  </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_8" value="b" >
				  <label class="form-check-label">
				   		No
				  </label>
				</div>
			</div>

			<div id="F2_9">
				<br>
             <!-- Preguntar sobre los id -->
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
               	 <label class="form-label">F2.9 Número del instrumento público en el cual se constituye como persona moral :  *</label>
                </div>
                <br>
                
				<div class="row">
					<div class="col">
					<input type="text" class="form-control" id="F2_9R1" data-field="F2_9R1" >
					
					</div>
				</div>		
			</div>

			<div id="F2_10">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
               	 <label class="form-label">F2.10 Fecha del instrumento público en el cual se constituyen como persona moral :  *</label>
                </div>
                <br>

				<div class="row">
					<div class="col">
			      <input type="date" class="form-control" id="F2_10R1" data-field="F2_10R1" >
					
					</div>
				</div>		
			</div>


			<div id="F2_11">
				<br>
                <span class="triangulo">&#x25BC;</span>

				<div class="pregunta">
               		 <label class="form-label">F2.11 Nombre completo del fedatario que realizó el instrumento público en el cual se constituye como persona moral: *</label>
                </div>

                <br>


                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" id="F2_11R1" data-field="F2_11R1" placeholder="Nombre" >

                    </div>
              
					<div class="col">
					 	<input type="text" class="form-control" id="F2_11R2" data-field="F2_11R2" placeholder="Apellidos" >
					</div>
				</div>
			</div>

			<div id="F2_12">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
               	 <label class="form-label">F2.12 Especifique el tipo de fedatario piblico  *</label>
                </div>
                <br>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_12" value="a" >
				  <label class="form-check-label" > Notario Público </label>
				
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_12" value="b" >
				  <label class="form-check-label"> Corredor Público </label>
				
				</div>
			</div>

			<div id="F2_13">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
               	 <label class="form-label">F2.13 Número de Notaria o Correduria pública : *</label>
                </div>
                <br>

				<div class="row">
					<div class="col">
					<input type="text" class="form-control" id="F2_13R1" data-field="F2_13R1" >
					
					</div>
				</div>		
			</div>

			<div id="F2_14">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
                	<label class="form-label">F2.14 Ciudad y entidad federativa :  *</label>
                </div>
                <br>

				<div class="row">
					<div class="col">
				      <label for="inputCity">Ciudad *</label>
				      <select id="F2_14R1" class="form-control" >
							<option value="">--Seleccione una ciudad--</option>
						</select>
				    </div>

				<div class="col">
				    <label for="inputState">Estado *</label>
				     <select id="F2_14R2" class="form-control" >
				         <?php Estados()?>
				     </select>
				</div>

				<div class="col">
				   <label for="inputState">País *</label>
				     <select id="F2_14R3" class="form-control" >
				        <option value="Querétaro">México</option>
				     </select>
				 </div>

				</div>
			</div>

			<div id="F2_15">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
                	<label class="form-label">F2.15 ¿Fue inscrita ante el Registro Público del Comercio? *</label>
                </div>
                <br>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_15" value="a" required>
				  <label class="form-check-label" > Si </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_15" value="b" required>
				  <label class="form-check-label"> No </label>
				   
                </div>
               
			</div>

            <div id="F2_16">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">

                	<label class="form-label">F2.16 ¿En qué ciudad?  *</label>
                </div>
                <br>

				<div class="row">
					<div class="col">
				      <label for="inputCity">Ciudad *</label>
				      
				      <select id="F2_16R1" class="form-control" >
						<option value="">--Seleccione una ciudad--</option>
					  </select>
				    </div>
				    <div class="col">
				    <label for="inputState">Estado *</label>
				     <select id="F2_16R2" class="form-control" >
				         <?php Estados()?>
				     </select>
				    </div>
				    <div class="col">
				     <label for="inputState">País *</label>
				     <select id="F2_16R3" class="form-control" >
				        <option value="México">México</option>
				      </select>
				    </div>
				  </div>

			</div>

			<div id="F2_17">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">

               	 <label class="form-label">F2.17 Número del registro :  *</label>
                </div>
                <br>

				<div class="row">
					<div class="col">
					<input type="text" class="form-control" id="F2_17R1" data-field="F2_17R1" >
					
					</div>
				</div>		
			</div>
            
			<div id="F2_18">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
               	 <label class="form-label">F2.18 Fecha del registro : *</label>
                </div>
                <br>
            
				<div class="row">
					<div class="col col-md-2">
			      <input type="date" class="form-control" id="F2_18R1" data-field="F2_18R1" >
					
					</div>
				</div>		

			</div>

            <div id="F2_19">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
                	<label class="form-label">F2.19 ¿Conoce los datos con los que el apoderado legal de su empresa acredita su carácter? : *</label>
                </div>

                <div id="" class="form-text">Es la persona que tiene autorización legal para actuar en
				nombre de otra persona o de la empresa.
				</div>

                <br>

                

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_19" value="a" required>
				  <label class="form-check-label" >  Si  </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_19" value="b" required>
				  <label class="form-check-label"> No </label>
                </div>

			</div>

            <div id="F2_20">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">

                	<label class="form-label">F2.20 ¿Con qué instrumentos acredita su personalidad el apoderado legal? *</label>
                </div>
                <br>

				<div class="row">
					<div class="col">
						<input type="text" class="form-control" id="F2_20R1" data-field="F2_20R1" >
					
					</div>
				</div>		
			</div>

            <div id="F2_21">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">

                	<label class="form-label">F2.21 Nombre del notario que lo expide :   *</label>
                </div>
                <br>

				<div class="row">
                    <div class="col">
                        <input type="text" class="form-control" id="F2_21R1" data-field="F2_21R1" placeholder="Nombre" >

                    </div>
              
					<div class="col">
					 	<input type="text" class="form-control" id="F2_11R2" data-field="F2_21R2" placeholder="Apellidos" >
					</div>
				</div>
			</div>

            <div id="F2_22">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">

               	 <label class="form-label">F2.22 Número de la notaria :  *</label>
                </div>
                <br>

				<div class="row">
					<div class="col">
						<input type="text" class="form-control" id="F2_22R1" data-field="F2_22R1">
					
					</div>
				</div>		
			</div>

            <div id="F2_23">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">

               	 <label class="form-label">F2.23 Ciudad y entidad federativa  :  *</label>
                </div>
                <br>

				<div class="row">
					<div class="col">
				      <label for="inputCity">Ciudad *</label>
				     
				      <select id="F2_23R1" class="form-control" >
						<option value="">--Seleccione una ciudad--</option>
					  </select>
				    </div>
				    <div class="col">
				    <label for="inputState">Estado *</label>
				     <select id="F2_23R2" class="form-control" >
				         <?php Estados()?>
				     </select>
				    </div>
				    <div class="col">
				     <label for="inputState">País *</label>
				     <select id="F2_23R3" class="form-control" >
				        <option value="México">México</option>
				      </select>
				    </div>
				  </div>

			</div>

            
            <div id="F2_24">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
                	<label class="form-label">F2.24 ¿Con qué documento oficial se identifica? *</label>
                </div>
                <br>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_24" value="a" >
				  <label class="form-check-label" >  Credencial para votar (IFE o INE)  </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_24" value="b" >
				  <label class="form-check-label">  Pasaporte  </label>
                </div>

                <div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_24" value="c" >
				  <label class="form-check-label"> Cédula Profecional </label>  
                </div>

			</div>

            <div id="F2_25">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">

               	 <label class="form-label">F2.25 ¿Cuál es su domicilio, a efecto de oir y recibir notificaciones? :  *</label>
                </div>
                <br>

				<div class="row">
					<div class="col">
					<label for="inputAddress">Calle *</label>
					<input type="text" class="form-control" id="F2_25R1" data-field="F2_25R1" >
					 
					</div>
					<div class="col">
				      <label for="inputCity">Número ext *</label>
				      <input type="text" class="form-control" id="F2_25R2" data-field="F2_25R2" >
				       
				    </div>
				    <div class="col">
				      <label for="inputCity">Número int</label>
				      <input type="text" class="form-control" id="F2_25R3" data-field="F2_25R3" >
				    </div>
				    <div class="col">
				      <label for="inputCity">Colonia *</label>
				      <input type="text" class="form-control" id="F2_25R4">
				    </div>
				    <div class="row">
				    <div class="col">
				      <label for="inputZip">Código postal *</label>
				      <input type="text" class="form-control" id="F2_25R5" data-field="F2_25R5" >
				       
				    </div>
				    <div class="col">
				      <label for="inputZip">Ciudad *</label>
				      
				      <select id="F2_25R6" class="form-control" >
							<option value="">--Seleccione una ciudad--</option>
					   </select>
				    </div>
				    <div class="col">
				      <label for="inputState">Estado *</label>
				      <select id="F2_25R7" class="form-control" >
				         <?php Estados()?>
				      </select>
				    </div>
				    <div class="col">
				      <label for="inputConutry">País *</label>
				      <select id="F2_25R8" class="form-control" >
				        <option value="México">México</option>
				      </select>
				    </div>
				  </div>
				
				</div>
			</div>

            <div id="F2_26">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
               	 <label class="form-label">F2.26 ¿Desea que se utilicen medios electrónicos para la comunicación entre los involucrados? *</label>
                </div>
                <br>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_26" value="a" required>
				  <label class="form-check-label" >
				  	 Si
				  </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_26" value="b" required>
				  	<label class="form-check-label">
				  	 No
                    </label>
                </div>
			</div>

            <div id="F2_27">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">

               	 <label class="form-label">F2.27 Ingrese su direccion de correo electrónico.  *</label>
                </div>
                <br>

				<div class="row">
					<div class="col">
					<input type="text" class="form-control" id="F2_27R1" data-field="F2_27R1" >  
					</div>
				</div>		
			</div>

         
            <div id="F2_28">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
                	<label class="form-label">F2.28 ¿Se encuentra inscrito en el Registro Federal de Contribuyentes? *</label>
                </div>
                <br>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F2_28" value="a" required>
				  <label class="form-check-label" >
				  	 Si
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

                	<label class="form-label">F2.29 Ingrese su clave del Registro Federal de Contribuyentes.  *</label>
                </div>
                <br>

				<div class="row">
					<div class="col">
					<input type="text" class="form-control" id="F2_29R1" data-field="F2_29R1" >  
					</div>
				</div>		
			</div>

            <!-- Seccion preguntas face III -->
            
            <div id="F3_1">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
					<label class="form-label">F3.1 ¿Su nacionalidad es mexicana? *</label>
                </div>
				
                <br>
            
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_1" value="a" >
				  <label class="form-check-label" >
				   	 Sí
				  </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_1" value="b" >
				  <label class="form-check-label">
				   		No
				  </label>
				</div>

				<div class="row">
					<div class="col col-md-4" id="F2_1Otro">
						<input type="text" class="form-control" id="F3_1R3" name="F3_1R3" placeholder="Indique la nacionalidad" >
					
					</div>
				</div>
			</div>

            <div id="F3_2">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
                
                	<label class="form-label">F3.2 ¿Con qué documento oficial se identifica? *</label>
				
				</div>
				
                <br>
				<div class="form-check">
					
				  <input class="form-check-input" type="radio" name="F3_2" value="credencial para votar (IFE o INE)" >
				  <label class="form-check-label" >
				  	 Credencial para votar (IFE o INE)
				  </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_2" value="pasaporte" >
				  <label class="form-check-label">
				   		Pasaporte
				  </label>

				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_2" value="cédula Profesional" >
				  <label class="form-check-label">
				  	 Cédula Profesional
				  </label>
				</div>

			</div>

            <div id="F3_3">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">

                	<label class="form-label">F3.3¿Cuál es su domicilio, a efecto de oir y recibir notificaciones? *</label>
                </div>
                <br>

				<div class="row">
					<div class="col">
					<label for="inputAddress">Calle *</label>
					<input type="text" class="form-control" id="F3_3R1" data-field="F3_3R1" >
					 
					</div>
					<div class="col">
				      <label for="inputCity">Número ext *</label>
				      <input type="text" class="form-control" id="F3_3R2" data-field="F3_3R2" >
				       
				    </div>
				    <div class="col">
				      <label for="inputCity">Número int</label>
				      <input type="text" class="form-control" id="F3_3R3" data-field="F3_3R3" >
				    </div>
				    <div class="col">
				      <label for="inputCity">Colonia *</label>
				      <input type="text" class="form-control" id="F3_3R4">
				    </div>
				    <div class="row">
				    <div class="col">
				      <label for="inputZip">Código postal *</label>
				      <input type="text" class="form-control" id="F3_3R5" data-field="F3_3R5" >
				       
				    </div>
				    <div class="col">
				      <label for="inputZip">Ciudad *</label>
				      
				      <select id="F3_3R6" class="form-control" >
							<option value="">--Seleccione una ciudad--</option>
					   </select>
				    </div>
				    <div class="col">
				      <label for="inputState">Estado *</label>
				      <select id="F3_3R7" class="form-control" >
				         <?php Estados()?>
				      </select>
				    </div>
				    <div class="col">
				      <label for="inputConutry">País *</label>
				      <select id="F3_3R8" class="form-control" >
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
                
					<label class="form-label">F3.4 ¿Desea que se utilicen medios electrónicos para la comunicación entre los involucrados? *</label>
                </div>
                <br>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_4" value="a" required>
				  <label class="form-check-label" >
				   		Sí
				  </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_4" value="b" required>
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

	    		<input type="email" class="form-control" id="F3_5R1" data-field="F3_5R1" >
	    		
			</div>

            <div id="F3_6">
    			<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">    
               	 <label class="form-label">F3.6 ¿Se encuentra inscrito en el Registro Federal de Contribuyentes? *</label>
                </div>
                <br>

				<div class="form-check ">
				  <input class="form-check-input" type="radio" name="F3_6" value="a" required >
				  <label class="form-check-label" >
				  	 Sí
				  </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_6" value="b" required>
				  <label class="form-check-label">
				   		No
				  </label>
				</div>

			</div>

            <div id="F3_7">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
                	<label class="form-label">F3.7 Ingrese su dirección de correo electrónico. *</label>
                </div>
                <br>

	    		<input type="email" class="form-control" id="F3_7R1" data-field="F3_7R1" >
	    		
    		</div>

            <div id="F3_8">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
               	 <label class="form-label">F3.8 ¿Conoce los datos los datos de constitución de su empresa? : *</label>
                </div>
                <div id="" class="form-text">Esta informacíon puede econtrarla en el acta constitutivá de su empresa. 
				</div>

                <br>

                


				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_8" value="a" >
				  <label class="form-check-label" >
				   		Si 
				  </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_8" value="b" >
				  	<label class="form-check-label">
				   		No
                	</label>

                </div>
			</div>

            <div id="F3_9">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
                	<label class="form-label">F3.9 Numero del instrumento público en el cual se constituye como persona moral : *</label>
                </div>
                <br>

	    		<input type="email" class="form-control" id="F3_9R1" data-field="F3_7R1" >
	    		
    		</div>

            
			<div id="F3_10">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
               	 <label class="form-label">F3.10 Fecha del instrumento público en el cual se constituyen como persona moral :  *</label>
                </div>
                <br>

				<div class="row">
			    <div class="col col-md-2">
			      <input type="date" class="form-control" id="F3_10R1" data-field="F2_18R1" >
			      
			    </div>
				</div>	
			</div>

            <div id="F3_11">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
                	<label class="form-label">F3.11 Nombre completo del fedatario que realizó el instrumento público en el cual se constituye como persona moral: *</label>
                </div>
                <br>

                <div class="row">
			    <div class="col">
			      <input type="text" class="form-control" id="F3_11R1" placeholder="Nombre" data-field="F3_11R1" >
			      
			    </div>
			    <div class="col">
			      <input type="text" class="form-control" id="F3_11R2" placeholder="Apellidos" data-field="F2_11R2" >
			      
			    </div>
			  	</div>

			</div>

            <div id="F3_12">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
               	 <label class="form-label">F3.12 Especifique el tipo de fedatario piblico  *</label>
                </div>
                <br>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_12" value="a" >
				  <label class="form-check-label" >
				  	 Notario Público
				  </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_12" value="b" >
				  <label class="form-check-label">
				  	 Corredor Público
				  </label>
				</div>
			</div>


            <div id="F3_13">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
               	 <label class="form-label">F3.13 Número de Notaría o Correduria pública:  *</label>
                </div>
                <br>

                <div class="row">
					<div class="col">
						<input type="text" class="form-control" id="F3_13R1" data-field="F3_13R1" >
					
					</div>
				</div>		
			</div>

            <div id="F3_14">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
              	  <label class="form-label">F3.14 Ciudad y entidad federativa :  *</label>
                </div>
                <br>

				<div class="row">
					<div class="col">
				      <label for="inputCity">Ciudad *</label>
				      <select id="F3_14R1" class="form-control" >
							<option value="">--Seleccione una ciudad--</option>
						</select>
				    </div>

				    <div class="col">
				    <label for="inputState">Estado *</label>
				     <select id="F3_14R2" class="form-control" >
				         <?php Estados()?>
				     </select>
				    </div>

				    <div class="col">
				     <label for="inputState">País *</label>
				     <select id="F3_14R3" class="form-control" >
				        <option value="Querétaro">México</option>
				     </select>

				    </div>
				  </div>	
			</div>

            <div id="F3_15">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
                	<label class="form-label">F3.15 ¿Fue inscrita ante el Registro Público del Comercio? *</label>
                </div>
                <br>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_15" value="a" required>
				  <label class="form-check-label" >
				  	 Si 
				  </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_15" value="b" required>
				  <label class="form-check-label">
				  		No
                   </label>
                </div>
               
			</div>

            <div id="F3_16">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">

               	 <label class="form-label">F3.16 ¿En qué ciudad?  *</label>
                </div>
                <br>
				<div class="row">
					<div class="col">
				      <label for="inputCity">Ciudad *</label>
				      
				      <select id="F3_16R1" class="form-control" >
						<option value="">--Seleccione una ciudad--</option>
					  </select>
				    </div>
				    <div class="col">
				    <label for="inputState">Estado *</label>
				     <select id="F3_16R2" class="form-control" >
				         <?php Estados()?>
				     </select>
				    </div>
				    <div class="col">
				     <label for="inputState">País *</label>
				     <select id="F3_16R3" class="form-control" >
				        <option value="México">México</option>
				      </select>
				    </div>
				  </div>
			</div>


            
            <div id="F3_17">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">

               	 <label class="form-label">F3.17 Número del registro :  *</label>
                </div>
                <br>

				<div class="row">
					<div class="col">
						<input type="text" class="form-control" id="F3_17R1" data-field="F2_17R1" >
			
					</div>
				</div>		
			</div>


            <div id="F3_18">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
               	 <label class="form-label">F3.18 Fecha del registro : *</label>
                </div>
                <br>
            
				<div class="row">
				    <div class="col col-md-2">
				      <input type="date" class="form-control" id="F3_18R1" data-field="F3_18R1" >
				      
				    </div>

                </div>
			</div>


            <div id="F3_19">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
               	 <label class="form-label">F3.19 ¿Conoce los datos con los que el apoderado legal de su empresa acredita su carácter? : *</label>
                </div>

                 <div id="" class="form-text">Es la persona que tiene autorización legal para actuar en nombre de otras personas o de la empresa.
				</div>

                <br>

               
				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_19" value="a" required>
				 	<label class="form-check-label" >
				  	 	Si 
				 	</label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_19" value="b" required>
				  	<label class="form-check-label">
				   		No
               		</label>
                </div>
			</div>


            <div id="F3_20">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">

                	<label class="form-label">F3.20 ¿Con qué instrumento acredita su personalidad el apoderado legal?  *</label>
                </div>
                <br>

				<div class="row">
					<div class="col">
						<input type="text" class="form-control" id="F3_20R1" data-field="F3_20R1" >
			
					</div>
				</div>		
			</div>


            <div id="F3_21">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">

                	<label class="form-label">F3.21 Nombre del notario que lo expide :   *</label>
                </div>
                <br>

				<div class="row">
			    <div class="col">

			      <input type="text" class="form-control" id="F3_21R1" placeholder="Nombre" data-field="F3_21R1" >
			      
			    </div>
			    <div class="col">
			      <input type="text" class="form-control" id="F3_21R2" placeholder="Apellidos" data-field="F3_21R2" >
			      
			    </div>
			  	</div>

			</div>



            <div id="F3_22">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">

              	  <label class="form-label">F3.22 Número de la notaria :  *</label>
                </div>
                <br>

				<div class="row">
					<div class="col">
						<input type="text" class="form-control" id="F3_22R1" data-field="F3_22R1" >
					
					</div>
				</div>		
			</div>


            <div id="F3_23">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
               	 <label class="form-label">F3.23 Ciudad y entidad federativa :  *</label>
                </div>
                <br>

				
				<div class="row">
					<div class="col">
				      <label for="inputCity">Ciudad *</label>
				     
				      <select id="F3_23R1" class="form-control" >
						<option value="">--Seleccione una ciudad--</option>
					  </select>
				    </div>
				    <div class="col">
				    <label for="inputState">Estado *</label>
				     <select id="F3_23R2" class="form-control" >
				         <?php Estados()?>
				     </select>
				    </div>
				    <div class="col">
				     <label for="inputState">País *</label>
				     <select id="F3_23R3" class="form-control" >
				        <option value="México">México</option>
				      </select>
				    </div>
				  </div>
			</div>


            <div id="F3_24">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
                
               	 <label class="form-label">F3.24 ¿Con qué documento oficial se identifica? *</label>
				</div>
                <br>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_24" value="credencial para votar (IFE o INE)" >
				  <label class="form-check-label" >
				  	 Credencial para votar (IFE o INE)
				  </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_24" value="pasaporte" >
				  <label class="form-check-label">
				   		Pasaporte
				  </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_24" value="cédula Profesional" >
				  <label class="form-check-label">
				  	 Cédula Profesional
				  </label>
				</div>
			</div>


            <div id="F3_25">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
                	<label class="form-label"> F3.25 ¿Cuál es su domicilio a efecto de oír y recibir notificaciones? *</label>
                </div>
                <br>

				<div class="row">
					<div class="col">
					<label for="inputAddress">Calle *</label>
					<input type="text" class="form-control" id="F3_25R1" data-field="F3_25R1" >
					 
					</div>
					<div class="col">
				      <label for="inputCity">Número ext *</label>
				      <input type="text" class="form-control" id="F3_25R2" data-field="F3_25R2" >
				       
				    </div>
				    <div class="col">
				      <label for="inputCity">Número int</label>
				      <input type="text" class="form-control" id="F3_25R3" data-field="F3_25R3" >
				    </div>
				    <div class="col">
				      <label for="inputCity">Colonia *</label>
				      <input type="text" class="form-control" id="F3_25R4">
				    </div>
				    <div class="row">
				    <div class="col">
				      <label for="inputZip">Código postal *</label>
				      <input type="text" class="form-control" id="F3_25R5" data-field="F3_25R5" >
				       
				    </div>
				    <div class="col">
				      <label for="inputZip">Ciudad *</label>
				      
				      <select id="F3_25R6" class="form-control" >
							<option value="">--Seleccione una ciudad--</option>
					   </select>
				    </div>
				    <div class="col">
				      <label for="inputState">Estado *</label>
				      <select id="F3_25R7" class="form-control" >
				         <?php Estados()?>
				      </select>
				    </div>
				    <div class="col">
				      <label for="inputConutry">País *</label>
				      <select id="F3_25R8" class="form-control" >
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
                
					<label class="form-label">F3.26 ¿Desea que se utilicen medios electrónicos para la comunicación entre los involucrados? *</label>
                </div>
                <br>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_26" value="a"required>
				    <label class="form-check-label" >
				   		Sí
				    </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_26" value="b"required>
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
               	 <label class="form-label">F3.28 ¿Se encuentra inscrito en el Registro Federal de Contribuyentes? *</label>
                </div>
                <br>

				<div class="form-check ">
				  <input class="form-check-input" type="radio" name="F3_28" value="a" required>
				  <label class="form-check-label" >
				  	 Sí
				  </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F3_28" value="b" required>
				  <label class="form-check-label">
				  	 No
				  </label>

				</div>
			</div>



            <div id="F3_29">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
					<label class="form-label">F3.29 Ingrese su clave de Registro Federal de Contribuyentes *</label>
                </div>
                <br>

				<div class="row">
					<div class="col">
					<input type="text" class="form-control" id="F3_29R1" >
					
					</div>
				</div>		
			</div>

	</section>
	<section id="parte3">
            <!-- Preguntas fase IV-->


            <div id="F4_1">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
					<label class="form-label">F4.1 ¿Cuáles son los actos de comercio para los que desea autorizar la persona que realizará la comisión?</label>
                </div>
                 <div id="" class="form-text">Describa detalladamente las actividades que
				desea que sean realizadas por la persona que recibirá el encargo.
				</div>
                <br>
				<div class="row">
					<div class="col">
						<input type="text" class="form-control" id="F4_1R1" data-field="F4_1R1" required>
					
					</div>
				</div>		
			</div>





            <!-- Preguntas fase V-->


            <div id="F5_1">
    			<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">    
                	<label class="form-label">F5.1 ¿De qué forma se pagará la comisión? *</label>
                </div>
                <br>

				<div class="form-check ">
				  <input class="form-check-input" type="radio" name="F5_1" value="a" required>
				  <label class="form-check-label" >
				  	 Una Cantidad en especifico
				  </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F5_1" value="b" required>
				  <label class="form-check-label">
				  	 Un Porcentaje sobre ventas
				  </label>
				</div>
			</div>


            
            <div id="F5_2">
    			<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">    
               	 	<label class="form-label">F5.2 ¿La(s) cantidad(es) y/o porcentaje(s) referido(s) a pagar por concepto de comisión incluye el Impuesto al Valor Agregado (IVA) ? *</label>
                </div>
                <br>

				<div class="form-check ">
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


                <div id="F5_3">
    				<br>

    				<span class="triangulo">&#x25BC;</span>
					<div class="pregunta">    
    					<label class="form-label"> F5.3 Ingrese los datos que se solicitan a continuación *</label>
					</div>
					<div class="row">
						<div class="col">
							<label class="form-label">Exhibición *</label>
	    					<input type="text" class="form-control" id="F5_3R1" data-field="F5_3R1" required>		
						</div>

						<div class="col">
							<label class="form-label">Cantidad *</label>
		    				<input type="text" class="form-control" id="F5_3R2" data-field="F5_3R2" required>	
						</div>

						<div class="col">
							<label class="form-label">Divisa *</label>
					    	<select id="F5_3R3" class="form-control" required>
								<option value="M.N.">Peso mexicano (mn)</option>
								<option value="USD">Dólar (usd)</option>
							</select>
				    	</div>

						<div class="col">
							<label class="form-label">Fecha *</label>

							


		    				<input type="date" class="form-control" id="F5_3R4" data-field="F5_3R3"required>

		    				<div id="" class="form-text">Describa la fecha o el suceso que debe presentarse para efecto de liberar el pago

							</div>	
						</div>

						<div class="col">
							<label class="form-label">Método de Pago *</label>
		    				<select id="F5_3R5" class="form-control" required>
								<option value="Efectivo">Efectivo</option>
								<option value="Deposito">Deposito</option>
								<option value="Transferencia">Transferencia</option>
								<option value="Cheque">Cheque</option>
								<option value="Tarjeta de crédito/débito">Tarjeta de crédito/débito</option>
					      	</select>	
						</div>
					</div>	
				</div>
    		
    		
			
            <div id="F5_4">
    			<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">    
               		 <label class="form-label">F5.4 ¿Desea que la parte que recibe la comisión, entregue factura sobre esta? *</label>
                </div>
                <br>

				<div class="form-check ">
				  <input class="form-check-input" type="radio" name="F5_4" value="a" required>
				  <label class="form-check-label" >
				  	 Sí
				  </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F5_4" value="b" required>
				  	<label class="form-check-label">
				   		No
				  	</label>
				</div>
			</div>


            <div id="F5_5">
    			<br>
    			<span class="triangulo">&#x25BC;</span>

				<div class="pregunta">

					<label class="form-label">F5.5 ¿Cuántos días naturales tendrá para entregar el recibo correspondiente al pago? *</label>
				</div>


				<div id="" class="form-text">(Especificar con número y letra de la siguiente manera: 10 (diez); 15 (quince))

				</div>
				<br>

				



				<div class="col col-md-3">
	    			<input type="text" class="form-control " id="F5_5R1" data-field="F5_5R1">
	    		</div>
    		</div>

            <!-- Fase de preguntas 6 -->

            <div id="F6_1">
    			<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">    
                	<label class="form-label">F6.1 En caso de retraso en el cumplimiento de pago, por parte de la persona que encarga la comisión,¿desea penalizarla con un interés moratorio? *</label>
                </div>
                <br>

				<div class="form-check ">
				  <input class="form-check-input" type="radio" name="F6_1" value="a" required>
				  <label class="form-check-label" >
				  	 Sí
				  </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F6_1" value="b" required>
				  <label class="form-check-label">
				  	 No
				  </label>
				</div>
            </div>


            <div id="F6_2">
    			<br>
    			<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F6.2 ¿Cuál será el porcentaje mensual del interés moratorio que se pagará? *</label>
				</div>
				<br>

				<div class="col col-md-3">
					<input type="text" class="form-control " id="F6_2R1" data-field="F6_2R1">
	    		</div>

    		</div>
        
             
            <!-- Fase de preguntas 8 -->



            <div id="F8_1">
    			<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">    
                	<label class="form-label">F8.1 El Contrato podrá rescindirse, es decir, darse por terminado anticipadamente cuando: *</label>
                </div>
                <br>

				<div class="form-check ">
				  <input class="form-check-input" type="radio" name="F8_1" value="a" required>
				    <label class="form-check-label" >
				   		El Comitente incumpla con las obligaciones pactadas en el Contrato
				    </label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F8_1" value="b" required>
					<label class="form-check-label">
				  		El Comisionista incumplan con las obligaciones pactadas en el Contrato 
				  	</label>
				</div>

                <div class="form-check">
				  <input class="form-check-input" type="radio" name="F8_1" value="c" required>
				 	<label class="form-check-label">
				  		 El Comisionista incumplan con las obligaciones pactadas en el Contrato 
				  	</label>
				</div>	
            </div>


            
            <!-- Fase de preguntas 9 -->


            <div id="F9_1">
    			<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">    
                	<label class="form-label">F9.1 En Caso de incumplimiento al Contrato por alguna de las partes que lo firmará, ¿se deberá pagar alguna cantidad a la otra parte como pena convencional? *</label>
                </div>
                <br>

				<div class="form-check ">
				  <input class="form-check-input" type="radio" name="F9_1" value="a" required>
				  	<label class="form-check-label" >
				  		Sí
				  	</label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F9_1" value="b" required>
				  	<label class="form-check-label">
				   		No
				  	</label>
				</div>

            </div>


            <div id="F9_2">
    			<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">    
               	 <label class="form-label">F9.2 Deseas que la pena convencional sea impuesta a : *</label>
                </div>
                <br>

				<div class="form-check ">
				  <input class="form-check-input" type="radio" name="F9_2" value="a" required>
				  	<label class="form-check-label" >
				   
                  		Quien encarga la comision
				  	</label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F9_2" value="b" required>
				 	<label class="form-check-label">
				  	 	Quien realizará la comisión  
				  	</label>
				</div>

                <div class="form-check">
				  <input class="form-check-input" type="radio" name="F9_2" value="c" required>
				 	<label class="form-check-label">
				   		Para ambas partes
				  	</label>

                </div>
            </div>


            <div id="F9_3">
    			<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">    
                	<label class="form-label">F9.3 ¿Qué camtidad deberá pagar la persona que incumpla con el Contrato? *</label>
                </div>
                <br>

				<div class="form-check ">
				  <input class="form-check-input" type="radio" name="F9_3" value="a" >
				  	<label class="form-check-label" >
				   		$20,000.00 (Veinte mil pesos 00/100 M.N.)
    
				  	</label>
        
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F9_3" value="b" >
				  	<label class="form-check-label">
                  		$50,000.00 (cincuenta mil pesos 00/100 M.N.)

				  	</label>



				</div>



                <div class="form-check">
				  <input class="form-check-input" type="radio" name="F9_3" value="c" >
				  	<label class="form-check-label">
                  		$100,000.00 (cien  mil pesos 00/100 M.N.)

				  	</label>
				</div>

                


                <div class="form-check">
				  <input class="form-check-input" type="radio" name="F9_3" value="d" >
				  	<label class="form-check-label">
                  		$200,000.00 (doscientos mil pesos 00/100 M.N.)

				  	</label>
				</div>

               
                
                
                <div class="form-check">
				  <input class="form-check-input" type="radio" name="F9_3" value="e" >
				  	<label class="form-check-label">
                 	 Otra Cantidad :
				 	</label>
				</div>


				<div id="" class="form-text">Favor de especificar la cantidad de esta manera: “$200,000.00 (doscientos mil pesos 00/100 M.N.)”.	
				</div>


				<div class="col col-md-3">
	    			<input type="text" class="form-control " id="F9_3R6" data-field="F9_3R6">
				</div>


                
            </div>

            <!-- Fase  X -->

            <div id="F10_1">
    			<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">    
                	<label class="form-label">F10.1 ¿Cual será la vigencia del Contrato? *</label>
                </div>

                <br>

				<div class="form-check ">
				  <input class="form-check-input" type="radio" name="F10_1" value="a" required>
				  	<label class="form-check-label" >
				  		Tiempo definido
				  	</label>
				</div>

				 <div id="" class="form-text">Es aquel que tiene una duración determinada, ya sea establecer una fecha en específico o condicionar a un hecho en particular. Ejemplos: a) Desea rentar una casa únicamente por un año, debido a que por el trabajo deberá permanecer en alguna ciudad ese tiempo; b) Desea celebrar un contrato en donde dará en préstamo (contrato de comodato) un bien, condicionando el préstamo hasta que una persona cumpla la mayoría de edad.
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F10_1" value="b" required>
				  	<label class="form-check-label">
				   		Tiempo Indefinido 
					</label>
				</div>

				   <div id="" class="form-text">Es decir, no se establece un límite de tiempo para los efectos que tendrá el instrumento más allá de cumplir con el objeto de este. Ejemplo: Cuando usted contrata los servicios de una persona que realizara trabajos de remodelaciones en su casa, el contrato terminará hasta que terminen los trabajos de remodelación, puede ser un mes, seis meses o un año, dependiendo del tiempo que tome.

				</div>


            </div>


            <div id="F10_2">
    			<br>

                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">    
                	<label class="form-label">F10.2 ¿Cúanto tiempo durará el Contrato que usted quiere celebrar? *</label>
                </div>
                <br>

				<div class="form-check ">
				  <input class="form-check-input" type="radio" name="F10_2" value="a">
				  	<label class="form-check-label" >
				  	 Dias 
				  	</label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F10_2" value="b" >
				  	<label class="form-check-label">
				  	 Meses 
				  	</label>
				</div>

                <div class="form-check">
				  <input class="form-check-input" type="radio" name="F10_2" value="c" >
				  	<label class="form-check-label">
				  	 Años 
				  	</label>
				</div>

                <div class="form-check">
				  <input class="form-check-input" type="radio" name="F10_2" value="otro">
				  	<label class="form-check-label">
				 	 Otro plazo
				 	</label>
				 	   <div id="" class="form-text">Recomendamos revisar si el apoderado legal cuenta con dichas facultades.
				</div>


    			</div>

    					


    			<div class="col col-md-4" id="F11_2Tabla">
				<label class="form-label">Seleccione el número de tiempo según la seleción anterior</label>
				<select id="F10_2R6" class="form-control ">
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

			<div class="row" id="F10_2Otro" >
					<div class="col">
						<input type="text" class="form-control" id="F10_2R1" data-field="F10_2R5">
					<div id="" class="form-text">Favor de indicar el plazo se la siguiente manera: “2 años”, “5 años y 6 meses
					</div>
					</div>
				</div>

    			

    		</div>

            <div id="F10_3">
    			<br>
    			<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F10.3 ¿Qué dia comenzára surtir efectos el Contrato?*</label>
			</div>
			<br>

				<div class="col col-md-2">
	    		<input type="date" class="form-control" id="F10_3R1" data-field="F10_3R1">
	    		</div>

            </div>


            <div id="F10_4">
    			<br>
    			<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
				<label class="form-label">F10.4 ¿Qué dia dejará de surtir efectos el Contrato?*</label>
				</div>
				<br>

				<div class="col col-md-2">
	    		<input type="date" class="form-control" id="F10_4R1" data-field="F10_4R1">
	    		</div>

            </div>


            <!-- Fase 13 -->


            <div id="F13_1">
    			<br>

                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">    
                	<label class="form-label">F13.1 ¿Desea que alguna de las partes pueda ceder los derechos u obligaciones derivados  del presente Contrato?*</label>
                </div>
                <br>

				<div class="form-check ">
				  <input class="form-check-input" type="radio" name="F13_1" value="a" required>
				  	<label class="form-check-label" >
				 	 	Sí, la Parte que encarga la comisión
				  	</label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F13_1" value="b" required>
				  	<label class="form-check-label">
                  		Sí, la Parte que realizará la comisión 
 
				  	</label>
				</div>


                <div class="form-check">
				  <input class="form-check-input" type="radio" name="F13_1" value="c" required>
				  	<label class="form-check-label">
                  		Sí, ambas partes

				  	</label>
				</div>

                
                <div class="form-check">
				  <input class="form-check-input" type="radio" name="F13_1" value="d" required>
				  	<label class="form-check-label">
                  		No, ninguna de las partes
				  	</label>
				</div>

            </div>

			<div id="F13_2">
    			<br>
    			<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">

					<label class="form-label">F13.2 ¿Con cuántos días naturales se deberá informar a la otra parte de la cesión de derechos?*</label>
				</div>
				<br>
				<div class="col col-md-3">
	    			<input type="text" class="form-control " id="F13_2R1" data-field="F13_2R1" required>
				</div>
	    	</div>



            <!-- Fase IV -->


            <div id="F14_1">
    			<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">    
               	 <label class="form-label">F14.1 ¿Desea que la relación entre las partes sea de exclusividad? *</label>
                </div>



                 <div id="" class="form-text">Recomendamos revisar si el apoderado legal cuenta con dichas facultades.
				</div>


                <br>

				<div class="form-check ">
				  <input class="form-check-input" type="radio" name="F14_1" value="a" required>
				  	<label class="form-check-label" >
				   		Sí
				  	</label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F14_1" value="b" required>
				  	<label class="form-check-label">
				   		No
				  	</label>
				</div>

			</div>




                
            <!-- Fase XvI --> 


            <div id="F16_1">
    			<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">    
               	 <label class="form-label">F16.1 ¿Desea que se agregue una cláusula de confidencialidad? Es decir, ¿quiere que se guarde confidencialidad respecto de la información compartida entre usted y la otra parte? *</label>
                </div>
                <div id="" class="form-text">Se recomienda que usted agregue una cláusula de confidencialidad si desea que la otra persona que firmará el Contrato y usted, no le mencionen a nadie que están firmando este Contrato)
				</div>


                <br>

				<div class="form-check ">
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


            <!-- Fase IXX -->


            
            <div id="F19_1">
    			<br>
    			<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">

				<label class="form-label">F19.1 ¿En caso de alguna controversia, en qué ciudad y entidad federativa de la República le gustaría que se llevará el proceso?*</label>
				</div>


                 <div id="" class="form-text">Se recomienda que usted agregue una cláusula de confidencialidad si desea que la otra persona que firmará el Contrato y usted, no le mencionen a nadie que están firmando este Contrato)

				</div>

				<br>

				<div class="row">
					<div class="col">
				      <label for="inputCity">Ciudad *</label>
						<select id="F19_1R1" class="form-control" required>
							<option value="">--Seleccione una ciudad--</option>
						</select>
				    </div>
				    <div class="col">
				    <label for="inputState">Estado *</label>
				     <select id="F19_1R2" class="form-control" required>
				         <?php Estados()?>
				     </select>
				    </div>
				    <div class="col">
				     <label for="inputState">País *</label>
				     <select id="F19_1R3" class="form-control" required>
				        <option>México</option>
				      </select>
				    </div>
				  </div>
	    		

            </div>
        </section>

            <!-- Fase XX -->


        <section id="parte4">
           <div id="F20_1">
    			<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">    
               	 <label class="form-label">F20.1 ¿Cuántas copias se firmarán del Contrato? Es decir, éste se firmará por *</label>
                </div>
                <br>

				<div class="form-check ">
				  <input class="form-check-input" type="radio" name="F20_1" value="a" required>
				  	<label class="form-check-label" >
				   		Duplicado
				  	</label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F20_1" value="b" required>
				 	<label class="form-check-label">
				  	 Triplicado
				  	</label>
				</div>

                <div class="form-check">
				  <input class="form-check-input" type="radio" name="F20_1" value="c" required>
				  	<label class="form-check-label">
				  	 Cuadruplicado
				  	</label>
				</div>

                <div class="form-check">
				  <input class="form-check-input" type="radio" name="F20_1" value="d" required>
				  	<label class="form-check-label">
				  	 Quintuplicado
				  	</label>
				</div>

                <div class="form-check">
				  <input class="form-check-input" type="radio" name="F20_1" value="e" required>
					<label class="form-check-label">
				   		Sextuplicado
				  	</label>
				</div>
			</div>



            <div id="F20_2">
    			<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">    
                	<label class="form-label">F20.2 ¿En dónde se firmará el Contrato? *</label>
                </div>
                <br>

				<div class="row">
					<div class="col">
				      <label for="inputCity">Ciudad *</label>
						<select id="F20_2R1" class="form-control" required>
							<option value="">--Seleccione una ciudad--</option>
						</select>
				    </div>
				    <div class="col">
				    <label for="inputState">Estado *</label>
				     <select id="F20_2R2" class="form-control" required>
				         <?php Estados()?>
				     </select>
				    </div>
				    <div class="col">
				     <label for="inputState">País *</label>
				     <select id="F20_2R3" class="form-control" required>
				        <option>México</option>
				      </select>
				    </div>
				  </div>
			</div>
			<div id="F20_3">
				<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">
                	<label class="form-label">F20.3 Fecha del registro : *</label>
                </div>
                <br>

           		<div class="col col-md-2">
	    		<input type="date" class="form-control" id="F20_4R1" data-field="F20_4R1" required>
	    		</div>
			</div>

			<div id="F20_4">
    			<br>
                <span class="triangulo">&#x25BC;</span>
				<div class="pregunta">    
               		<label class="form-label">F20.4 ¿Desea agregar testigos en el presente Contrato? *</label>
                </div>

                 <div id="" class="form-text">Recomendamos revisar si el apoderado legal cuenta con dichas facultades.
				</div>
                <br>
				<div class="form-check ">
				  <input class="form-check-input" type="radio" name="F20_4" value="a" required>
				 	<label class="form-check-label" >
				  	 Sí
				  	</label>
				</div>

				<div class="form-check">
				  <input class="form-check-input" type="radio" name="F20_4" value="b" required>
				  	<label class="form-check-label">
				  	 No
				  	</label>
				</div>
			</div>

			<div id="F20_5T">
			<br>
			<span class="triangulo">&#x25BC;</span>
				<div class="pregunta">  
				<label class="form-label">
				¿Cuál es el nombre completo del Testigo 1? *</label>
			</div>
			<br>
				<div class="row">
				<div class="col">
			      <input type="text" class="form-control" id="F20_5T" data-field="F21_4TR1" placeholder="Nombre">
			      <div class="valid-message"></div>
			    </div>
			    <div class="col">
			      <input type="text" class="form-control" id="F20_5T" data-field="F21_4TR2" placeholder="Apellidos">
			      <div class="valid-message"></div>
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
			      <input type="text" class="form-control" id="F20_6T" data-field="F21_4TR3" placeholder="Nombre">
			      <div class="valid-message"></div>
			    </div>
			    <div class="col">
			      <input type="text" class="form-control" id="F20_6T" data-field="F21_4TR4" placeholder="Apellidos">
			      <div class="valid-message"></div>
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