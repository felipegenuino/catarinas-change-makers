 
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
			
				onLeave: function(index, nextIndex, direction){ },
		        afterLoad: function(anchorLink, index){ /*quando carrega pagina alert("onLoad"); */    },
		        afterRender: function(){ /*alert("The resulting DOM stucture is ready"); */ 	      
		        	$('.info-section0').addClass('animated fadeUpRight'); 
		         },
		        afterResize: function(){ /*alert("The sections have finished resizing"); */		       },
		        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){  },
		        onSlideLeave: function(anchorLink, index, slideIndex, direction){
		        	alert("afterSlideLeave");
 		        }
 


			});
		});




 




 

 
