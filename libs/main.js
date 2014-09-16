 
////// jQuery FullPage ////////
$(document).ready(function() {
			$('#fullpage').fullpage({
                 anchors: ['home','voce-pode','incentivos','dificuldade','conheca', 'custo-zero', 'beneficios',  'como-funciona',  'receber', 'analisar',  'financiar',  'acompanhar',  'contato',  'apoio' ],
				// sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
				 menu: '#main-menu',
 				navigation: true,
				paddingTop: '50px',
				css3: false,
 				 //autoScrolling: false,
 				 //fixedElements: '.imagem-voce-pode',
 				navigationPosition: 'right',
				navigationTooltips: ['Home', 'Você pode',  'Incentivos', 'Por que é difícil investir',  'Conheça', 'Custo Zero', 'dot-beneficios',  'dot-como-funciona',  'dot-receber', 'dot-analisar',  'dot-financiar',  'dot-acompanhar',  'dot-contato',  'dot-apoio' ],
			
				onLeave: function(index, nextIndex, direction){ 
 
						 if(index == '1'){ 
						 	$('.imagem-voce-pode').addClass('delay-1s animated fadeInLeftBig'); 
						 	$('.enfase-large').addClass('delay-2s animated fadeInRightBig');   
						 	$('.texto-medium').addClass('delay-3s animated fadeInRightBig');
						 	$('.block-medium').addClass('delay-4s animated fadeInRightBig');
						 }

						 if(index == '2'){ 
						 	$('.imagem-incentivos').addClass('delay-1s animated fadeInDownBig'); 
						 	$('.box-bottom').addClass('delay-3s animated fadeInUpBig');   
  						 }

  						 if(index == '3'){ 
  						 	$('.imagem-dificil-investir').addClass('animated fadeInRightBig'); 
 						 	$('.group-titile').addClass('delay-1s animated fadeInDownBig'); 
						 	$('.lista-1').addClass('delay-3s animated fadeInLeftBig');  
						 	$('.lista-2').addClass('delay-4s animated fadeInLeftBig');   
						 	$('.lista-3').addClass('delay-5s animated fadeInLeftBig');   
						 	$('.lista-4').addClass('delay-6s animated fadeInLeftBig');    
						 	$('.lista-5').addClass('delay-7s animated fadeInLeftBig'); 
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




 




 

 
