 
////// jQuery FullPage ////////
$(document).ready(function() {
			$('#fullpage').fullpage({
                 anchors: ['home','voce-pode','incentivos','dificuldade','conheca', 'custo-zero', 'beneficios-e-funcionalidades',  'como-funciona',  'receber', 'analisar',  'financiar',  'acompanhar',  'contato',  'apoio' ],
				// sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
				 menu: '#main-menu',
 				navigation: true,
				paddingTop: '0px',
				css3: false,
 				 //autoScrolling: false,
 				 //fixedElements: '.imagem-voce-pode',
 				navigationPosition: 'right',
				navigationTooltips: ['Home', 'Você pode',  'Braço estratégico', 'Por que é difícil investir?',  'Conheça Change Makers', 'Custo Zero', 'Benefícios e Funcionalidades',  'Saiba como funciona',  '1. Receber', '2. Analisar',  '3. Financiar',  '4. Acompanhar',  'Entre em contato',  'Empresas que apoiam' ],
			
				onLeave: function(index, nextIndex, direction){ 
 

						 if(index == '0'){ 
						 	$('#setion0 .animation-1').addClass('delay-1s animated fadeInLeftBig'); 
						 	$('#setion0 .animation-2').addClass('delay-2s animated fadeInLeftBig');   
						 	$('#setion0 .animation-3').addClass('delay-3s animated fadeInLeftBig');
 						 }

						 if(index == '1'){ 
						 	$('#section1 .animation-1').addClass('         animated fadeInLeftBig'); 
						 	$('#section1 .animation-2').addClass('delay-1s animated fadeInRightBig');   
						 	$('#section1 .animation-3').addClass('delay-2s animated fadeInRightBig');
						 	$('#section1 .animation-4').addClass('delay-3s animated fadeInRightBig');
						 }

						 if(index == '2'){ 
						 	$('#section2 .animation-1').addClass('animated fadeInDown'); 
						 	$('#section2 .animation-2').addClass('delay-1s animated fadeInUpBig');   
  						 }

  						 if(index == '3'){ 
  						 	$('#section3 .animation-1').addClass('animated fadeInRightBig'); 
 						 	$('#section3 .animation-2').addClass('delay-1s animated fadeInDownBig'); 
						 	$('#section3 .animation-3').addClass('delay-3s animated fadeInLeftBig');  
						 	$('#section3 .animation-4').addClass('delay-5s animated fadeInLeftBig');   
						 	$('#section3 .animation-5').addClass('delay-7s animated fadeInLeftBig');   
						 	$('#section3 .animation-6').addClass('delay-9s animated fadeInLeftBig');    
						 	$('#section3 .animation-7').addClass('delay-11s animated fadeInLeftBig'); 
  						 }

  						 if(index == '4'){ 
  						 	$('#section4 .animation-1') .addClass('          animated fadeInRightBig'); 
  						 	$('#section4 .animation-2') .addClass('delay-1s  animated fadeInLeftBig'); 
 						 	$('#section4 .animation-3') .addClass('delay-2s  animated fadeInLeftBig'); 
						 	$('#section4 .animation-4') .addClass('delay-3s  animated fadeInLeftBig');  
						 	$('#section4 .animation-5') .addClass('delay-4s  animated fadeInUp');   
						 	$('#section4 .animation-6') .addClass('delay-4s  animated fadeInUpBig');    
						 	$('#section4 .animation-7') .addClass('delay-4s  animated fadeInUpBig'); 
						 	$('#section4 .animation-8') .addClass('delay-5s  animated fadeInUp');   
						 	$('#section4 .animation-9') .addClass('delay-5s  animated fadeInUpBig ');    
						 	$('#section4 .animation-10').addClass('delay-5s  animated fadeInUpBig '); 
						 	$('#section4 .animation-11').addClass('delay-6s animated fadeInUp');   
						 	$('#section4 .animation-12').addClass('delay-6s animated fadeInUpBig ');    
						 	$('#section4 .animation-13').addClass('delay-6s animated fadeInUpBig '); 
  						 }

						 if(index == '5'){ 
						 	$('#section5 .animation-1').addClass('animated fadeInLeft'); 
						 	$('#section5 .animation-2').addClass('delay-1s animated fadeInRight');   
						 	$('#section5 .animation-3').addClass('delay-3s animated zoomIn');   
  						 }

  						  if(index == '6'){ 
						 	$('#section6 .animation-1').addClass(' animated fadeInDown'); 
						 	$('#section6 .animation-2').addClass('delay-1s animated fadeInUp');   
						 	$('#section6 .animation-3').addClass('delay-3s animated fadeInDown');   
						 	$('#section6 .animation-4').addClass('delay-4s animated fadeInUp');   
  						 }

  						 if(index == '7'){ 
						 	$('#section7 .animation-1').addClass('animated fadeInDownBig'); 
						 	$('#section7 .animation-2').addClass('delay-1s animated fadeInLeft');   
						 	$('#section7 .animation-3').addClass('delay-2s animated fadeInUp'); 
						 	$('#section7 .animation-4').addClass('delay-2s animated fadeInLeft'); 
						 	$('#section7 .animation-5').addClass('delay-3s animated fadeInUp'); 
						 	$('#section7 .animation-6').addClass('delay-3s animated fadeInLeft'); 
						 	$('#section7 .animation-7').addClass('delay-4s animated fadeInUp'); 
						 	$('#section7 .animation-8').addClass('delay-4s animated fadeInLeft');
   						 }

  						 if(index == '8'){ /* 1 receber */
						 	$('#section8 .animation-1').addClass('animated fadeInRightBig'); 
						 	$('#section8 .animation-2').addClass('delay-1s animated zoomIn');
						 	$('#section8 .animation-3').addClass('delay-2s animated fadeInRightBig');
						 	$('#section8 .animation-4').addClass('delay-4s animated fadeInUpBig');
						 	$('#section8 .animation-5').addClass('delay-6s animated fadeInLeftBig');
						 	$('#section8 .animation-6').addClass('delay-8s animated fadeInUpBig');   
  						 }

  						 if(index == '9'){ /* 2 Analisar */
						 	$('#section9 .animation-1').addClass('animated fadeInLeftBig'); 
						 	$('#section9 .animation-2').addClass('delay-1s animated zoomIn');
						 	$('#section9 .animation-3').addClass('delay-2s animated fadeInRightBig');
						 	$('#section9 .animation-4').addClass('delay-4s animated fadeInUpBig');
						 	$('#section9 .animation-5').addClass('delay-6s animated fadeInLeftBig');
						 	$('#section9 .animation-6').addClass('delay-8s animated fadeInUpBig');     
  						 }

  						 if(index == '10'){ /* 3 Financiar */
						 	$('#section10 .animation-1').addClass('animated fadeInLeftBig'); 
						 	$('#section10 .animation-2').addClass('delay-1s animated zoomIn');
						 	$('#section10 .animation-3').addClass('delay-2s animated fadeInRightBig');
						 	$('#section10 .animation-4').addClass('delay-4s animated fadeInUpBig');
						 	$('#section10 .animation-5').addClass('delay-6s animated fadeInLeftBig');
						 	$('#section10 .animation-6').addClass('delay-8s animated fadeInUpBig');   
  						 }

  						 if(index == '11'){ /* 4 Acompanhar */
						 	$('#section11 .animation-1').addClass('animated fadeInRightBig'); 
						 	$('#section11 .animation-2').addClass('delay-1s animated zoomIn');
						 	$('#section11 .animation-3').addClass('delay-2s animated fadeInRightBig');
						 	$('#section11 .animation-4').addClass('delay-4s animated fadeInUpBig');
						 	$('#section11 .animation-5').addClass('delay-6s animated fadeInLeftBig');
						 	$('#section11 .animation-6').addClass('delay-8s animated fadeInUpBig');    
  						 }

  						 if(index == '12'){ /* Contato */
						 	$('#section12 .animation-1').addClass('animated fadeInUpBig'); 
						 	$('#section12 .animation-2').addClass('delay-1s animated fadeInLeftBig');
						 	$('#section12 .animation-3').addClass('delay-2s animated fadeInUp');
							$('#section12 .animation-4').addClass('delay-2s animated fadeInUp');
						 	$('#section12 .animation-5').addClass('delay-2s animated fadeInUpBig');
						 	$('#section12 .animation-6').addClass('delay-2s animated fadeInUpBig');
  						 }


  						 if(index == '13'){ /* Apoio */
						 	$('#section13 .animation-1').addClass('animated fadeInDownBig'); 
						 	$('#section13 .animation-2').addClass('delay-1s animated fadeInUpBig');   
  						 }


				},
		        afterLoad: function(anchorLink, index){ /*quando carrega pagina alert("onLoad"); */  
						  

						 


		          },
		        afterRender: function(){ /*alert("The resulting DOM stucture is ready"); */ 	      
 		        	$('.loader').hide();
 		        	 $('.header').addClass('animated fadeInDownBig'); 
 		         },
		        afterResize: function(){ /*alert("The sections have finished resizing"); */		       },
		        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){  },
		        onSlideLeave: function(anchorLink, index, slideIndex, direction){ }
 


			});
		});




$('#accordion').collapse()


 

 
