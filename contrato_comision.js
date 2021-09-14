
function contrato_Comision(){



console.log('contrato');


$("#btnGenerar").click(function(){
	var html='';
	html+='<p><b>CONTRATO DE COMISIÓN QUE CELEBRA POR UNA PARTE</p>';

	//fase1

	if(($('input:radio[name=F1_1]:checked').val())== 'a'){	
		html+=(' '+$("#F1_2R1").val()+' '+$("#F1_2R2").val()+',').toUpperCase();
		html+= 'POR SU PROPIO DERECHO,';
	}else{
		
		html+=(''+$("F1_3R1").val()+',').toUpperCase();
		html+= 'REPRESENTADA EN ESTE ACTO POR,';
		html+=(' '+$("#F1_4R1").val()+''+$("#F1_4R2").val()+'').toUpperCase();

	}

	html+= 'A QUIEN EN LO SUCESIVO SE DENOMINARÁ "EL COMITENTE" Y POR LA OTRA,';


	//fin fase 1 


	if(($('input:radio[name=F1_1]:checked').val())== 'a'){	
		html+=(' '+$("#F1_6R1").val()+' '+$("#F1_6R2").val()+',').toUpperCase();
		html+= 'POR SU PROPIO DERECHO,';
	}else{
		
		html+=(''+$("F1_7R1").val()+',');
		html+= 'REPRESENTADA EN ESTE ACTO POR,';
		html+=(' '+$("#F1_8R1").val()+''+$("#F1_8R2").val()+'').toUpperCase();
		html+= 'A QUIEN EN LO SUCESIVO SE LE DENOMINARÁ "ELCOMISIONISTA" Y A QUIENES EN CONJUNTO SE LES DENOMINARÁ "LAS PARTES" AL TENOR DE LAS SIGUIENTES DECLARACIONES Y CLÁUSULAS.</b></p>';

	}


	// //fase 2

	html+='<div style="text-align: center;">';
	html+='<b><u> D E C L A R A C I O N E S :<b><u>';
	html+='</div>';



	if(($('input:radio[name=F1_1]:checked').val())== 'a'){	

		html+= '<p><b>I. Declara "EL COMITENTE", por su propio derecho y bajo protesta de decir verdad:</b></p>';
	
		html+= '<p>A) Ser una persona física, de nacionalidad ';


	
	if (($('input:radio[name=F2_1]:checked').val())== 'a'){

		html+= 'mexicana,';

	}else{

		html+=($("F2_1R1").val()+',').toLowerCase();

	}

	html+='mayor de edad, que es su voluntad y cuenta con las capacidades legales y suficientes para sujetarse a las condiciones del presente Contrato.'	
	html+='</p>'

	html+='<p>B) Que se identifica con: ';
	html+=$('input:radio[name=F2_2]:checked').val();
	html+=' documento que se anexa en copia simple al presente Contrato.</p>'

html+='hola ';

	html+='<p>C) Que señala como domicilio para efectos del presente instrumento el ubicado en ' 
	html+='calle '+($("#F2_3R1").val()).charAt(0).toUpperCase()+($("#F2_3R1").val()).slice(1)+', '; //calle	
	html+='número exterior '+($("#F2_3R2").val()).toLowerCase()+', '; //numero ext

	if ($("#F2_3R3").val() !='') {
			html+='número interior '+($("#F2_3R3").val()).toLowerCase()+', '; //numero int
	}

	html+='colonia '+($("#F2_3R4").val()).charAt(0).toUpperCase()+($("#F2_3R4").val()).slice(1)+', '; //colonia
	html+='C.P. '+($("#F2_3R5").val())+', '; //cp
	html+=$("#F2_3R6").val()+', '; //ciudad
	html+=$("#F2_3R7").val();

	if($('input:radio[name=F2_4]:checked').val() == 'a'){
		html+='. Así como la siguiente dirección de correo electrónico ';
		html+= $("#F2_5R1").val()
	}

	}

	html+='</p>';

	//fin inciso c


	


	//Inciso  fase 2
	if($('input:radio[name=F2_6]:checked').val() == 'a'){
		html+='<p>D) ';
		html+='Que se encuentra Inscrito en el Registro Federal de Contribuyentes bajo la clave: ';
		html+=($("#F2_7R1").val()).toUpperCase();
		html+='</p>';
	}

	html+='<p>';

	html+='E) Que los recursos económicos que destinará para dar cumplimiento al presente Contrato son de procedencia lícita, en cumplimiento con lo establecido por la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita.';

	html+='</p>';
 

 	html+='<p>';
 	
 	if ($('input:radio[name=F2_8]:checked').val() == 'a') {

 		html+='A) Ser una persona moral mexicana según consta en instrumento público número ';
 		html+=($("#F2_9R1").val()).toLowerCase();
 		html+=', ';
 		html+=' de fecha ';
 		html+=($("#F2_10R1").val()).toLowerCase();
 		html+=', ';
 		html+=' pasada ante la fe del licenciado';
 		html+=(' '+$("#F2_11R1").val()+' '+$("#F2_11R2").val()+',').toLowerCase();
 		html+=', ';

 		if ($('input:radio[name=F2_12]:checked').val() == 'a') {
 			html+=' "Notario Público" ';
 			html+=', ';


 		}else{

 			html+=' " Corredor Público, número" ';
 			html+=($("#F2_13R1").val()).toLowerCase();
  			html+=', ';
 			html+=' " en " ';
 			html+=$("#F2_14R1").val()+', '; //ciudad
	 		html+=$("#F2_14R3").val(); //estado
			html+=$("#F2_14R2").val()+', '; //pais 

 		}


 		if ($('input:radio[name=F2_15]:checked').val() == 'a') {
 			html+=' e inscrita en el Registro Público de Comercio de ';
 	 		html+=($("#F2_13R1").val()).toLowerCase();
			
			html+=$("#F2_16R1").val()+', '; //ciudad
	 		html+=$("#F2_16R2").val(); //estado
			html+=$("#F2_16R3").val()+', '; //pais 
		
			html+=' bajo el número ';

			html+=($("#F2_17R1").val()).toLowerCase();
			html+=' de fecha ';
			html+='<td align="center">'+moment($("#F2_18R1").val()).lang("es").format('LL')+'</td>';

 		}else{
 			html+=' A) Ser una Sociedad Mercantil, debidamente constituida conforme a las disposiciones de la legislación mexicana, la cual se encuentra inscrita en el Registro Público del Comercio. ';

 	}

 	}

 	html+='</p>';


 	html+='<p>';


 	if ($('input:radio[name=F2_19]:checked').val() == 'a') {

 	html+=' B) Que su apoderado legal acredita su personalidad mediante el testimonio notarial número ';
 	html+=($("#F2_20R1").val()).toLowerCase();
	html+=', ';
 	html+=' pasado ante la fe del licenciado ';
  	html+=(' '+$("#F2_21R1").val()+' '+$("#F2_11R2").val()+',').toUpperCase();
 	html+=' Notario Público número ';
 	html+=($("#F2_22R1").val()).toLowerCase();
	html+=', ';
 	html+=' en ';
 	html+=($("#F2_22R1").val()).toLowerCase();
	
	html+=$("#F2_23R1").val()+', '; //ciudad
	html+=$("#F2_23R2").val(); //estado
	html+=$("#F2_23R3").val()+', '; //pais 
 	
 	html+=' Que se identifica con: ';
  	html+=($("#F2_24").val());
	html+=', ';
	html+=' documento que se anexa en copia simple al presente Contrato. ';


 	}else{

 		html+=' B) Que su apoderado legal cuenta con las facultades suficientes para obligarse en los términos del presente Contrato, las cuales no le han sido revocadas, modificadas ni limitadas, de forma alguna, en todo o en parte. Que se identifica con: ';
		html+=($("#F2_24").val());
		html+=' documento que se anexa en copia simple al presente Contrato. ';

 	}

 	html+='</p>';

 	html+='<p>';

 	html+= ' C) Que señala como domicilio para efectos del presente Contrato el ubicado en ';
  	html+=($("#F2_24").val());


	html+='calle '+($("#F2_25R1").val()).charAt(0).toUpperCase()+($("#F2_25R1").val()).slice(1)+', '; //calle
	html+='número exterior '+($("#F2_25R2").val()).toLowerCase()+', '; //numero ext

	if($("#F2_25R3").val() !='') {
	html+='número interior '+($("#F2_25R3").val()).toLowerCase()+', '; //numero int
	}

	html+='colonia '+($("#F2_25R4").val()).charAt(0).toUpperCase()+($("#F2_25R4").val()).slice(1)+', '; //colonia
	html+='C.P. '+($("#F2_25R5").val())+', '; //cp
	
	html+=$("#F2_25R6").val()+', '; //ciudad
	 html+=$("#F2_25R7").val(); //estado
	html+=$("#F2_25R8").val()+', '; //pais 



 	
	if ($('input:radio[name=F2_26]:checked').val() == 'a') {

		html+= ' Así como la siguiente dirección de correo electrónico ';

		html+=($("#F2_27R1").val()).toLowerCase();

	}

	if ($('input:radio[name=F2_28]:checked').val() == 'a') {
		
		html+= ' D) Que se encuentra inscrito en el Registro Federal de Contribuyentes bajo la Clave: ';
 		html+=($("#F2_29R1").val()).toLowerCase();

	}


	html+='<p';
	html+= ' E) Que es su deseo obligarse en los términos y condiciones del presente Contrato, manifestando que cuenta con la capacidad legal para la celebración de este Contrato. ';
	html+='</p';



	html+='<p';

	html+= ' F) Que los recursos económicos que destinará para dar cumplimiento al presente Contrato son de procedencia lícita, en cumplimiento con lo establecido por la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita. ';

	html+='</p';


// //fin seccion 2




// //inicio seccion 3



// //if pregunta 5

	if ($('input:radio[name=F1_5]:checked').val() == 'a') {

	html+='<p>'
	html+='b'
	html+= 'II. Declara “EL COMISIONISTA”, por su propio derecho y bajo protesta de decir verdad: ';
	html+='/b'
	html+='</p>'

	
	html+='<p>'


	html+= ' A) Ser una persona física, de nacionalidad ';

	if ($('input:radio[name=F3_1]:checked').val() == 'a') {

		html+= ' mexicana ';


	}else{
		html+=($("#F3_1R3").val()).toLowerCase();
		html+= ' mayor de edad, que es su voluntad y cuenta con las capacidades legales y suficientes para sujetarse a las condiciones del presente Contrato. ';
	
	html+='</p>'


	html+='<p>'
	html+= ' B) Que se identifica con: ';
	html+=($("#F3_2").val()).toLowerCase();
	html+= ' documento que se anexa en copia simple al presente Contrato. ';
	html+='</p>'



	html+='<p>'
	html+= ' C) Que señala como domicilio para efectos del presente Contrato el ubicado en ';
	html+=($("#F3_2").val()).toLowerCase();



	html+='calle '+($("#F3_3R1").val()).charAt(0).toUpperCase()+($("#F3_3R1").val()).slice(1)+', '; //calle
	html+='número exterior '+($("#F3_3R2").val()).toLowerCase()+', '; //numero ext

	if($("#F2_25R3").val() !='') {
	html+='número interior '+($("#F3_3R3").val()).toLowerCase()+', '; //numero int
	}
	html+='colonia '+($("#F3_3R4").val()).charAt(0).toUpperCase()+($("#F3_3R4").val()).slice(1)+', '; //colonia
	html+='C.P. '+($("#F3_3R5").val())+', '; //cp
	
	html+=$("#F3_3R6").val()+', '; //ciudad
	html+=$("#F3_3R7").val(); //estado
	html+=$("#F3_3R8").val()+'. '; //pais 




	if ($('input:radio[name=F3_4]:checked').val() == 'a') {

		html+= ' Así como la siguiente dirección de correo electrónico ';
		html+=($("#F3_5R1").val()).toLowerCase();

	}

	html+='</p>'


	}
	}





	html+='<p>'

	if ($('input:radio[name=F3_6]:checked').val() == 'a') {

		html+= ' D) Que se encuentra Inscrito en el Registro Federal de Contribuyentes bajo la clave: ';
		html+=($("#F3_7R1").val()).toLowerCase();
	

	html+='</p>'


	html+='<p>'

	html+= ' E) Que los recursos económicos que destinará para dar cumplimiento al presente Contrato son de procedencia lícita, en cumplimiento con lo establecido por la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita. ';

	html+='</p>'



// //else pregunta 5
}else{






	html+='<p>'
	html+='<b>'

	html+= ' II. Declara “EL COMISIONISTA”, por conducto de su apoderado legal, y bajo protesta de decir verdad: ';
	
	html+='</p>'
	html+='</b>'

	

	html+='<p>'
 }



//if pregunta 8
	
	if ($('input:radio[name=F3_8]:checked').val()=='a'){


	html+= ' A) Ser una persona moral mexicana según consta en instrumento público número ';
	html+=($("#F3_9R1").val()).toLowerCase();
	html+=', ';
	html+= ' de fecha ';
	html+=($("#F3_10R1").val()).toLowerCase();
	html+=', ';
	html+= 'pasada ante la fe del licenciado ';
	html+=($("#F3_10R1").val()).toLowerCase();
	html+=(' '+$("#F3_11R1").val()+' '+$("#F3_11R2").val()+',').toUpperCase();

//if pregunta 12
	if ($('input:radio[name=F3_12]:checked').val()=='a') {

	html+='"Notario Público",';

	}else{
		
		html+= ' "Corredor Público”, número" ';
		html+=($("#F3_13R1").val()).toLowerCase();
		html+=', ';
		html+= ' en ';
		
		html+=$("#F3_14R1").val()+', '; //ciudad
		html+=$("#F3_14R2").val(); //estado
		html+=$("#F3_14R3").val()+', '; //pais 

	}

 }

// 	//if pregunta 15

	if ($('input:radio[name=F3_15]:checked').val()=='a') {
		

		html+= ' e inscrita en el Registro Público de Comercio de ';
		
		html+=$("#F3_16R1").val()+', '; //ciudad
		html+=$("#F3_16R2").val(); //estado
		html+=$("#F3_16R3").val()+', '; //pais 
		
		html+= ' bajo el número ';

		html+=($("#F3_17R1").val()).toLowerCase();
		html+= ' de fecha ';
		html+='<td align="center">'+moment($("#F3_18R1").val()).lang("es").format('LL')+'</td>';
// 	}

html+='</p>'

html+='<p>'

// //else pregunta 8



	}else{


	html+= ' A) Ser una Sociedad Mercantil, debidamente constituida conforme a las disposiciones de la legislación mexicana, la cual se encuentra inscrita en el Registro Público del Comercio. ';


	}

	html+='</p>'


	html+='<p>'


// //if pregunta 19

if ($('input:radio[name=F3_19]:checked').val()=='a') {

	html+= ' B) Que su apoderado legal acredita su personalidad mediante el testimonio notarial número ';
	html+=($("#F3_20R1").val()).toLowerCase();
	html+=', ';
	html+= ' pasado ante la fe del licenciado ';
	html+=(' '+$("#F3_21R1").val()+' '+$("#F3_21R2").val()+',').toUpperCase();
	html+= ' Notario Público número ';
	html+=($("#F3_22R1").val()).toLowerCase();
	html+=', ';
	html+= 'en ';
	html+=($("#F3_22R1").val()).toLowerCase();

	html+=$("#F3_23R1").val()+', '; //ciudad
	html+=$("#F3_23R2").val(); //estado
	html+=$("#F3_23R3").val()+'. '; //pais 

	html+= ' Que se identifica con: ';

	html+=($("#F3_24").val())
	html+=', ';
	html+= ' documento que se anexa en copia simple al presente Contrato. ';


//else pregunta 19
}else{

	html+= ' B) Que su apoderado legal cuenta con las facultades suficientes para obligarse en los términos del presente Contrato, las cuales no le han sido revocadas, modificadas ni limitadas, de forma alguna, en todo o en parte. Que se identifica con: ';
	html+=($("#F3_24").val())
	html+=', ';
	html+='documento que se anexa en copia simple al presente Contrato.';

}

html='</p>'

html='<p>'


	html+=' C) Que señala como domicilio para efectos del presente Contrato el ubicado en';
	
	html+='calle '+($("#F3_25R1").val()).charAt(0).toUpperCase()+($("#F3_25R1").val()).slice(1)+', '; //calle
	html+='número exterior '+($("#F3_25R2").val()).toLowerCase()+', '; //numero ext

	if($("#F2_25R3").val() !='') {
	html+='número interior '+($("#F3_25R3").val()).toLowerCase()+', '; //numero int
	}
	html+='colonia '+($("#F3_25R4").val()).charAt(0).toUpperCase()+($("#F3_25R4").val()).slice(1)+', '; //colonia
	html+='C.P. '+($("#F3_25R5").val())+', '; //cp
	
	html+=$("#F3_25R6").val()+', '; //ciudad
	html+=$("#F3_25R7").val(); //estado
	html+=$("#F3_25R8").val()+'. '; //pais 




// //if pregunta 26
	if ($('input:radio[name=F3_26]:checked').val()=='a') {

		html+=' Así como la siguiente dirección de correo electrónico ';
		html+=($("#F3_27R1").val()).toLowerCase();
		html+='. ';

	}

	html+='</p>'

	html+='<p>'

//if pregunta 28
	if ($('input:radio[name=F3_28]:checked').val()=='a') {

		html+=' D) Que se encuentra inscrito en el Registro Federal de Contribuyentes bajo la Clave: ';
		html+=($("#F3_29R1").val()).toLowerCase();
		html+='. ';

	}

	html+='</p>'

	html+='<p>'

	html+='  E) Que es su deseo obligarse en los términos y condiciones del presente Contrato, manifestando que cuenta con la capacidad legal para la celebración de este Contrato.';

	html+=' F) Que los recursos económicos que destinará para dar cumplimiento al presente Contrato son de procedencia lícita, en cumplimiento con lo establecido por la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita. ';

	html+='</p>'	


	html+=' Expuesto lo anterior, las partes se sujetan al contenido de las siguientes: ';



	html+='<div style="text-align: center;">';
	html+='<b><u> C L A U S U L A S :  :<b><u>';
	html+='</div>';


//termine esto a las 4:14 am del dia 04 sep 21 




// //FASE 4 


	html+='<p>'
	html+='<b>'
	html+=' PRIMERA. OBJETO.- "EL COMITENTE" ';
	html+='</b>'
	html+=' confiere en este acto a ';
	html+='<b>'
	html+=' "EL COMISIONISTA", ';
	html+='</b>'
	html+=' el mandato mercantil para que en nombre y representación de este último, gestione los actos de comercio consistentes en ';
	html+=($("#F4_1R1").val()).toLowerCase();
	html+=' respetando los precios, términos, condiciones de pago y especificaciones que le sean impuestas. ';
	html+='</p>'


	html+='<p>'
	html+=' En el ejercicio de sus funciones ';
	html+='<b>'
	html+=' “EL COMISIONISTA” ';
	html+='</b>'
	html+=' tendrá la plena libertad de decidir sus horarios y los días en que descansará. ';

// //fase 5

	html+='<p>'
	html+='<b>'
	html+=' SEGUNDA. CONTRAPRESTACIÓN Y FORMA DE PAGO.- "EL COMITENTE" ';
	html+='</b>'
	html+=' pagará a ';
	html+='<b>'
	html+=' "EL COMISIONISTA" ';
	html+='</b>'
	html+=' por concepto de la comisión mercantil objeto del presente instrumento, ';


// 	// if pregunta 5_1

	//preguntar sobre los llamdados de variables en especifico 


	if ($('input:radio[name=F5_1]:checked').val()=='a') {

	html+=' la cantidad total equivalente a ';
	html+=($("#F4_1R1").val()).toLowerCase();
	html+=' . ';
	}


// //if pregunta 5_2


	if ($('input:radio[name=F5_2]:checked').val()=='a') {
	
		html+=' "más el correspondiente Impuesto al Valor Agregado" ';

	}else{

		html+=' “la cual no incluye el correspondiente Impuesto al Valor Agregado”. ';

	}



// //if pregunta 5_2

	if ($('input:radio[name=F5_1]:checked').val()=='b') {
	html+=' el ';
	html+=($("#F2_5").val()).toLowerCase();

	}


	if ($('input:radio[name=F5_2]:checked').val()=='a') {
	html+=' “más el correspondiente Impuesto al Valor Agregado” ';

	}

	if ($('input:radio[name=F5_2]:checked').val()=='b') {
	html+=' “el cual no incluye el correspondiente Impuesto al Valor Agregado”, sobre las ganancias totales por la comisión, ';

	}

	html+=' que será pagada(o) de la forma que a continuación se describe: ';


	html+='</p>'


// //tabla 


	html+='<p>';
		html+='<div style="text-align: center;">';
		html+='<table style="margin: 0 auto;" border="1">';
		html+='<tr>';
		html+='<td align="center">Exhibición</td>';
		html+='<td align="center">Cantidad</td>';
		html+='<td align="center">Fecha</td>';
		html+='<td align="center">Método de Pago</td>';
		html+='</tr>';
		html+='<tr>';
		html+='<td align="center">'+$("#F5_3R1").val()+'</td>';
		html+='<td align="center">';


		html+='$'+$('#F5_3R2').val();
        if($("#F5_3R2").val().indexOf('.') != -1){
			html+=''
		}else{
			html+='.00';
		}
        html+=' (';


        if ($("#F5_3R3").val()=='M.N.') {
			html+=NumeroALetrasMX($("#F5_3R4").val()).toUpperCase()+' ';
		}else{
			html+=NumeroALetrasUSD($("#F5_3R4").val()).toUpperCase()+' ';
		}

		if($("#F5_3R5").val().indexOf('.') != -1){
			html+=$("#F5_3R5").val().split('.')[1]+'/100 ';
		}else{
			html+='00/100 ';
		}
			
		var html2 = ''
		html2+= $("#F5_3R3").val();
		html2+=') ';
		html2+='</td>';
		html2+=moment($("#F5_3R4").val()).lang("es").format('LL');;
		html2+='<td align="center">'+$("#F5_3R5").val()+'</td>';
		html2+='</tr>';
		html2+='</table>';
		html2+='</div>';
		html2+='</p>';
		


	html2+='<p>';


	if ($('input:radio[name=F5_4]:checked').val()=='a') {
	html2+=' Quedando ';
	html2+='<b>';
	html2+=' "EL COMISIONISTA" ';
	html2+='</b>';
	html2+=' obligado a expedir la factura por las cantidades que se aprecian en el párrafo anterior, dentro de los ';
	html2+=$("#F5_5R1").val();
	html2+=' ('+NumeroALetrasDias($("#F5_5R1").val())+')';
	html2+=' días naturales siguientes a la fecha en que se haya realizado el pago. ';
	}
	html2+='</p>';


// //fase 6


	html2+='<p>';
	html2+='<b>';
if ($('input:radio[name=F5_1]:checked').val()=='a') {
	html2+=' TERCERA. INTERÉS MORATORIO.- ';
	html2+='</b>';
	html2+=' En caso de que ';
	html2+='<b>';
	html2+=' "EL COMITENTE" ';
	html2+='</b>';
	html2+=' incurra en mora en el pago de sus obligaciones de conformidad con lo establecido en la cláusula segunda del presente Contrato, se obliga a cubrir a ';
	html2+='<b>';
	html2+=' "EL COMISIONISTA" ';
	html2+=' un interés moratorio a razón del ';
//checar porcentaje
	html2+=($("#F6_2R1").val()).toLowerCase();
    html2+=' %';
    html2+=' por ciento mensual sobre saldos insolutos, desde que dicha cantidad debió ser cubierta y hasta el pago total de esta. ';

}

	html2+='</p>';
	

// //seccion 7 

	html2+='<p>';
	html2+='<b>';
    html2+=' CUARTA. OBLIGACIONES.- ';
   	html2+='</b>';
    html2+=' Son obligaciones de ';
	html2+='<b>';
    html2+=' "LAS PARTES", ';
   	html2+='</b>';
 	html2+='</p>';
    html2+=' las siguientes: ';
    html2+='</p>';


    html2+=' a) De ';
	html2+='<b>';
    html2+=' "EL COMITENTE": ';
	html2+='</b>';

    html2+=' I. Proporcionar a ';
	html2+='<b>';
    html2+=' "EL COMISIONISTA" ';
	html2+='</b>';

    html2+=' los recursos e información necesarios para que realice su comisión con la mayor diligencia posible. ';

	html2+='</p>';


	html2+='<p>';
    html2+=' II. Proveer a ';
	html2+='<b>';
    html2+=' "EL COMISIONISTA" ';
	html2+='</b>';
    html2+=' los fondos necesarios para el cumplimiento de la comisión. ';
	html2+='</p>';


	html2+='<p>';
    html2+=' III. Cumplir con la contraprestación acordada de conformidad con la cláusula segunda de este instrumento.  ';
	html2+='</p>';



    html2+=' b) De ';
	html2+='<b>';
    html2+=' "EL COMISIONISTA": ';
	html2+='</b>';


	html2+='<p>';

    html2+=' I. Cumplir cabalmente con la comisión impuesta por ';
	html2+='<b>';
    html2+=' "EL COMITENTE" ';
	html2+='</b>';
    html2+=' en los términos establecidos en las cláusulas del presente Contrato. ';
	html2+='</p>';

 	

	html2+='<p>';
    html2+=' II. Concluir toda gestión que en el desempeño de la comisión hubiese iniciado. ';
	html2+='</p>';


	html2+='<p>';
    html2+=' III. Desempeñar por si la comisión que ha recibido mediante el presente Contrato. ';
	html2+='</p>';


	html2+='<p>';
    html2+=' IV. Sujetarse a la solicitud e instrucciones de ';
	html2+='<b>';
    html2+=' "EL COMITENTE" ';
	html2+='</b>';
    html2+=' y en ningún caso proceder contra disposiciones o intereses contrarios a la comisión que le fue conferida. ';


 
  	html2+='<p>';
    html2+=' Lo anterior sin perjuicio del cumplimiento de las demás obligaciones establecidas en este instrumento a cargo de ';
	html2+='<b>';
    html2+=' "LAS PARTES". ';
  	html2+='</p>';


// //fase 8

  	html2+='<p>';


	if ($('input:radio[name=F8_1]:checked').val()=='a') {

	html2+='<b>';
    html2+=' QUINTA. RESCISIÓN. ';
	html2+='</b>';

    html2+=' El incumplimiento de cualquiera de las obligaciones de ';
	html2+='<b>';
    html2+=' "EL COMITENTE" ';
	html2+='</b>';
    html2+=' establecidas en este Contrato, dará lugar a ';
	html2+='<b>';
    html2+=' "EL COMISIONISTA" ';
	html2+='</b>';

    html2+=' a solicitar la rescisión del presente Contrato, si no fuere subsanable; y si lo fuere, la parte que incumpla deberá subsanarlo en un periodo máximo de 15 quince días naturales contados a partir de la notificación, que por escrito o cualquier otro medio que ';
	html2+='<b>';
    html2+=' "LAS PARTES" ';
	html2+='</b>';
    html2+=' acuerden en el presente instrumento, se realice a la parte que incumplió; la falta de cumplimiento dentro de dicho plazo, será considerada como condición resolutoria para la vigencia de este Contrato; y este se tendrá por rescindido sin responsabilidad para la parte afectada sin que medie declaración y/o resolución judicial al respecto. ';
  	html2+='</p>';

  	html2+='<p>';

	html2+='<b>';
    html2+=' "LAS PARTES" ';
	html2+='</b>';
    html2+=' acuerdan que pese a la rescisión, subsistirán los derechos y las obligaciones adquiridas, y que podrán ser exigidas a través de todos los medios legales que la contraparte estime necesarios. ';
  	html2+='</p>';

	}




  	html2+='<p>';

	if ($('input:radio[name=F8_1]:checked').val()=='b') {

		html2+='<b>';
    	html2+=' QUINTA. RESCISIÓN. ';
		html2+='</b>';
    	html2+=' El incumplimiento de cualquiera de las obligaciones de ';
		html2+='<b>';
		html2+=' "EL COMISIONISTA" ';
		html2+='</b>';
    	html2+=' establecidas en este Contrato, dará lugar a ';
		html2+='<b>';
		html2+=' "EL COMITENTE" ';
		html2+='</b>';
		html2+=' a solicitar la rescisión del presente Contrato, si no fuere subsanable; y si lo fuere, la parte que incumpla deberá subsanarlo en un periodo máximo de 15 quince días naturales contados a partir de la notificación, que por escrito o cualquier otro medio que ';
		html2+='</p>';
  		html2+='<p>';
		html2+='<b>';
		html2+=' "LAS PARTES" ';
		html2+='</b>';
		html2+=' acuerden en el presente instrumento, se realice a la parte que incumplió; la falta de cumplimiento dentro de dicho plazo, será considerada como condición resolutoria para la vigencia de este Contrato; y este se tendrá por rescindido sin responsabilidad para la parte afectada sin que medie declaración y/o resolución judicial al respecto. ';
		html2+='</p>';


		html2+='<p>';
		html2+='<b>';
		html2+=' "LAS PARTES" ';
		html2+='</b>';

		html2+=' acuerdan que pese a la rescisión, subsistirán los derechos y las obligaciones adquiridas, y que podrán ser exigidas a través de todos los medios legales que la contraparte estime necesarios. ';
		html2+='</p>';


	}

	


	html2+='<p>';


	if ($('input:radio[name=F8_1]:checked').val()=='c') {

		html2+='<b>';
		html2+=' QUINTA. RESCISIÓN. ';
		html2+='</b>';
		html2+=' El incumplimiento de ';
		html2+='<b>';
		html2+=' "LAS PARTES" ';
		html2+='</b>';
		html2+=' a cualquiera de las obligaciones establecidas en este Contrato, dará lugar a la parte afectada a solicitar la rescisión del presente Contrato, si no fuere subsanable; y si lo fuere, la parte que incumpla deberá subsanarlo en un periodo máximo de 15 quince días naturales contados a partir de la notificación, que por escrito o cualquier otro medio que ';
		html2+='<b>';
		html2+=' "LAS PARTES" ';
		html2+='</b>';
		html2+=' acuerden en el presente instrumento, se realice a la parte que incumplió; la falta de cumplimiento dentro de dicho plazo, será considerada como condición resolutoria para la vigencia de este Contrato; y este se tendrá por rescindido sin responsabilidad para la parte afectada sin que medie declaración y/o resolución judicial al respecto. ';

		html2+='<b>';
		html2+=' "LAS PARTES" ';
		html2+='</b>';

		html2+=' acuerdan que pese a la rescisión, subsistirán los derechos y las obligaciones adquiridas, y que podrán ser exigidas a través de todos los medios legales que la contraparte estime necesarios. ';

	}




// //fase 9



		if ($('input:radio[name=F9_1]:checked').val()=='a') {


			if ($('input:radio[name=F9_1]:checked').val()=='a') {
				html2+='<p>';
				html2+='<b>';
				html2+=' SEXTA. PENA CONVENCIONAL.- ';
				html2+='</b>';
				html2+=' De común acuerdo ';
				html2+='<b>';
				html2+=' "LAS PARTES" ';
				html2+='</b>';
				html2+=' establecen que, derivado del incumplimiento de cualquiera de las obligaciones señaladas dentro del presente Contrato por parte de ';
				html2+='<b>';
				html2+=' "EL COMITENTE", ';
				html2+='</b>';
				html2+=' este se hará acreedor de una pena convencional consistente en ';
				html2+=$("#F9_3").val();
				html2+=$("#F9_3R6").val();
				html2+=' , ';
				html2+=' la cual podrá ser exigida de manera inmediata al momento de presentarse el incumplimiento sin que medie declaración y/o resolución judicial al respecto, mediante simple aviso por escrito entregado a ';
				html2+='<b>';
				html2+=' "EL COMITENTE". ';
				html2+='</b>';
				html2+='</p>';

				html2+='<p>';
				html2+='<b>';
				html2+=' "LAS PARTES" ';
				html2+='</b>';
				html2+=' reconocen que la ejecución de la Pena Convencional anteriormente descrita no impide ni limita el ejercicio de cualquier acción por vía judicial o administrativa que la parte afectada considere correspondiente. ';


			}


			if ($('input:radio[name=F9_1]:checked').val()=='b') {
				html2+='<p>';
				html2+='<b>';
				html2+=' SEXTA. PENA CONVENCIONAL.- ';
				html2+='</b>';
				html2+=' De común acuerdo ';
				html2+='<b>';
				html2+=' "LAS PARTES" ';
				html2+='</b>';
				html2+=' establecen que, derivado del incumplimiento de cualquiera de las obligaciones señaladas dentro del presente Contrato por parte de ';
				html2+='<b>';
				html2+=' "EL COMISIONISTA", ';
				html2+='</b>';
				html2+=' este se hará acreedor de una pena convencional consistente en ';
				html2+=$("#F9_3").val();
				html2+=$("#F9_3R6").val();
				html2+=' , ';
				html2+=' la cual podrá ser exigida de manera inmediata al momento de presentarse el incumplimiento sin que medie declaración y/o resolución judicial al respecto, mediante simple aviso por escrito entregado a ';
				html2+='<b>';
				html2+=' "EL COMISIONISTA". ';
				html2+='</b>';
				html2+='</p>';

				html2+='<b>';
				html2+=' "LAS PARTES" ';
				html2+='</b>';
				html2+=' reconocen que la ejecución de la Pena Convencional anteriormente descrita no impide ni limita el ejercicio de cualquier acción por vía judicial o administrativa que la parte afectada considere correspondiente. ';


			}




			if ($('input:radio[name=F9_1]:checked').val()=='c') {
				html2+='<p>';
				html2+='<b>';
				html2+=' SEXTA. PENA CONVENCIONAL.- ';
				html2+='</b>';
				html2+=' De común acuerdo ';
				html2+='<b>';
				html2+=' "LAS PARTES" ';
				html2+='</b>';
				html2+=' establecen que, derivado del incumplimiento de cualquiera de las obligaciones señaladas dentro del presente Contrato, la parte que incumpla se hará acreedora de una pena convencional consistente en ';
				$('input:radio[name=F9_2]:checked').val()		
				html2+=$("#F9_3R6").val();
				html2+=',  ';
				html2+=' la cual podrá ser exigida de manera inmediata al momento de presentarse el incumplimiento sin que medie declaración y/o resolución judicial al respecto, mediante simple aviso por escrito. ';


				html2+='<b>';
				html2+='“LAS PARTES” ';
				html2+='</b>';
				html2+=' reconocen que la ejecución de la Pena Convencional anteriormente descrita no impide ni limita el ejercicio de cualquier acción por vía judicial o administrativa que la parte afectada considere correspondiente. ';
			    html2+='</p>';


			}



		}





// 	//fase 10

	html2+='<p>';
	

	if($('input:radio[name=F10_1]:checked').val()=='a'){
		html2+='<b>';
		html2+=' SÉPTIMA. VIGENCIA. "LAS ¨PARTES" ';
		html2+='</b>';
		html2+=' acuerdan que el presente Contrato tendrá una vigencia de ';
		$('input:radio[name=F10_2]:checked').val()		
		html2+=' contado a partir de ';
		html2+='<td align="center">'+moment($("#F10_3R1").val()).lang("es").format('LL')+'</td>';
		html2+=' y terminando el día ';
		html2+='<td align="center">'+moment($("#F10_4R1").val()).lang("es").format('LL')+'</td>';

			
	}else{
		html2+='<b>';
		html2+=' SÉPTIMA. VIGENCIA. "LAS ¨PARTES" ';
		html2+='</b>';
		html2+=' acuerdan que el presente Contrato será por Tiempo Indefinido, en tanto se cumpla el objeto materia del presente Contrato o ';
		html2+='<b>';
		html2+=' "LAS PARTES" ';
		html2+='</b>';
		html2+=' decidan darlo por terminado. ';

	}

	html2+='</p>';

	
// //fase 11

		html2+='<p>';


		html2+='<b>';
		html2+=' OCTAVA. NO EXISTENCIA DE RELACIÓN LABORAL.- “LAS PARTES” ';
		html2+='</b>';
		html2+=' están de acuerdo y reconocen que el presente Contrato es de naturaleza mercantil, por lo que no crea ningún tipo de relación laboral alguna entre ';
		html2+='<b>';
		html2+=' "LAS PARTES", ';
		html2+='</b>';
		html2+=' ni entre una Parte y los empleados, agentes, apoderados, comisionistas o subcontratistas de la otra Parte, cada una de ';
		html2+='<b>';
		html2+=' "LAS PARTES", ';
		html2+=' como patrón del personal que ocupe con motivo de la celebración del presente Contrato, será la única responsable de las obligaciones derivadas de las disposiciones legales y demás ordenamientos aplicables en materia de trabajo y seguridad social respecto de dicho personal, por lo que estas acuerdan que no tendrán ninguna responsabilidad de carácter civil, mercantil, laboral, fiscal o de cualquier otra índole respecto de los trabajadores, agentes, apoderados, comisionistas o subcontratistas de dicha parte. ';

		html2+='</p>';
	
		html2+='<p>';

		html2+=' En consecuencia, ';
		html2+='<b>';
		html2+=' "LAS PARTES", ';
		html2+='</b>';
		html2+=' se comprometen en este acto a sacar a la otra Parte en paz y a salvo de cualquier contingencia, reclamación, procedimiento, demanda o juicio de orden laboral, civil, mercantil, penal, fiscal o administrativo, derivadas de la relación que guarden con dicho personal, empleados, agentes, apoderados, comisionistas o subcontratistas, siendo responsable de los gastos que dicha acción genere. ';

		html2+='</p>';



// //fase 12


	html2+='<p>';
	html2+='<b>';
	html2+=' NOVENA.TERMINACIÓN.- "LAS PARTES"; ';
	html2+='</b>';
	html2+=' acuerdan que una vez que se hayan cumplido plenamente con todas y cada una de las obligaciones estipuladas en el presente instrumento operará automáticamente su terminación. ';
	html2+='</p>'


// //fase 13


	html2+='<p>';

	if ($('input:radio[name=F13_1]:checked').val()=='a') {
		html2+='<b>';
		html2+=' DÉCIMA. PRIMERA. CESIÓN DE DERECHOS. ';
		html2+='</b>';
		html2+=' De común acuerdo ';
		html2+='<b>';
		html2+='"LAS PARTES"; ';
		html2+='</b>';
		html2+=' establecen que ';
		html2+='<b>';
		html2+=' "EL COMITENTE" ';
		html2+='</b>';
		html2+=' podrá transferir, ceder o delegar en todo o en parte los derechos u obligaciones que deriven del presente Contrato en favor de terceros, para lo cual bastará con dar aviso por escrito a la contraparte con una antelación de ';
		html2+=$("#F13_2R1").val();
		html2+=' días naturales. ';

	}
	
	html2+='</p>';

	
	html2+='<p>';

	if ($('input:radio[name=F13_1]:checked').val()=='c') {
		html2+='<b>';
		html2+=' DÉCIMA. PRIMERA.CESIÓN DE DERECHOS. ';
		html2+='</b>';
		html2+=' De común acuerdo ';
		html2+='<b>';
		html2+=' "LAS PARTES" ';
		html2+=' establecen que ambas partes, podrán transferir, ceder o delegar en todo o en parte los derechos u obligaciones que deriven del presente Contrato en favor de terceros, para lo cual bastará con dar aviso por escrito a la contraparte con una antelación de ';
		html2+=$("#F13_2R1").val();
		html2+=' días naturales. ';

	}


	html2+='</p>';

	html2+='<p>';


	if ($('input:radio[name=F13_1]:checked').val()=='d') {
		html2+='<b>';
		html2+=' DÉCIMA PRIMERA. CESIÓN DE DERECHOS. ';
		html2+='</b>';
		html2+=' De común acuerdo ';
		html2+='<b>';
		html2+=' "LAS PARTES" ';
		html2+='</b>';
		html2+=' establecen que ninguna de las partes, podrán transferir, ceder o delegar en todo o en parte los derechos u obligaciones que deriven del presente Contrato en favor de terceros. ';

	}



// 	//fase 14
	
	html2+='<p>';

	if ($('input:radio[name=F14_1]:checked').val()=='a') {
		html2+='<b>';
		html2+=' DÉCIMA PRIMERA. EXCLUSIVIDAD DE LA RELACIÓN.- “LAS PARTES” ';
		html2+='</b>';
		html2+=' acuerdan que la comisión será ejecutada por ';
		html2+='<b>';
		html2+=' "EL COMISIONISTA" ';
		html2+='</b>';
		html2+=' de manera profesional, independiente y exclusiva, por lo que ';
		html2+='<b>';
		html2+=' "LAS PARTES" ';
		html2+='</b>';
		html2+=' acuerdan que ';
		html2+='<b>';
		html2+=' "EL COMITENTE" ';
		html2+='</b>';
		html2+=' no podrá celebrar con terceros Contratos de comisión mercantil, prestación de servicios o cualquier otro instrumento por virtud del cual encomiende la promoción para realización de los actos de comercio antes referidos por ';
		html2+='<b>';
		html2+=' "EL COMISIONISTA". ';

	}


	if ($('input:radio[name=F14_1]:checked').val()=='b') {
		html2+='<b>';
		html2+=' DÉCIMA PRIMERA. NO EXCLUSIVIDAD DE LA RELACIÓN.- "LAS PARTES" ';
		html2+='</b>';
		html2+=' acuerdan que la comisión será ejecutada por ';
		html2+='<b>';
		html2+=' "EL COMISIONISTA" ';
		html2+='</b>';
		html2+=' de manera profesional, independiente y no exclusiva, por lo que ';
		html2+='<b>';
		html2+=' "LAS PARTES" ';
		html2+='</b>';
		html2+=' acuerdan que ';
		html2+='<b>';
		html2+=' "EL COMITENTE" ';
		html2+='</b>';
		html2+=' podrá celebrar con terceros Contratos de comisión mercantil, prestación de servicios o cualquier otro instrumento por virtud del cual encomiende la promoción para realización de los actos de comercio antes referidos por ';
		html2+='<b>';
		html2+=' "EL COMISIONISTA". ';
		html2+='</b>';

	}



// 	//fase 15

		html2+='<p>';
		html2+='<b>';

		html2+=' DÉCIMA SEGUNDA. NOTIFICACIONES.- "LAS PARTES" ';
		html2+=' acuerdan que las notificaciones, requerimientos, peticiones y otras comunicaciones que deban de efectuarse en relación con el presente Contrato, se realizarán por escrito y se entenderán que son válidas cuando: ';
		html2+='</b>';		
		
		html2+='</p>';


		html2+='<p>';
		html2+=' 1. Se entreguen o envíen personalmente en el domicilio o en el correo electrónico estipulado por la parte que deba ser notificada. En el caso del correo electrónico, este deberá ser acusado de recibo. ';
		html2+='</p>';


		html2+='<p>';
		
		html2+=' 2. Se envíen por correo certificado al domicilio señalado por cada una de ';
		html2+='<b>';
		html2+=' "LAS PARTES" ';
		html2+='</b>';		
		html2+=' en las declaraciones de este instrumento. ';

		html2+='</p>';



// //fase 16



	if ($('input:radio[name=F16_1]:checked').val()=='a') {
		html2+='<p>';

		html2+='<b>';
		html2+=' DÉCIMA TERCERA. CONFIDENCIALIDAD.- "LAS PARTES" ';
		html2+='</b>';		
		html2+=' establecen que el conjunto de los comunicados, informaciones y/o documentos, a los que tengan acceso ';
		html2+='<b>';
		html2+=' "EL COMISIONISTA” y “EL COMITENTE" ';
		html2+='</b>';
		html2+=' son estrictamente confidenciales. ';
		
		html2+='</p>';

		html2+='<p>';
		html2+=' En consecuencia cada una de ';
		html2+='<b>';
		html2+=' "LAS PARTES" ';
		html2+='</b>';
		html2+=' se compromete a preservar el carácter confidencial de los comunicados, las informaciones y/o los documentos entregados por la otra parte; y, en no divulgar parcial o totalmente a terceros el contenido de estos, sin autorización expresa de la otra parte. ';

		html2+='</p>';

		html2+='<p>';

		html2+=' Además cada una de ';
		html2+='<b>';
		html2+=' "LAS PARTES" ';
		html2+='</b>';
		html2+=' se compromete en tomar todas las medidas, tanto frente a sus familiares, partes relacionadas y/o cualquier tercera persona para limitar la divulgación de la información confidencial. ';

		html2+='</p>';


	}


// 	//seccion 17 


	html2+='<p>';

	html2+='<b>';
	html2+=' DÉCIMA CUARTA. ACUERDO TOTAL, MODIFICACIONES Y VALIDEZ. ';
	html2+='</b>';
	html2+='Este Contrato y, en su caso, sus respectivos anexos, constituyen el acuerdo total entre ';
	html2+='<b>';
	html2+=' "LAS PARTES". ';
	html2+='</b>';
	
	html2+='</p>';



	html2+='<p>';

	html2+='<b>';
	html2+=' "LAS PARTES" ';
	html2+='</b>';

	html2+=' manifiestan que en la celebración del presente instrumento no existe error, dolo, lesión o mala fe de alguna de ';
	html2+='<b>';
	html2+=' "LAS PARTES", ';
	html2+='</b>';
	html2+=' por lo que, desde este momento renuncian a interponer cualquier clase de recurso que pretenda invalidarlo. Este Contrato solo puede ser modificado por acuerdo escrito firmado por ambas partes. ';

	html2+='</p>';
		
	html2+='<p>';
	html2+=' Si cualquier parte o disposición contenida en este documento es declarada inválida o inaplicable, dicha parte o disposición quedará sin efecto, sin que de ninguna manera se afecte la validez del resto de las disposiciones del Contrato. ';
	html2+='</p>';



// 	//fase 18

	html2+='<p>';
	html2+='<b>';
	html2+='DÉCIMA QUINTA. ENCABEZADOS. ';
	html2+='</b>';

	html2+=' Los encabezados de las cláusulas del presente Contrato se han colocado para conveniencia de ';
	html2+='<b>';
	html2+=' "LAS PARTES" ';
	html2+='</b>';

	html2+=' con el exclusivo objeto de facilitar su lectura y localización, por tanto no necesariamente define ni limitan el contenido de dichas cláusulas. ';
	html2+='</p>';


	html2+='<p>';
	html2+=' Para la interpretación de cada cláusula deberá atenderse exclusivamente a su contenido, y de ninguna manera a su título, por lo que no afectará la interpretación y validez de este instrumento, ni los términos, condiciones, derechos u obligaciones establecidos en el presente Contrato. ';
	html2+='</p>';


// //fase 19 

	html2+='<p>';
	html2+='<b>';
	html2+=' DÉCIMA SEXTA. PRÁCTICAS ANTICORRUPCIÓN. "LAS PARTES" ';
	html2+='</b>';
	html2+=' garantizan y declaran que en términos de esta transacción, no están actuando directa o indirectamente, para o a nombre de, cualquier persona, grupo, entidad, nación o país que realice o esté en riesgo de realizar cualquier actividad ilícita bajo las leyes mexicanas o internacionales incluyendo, entre otras y sin limitación, financiamiento o actos de terrorismo, narcotráfico, lavado de dinero o cualquier otra actividad ilegal relacionada, así como cualquier otra actividad sujeta a una sanción reconocida por el derecho internacional incluyendo sin limitación las establecidas por la Organización de las Naciones Unidas. ';

	html2+='<b>';
	html2+=' "LAS PARTES" ';
	html2+='</b>';

	html2+=' aceptan y se obligan a que cualquier violación a la presente Cláusula dé lugar a la terminación inmediata del Contrato. ';
	html2+='</p>';



// //fase 20

	html2+='<p>';
	html2+='<b>';
	html2+=' DÉCIMA SÉPTIMA. TRATAMIENTO DE DATOS PERSONALES.- ';
	html2+='</b>';
	html2+=' A partir de este momento ';
	html2+='<b>';
	html2+=' "LAS PARTES" ';
	html2+='</b>';
	html2+=' valoran y reconocen los derechos de privacidad de la información que ambas comparten. Toda la información proporcionada entre ';
	html2+='<b>';
	html2+=' "LAS PARTES" ';
	html2+='</b>';
	html2+=' será tratada con respeto, responsabilidad y privacidad dentro de todos los lineamientos legales y será mantenida de manera que respete los derechos de privacidad de ambas. ';
	html2+='</p>';



// //fase 21

	html2+='<p>';
	html2+='<b>';
	html2+=' DÉCIMA OCTAVA. LEGISLACIÓN Y JURISDICCIÓN LEGISLACIÓN Y JURISDICCIÓN. "LAS PARTES" ';
	html2+='</b>';
	html2+=' se someten expresamente a las leyes aplicables y jurisdicción de los tribunales competentes en ';
	html2+=$("#F19_1R1").val()+', '; //ciudad
	html2+=$("#F19_1R2").val()+', '; //pais 
	html2+=$("#F19_1R3").val(); //estado
	html2+=' , ';
	html2+=' renunciando expresamente a cualquier otra jurisdicción que por razón de sus domicilios presentes o futuros, o por cualquier otra razón pudiere corresponderles. Así mismo, las partes acuerdan que en caso de controversia el presente Contrato será interpretado de conformidad con la legislación de ';
	
	html2+=$("#F19_1R1").val()+', '; //ciudad
	html2+=$("#F19_1R2").val()+', '; //pais 
	html2+=$("#F19_1R3").val(); //estado
	html2+='. ';
	html2+='</p>'



// //fase 20 2 

	html2+='<p>';

	html2+=' EN TESTIMONIO DE LO ANTERIOR, ';
	html2+='<b>';
	html2+=' "LAS PARTES" ';
	html2+='</b>';
	html2+=' firman de común acuerdo el presente Contrato por ';
	$('input:radio[name=F20_1]:checked').val()		
	html2+=' en ';
	html2+=$("#F20_2R1").val()+', '; //ciudad
	html2+=$("#F20_2R2").val()+', '; //pais 
	html2+=$("#F20_2R3").val(); //estado
	html2+=';';
	html2+=' a ';
	html2+='<td align="center">'+moment($("#F20_4R1").val()).lang("es").format('LL')+'</td>';
	html2+=' . ';
	html2+='</p>'

	var html3='';



	
	 	// 	//firmas
	 		html3+='<p>';
	 		html3+='<table style="margin: 0 auto;" width="90%">';
			html3+='<tr>'
			html3+='<td style="text-align: center; height: 90px;"><b>"EL COMITENTE"</b></td>';
			html3+='<td style="text-align: center; height: 90px;"><b>"EL COMISIONISTA"</b></td>';
			html3+='</tr>'
			html3+='<tr>'
			html3+='<td style="text-align: center; height: 90px;">_____________________________</td>'
			html3+='<td style="text-align: center; height: 90px;">_____________________________</td>'
			html3+='</tr>'

			//nombres moral o fisica
			//transmisor y receptor fisicos
			html3+='<tr>';
			if(($('input:radio[name=F1_1]:checked').val()) == 'a' && ($('input:radio[name=F1_5]:checked').val()) == 'a'){
				html3+='<td style="text-align: center;">'+($("#F1_2R1").val()+' '+$("#F1_2R2").val()).toUpperCase()+'</td>';
				html3+='<td style="text-align: center;">'+($("#F1_6R1").val()+' '+$("#F1_6R2").val()).toUpperCase()+'</td>';
			}
			//transmifor fisico y receptor moral
			if(($('input:radio[name=F1_1]:checked').val()) == 'a' && ($('input:radio[name=F1_5]:checked').val()) == 'b'){
				html3+='<td style="text-align: center;">'+($("#F1_2R1").val()+' '+$("#F1_2R2").val()).toUpperCase()+'</td>';
				html3+='<td style="text-align: center;">'+($("#F1_7R1").val()).toUpperCase()+'</td>';
				html3+='</tr>';
				html3+='<tr>';
				html3+='<td></td>';
				html3+='<td style="text-align: center;">POR: '+($("#F1_8R1").val()+' '+$("#F1_8R2").val()).toUpperCase()+'</td>';		
			}
			//transmisor moral y receptor fisico
			if(($('input:radio[name=F1_1]:checked').val()) == 'b' && ($('input:radio[name=F1_5]:checked').val()) == 'a'){
				html3+='<td style="text-align: center;">'+($("#F1_3R1").val()).toUpperCase()+'</td>';
				html3+='<td style="text-align: center;">'+($("#F1_2R1").val()+' '+$("#F1_2R2").val()).toUpperCase()+'</td>';
				html3+='</tr>';
				html3+='<tr>';
				html3+='<td style="text-align: center;">POR: '+($("#F1_4R1").val()+' '+$("#F1_4R2").val()).toUpperCase()+'</td>';
				html3+='<td></td>';
				
			}
			//transmisor moral y receptor moral
			if(($('input:radio[name=F1_1]:checked').val()) == 'b' && ($('input:radio[name=F1_5]:checked').val()) == 'b'){
				html3+='<td style="text-align: center;">'+($("#F1_3R1").val()).toUpperCase()+'</td>';
				html3+='<td style="text-align: center;">'+($("#F1_7R1").val()).toUpperCase()+'</td>';
				html3+='</tr>';
				html3+='<tr>';
				html3+='<td style="text-align: center;">POR: '+($("#F1_4R1").val()+' '+$("#F1_4R2").val()).toUpperCase()+'</td>';				
				html3+='<td style="text-align: center;">POR: '+($("#F1_8R1").val()+' '+$("#F1_8R2").val()).toUpperCase()+'</td>';
			}
			html3+='</tr>';
			//fin nombres moral o fisica
			html3+='</table>';
			html3+='</p>';
			//testigos
			
			
			html3+='<br>';
			if(($('input:radio[name=F20_4]:checked').val()) == 'a'){
				html3+='<div style="text-align: center;">';
		 		html3+='<p>';
		 		html3+='<table style="margin: 0 auto;" width="90%">';
				html3+='<tr>';
				html3+='<td style="text-align: center; height: 90px;">"TESTIGO"</td>';
				html3+='<td style="text-align: center; height: 90px;">"TESTIGO"</td>';
				html3+='</tr>';
				html3+='</table>';
				html3+='<table style="margin: 0 auto;" width="90%">'
				html3+='<tr>';
				html3+='<td style="text-align: center; height: 90px;">_____________________________</td>';
				html3+='<td style="text-align: center; height: 90px;">_____________________________</td>';
				html3+='</tr>';
				html3+='<tr>'
				html3+='<td style="text-align: center;">'+($("#F21_4TR1").val()+' '+$("#F21_4TR2").val()).toUpperCase()+'</td>';
				html3+='<td style="text-align: center;">'+($("#F21_4TR3").val()+' '+$("#F21_4TR4").val()).toUpperCase()+'</td>';
				html3+='</tr>';
				html3+='</table>'
				html3+='</p>';
				html3+='</div>';
			}




	//fin fase 20		




	alert(html);
	alert(html2);
	alert(html3);
	$('#html').prop({'value': html});
	$('#html2').prop({'value': html2});
	$('#html3').prop({'value': html3});
	$('#name').prop({'value': 'Contrato Comision'});

  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
})

}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    







