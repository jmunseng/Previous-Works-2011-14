var desktop = true;

if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/ipad/i)) || (navigator.userAgent.match(/Windows CE/i)) || (navigator.userAgent.match(/Symbian/i)) || (navigator.userAgent.match(/BlackBerry/i)) || (navigator.userAgent.match(/Android/i)) ) {
	desktop = false;
}


$(document).ready(function() {
	
	var clickMenu;	
	
	// 2depth ¿ÀÇÂ
	$('.gnb_open').css( 'border-top',0 ).css( 'height',0 ).css( 'overflow', 'hidden' );
	$('.gnb a').each( function (index) {
		$(this).attr('data-index', index);
	});
	$('.gnb_open .m1').attr('data-index', 0);
	$('.gnb_open .m2').attr('data-index', 1);
	$('.gnb_open .m3').attr('data-index', 2);
	$('.gnb_open .m4').attr('data-index', 3);
	$('.gnb_open .m5').attr('data-index', 4);
	$('.gnb_open .m6').attr('data-index', 5);
	
	//$('.gnb_open li[data-index !=' + clickMenu + ']').css('background-color', 'transparent');
	
	if ( desktop == false ) {
		$('.gnb a').click( function() {
			clickMenu = $(this).attr('data-index');
			$('.gnb_open').css( 'border-top', '3px #144e9c solid' );
			$('.gnb_open').animate({ height:351 }, 'fast');		
			$('.gnb_open li[data-index !=' + clickMenu + ']').css('background-color', 'transparent');
			$('.gnb_open li[data-index =' + clickMenu + ']').css('background-color', '#f5f5f5');	
		});
	} else {
		$('.gnb a').mouseover( function() {
			clickMenu = $(this).attr('data-index');
			$('.gnb_open').css( 'border-top', '3px #144e9c solid' );
			$('.gnb_open').animate({ height:310 }, 'fast');		
			$('.gnb_open li[data-index !=' + clickMenu + ']').css('background-color', 'transparent');
			$('.gnb_open li[data-index =' + clickMenu + ']').css('background-color', '#f5f5f5');	
		});
	}
	
	
	if ( desktop == false ) {
		$('.gnb_close img').css('cursor','pointer');
		$('.gnb_close img').click( function() { 
			$('.gnb_open').animate({ height:0 }, 'fast', function() {
				$(this).animate({ 'border-top':0 }, 'fast');
			});
		});
	}	
	
	$('.total_menu a').click( function() {
		$('.gnb_open').animate({ height:0 }, 'fast', function() {
			$(this).animate({ 'border-top':0 }, 'fast');
		});
	});
	
	if ( desktop == true ) {
		$('.gnb_open').mouseleave( function() {
			$('.gnb_open').animate({ height:0 }, 'fast', function() {
				$(this).animate({ 'border-top':0 }, 'fast');
			});
		});		
		$('.gnb_close').css('display', 'none');
	}
	
	if (navigator.userAgent.match(/Android/i)) {
		$('p.txt').css('white-space', 'nowrap');
		$('.nobr').css('white-space', 'nowrap');
		$('.ceo_txt').css('white-space', 'nowrap');
	}
	
	
	// copy select
	var selectOpen = false;
	$('#footer .select .btn').click( function() {
		if (selectOpen == false) {
			$('.select_open').show();
			$('#footer .select .btn img').css('margin-top', '-25px');
			selectOpen = true;
		} else {
			$('.select_open').hide();
			$('#footer .select .btn img').css('margin-top', '0');
			selectOpen = false;
		}		
	});
	$('.select_open a').click( function(){
		$('.select_open').hide();
	});

});
