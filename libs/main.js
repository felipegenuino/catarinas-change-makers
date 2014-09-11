////// jQuery FullPage ////////
$(document).ready(function() {
			$('#fullpage').fullpage({
                 anchors: ['home', 'voce-pode',  'investir', 'conheca',  'custo-zero',  'beneficios',  'como-funciona',  'receber', 'analisar',  'financiar',  'acompanhar',  'contato',  'apoio' ],
				// sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
				 menu: '#main-menu',
 				navigation: true,
						paddingTop: '3em',
		css3: true,
				'verticalCentered': false,

				navigationPosition: 'right',
				navigationTooltips: ['dot-home', 'dot-voce-pode',  'dot-investir', 'dot-conheca',  'dot-custo-zero',  'dot-beneficios',  'dot-como-funciona',  'dot-receber', 'dot-analisar',  'dot-financiar',  'dot-acompanhar',  'dot-contato',  'dot-apoio' ]
			});
		});