 
////// jQuery FullPage ////////
$(document).ready(function() {
			$('#fullpage').fullpage({
                 anchors: ['home','voce-pode','incentivos','dificuldade','conheca', 'custo-zero', 'beneficios-e-funcionalidades',  'como-funciona',  'receber', 'analisar',  'financiar',  'acompanhar',  'contato',  'apoio' ],
				// sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
				 menu: '#main-menu',
 				navigation: true,
				paddingTop: '50px',
				css3: false,
 				 //autoScrolling: false,
 				 //fixedElements: '.imagem-voce-pode',
 				navigationPosition: 'right',
				navigationTooltips: ['Home', 'Você pode',  'Incentivos', 'Por que é difícil investir',  'Conheça', 'Custo Zero', 'Benefícios e Funcionalidades',  'dot-como-funciona',  'dot-receber', 'dot-analisar',  'dot-financiar',  'dot-acompanhar',  'dot-contato',  'dot-apoio' ],
			
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
						 	$('#section2 .animation-1').addClass('delay-1s animated fadeInDownBig'); 
						 	$('#section2 .animation-2').addClass('delay-3s animated fadeInUpBig');   
  						 }

  						 if(index == '3'){ 
  						 	$('#section3 .animation-1').addClass('animated fadeInRightBig'); 
 						 	$('#section3 .animation-2').addClass('delay-1s animated fadeInDownBig'); 
						 	$('#section3 .animation-3').addClass('delay-3s animated fadeInLeftBig');  
						 	$('#section3 .animation-4').addClass('delay-4s animated fadeInLeftBig');   
						 	$('#section3 .animation-5').addClass('delay-5s animated fadeInLeftBig');   
						 	$('#section3 .animation-6').addClass('delay-6s animated fadeInLeftBig');    
						 	$('#section3 .animation-7').addClass('delay-7s animated fadeInLeftBig'); 
  						 }

  						 if(index == '4'){ 
  						 	$('#section4 .animation-1') .addClass('          animated fadeInRightBig'); 
  						 	$('#section4 .animation-2') .addClass('delay-1s  animated fadeInLeftBig'); 
 						 	$('#section4 .animation-3') .addClass('delay-2s  animated fadeInLeftBig'); 
						 	$('#section4 .animation-4') .addClass('delay-3s  animated fadeInLeftBig');  
						 	$('#section4 .animation-5') .addClass('delay-4s  animated fadeInUpBig');   
						 	$('#section4 .animation-6') .addClass('delay-5s  animated fadeInUpBig');    
						 	$('#section4 .animation-7') .addClass('delay-6s  animated fadeInUpBig'); 
						 	$('#section4 .animation-8') .addClass('delay-7s  animated fadeInUpBig');   
						 	$('#section4 .animation-9') .addClass('delay-8s  animated fadeInUpBig');    
						 	$('#section4 .animation-10').addClass('delay-9s  animated fadeInUpBig'); 
						 	$('#section4 .animation-11').addClass('delay-10s animated fadeInUpBig');   
						 	$('#section4 .animation-12').addClass('delay-11s animated fadeInUpBig');    
						 	$('#section4 .animation-13').addClass('delay-12s animated fadeInUpBig'); 
  						 }

						 if(index == '5'){ 
						 	$('#section5 .animation-1').addClass('delay-1s animated fadeInLeft'); 
						 	$('#section5 .animation-2').addClass('delay-2s animated fadeInRight');   
						 	$('#section5 .animation-3').addClass('delay-3s animated zoomIn');   

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




 

 

 
