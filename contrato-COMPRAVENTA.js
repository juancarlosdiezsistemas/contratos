function contratoCompraventa(){

var html=''
console.log('contratato');

// $("#btnGenerar").click(function(){
	html+='<p><b>CONTRATO PRIVADO DE COMPRAVENTA QUE CELEBRAN POR UNA PARTE';
	//fase1
	if(($('input:radio[name=F1_1]:checked').val()) == 'a'){
		html+=(' '+$("#F1_2R1").val()+' '+$("#F1_2R2").val()+', ').toUpperCase();
		html+= 'POR SU PROPIO DERECHO, ';
	}
	else{
		html+=(' '+$("#F1_3R1").val()+', ').toUpperCase();
		html+='REPRESENTADA EN ESTE ACTO POR,';
		html+=(' '+$("#F1_4R1").val()+' '+$("#F1_4R2").val()+', ').toUpperCase();

	}

	html+='A QUIEN EN LO SUCESIVO SE LE DENOMINARÁ "EL VENDEDOR", Y POR LA OTRA,';

	if(($('input:radio[name=F1_5]:checked').val()) == 'a'){
		html+=(' '+$("#F1_6R1").val()+' '+$("#F1_6R2").val()+', ').toUpperCase();
		html+= 'POR SU PROPIO DERECHO, ';
	}
	else{
		html+=(' '+$("#F1_7R1").val()+', ').toUpperCase();
		html+='REPRESENTADA EN ESTE ACTO POR,';
		html+=(' '+$("#F1_8R1").val()+' '+$("#F1_8R2").val()+', ').toUpperCase();

	}
	html+='A QUIEN EN LO SUCESIVO SE LE DENOMINARÁ COMO "EL COMPRADOR" Y A QUIENES EN CONJUNTO SE LES DENOMINARÁ "LAS PARTES", AL TENOR DE LAS SIGUIENTES DECLARACIONES Y CLÁUSULAS.</b></p>';
	//fin fase 1

	//fase 2
	html+='<div style="text-align: center;">';
	html+='<b><u>D E C L A R A C I O N E S</b></u>';
	html+='</div>';
	html+='<br>';
	if(($('input:radio[name=F1_1]:checked').val()) == 'a'){
		html+='<p><b>Declara "EL VENDEDOR", por su propio derecho y bajo protesta de decir verdad: </b>';
		html+='</p>';
		html+='<p><b>A) </b>Ser una persona física, de nacionalidad';
		if(($('input:radio[name=F2_1]:checked').val()) == 'a'){
			html+=' mexicana';
		}
		else{
			html+=(' '+$("#F2_1R1").val()).toLowerCase();
		}
		html+=', mayor de edad, que es su voluntad y cuenta con las capacidades legales y suficientes para sujetarse a las condiciones del presente Contrato.';
		html+='</p>';
		
		html+='<p>B) Que se identifica con: ';
		html+=$('input:radio[name=F2_2]:checked').val();
		html+=' documento que se anexa en copia simple al presente Contrato.'
		html+='</p>';

		html+='<p>C) Que señala como domicilio para efectos del presente instrumento el ubicado en ';
		html+='calle '+($("#F2_3R1").val()).charAt(0).toUpperCase()+($("#F2_3R1").val()).slice(1)+', '; //calle
		html+='número exterior '+$("#F2_3R2").val()+', '; //numero ext
		if ($("#F2_3R3").val() !='') {
			html+='número interior '+($("#F2_3R3").val()).toLowerCase()+', '; //numero int
		}
		html+='colonia '+($("#F2_3R4").val()).charAt(0).toUpperCase()+($("#F2_3R4").val()).slice(1)+', '; //colonia
		html+='C.P. '+($("#F2_3R5").val())+', '; //cp
		html+=$("#F2_3R6").val()+', '; //ciudad
		html+=$("#F2_3R7").val(); //estado

		//correo
		if(($('input:radio[name=F2_4]:checked').val()) == 'a'){
			html+='. Así como la siguiente dirección de correo electrónico: ';
			html+= $("#F2_5R1").val()
		}
		html+='.';
		html+='</p>';

		html+='<p>D) Que es el legítimo propietario del(los) bien(es) que se precisa(n) y describe(n) a continuación; y que en lo sucesivo será(n) referido(s) como <b>"EL BIEN".</b></p>';

		//tabla fase 2
		html+='<p>';
		html+='<div style="text-align: center;">';
		html+='<table style="margin: 0 auto;" border="1">';
		html+='<tr>';
		html+='<td align="center">CANTIDAD</td>';
		html+='<td align="center">DESCRIPCIÓN</td>';
		html+='</tr>';
		html+='<tr>';
		html+='<td align="center">'+$("#F2_6R1").val()+'</td>';
		html+='<td align="center">'+$("#F2_6R2").val()+'</td>';
		html+='</tr>';
		html+='</table>';
		html+='</div>';
		html+='</p>';
		if(($('input:radio[name=F2_7]:checked').val()) == 'a'){
			html+='<p>E) Que se encuentra Inscrito en el Registro Federal de Contribuyentes bajo la clave: ';
			html+= $("#F2_8R1").val().toUpperCase();
			html+='</p>';
			html+='<p>F) Que <b>"EL BIEN"</b> objeto del presente Contrato fue adquirido con recursos de procedencia lícita, en cumplimiento de lo establecido por la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita.</p>';
		}else{
			html+='<p>E) Que <b>"EL BIEN"</b> objeto del presente Contrato fue adquirido con recursos de procedencia lícita, en cumplimiento de lo establecido por la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita.</p>'
		}
	}
	if(($('input:radio[name=F1_1]:checked').val()) == 'b'){
		html+='<p><b>I. Declara "EL VENDEDOR", por conducto de su apoderado legal, y bajo protesta de decir verdad:</b></p>';

		if(($('input:radio[name=F2_9]:checked').val()) == 'a'){
			html+='<p>A) Ser una persona moral mexicana según consta en instrumento público número ';
			html+= $("#F2_10R1").val().toUpperCase();
			html+=', de fecha ';
			html+=$("#F2_11R1").val();
			html+=', pasada ante la fe del licenciado ';
			html+=$("#F2_12R1").val().charAt(0).toUpperCase()+$("#F2_12R1").val().slice(1)+' ';
			html+=$("#F2_12R2").val().charAt(0).toUpperCase()+$("#F2_12R2").val().slice(1)+' ';
			html+='"'+$('input:radio[name=F2_13]:checked').val()+'", ';
			html+='número ';
			html+=($("#F2_14R1").val()).toUpperCase();
			html+=', en ';
			html+=$("#F2_15R1").val()+', ';
			html+=$("#F2_15R2").val()+', '+$("#F2_15R3").val();
			if(($('input:radio[name=F2_16]:checked').val()) == 'a'){
				html+=' e inscrita en el Registro Público de Comercio de';
				html+=$("#F2_17R1").val()+', ';
				html+=$("#F2_17R2").val()+', '+$("#F2_17R3").val();
				html+=' bajo el número ';
				html+=$("#F2_18R1").val().toUpperCase();
				html+=' de fecha ';
				html+=moment($("#F2_19R1").val()).lang("es").format('LL');;

			}
			html+='.';
			html+='</p>';
		}else{
			html+='<p>A) Ser una Sociedad Mercantil, debidamente constituida conforme a las disposiciones de la legislación mexicana, la cual se encuentra inscrita en el Registro Público del Comercio.</p>'
		}

		if(($('input:radio[name=F2_20]:checked').val()) == 'a'){
			html+='<p>B) Que su apoderado legal acredita su personalidad mediante el testimonio notarial número ';
			html+=$("#F2_21R1").val();
			html+=', pasado ante la fe del licenciado ';
			html+=$("#F2_22R1").val().charAt(0).toUpperCase()+$("#F2_22R1").val().slice(1)+' ';
			html+=$("#F2_22R2").val().charAt(0).toUpperCase()+$("#F2_22R2").val().slice(1)+' ';
			html+='Notario Público número ';
			html+=$("#F2_23R1").val();
			html+=', en ';
			html+=$("#F2_24R1").val()+', '; //ciudad
			html+=$("#F2_24R2").val()+', '; //estado
			html+=$("#F2_24R3").val(); //país
			html+='. Que se identifica con:';
			html+=$("#F2_25").val(); 
			html+=' , documento que se anexa en copia simple al presente Contrato.';
			html+='</p>';
		}else{
			html+='<p>B) Que su apoderado legal cuenta con las facultades suficientes para obligarse en los términos del presente Contrato, las cuales no le han sido revocadas, modificadas ni limitadas, de forma alguna, en todo o en parte. Quien se identifica con: ';
			html+=$("#F2_25").val();
			html+=', documento que se anexa en copia simple al presente Contrato. ';
			html+='</p>'
		}
		html+='<p>C) QQue es el legítimo propietario del(los) bien(es) que se precisa(n) y describe(n) a continuación; y que en lo sucesivo serán referido(s) como <b>"EL BIEN"</b>:</p> ';
		html+='<p>';
		html+='<div style="text-align: center;">';
		html+='<table style="margin: 0 auto;" border="1">';
		html+='<tr>';
		html+='<td align="center">CANTIDAD</td>';
		html+='<td align="center">DESCRIPCIÓN</td>';
		html+='</tr>';
		html+='<tr>';
		html+='<td align="center">'+$("#F2_26R1").val()+'</td>';
		html+='<td align="center">'+$("#F2_26R2").val()+'</td>';
		html+='</tr>';
		html+='</table>';
		html+='</div>';
		html+='</p>';

		html+='<p>';
		html+='D) Que señala como domicilio para efectos del presente Contrato el ubicado en ';
		html+='calle '+($("#F2_27R1").val()).charAt(0).toUpperCase()+($("#F2_27R1").val()).slice(1)+', '; //calle
		html+='número exterior '+$("#F2_27R2").val()+', '; //numero ext
		if ($("#F2_27R3").val() !='') {
			html+='número interior '+($("#F2_27R3").val())+', '; //numero int
		}
		html+='colonia '+($("#F2_27R4").val()).charAt(0).toUpperCase()+($("#F2_27R4").val()).slice(1)+', '; //colonia
		html+='C.P. '+($("#F2_27R5").val())+', '; //cp
		html+=$("#F2_27R6").val()+', '; //ciudad
		html+=$("#F2_27R7").val(); //estado
		//correo
		if(($('input:radio[name=F2_28]:checked').val()) == 'a'){
			html+='. Así como la siguiente dirección de correo electrónico: ';
			html+= $("#F2_29R1").val()
		}
		html+='.';
		html+='</p>';

		if(($('input:radio[name=F2_30]:checked').val()) == 'a'){
			html+='<p>E) Que se encuentra inscrito en el Registro Federal de Contribuyentes bajo la Clave: ';
			html+= $("#F2_31R1").val().toUpperCase();
			html+='</p>';
			html+='<p>F) Que es su deseo obligarse en los términos y condiciones del presente instrumento, manifestando que cuenta con la capacidad legal para la celebración de este Contrato.</p>';
			html+='<p>G) Que <b>"EL BIEN"</b> objeto del presente Contrato fue adquirido con recursos de procedencia lícita, en cumplimiento de lo establecido por la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita.</p>'
		}else{
			html+='<p>E) Que es su deseo obligarse en los términos y condiciones del presente instrumento, manifestando que cuenta con la capacidad legal para la celebración de este Contrato.</p>';
			html+='<p>F) Que <b>"EL BIEN"</b> objeto del presente Contrato fue adquirido con recursos de procedencia lícita, en cumplimiento de lo establecido por la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita.</p>'
		}
	}
	if(($('input:radio[name=F1_5]:checked').val()) == 'a'){
		html+='<p><b>II. Declara "EL COMPRADOR", por su propio derecho y bajo protesta de decir verdad: <b></p>';
		html+='<p>A) Ser una persona física, de nacionalidad';
		if(($('input:radio[name=F3_1]:checked').val()) == 'a'){
			html+=' mexicana';
		}
		else{
			html+=(' '+$("#F3_1R1").val()).toLowerCase();
		}
		html+=', mayor de edad, que es su voluntad y cuenta con las capacidades legales y suficientes para sujetarse a las condiciones del presente Contrato.'
		html+='</p>';
		html+='<p>B) Que se identifica con: ';
		html+=$("#F3_2").val();
		html+=', documento que se anexa en copia simple al presente Contrato.';
		html+='</p>';

		html+='<p>C) Que señala como domicilio para efectos del presente contrato el ubicado en ';
		html+='calle '+($("#F3_3R1").val()).charAt(0).toUpperCase()+($("#F3_3R1").val()).slice(1)+', '; //calle
		html+='número exterior '+$("#F3_3R2").val()+', '; //numero ext
		if ($("#F3_3R3").val() !='') {
			html+='número interior '+($("#F3_3R3").val())+', '; //numero int
		}
		html+='colonia '+($("#F3_3R4").val()).charAt(0).toUpperCase()+($("#F3_3R4").val()).slice(1)+', '; //colonia
		html+='C.P. '+($("#F3_3R5").val())+', '; //cp
		html+=$("#F3_3R6").val()+', '; //ciudad
		html+=$("#F3_3R7").val(); //estado
		//correo
		if(($('input:radio[name=F3_4]:checked').val()) == 'a'){
			html+='. Así como la siguiente dirección de correo electrónico: ';
			html+= $("#F3_5R1").val()
		}
		html+='.';
		html+='</p>';
		

		if(($('input:radio[name=F3_6]:checked').val()) == 'a'){
			html+='<p>D) Que se encuentra Inscrito en el Registro Federal de Contribuyentes bajo la clave ';
			html+= $("#F3_7R1").val().toUpperCase();
			html+='.';
			html+='</p>';
			html+='<p>E) Que opera exclusivamente con recursos económicos de procedencia lícita, los que sólo destina a fines legales y que, en su caso, el cumplimiento de todas sus obligaciones contractuales y legales derivadas del presente Contrato las realizará con recursos de procedencia lícita, de conformidad con lo previsto por la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita.</p>';
			html+='<p>F) Que es su deseo adquirir <b>"EL BIEN"</b> descrito en las declaraciones de <b>"EL VENDEDOR"</b>.</p>'
		}else{
			html+='<p>D) Que opera exclusivamente con recursos económicos de procedencia lícita, los que sólo destina a fines legales y que, en su caso, el cumplimiento de todas sus obligaciones contractuales y legales derivadas del presente Contrato las realizará con recursos de procedencia lícita, de conformidad con lo previsto por la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita.</p>';
			html+='<p>E) Que es su deseo adquirir <b>"EL BIEN"</b> descrito en las declaraciones de <b>"EL VENDEDOR"</b>.</p>'
		}

	}
	if(($('input:radio[name=F1_5]:checked').val()) == 'b'){
		html+='<p><b>II. Declara "EL COMPRADOR", por conducto de su apoderado legal, y bajo protesta de decir verdad:</b></p>';
		
		if(($('input:radio[name=F3_8]:checked').val()) == 'a'){
			html+='<p>A) Ser una persona moral mexicana según consta en instrumento público número ';
			html+= $("#F3_9R1").val().toUpperCase();
			html+=', de fecha ';
			html+= moment($("#F3_10R1").val()).lang("es").format('LL');
			html+=', pasada ante la fe del licenciado ';
			html+=$("#F3_11R1").val().charAt(0).toUpperCase()+$("#F3_11R1").val().slice(1)+' ';
			html+=$("#F3_11R2").val().charAt(0).toUpperCase()+$("#F3_11R2").val().slice(1)+' ';

			html+='"'+$('input:radio[name=F3_12]:checked').val()+'", ';
			html+=', número';
			html+= $("#F3_13R1").val().toUpperCase();
			html+=', en';
			html+=$("#F3_14R1").val()+', '; //ciudad
			html+=$("#F3_14R2").val(); //estado

			if(($('input:radio[name=F3_15]:checked').val()) == 'a'){
				html+=' e inscrita en el Registro Público de Comercio de ';
				html+=$("#F3_16R1").val()+', ';
				html+=$("#F3_16R2").val();
				html+=' bajo el número ';
				html+=($("#F3_17R1").val()).toUpperCase()
				html+=' de fecha ';
				html+=moment($("#F3_18R1").val()).lang("es").format('LL');
			}
			html+='.'
			html+='</p>';
			}else{
				html+='<p>A) Ser una Sociedad Mercantil, debidamente constituida conforme a las disposiciones de la legislación mexicana, la cual se encuentra inscrita en el Registro Público del Comercio.';
				html+='</p>';
			}

			if(($('input:radio[name=F3_19]:checked').val()) == 'a'){
				html+='<p>B) Que su apoderado legal acredita su personalidad mediante el testimonio notarial número ';
				html+=$("#F3_20R1").val().toUpperCase();
				html+=', pasado ante la fe del licenciado ';
				html+=$("#F3_21R1").val().charAt(0).toUpperCase()+$("#F3_21R1").val().slice(1)+' ';
				html+=$("#F3_21R2").val().charAt(0).toUpperCase()+$("#F3_21R2").val().slice(1)+' ';
				html+='Notario Público número ';
				html+=($("#F3_22R1").val()).toUpperCase();
				html+=', en ';
				html+=$("#F3_23R1").val()+', ';
				html+=$("#F3_23R2").val()+', '+$("#F3_23R3").val();
				html+='.';
				html+=' Que se identifica con: ';
				html+=$('input:radio[name=F3_24]:checked').val();
				html+=', documento que se anexa en copia simple al presente Contrato.'
			}else{
				html+='<p>B) Que su apoderado legal cuenta con las facultades suficientes para obligarse en los términos del presente Contrato, las cuales no le han sido revocadas, modificadas ni limitadas, de forma alguna, en todo o en parte. Que se identifica con: ';
				html+=$('input:radio[name=F3_24]:checked').val();
				html+=', documento que se anexa en copia simple al presente Contrato.';
			}

			html+='<p>C) Que señala como domicilio para efectos del presente Contrato el ubicado en ';

			html+='calle '+($("#F3_25R1").val()).charAt(0).toUpperCase()+($("#F3_25R1").val()).slice(1)+', '; //calle
			html+='número exterior '+($("#F3_25R2").val()).toLowerCase()+', '; //numero ext
			if ($("#F3_25R3").val() !='') {
				html+='número interior '+($("#F3_25R3").val()).toLowerCase()+', '; //numero int
			}
			html+='colonia '+($("#F3_25R4").val()).charAt(0).toUpperCase()+($("#F3_25R4").val()).slice(1)+', '; //colonia
			html+='C.P. '+($("#F3_25R5").val())+', '; //cp
			html+=$("#F3_25R6").val()+', '; //ciudad
			html+=$("#F3_25R7").val();

			if(($('input:radio[name=F3_26]:checked').val()) == 'a'){
				html+='. Así como la siguiente dirección de correo electrónico ';
				html+= $("#F3_27R1").val()
			}
			html+='.'
			html+='</p>';

			if(($('input:radio[name=F3_28]:checked').val()) == 'a'){
				html+='<p>D) Que se encuentra inscrito en el Registro Federal de Contribuyentes bajo la Clave: ';
				html+= $("#F3_29R1").val().toUpperCase();
				html+='.';
				html+='</p>';
				html+='<p>E) Que es su deseo obligarse en los términos y condiciones del presente Contrato, manifestando que cuenta con la capacidad legal para la celebración de este Contrato.</p>';
				html+='<p>F) Que opera exclusivamente con recursos económicos de procedencia lícita, los que sólo destina a fines legales y que, en su caso, el cumplimiento de todas sus obligaciones contractuales y legales derivadas del presente Contrato las realizará con recursos de procedencia lícita, de conformidad con lo previsto por la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita.</p>';
				html+='<p>G) Que es su deseo adquirir <b>"EL BIEN"</b> descrito en las declaraciones de <b>"EL VENDEDOR"</b>.</p>';
			}else{
				html+='<p>D) Que es su deseo obligarse en los términos y condiciones del presente Contrato, manifestando que cuenta con la capacidad legal para la celebración de este Contrato.</p>';
				html+='<p>E) Que opera exclusivamente con recursos económicos de procedencia lícita, los que sólo destina a fines legales y que, en su caso, el cumplimiento de todas sus obligaciones contractuales y legales derivadas del presente Contrato las realizará con recursos de procedencia lícita, de conformidad con lo previsto por la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita.</p>';
				html+='<p>F) Que es su deseo adquirir <b>"EL BIEN"</b> descrito en las declaraciones de <b>"EL VENDEDOR"</b>.</p>';
			}
	}
	html+='<p>Expuesto lo anterior, las partes se sujetan al contenido de las siguientes:</p>'
	html+='<div style="text-align: center;">';
	html+='<b><u>C L Á U S U L A S</b></u>';
	html+='</div>';
	//fase 4
var html2 = ''
	html2+='';
	html2+='<p><b>PRIMERA. OBJETO.-</b> En este acto <b>"EL VENDEDOR"</b> vende y <b>"EL COMPRADOR"</b> compra <b>"EL BIEN"</b> descrito y relacionado en el inciso C) de las declaraciones de <b>"EL VENDEDOR"</b> del presente Contrato y que se tienen aquí por reproducidos como si a la letra se insertaran, para todos los efectos a que haya lugar.';
	html2+='</p>';

	//fase 5
	html2+='<p>'
	html2+='<b>SEGUNDA. DEL PRECIO.- "LAS PARTES"</b> acuerdan que <b>"EL PRECIO"</b> pactado de la compraventa es de ';
	html2+='$'+$("#F5_1R1").val()
	if($("#F5_1R1").val().indexOf('.') != -1){
			html2+=''
	}else{
			html2+='.00';
	}
	html2+=' (';
		if ($("#F5_1R2").val()=='M.N.') {
			html2+=NumeroALetrasMX($("#F5_1R1").val()).toUpperCase()+' ';
		}else{
			html2+=NumeroALetrasUSD($("#F5_1R1").val()).toUpperCase()+' ';
		}
		if($("#F5_1R1").val().indexOf('.') != -1){
		html2+=$("#F5_1R1").val().split('.')[1]+'/100 ';
		}else{
		html2+='00/100 ';
		}	
		html2+= $("#F5_1R2").val();
		html2+=') ';
	if($('input:radio[name=F5_2]:checked').val() == 'a'){
		html2+=' la cual ya incluye el Impuesto al Valor Agregado (IVA).';
	}
	else{
		html2+=' la cual no incluye el Impuesto al Valor Agregado (IVA).';
	}
	html2+='</p>'

	html2+='<p>';
	html2+='Así mismo, declaran que el precio es justo y que no existe lesión, dolo, mala fe ni enriquecimiento ilícito, por lo cual renuncian expresamente en este acto a ejercitar cualquier acción que sobre este Contrato se pudiera suscitar.';
	html2+='</p>';

	//fase 6 
	html2+='<p>';
	html2+='<b>TERCERA.- FORMA DE PAGO.- "EL COMPRADOR"</b> se obliga a pagar a <b>"EL VENDEDOR"</b> el precio pactado, en la Cláusula Segunda del presente Contrato, en la forma que a continuación se describe:'
	html2+='</p>';

	//tabla
		html2+='<p>';
		html2+='<div style="text-align: center;">';
		html2+='<table style="margin: 0 auto;" border="1">';
		html2+='<tr>';
		html2+='<td align="center">Exhibición</td>';
		html2+='<td align="center">Cantidad</td>';
		html2+='<td align="center">Fecha</td>';
		html2+='<td align="center">Método de Pago</td>';
		html2+='</tr>';
		html2+='<tr>';
		html2+='<td align="center">'+$("#F6_1R1").val()+'</td>';
		html2+='<td align="center">';
		html2+='$'+$("#F6_1R2").val()
		if($("#F6_1R2").val().indexOf('.') != -1){
				html2+=''
		}else{
				html2+='.00';
		}

		html2+=' (';
		if ($("#F6_1R3").val()=='M.N.') {
			html2+=NumeroALetrasMX($("#F6_1R2").val()).toUpperCase()+' ';
		}else{
			html2+=NumeroALetrasUSD($("#F6_1R2").val()).toUpperCase()+' ';
		}
		if($("#F6_1R2").val().indexOf('.') != -1){
			html2+=$("#F6_1R2").val().split('.')[1]+'/100 ';
		}else{
			html2+='00/100 ';
		}	
		html2+= $("#F6_1R3").val();
		html2+=') ';

		html2+='</td>';
		html2+='<td align="center">'+moment($("#F6_1R4").val()).lang("es").format('LL')+'</td>';
		html2+='<td align="center">'+$("#F6_1R5").val()+'</td>';
		html2+='</tr>';
		html2+='</table>';
		html2+='</div>';
		html2+='</p>';

		html2+='<p>';
		html2+='Quedando <b>"EL VENDEDOR"</b> obligado, además de la entrega de <b>"EL BIEN"</b>, a la entrega de un recibo en favor de <b>"EL COMPRADOR"</b>, en un lapso de '
		html2+=$("#F6_2R1").val();
		html2+=' ('+NumeroALetrasDias($("#F6_2R1").val())+')';
		html2+=' días naturales contados a partir de la realización del pago, el cual hará las veces del recibo más amplio que en derecho proceda para todos los efectos legales a que haya lugar.'
		html2+='<p>';
		html2+='El monto señalado en el primer párrafo de la presente cláusula, contempla todas las cantidades y conceptos referentes al objeto del presente instrumento; por lo que, <b>"EL VENDEDOR"</b> se obliga a respetar en todo momento el precio pactado, sin poder solicitar a <b>"EL COMPRADOR"</b> otra cantidad no estipulada en el presente Contrato.'
		html2+='</p>';

		//fase 7

		html2+='<p>';
		html2+='<b>CUARTA. DE LA ENTREGA.-</b> Una vez firmado, y en acuerdo del presente instrumento legal, <b>"EL VENDEDOR"</b> se obliga a entregar a <b>"EL COMPRADOR"</b> <b>"EL BIEN"</b>, ';

		if(($('input:radio[name=F7_1]:checked').val()) == 'a'){
			html2+='al momento de la firma del presente Contrato';
		}else{
			html2+='en un plazo de: '
			html2+=$("#F7_1R1").val();
			html2+=' ('+NumeroALetrasDias($("#F7_1R1").val())+')';
			html2+=' días';
			html2+=' contado a partir de la celebración del presente Contrato.'
		}
		html2+='</p>';

		html2+='<p>';
		html2+='<b>"LAS PARTES"</b> convienen que, al momento de la entrega de <b>"EL BIEN"</b>, ambas deberán de estar presentes o representadas, con la finalidad de documentar la aceptación y recepción.'
		html2+='</p>';

		html2+='<p>';
		html2+='Así mismo, <b>"LAS PARTES"</b> acuerdan que hasta en tanto no se realice la entrega de <b>"EL BIEN"</b> a <b>"EL COMPRADOR"</b>, <b>"EL VENDEDOR"</b> será el responsable del resguardo de <b>"EL BIEN"</b>.'
		html2+='</p>';

		//fase 8
		html2+='<p>';
		html2+='<b>QUINTA. RESPONSABILIDAD DE RIESGO.-</b> El riesgo de la pérdida o menoscabo de <b>"EL BIEN"</b> será de <b>"EL COMPRADOR"</b> a partir de la fecha de firma del recibo de recepción a que se refiere la cláusula inmediata anterior.'
		html2+='<p>';

		//fase 9
		html2+='<p>';
		html2+='<b>SEXTA. OBLIGACIONES.-</b> Son obligaciones de <b>"LAS PARTES"</b>:'
		html2+='</p>'
		html2+='<p>';
		html2+='a) De <b>"EL VENDEDOR":</b>';
		html2+='</p>';

		html2+='<p>';
		html2+='I. Cumplir cabalmente con los términos y condiciones establecidos en las cláusulas del presente Contrato.'
		html2+='</p>';
		html2+='<p>';
		html2+='II. Entregar <b>"EL BIEN"</b> a <b>"EL COMPRADOR"</b> en los plazos establecidos en la cláusula cuarta de este instrumento.'
		html2+='</p>';
		html2+='<p>'
		html2+='III. Cubrir cualquier gasto o reparación de <b>"EL BIEN"</b> que sea derivado de cualquier acto, de fecha anterior a la firma del presente Contrato.'
		html2+='</p>';
		html2+='<p>';
		html2+='Responder por los defectos o vicios ocultos de “EL BIEN” que lo hagan impropio para los usos a que habitualmente se destina o que disminuya su calidad o la posibilidad de su uso.'
		html2+='</p>';

		html2+='<p>';
		html2+='b) De <b>"EL COMPRADOR":</b>';
		html2+='</p>';

		html2+='<p>';
		html2+='I. Pagar a <b>"EL VENDEDOR"</b> el precio previamente establecido en la cláusula segunda del presente Contrato, en los términos, condiciones y plazos descritos.'
		html2+='</p>';
		html2+='<p>';
		html2+='II. Cumplir con el pago de los impuestos, derechos u obligaciones que con motivo de este acto se pudieran generar a su cargo.'
		html2+='</p>';
		html2+='<p>'
		html2+='III. Recibir de <b>"EL VENDEDOR"</b> <b>"EL BIEN"</b> según lo establecido en la Cláusula Cuarta de este Contrato.'
		html2+='</p>';

		switch ($('input:radio[name=F10_1]:checked').val()) {
        case 'a':
        	html2+='<p><b>SÉPTIMA. RESCISIÓN.-</b> El incumplimiento de cualquiera de las obligaciones de <b>"EL VENDEDOR"</b> establecidas en este Contrato, dará lugar a <b>"EL COMPRADOR"</b> a solicitar la rescisión del presente Contrato, si no fuere subsanable; y si lo fuere, la parte que incumpla deberá subsanarlo en un periodo máximo de 15 quince días naturales contados a partir de la notificación, que por escrito o cualquier otro medio que <b>"LAS PARTES"</b> acuerden en el presente instrumento, se realice a la parte que incumplió. La falta de cumplimiento dentro de dicho plazo será considerada como condición resolutoria para la vigencia de este Contrato; y, este se tendrá por rescindido sin responsabilidad para la parte afectada sin que medie declaración y/o resolución judicial  al respecto.</p>'
        	html2+='<p><b>"LAS PARTES"</b> acuerdan que, pese a la rescisión, subsistirán los derechos y las obligaciones adquiridas, y que podrán ser exigidas a través de todos los medios legales que la contraparte estime necesarios.</p>'
        break;

        case 'b':
        	html2+='<p><b>SÉPTIMA. RESCISIÓN.-</b> El incumplimiento de cualquiera de las obligaciones de <b>"EL COMPRADOR"</b> establecidas en este Contrato, dará lugar a <b>"EL VENDEDOR"</b> a solicitar la rescisión del presente Contrato, si no fuere subsanable; y si lo fuere, la parte que incumpla deberá subsanarlo en un periodo máximo de 15 quince días naturales contados a partir de la notificación, que por escrito o cualquier otro medio que <b>"LAS PARTES"</b> acuerden en el presente instrumento, se realice a la parte que incumplió. La falta de cumplimiento dentro de dicho plazo será considerada como condición resolutoria para la vigencia de este Contrato; y, este se tendrá por rescindido sin responsabilidad para la parte afectada sin que medie declaración y/o resolución judicial  al respecto.</p>';
        	html2+='<p><b>"LAS PARTES"</b> acuerdan que pese a la rescisión, subsistirán los derechos y las obligaciones adquiridas, y que podrán ser exigidas a través de todos los medios legales que la contraparte estime necesarios.</p>'
        break;

        case 'c':
        	html2+='<p><b>SÉPTIMA. RESCISIÓN.-</b> El incumplimiento de <b>"LAS PARTES"</b> a cualquiera de las obligaciones establecidas en este Contrato, dará lugar a la parte afectada a solicitar la rescisión del presente Contrato, si no fuere subsanable; y si lo fuere, la parte que incumpla deberá subsanarlo en un periodo máximo de 15 quince días naturales contados a partir de la notificación, que por escrito o cualquier otro medio que <b>"LAS PARTES"</b> acuerden en el presente instrumento, se realice a la parte que incumplió. La falta de cumplimiento dentro de dicho plazo será considerada como condición resolutoria para la vigencia de este Contrato; y, este se tendrá por rescindido sin responsabilidad para la parte afectada sin que medie declaración y/o resolución judicial  al respecto.</p>'
        	html2+='<p><b>"LAS PARTES"</b> acuerdan que, pese a la rescisión, subsistirán los derechos y las obligaciones adquiridas, y que podrán ser exigidas a través de todos los medios legales que la contraparte estime necesarios.</p>'
        break;

        default:
        html2+='';
        break;
 		}

 		if(($('input:radio[name=F11_1]:checked').val()) == 'a'){

 			switch ($('input:radio[name=F10_1]:checked').val()) {
	        case 'a':
	        	html2+='<p>'
	        	html2+='<b>OCTAVA. PENA CONVENCIONAL.-</b> De común acuerdo <b>"LAS PARTES"</b> establecen que, derivado del incumplimiento de cualquiera de las obligaciones señaladas dentro del presente Contrato por parte de <b>"EL VENDEDOR"</b>, este se hará acreedor de una pena convencional consistente en '
	        	html2+='$'+$("#F11_3R1").val()
				if($("#F11_3R1").val().indexOf('.') != -1){
					html2+=''
				}else{
					html2+='.00';
				}
				html2+=' (';
				if ($("#F11_3R2").val()=='M.N.') {
					html2+=NumeroALetrasMX($("#F11_3R1").val()).toUpperCase()+' ';
				}else{
					html2+=NumeroALetrasUSD($("#F11_3R1").val()).toUpperCase()+' ';
				}
				if($("#F11_3R1").val().indexOf('.') != -1){
					html2+=$("#F11_3R1").val().split('.')[1]+'/100 ';
				}else{
					html2+='00/100 ';
				}	
				html2+= $("#F11_3R2").val();
				html2+=')';
				html2+=', la cual podrá ser exigida de manera inmediata al momento de presentarse el incumplimiento, sin que medie declaración y/o resolución judicial  al respecto, mediante simple aviso por escrito entregado a <b>"EL VENDEDOR"</b>.'
	        	html2+='</p>';

	        	html2+='<p>';
	        	html2+='<b>"LAS PARTES"</b> reconocen que la ejecución de la Pena Convencional anteriormente descrita no impide ni limita el ejercicio de cualquier acción por vía judicial o administrativa que la parte afectada considere correspondiente.'
	        	html2+='</p>';
	        break;

	        case 'b':
	        	html2+='<p>';
	        	html2+='<b>OCTAVA. PENA CONVENCIONAL.-</b> De común acuerdo <b>"LAS PARTES"</b> establecen que, derivado del incumplimiento de cualquiera de las obligaciones señaladas dentro del presente Contrato por parte de <b>"EL COMPRADOR"</b>, este se hará acreedor de una pena convencional consistente en '
	        	html2+='$'+$("#F11_3R1").val()
				if($("#F11_3R1").val().indexOf('.') != -1){
					html2+=''
				}else{
					html2+='.00';
				}
				html2+=' (';
				if ($("#F11_3R2").val()=='M.N.') {
					html2+=NumeroALetrasMX($("#F11_3R1").val()).toUpperCase()+' ';
				}else{
					html2+=NumeroALetrasUSD($("#F11_3R1").val()).toUpperCase()+' ';
				}
				if($("#F11_3R1").val().indexOf('.') != -1){
					html2+=$("#F11_3R1").val().split('.')[1]+'/100 ';
				}else{
					html2+='00/100 ';
				}	
				html2+= $("#F11_3R2").val();
				html2+=')';

				html2+=', la cual podrá ser exigida de manera inmediata al momento de presentarse el incumplimiento, al momento de presentarse el incumplimiento sin que medie declaración y/o resolución judicial  al respecto, mediante simple aviso por escrito entregado a <b>"EL COMPRADOR"</b>.'
	        	html2+='</p>'
	        	html2+='<p>';
	        	html2+='<b>"LAS PARTES"</b> reconocen que la ejecución de la Pena Convencional anteriormente descrita no impide ni limita el ejercicio de cualquier acción por vía judicial o administrativa que la parte afectada considere correspondiente.'
	        	html2+='</p>'
	        break;

	        case 'c':
	        	html2+='<p>'
	        	html2+='<b>OCTAVA. PENA CONVENCIONAL.-</b> De común acuerdo <b>"LAS PARTES"</b> establecen que, derivado del incumplimiento de cualquiera de las obligaciones señaladas dentro del presente Contrato, la parte que incumpla se hará acreedora de una pena convencional consistente en '
	        	html2+='$'+$("#F11_3R1").val()
				if($("#F11_3R1").val().indexOf('.') != -1){
					html2+=''
				}else{
					html2+='.00';
				}
				html2+=' (';
				if ($("#F11_3R2").val()=='M.N.') {
					html2+=NumeroALetrasMX($("#F11_3R1").val()).toUpperCase()+' ';
				}else{
					html2+=NumeroALetrasUSD($("#F11_3R1").val()).toUpperCase()+' ';
				}
				if($("#F11_3R1").val().indexOf('.') != -1){
					html2+=$("#F11_3R1").val().split('.')[1]+'/100 ';
				}else{
					html2+='00/100 ';
				}	
				html2+= $("#F11_3R2").val();
				html2+=')';
				html2+=', la cual podrá ser exigida de manera inmediata al momento de presentarse el incumplimiento, al momento de presentarse el incumplimiento sin que medie declaración y/o resolución judicial  al respecto, mediante simple aviso por escrito.'
	        	html2+='</p>';
	        	html2+='<p>';
	        	html2+='<b>"LAS PARTES"</b> reconocen que la ejecución de la Pena Convencional anteriormente descrita no impide ni limita el ejercicio de cualquier acción por vía judicial o administrativa que la parte afectada considere correspondiente.'
	        	html2+='</p>'
	        break;

	        default:
	        html2+='';
	        break;
 			}

 			//aqui si aparece la octava
 			if ($('input:radio[name=F12_1]:checked').val() == 'a') {
 				html2+='<p>'
				html2+='<b>NOVENA. VIGENCIA.- "LAS PARTES"</b> acuerdan que el presente Contrato tendrá una vigencia de ';

				if ($('input:radio[name=F12_2]:checked').val() != 'otro') {
					html2+=$("#F12_2R2").val()
					html2+=' ('+NumeroALetrasDias($("#F12_2R2").val())+')';
					html2+=' '+$('input:radio[name=F12_2]:checked').val();
					html2+=' contado a partir de ';
					html2+=moment($("#F12_3R1").val()).lang("es").format('LL');
					html2+=' y terminando el día '
					html2+=moment($("#F12_4R1").val()).lang("es").format('LL');
				}
				html2+='.';
				html2+='</p>';	
			}
			if ($('input:radio[name=F12_1]:checked').val() == 'b') {
				html2+='<p>';
				html2+='<b>NOVENA. VIGENCIA.- "LAS PARTES"</b> acuerdan que el presente Contrato será por Tiempo Indefinido, en tanto se cumpla el objeto materia del presente Contrato o <b>"LAS PARTES"</b> decidan darlo por terminado.'
				html2+='</p>';
			}

			//fase 13
			html2+='<p>';
			html2+='<b>DÉCIMA. TERMINACIÓN.- "LAS PARTES"</b> acuerdan que una vez que se hayan cumplido plenamente con todas y cada una de las obligaciones estipuladas en el presente instrumento operará automáticamente su terminación.'
			html2+='</p>'

			switch ($('input:radio[name=F14_1]:checked').val()) {
	        case 'a':
	        	html2+='<p>';
	        	html2+='<b>DÉCIMA PRIMERA. CESIÓN DE DERECHOS.-</b> De común acuerdo <b>"LAS PARTES"</b> establecen que <b>"EL VENDEDOR"</b> podrá transferir, ceder o delegar en todo o en parte los derechos u obligaciones que deriven del presente Contrato en favor de terceros, para lo cual bastará con dar aviso por escrito a la contraparte con una antelación de '
	        	html2+=$("#F14_2R1").val();
				html2+=' ('+NumeroALetrasDias($("#F14_2R1").val())+')';
				html2+=' días naturales.'
	        	html2+='</p>'
	        break;

	        case 'b':
	        	html2+='<p>';
	        	html2+='<b>DÉCIMA PRIMERA. CESIÓN DE DERECHOS.-</b> De común acuerdo <b>"LAS PARTES"</b> establecen que <b>"EL COMPRADOR"</b> podrá transferir, ceder o delegar en todo o en parte los derechos u obligaciones que deriven del presente Contrato en favor de terceros, para lo cual bastará con dar aviso por escrito a la contraparte con una antelación de '
	        	html2+=$("#F14_2R1").val();
				html2+=' ('+NumeroALetrasDias($("#F14_2R1").val())+')';
				html2+=' días naturales.'
	        	html2+='</p>'
	        break;

	        case 'c':
	        	html2+='<p>';
	        	html2+='<b>DÉCIMA PRIMERA. CESIÓN DE DERECHOS.-</b> De común acuerdo <b>"LAS PARTES"</b> establecen que ambas partes, podrán transferir, ceder o delegar en todo o en parte los derechos u obligaciones que deriven del presente Contrato en favor de terceros, para lo cual bastará con dar aviso por escrito a la contraparte con una antelación de '
	        	html2+=$("#F14_2R1").val();
				html2+=' ('+NumeroALetrasDias($("#F14_2R1").val())+')';
				html2+=' días naturales.'
	        	html2+='</p>'
	        break;

	        case 'd':
	        	html2+='<p>';
	        	html2+='<b>DÉCIMA PRIMERA. CESIÓN DE DERECHOS.-</b> De común acuerdo <b>"LAS PARTES"</b> establecen que ninguna de las partes, podrán transferir, ceder o delegar en todo o en parte los derechos u obligaciones que deriven del presente Contrato en favor de terceros.'
	        	html2+='</p>'
	        break;

	        default:
	        html2+='';
	        break;
	 		}

	 		//fase 15
	 		html2+='<p>';
	 		html2+='<b>DÉCIMA SEGUNDA. NOTIFICACIONES.- "LAS PARTES"</b> acuerdan que las notificaciones, requerimientos, peticiones y otras comunicaciones que deban de efectuarse en relación con el presente Contrato, se realizarán por escrito y se entenderán que son válidas cuando:'
	 		html2+='</p>';
	 		html2+='<p>'
	 		html2+='1. Se entreguen personalmente en el domicilio estipulado por la parte que deba ser notificada.'
	 		html2+='</p>';
	 		html2+='<p>';
	 		html2+='2. Se envíen por correo certificado al domicilio señalado por cada una de <b>"LAS PARTES"</b> en las declaraciones de este instrumento.'
	 		html2+='</p>';

	 		if ($('input:radio[name=F2_4]:checked').val() == 'a' || $('input:radio[name=F2_28]:checked').val() == 'a') {
				html2+='<p>';
				html2+='3. En su caso por correo electrónico, señalado por cada una de <b>"LAS PARTES"</b> en las declaraciones de este instrumento, acusándolo de recibo.'
				html2+='</p>';
			}

			//fase 16
			if ($('input:radio[name=F16_1]:checked').val() == 'a') {
				html2+='<p>';
				html2+='<b>DÉCIMA TERCERA. CONFIDENCIALIDAD.- "LAS PARTES"</b> establecen que el conjunto de los comunicados, informaciones y/o documentos que se realicen entre <b>"EL VENDEDOR"</b> y <b>"EL COMPRADOR"</b> son estrictamente confidenciales. '
				html2+='</p>';
				html2+='<p>';
				html2+='En consecuencia, cada una de <b>"LAS PARTES"</b> se compromete a preservar el carácter confidencial de los comunicados, las informaciones y/o los documentos entregados por la otra parte; y, en no divulgar parcial o totalmente a terceros el contenido de estos, sin autorización expresa de la otra parte.'
				html2+='</p>';
				html2+='<p>';
				html2+='Además, cada una de <b>"LAS PARTES"</b> se compromete en tomar todas las medidas, tanto frente a sus familiares, partes relacionadas y/o cualquier tercera persona para limitar la divulgación de la información confidencial.'
				html2+='</p>';

				//fase 17 si existe 16
				html2+='<p>';
				html2+='<b>DÉCIMA CUARTA.  ACUERDO TOTAL, MODIFICACIONES Y VALIDEZ.-</b> Este Contrato y, en su caso, sus respectivos anexos, constituyen el acuerdo total entre <b>"LAS PARTES"</b>.'
				html2+='</p>';
				html2+='<p>';
				html2+='<b>"LAS PARTES"</b> manifiestan que en la celebración del presente instrumento no existe error, dolo, lesión o mala fe de alguna de <b>"LAS PARTES"</b>, por lo que, desde este momento renuncian a interponer cualquier clase de recurso que pretenda invalidarlo. Este Contrato solo puede ser modificado por acuerdo escrito firmado por ambas partes.'
				html2+='</p>';
				html2+='<p>';
				html2+='Si cualquier parte o disposición contenida en este documento es declarada inválida o inaplicable, dicha parte o disposición quedará sin efecto, sin que de ninguna manera se afecte la validez del resto de las disposiciones del Contrato.'
				html2+='</p>';

				//fase 18
				html2+='<p>';
				html2+='<b>DÉCIMA QUINTA. ENCABEZADOS.-</b> Los encabezados de las cláusulas del presente Contrato se han colocado para conveniencia de <b>"LAS PARTES"</b> con el exclusivo objeto de facilitar su lectura y localización, por tanto, no necesariamente define ni limitan el contenido de dichas cláusulas.'
				html2+='</p>';
				html2+='<p>';
				html2+='Para la interpretación de cada cláusula deberá atenderse exclusivamente a su contenido, y de ninguna manera a su título, por lo que no afectará la interpretación y validez de este instrumento, ni los términos, condiciones, derechos u obligaciones establecidos en el presente Contrato.'
				html2+='</p>';
				//fase 19
				html2+='<p>';
				html2+='<b>DÉCIMA SEXTA. PRÁCTICAS ANTICORRUPCIÓN.- "LAS PARTES"</b> garantizan y declaran que en términos de esta transacción, no están actuando directa o indirectamente, para o a nombre de, cualquier  persona,  grupo,  entidad,  nación  o país que realice o esté en riesgo de realizar cualquier actividad ilícita bajo las leyes mexicanas o internacionales incluyendo, entre otras y sin limitación, financiamiento o actos de terrorismo, narcotráfico, lavado de dinero o cualquier otra actividad  ilegal  relacionada, así como cualquier otra actividad sujeta a una sanción reconocida por el derecho internacional incluyendo sin limitación las establecidas por la Organización de las Naciones Unidas.'
				html2+='</p>';
				html2+='<p>';
				html2+='<b>"LAS PARTES"</b> aceptan y se obligan a que cualquier violación a la presente Cláusula dé lugar a la terminación inmediata del Contrato.'
				html2+='</p>';

				//fase 20
				html2+='<p>';
				html2+='<b>DÉCIMA SÉPTIMA. LEGISLACIÓN Y JURISDICCIÓN.- "LAS PARTES"</b> se someten expresamente a las leyes aplicables y jurisdicción de los tribunales competentes en '
				html2+=$("#F20_1R1").val()+', '; //ciudad
				html2+=$("#F20_1R2").val(); //estado
				html2+=', renunciando expresamente a cualquier otra jurisdicción que, por razón de sus domicilios presentes o futuros, o por cualquier otra razón pudiere corresponderles. Así mismo, las partes acuerdan que en caso de controversia el presente Contrato será interpretado de conformidad con la legislación de '
				html2+=$("#F20_1R1").val()+', '; //ciudad
				html2+=$("#F20_1R2").val(); //estado
				html2+='.';
				html2+='</p>'
			}else{
				//fase 17 si no existe 16
				html2+='<p>';
				html2+='<b>DÉCIMA TERCERA.  ACUERDO TOTAL, MODIFICACIONES Y VALIDEZ.-</b> Este Contrato y, en su caso, sus respectivos anexos, constituyen el acuerdo total entre <b>"LAS PARTES"</b>.'
				html2+='</p>';
				html2+='<p>';
				html2+='<b>"LAS PARTES"</b> manifiestan que en la celebración del presente instrumento no existe error, dolo, lesión o mala fe de alguna de <b>"LAS PARTES"</b>, por lo que, desde este momento renuncian a interponer cualquier clase de recurso que pretenda invalidarlo. Este Contrato solo puede ser modificado por acuerdo escrito firmado por ambas partes.'
				html2+='</p>';
				html2+='<p>';
				html2+='Si cualquier parte o disposición contenida en este documento es declarada inválida o inaplicable, dicha parte o disposición quedará sin efecto, sin que de ninguna manera se afecte la validez del resto de las disposiciones del Contrato.'
				html2+='</p>';

				//fase 18
				html2+='<p>';
				html2+='<b>DÉCIMA CUARTA. ENCABEZADOS.-</b> Los encabezados de las cláusulas del presente Contrato se han colocado para conveniencia de <b>"LAS PARTES"</b> con el exclusivo objeto de facilitar su lectura y localización, por tanto, no necesariamente define ni limitan el contenido de dichas cláusulas.'
				html2+='</p>';
				html2+='<p>';
				html2+='Para la interpretación de cada cláusula deberá atenderse exclusivamente a su contenido, y de ninguna manera a su título, por lo que no afectará la interpretación y validez de este instrumento, ni los términos, condiciones, derechos u obligaciones establecidos en el presente Contrato.'
				html2+='</p>';
				//fase 19
				html2+='<p>';
				html2+='<b>DÉCIMA QUINTA. PRÁCTICAS ANTICORRUPCIÓN.- "LAS PARTES"</b> garantizan y declaran que en términos de esta transacción, no están actuando directa o indirectamente, para o a nombre de, cualquier  persona,  grupo,  entidad,  nación  o país que realice o esté en riesgo de realizar cualquier actividad ilícita bajo las leyes mexicanas o internacionales incluyendo, entre otras y sin limitación, financiamiento o actos de terrorismo, narcotráfico, lavado de dinero o cualquier otra actividad  ilegal  relacionada, así como cualquier otra actividad sujeta a una sanción reconocida por el derecho internacional incluyendo sin limitación las establecidas por la Organización de las Naciones Unidas.'
				html2+='</p>';
				html2+='<p>';
				html2+='<b>"LAS PARTES"</b> aceptan y se obligan a que cualquier violación a la presente Cláusula dé lugar a la terminación inmediata del Contrato.'
				html2+='</p>';

				//fase 20
				html2+='<p>';
				html2+='<b>DÉCIMA SEXTA. LEGISLACIÓN Y JURISDICCIÓN.- "LAS PARTES"</b> se someten expresamente a las leyes aplicables y jurisdicción de los tribunales competentes en '
				html2+=$("#F20_1R1").val()+', '; //ciudad
				html2+=$("#F20_1R2").val(); //estado
				html2+=', renunciando expresamente a cualquier otra jurisdicción que, por razón de sus domicilios presentes o futuros, o por cualquier otra razón pudiere corresponderles. Así mismo, las partes acuerdan que en caso de controversia el presente Contrato será interpretado de conformidad con la legislación de '
				html2+=$("#F20_1R1").val()+', '; //ciudad
				html2+=$("#F20_1R2").val(); //estado
				html2+='.';
				html2+='</p>'
			}
		}
		if(($('input:radio[name=F11_1]:checked').val()) == 'b'){
			if ($('input:radio[name=F12_1]:checked').val() == 'a') {
 				html2+='<p>'
				html2+='<b>OCTAVA. VIGENCIA.- "LAS PARTES"</b> acuerdan que el presente Contrato tendrá una vigencia de ';

				if ($('input:radio[name=F12_2]:checked').val() != 'otro') {
					html2+=$("#F12_2R2").val()
					html2+=' ('+NumeroALetrasDias($("#F12_2R2").val())+')';
					html2+=' '+$('input:radio[name=F12_2]:checked').val();
					html2+=' contado a partir de ';
					html2+=moment($("#F12_3R1").val()).lang("es").format('LL');
					html2+=' y terminando el día '
					html2+=moment($("#F12_4R1").val()).lang("es").format('LL');
				}
				html2+='.';
				html2+='</p>';	
			}
			if ($('input:radio[name=F12_1]:checked').val() == 'b') {
				html2+='<p>';
				html2+='<b>OCTAVA. VIGENCIA.- "LAS PARTES"</b> acuerdan que el presente Contrato será por Tiempo Indefinido, en tanto se cumpla el objeto materia del presente Contrato o <b>"LAS PARTES"</b> decidan darlo por terminado.'
				html2+='</p>';
			}

			//fase 13
			html2+='<p>';
			html2+='<b>NOVENA. TERMINACIÓN.- "LAS PARTES"</b> acuerdan que una vez que se hayan cumplido plenamente con todas y cada una de las obligaciones estipuladas en el presente instrumento operará automáticamente su terminación.'
			html2+='</p>'

			switch ($('input:radio[name=F14_1]:checked').val()) {
	        case 'a':
	        	html2+='<p>';
	        	html2+='<b>NOVENA PRIMERA. CESIÓN DE DERECHOS.-</b> De común acuerdo <b>"LAS PARTES"</b> establecen que <b>"EL VENDEDOR"</b> podrá transferir, ceder o delegar en todo o en parte los derechos u obligaciones que deriven del presente Contrato en favor de terceros, para lo cual bastará con dar aviso por escrito a la contraparte con una antelación de '
	        	html2+=$("#F14_2R1").val();
				html2+=' ('+NumeroALetrasDias($("#F14_2R1").val())+')';
				html2+=' días naturales.'
	        	html2+='</p>'
	        break;

	        case 'b':
	        	html2+='<p>';
	        	html2+='<b>NOVENA PRIMERA. CESIÓN DE DERECHOS.-</b> De común acuerdo <b>"LAS PARTES"</b> establecen que <b>"EL COMPRADOR"</b> podrá transferir, ceder o delegar en todo o en parte los derechos u obligaciones que deriven del presente Contrato en favor de terceros, para lo cual bastará con dar aviso por escrito a la contraparte con una antelación de '
	        	html2+=$("#F14_2R1").val();
				html2+=' ('+NumeroALetrasDias($("#F14_2R1").val())+')';
				html2+=' días naturales.'
	        	html2+='</p>'
	        break;

	        case 'c':
	        	html2+='<p>';
	        	html2+='<b>NOVENA PRIMERA. CESIÓN DE DERECHOS.-</b> De común acuerdo <b>"LAS PARTES"</b> establecen que ambas partes, podrán transferir, ceder o delegar en todo o en parte los derechos u obligaciones que deriven del presente Contrato en favor de terceros, para lo cual bastará con dar aviso por escrito a la contraparte con una antelación de '
	        	html2+=$("#F14_2R1").val();
				html2+=' ('+NumeroALetrasDias($("#F14_2R1").val())+')';
				html2+=' días naturales.'
	        	html2+='</p>'
	        break;

	        case 'd':
	        	html2+='<p>';
	        	html2+='<b>NOVENA PRIMERA. CESIÓN DE DERECHOS.-</b> De común acuerdo <b>"LAS PARTES"</b> establecen que ninguna de las partes, podrán transferir, ceder o delegar en todo o en parte los derechos u obligaciones que deriven del presente Contrato en favor de terceros.'
	        	html2+='</p>'
	        break;

	        default:
	        html2+='';
	        break;
	 		}

	 		//fase 15
	 		html2+='<p>';
	 		html2+='<b>NOVENA SEGUNDA. NOTIFICACIONES.- "LAS PARTES"</b> acuerdan que las notificaciones, requerimientos, peticiones y otras comunicaciones que deban de efectuarse en relación con el presente Contrato, se realizarán por escrito y se entenderán que son válidas cuando:'
	 		html2+='</p>';
	 		html2+='<p>'
	 		html2+='1. Se entreguen personalmente en el domicilio estipulado por la parte que deba ser notificada.'
	 		html2+='</p>';
	 		html2+='<p>';
	 		html2+='2. Se envíen por correo certificado al domicilio señalado por cada una de <b>"LAS PARTES"</b> en las declaraciones de este instrumento.'
	 		html2+='</p>';

	 		if ($('input:radio[name=F2_4]:checked').val() == 'a' || $('input:radio[name=F2_28]:checked').val() == 'a') {
				html2+='<p>';
				html2+='3. En su caso por correo electrónico, señalado por cada una de <b>"LAS PARTES"</b> en las declaraciones de este instrumento, acusándolo de recibo.'
				html2+='</p>';
			}

			//fase 16
			if ($('input:radio[name=F16_1]:checked').val() == 'a') {
				html2+='<p>';
				html2+='<b>NOVENA TERCERA. CONFIDENCIALIDAD.- "LAS PARTES"</b> establecen que el conjunto de los comunicados, informaciones y/o documentos que se realicen entre <b>"EL VENDEDOR"</b> y <b>"EL COMPRADOR"</b> son estrictamente confidenciales. '
				html2+='</p>';
				html2+='<p>';
				html2+='En consecuencia, cada una de <b>"LAS PARTES"</b> se compromete a preservar el carácter confidencial de los comunicados, las informaciones y/o los documentos entregados por la otra parte; y, en no divulgar parcial o totalmente a terceros el contenido de estos, sin autorización expresa de la otra parte.'
				html2+='</p>';
				html2+='<p>';
				html2+='Además, cada una de <b>"LAS PARTES"</b> se compromete en tomar todas las medidas, tanto frente a sus familiares, partes relacionadas y/o cualquier tercera persona para limitar la divulgación de la información confidencial.'
				html2+='</p>';

				//fase 17 si existe 16
				html2+='<p>';
				html2+='<b>NOVENA CUARTA.  ACUERDO TOTAL, MODIFICACIONES Y VALIDEZ.-</b> Este Contrato y, en su caso, sus respectivos anexos, constituyen el acuerdo total entre <b>"LAS PARTES"</b>.'
				html2+='</p>';
				html2+='<p>';
				html2+='<b>"LAS PARTES"</b> manifiestan que en la celebración del presente instrumento no existe error, dolo, lesión o mala fe de alguna de <b>"LAS PARTES"</b>, por lo que, desde este momento renuncian a interponer cualquier clase de recurso que pretenda invalidarlo. Este Contrato solo puede ser modificado por acuerdo escrito firmado por ambas partes.'
				html2+='</p>';
				html2+='<p>';
				html2+='Si cualquier parte o disposición contenida en este documento es declarada inválida o inaplicable, dicha parte o disposición quedará sin efecto, sin que de ninguna manera se afecte la validez del resto de las disposiciones del Contrato.'
				html2+='</p>';

				//fase 18
				html2+='<p>';
				html2+='<b>NOVENA QUINTA. ENCABEZADOS.-</b> Los encabezados de las cláusulas del presente Contrato se han colocado para conveniencia de <b>"LAS PARTES"</b> con el exclusivo objeto de facilitar su lectura y localización, por tanto, no necesariamente define ni limitan el contenido de dichas cláusulas.'
				html2+='</p>';
				html2+='<p>';
				html2+='Para la interpretación de cada cláusula deberá atenderse exclusivamente a su contenido, y de ninguna manera a su título, por lo que no afectará la interpretación y validez de este instrumento, ni los términos, condiciones, derechos u obligaciones establecidos en el presente Contrato.'
				html2+='</p>';
				//fase 19
				html2+='<p>';
				html2+='<b>NOVENA SEXTA. PRÁCTICAS ANTICORRUPCIÓN.- "LAS PARTES"</b> garantizan y declaran que en términos de esta transacción, no están actuando directa o indirectamente, para o a nombre de, cualquier  persona,  grupo,  entidad,  nación  o país que realice o esté en riesgo de realizar cualquier actividad ilícita bajo las leyes mexicanas o internacionales incluyendo, entre otras y sin limitación, financiamiento o actos de terrorismo, narcotráfico, lavado de dinero o cualquier otra actividad  ilegal  relacionada, así como cualquier otra actividad sujeta a una sanción reconocida por el derecho internacional incluyendo sin limitación las establecidas por la Organización de las Naciones Unidas.'
				html2+='</p>';
				html2+='<p>';
				html2+='<b>"LAS PARTES"</b> aceptan y se obligan a que cualquier violación a la presente Cláusula dé lugar a la terminación inmediata del Contrato.'
				html2+='</p>';

				//fase 20
				html2+='<p>';
				html2+='<b>NOVENA SÉPTIMA. LEGISLACIÓN Y JURISDICCIÓN.- "LAS PARTES"</b> se someten expresamente a las leyes aplicables y jurisdicción de los tribunales competentes en '
				html2+=$("#F20_1R1").val()+', '; //ciudad
				html2+=$("#F20_1R2").val(); //estado
				html2+=', renunciando expresamente a cualquier otra jurisdicción que, por razón de sus domicilios presentes o futuros, o por cualquier otra razón pudiere corresponderles. Así mismo, las partes acuerdan que en caso de controversia el presente Contrato será interpretado de conformidad con la legislación de '
				html2+=$("#F20_1R1").val()+', '; //ciudad
				html2+=$("#F20_1R2").val(); //estado
				html2+='.';
				html2+='</p>'
			}else{
				//fase 17 si no existe 16
				html2+='<p>';
				html2+='<b>NOVENA TERCERA.  ACUERDO TOTAL, MODIFICACIONES Y VALIDEZ.-</b> Este Contrato y, en su caso, sus respectivos anexos, constituyen el acuerdo total entre <b>"LAS PARTES"</b>.'
				html2+='</p>';
				html2+='<p>';
				html2+='<b>"LAS PARTES"</b> manifiestan que en la celebración del presente instrumento no existe error, dolo, lesión o mala fe de alguna de <b>"LAS PARTES"</b>, por lo que, desde este momento renuncian a interponer cualquier clase de recurso que pretenda invalidarlo. Este Contrato solo puede ser modificado por acuerdo escrito firmado por ambas partes.'
				html2+='</p>';
				html2+='<p>';
				html2+='Si cualquier parte o disposición contenida en este documento es declarada inválida o inaplicable, dicha parte o disposición quedará sin efecto, sin que de ninguna manera se afecte la validez del resto de las disposiciones del Contrato.'
				html2+='</p>';

				//fase 18
				html2+='<p>';
				html2+='<b>NOVENA CUARTA. ENCABEZADOS.-</b> Los encabezados de las cláusulas del presente Contrato se han colocado para conveniencia de <b>"LAS PARTES"</b> con el exclusivo objeto de facilitar su lectura y localización, por tanto, no necesariamente define ni limitan el contenido de dichas cláusulas.'
				html2+='</p>';
				html2+='<p>';
				html2+='Para la interpretación de cada cláusula deberá atenderse exclusivamente a su contenido, y de ninguna manera a su título, por lo que no afectará la interpretación y validez de este instrumento, ni los términos, condiciones, derechos u obligaciones establecidos en el presente Contrato.'
				html2+='</p>';
				//fase 19
				html2+='<p>';
				html2+='<b>NOVENA QUINTA. PRÁCTICAS ANTICORRUPCIÓN.- "LAS PARTES"</b> garantizan y declaran que en términos de esta transacción, no están actuando directa o indirectamente, para o a nombre de, cualquier  persona,  grupo,  entidad,  nación  o país que realice o esté en riesgo de realizar cualquier actividad ilícita bajo las leyes mexicanas o internacionales incluyendo, entre otras y sin limitación, financiamiento o actos de terrorismo, narcotráfico, lavado de dinero o cualquier otra actividad  ilegal  relacionada, así como cualquier otra actividad sujeta a una sanción reconocida por el derecho internacional incluyendo sin limitación las establecidas por la Organización de las Naciones Unidas.'
				html2+='</p>';
				html2+='<p>';
				html2+='<b>"LAS PARTES"</b> aceptan y se obligan a que cualquier violación a la presente Cláusula dé lugar a la terminación inmediata del Contrato.'
				html2+='</p>';

				//fase 20
				html2+='<p>';
				html2+='<b>NOVENA SEXTA. LEGISLACIÓN Y JURISDICCIÓN.- "LAS PARTES"</b> se someten expresamente a las leyes aplicables y jurisdicción de los tribunales competentes en '
				html2+=$("#F20_1R1").val()+', '; //ciudad
				html2+=$("#F20_1R2").val(); //estado
				html2+=', renunciando expresamente a cualquier otra jurisdicción que, por razón de sus domicilios presentes o futuros, o por cualquier otra razón pudiere corresponderles. Así mismo, las partes acuerdan que en caso de controversia el presente Contrato será interpretado de conformidad con la legislación de '
				html2+=$("#F20_1R1").val()+', '; //ciudad
				html2+=$("#F20_1R2").val(); //estado
				html2+='.';
				html2+='</p>'
			}

		}

var html3='';

	html3+='<p>';
	html3+='EN TESTIMONIO DE LO ANTERIOR, <b>"LAS PARTES"</b> firman de común acuerdo el presente Contrato por ';
	html3+=$('input:radio[name=F21_1]:checked').val();
	html3+=' en ';
	html3+=$("#F21_2R1").val()+', '; //ciudad
	html3+=$("#F21_2R2").val()+', '; //estado 
	html3+=$("#F21_2R3").val(); //pais
	html3+='.';
	html3+='</p>';
	
	
	html3+='<br>';

	//firmas
	html3+='<p>';
	html3+='<table style="margin: 0 auto;" width="90%">';
	html3+='<tr>'
	html3+='<td style="text-align: center; height: 90px;"><b>EL VENDEDOR</b></td>';
	html3+='<td style="text-align: center; height: 90px;"><b>EL COMPRADOR</b></td>';
	html3+='</tr>'
	html3+='<tr>'
	html3+='<td style="text-align: center; height: 90px;">_____________________________</td>'
	html3+='<td style="text-align: center; height: 90px;">_____________________________</td>'
	html3+='</tr>'

	//nombres moral o fisica
	//vendedor y comprador fisicos
	html3+='<tr>';
	if(($('input:radio[name=F1_1]:checked').val()) == 'a' && ($('input:radio[name=F1_5]:checked').val()) == 'a'){
		html3+='<td style="text-align: center;">'+($("#F1_2R1").val()+' '+$("#F1_2R2").val()).toUpperCase()+'</td>';
		html3+='<td style="text-align: center;">'+($("#F1_6R1").val()+' '+$("#F1_6R2").val()).toUpperCase()+'</td>';
	}
	//vendedor fisico y comprador moral
	if(($('input:radio[name=F1_1]:checked').val()) == 'a' && ($('input:radio[name=F1_5]:checked').val()) == 'b'){
		html3+='<td style="text-align: center;">'+($("#F1_2R1").val()+' '+$("#F1_2R2").val()).toUpperCase()+'</td>';
		html3+='<td style="text-align: center;">'+($("#F1_7R1").val()).toUpperCase()+'</td>';
		html3+='</tr>';
		html3+='<tr>';
		html3+='<td></td>';
		html3+='<td style="text-align: center;">POR: '+($("#F1_8R1").val()+' '+$("#F1_8R2").val()).toUpperCase()+'</td>';		
	}
	//vendedor moral y comprador fisico
	if(($('input:radio[name=F1_1]:checked').val()) == 'b' && ($('input:radio[name=F1_5]:checked').val()) == 'a'){
		html3+='<td style="text-align: center;">'+($("#F1_3R1").val()).toUpperCase()+'</td>';
		html3+='<td style="text-align: center;">'+($("#F1_6R1").val()+' '+$("#F1_6R2").val()).toUpperCase()+'</td>';
		html3+='</tr>';
		html3+='<tr>';
		html3+='<td style="text-align: center;">POR: '+($("#F1_4R1").val()+' '+$("#F1_4R2").val()).toUpperCase()+'</td>';
		html3+='<td></td>';
		
	}
	//vendedor moral y comprdor moral
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
	if(($('input:radio[name=F21_4]:checked').val()) == 'a'){
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
		html3+='<td style="text-align: center;">'+($("#F7_1TR1").val()+' '+$("#F21_4TR2").val()).toUpperCase()+'</td>';
		html3+='<td style="text-align: center;">'+($("#F21_4TR3").val()+' '+$("#F21_4TR4").val()).toUpperCase()+'</td>';
		html3+='</tr>';
		html3+='</table>'
		html3+='</p>';
		html3+='</div>';
	}
	// alert(html);
	// alert(html2);
	// alert(html3);
	$('#html').prop({'value': html});
	$('#html2').prop({'value': html2});
	$('#html3').prop({'value': html3});
	$('#name').prop({'value': 'CONTRATO PRIVADO DE COMPRAVENTA'});



// });


};