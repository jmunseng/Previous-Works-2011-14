var banNum = 0;
var oldBanNum;
var timer;

$(function(){
	
	timer = setInterval(function () {				
		
		// 배경모션
		moveSlider(banNum);			
		//alert("aaa")
		
	}, 5000);
	
	function moveSlider(index) {				
		
		// 배경, 텍스트 모션
		for ( var i=0; i<4; i++) {
			if ( i <= 1 ) {
				$('.slider_text[data-index !=' + i + '] .text1').animate({ 'margin-left': '-385px', opacity:0 }, 'fast');
				$('.slider_text[data-index !=' + i + '] .text2').animate({ 'margin-left': '-388px', opacity:0 }, 'fast');
				$('.slider_text[data-index !=' + i + '] .text3').animate({ 'margin-left': '-388px', opacity:0 }, 'fast');
			} else {
				$('.slider_text[data-index !=' + i + '] .text1').animate({ 'margin-right': '-385px', opacity:0 }, 'fast');
				$('.slider_text[data-index !=' + i + '] .text2').animate({ 'margin-right': '-388px', opacity:0 }, 'fast');
				$('.slider_text[data-index !=' + i + '] .text3').animate({ 'margin-right': '-388px', opacity:0 }, 'fast');
			}			
		};
		$('.slider_image[data-index !=' + index + ']').animate({ opacity:'0' }, 600);	
		
		$('.slider_image[data-index =' + index + ']').animate({ opacity:'1' }, 600);
			if ( index <= 1 ) {
				$('.slider_text[data-index =' + index + '] .text1').delay(100).animate({ 'margin-left': '-435px', opacity:1 }, 'slow');
				$('.slider_text[data-index =' + index + '] .text2').delay(300).animate({ 'margin-left': '-438px', opacity:1 }, 'slow');
				$('.slider_text[data-index =' + index + '] .text3').delay(500).animate({ 'margin-left': '-438px', opacity:1 }, 'slow');
			} else {
				$('.slider_text[data-index =' + index + '] .text1').delay(100).animate({ 'margin-right': '-435px', opacity:1 }, 'slow');
				$('.slider_text[data-index =' + index + '] .text2').delay(300).animate({ 'margin-right': '-438px', opacity:1 }, 'slow');
				$('.slider_text[data-index =' + index + '] .text3').delay(500).animate({ 'margin-right': '-438px', opacity:1 }, 'slow');
			}	
			
			/*if ( index <= 1 ) {
				$('.slider_text[data-index =' + index + '] .text1').animate({ 'margin-left': '-435px', opacity:1, "filter":"alpha(opacity=100)" }, 500, 'easeOutBack');
				$('.slider_text[data-index =' + index + '] .text2').delay(200).animate({ 'margin-left': '-438px', opacity:1, "filter":"alpha(opacity=100)" }, 500, 'easeOutBack');
				$('.slider_text[data-index =' + index + '] .text3').delay(400).animate({ 'margin-left': '-438px', opacity:1, "filter":"alpha(opacity=100)" }, 500, 'easeOutBack', function() {
				});
			} 
			if ( index >= 2 ) {
				$('.slider_text[data-index =' + index + '] .text1').animate({ 'margin-right': '-435px', opacity:1, "filter":"alpha(opacity=100)" }, 500, 'easeInOutExpo');
				$('.slider_text[data-index =' + index + '] .text2').delay(200).animate({ 'margin-right': '-438px', opacity:1, "filter":"alpha(opacity=100)" }, 500, 'easeOutBack');
				$('.slider_text[data-index =' + index + '] .text3').delay(400).animate({ 'margin-right': '-438px', opacity:1, "filter":"alpha(opacity=100)" }, 500, 'easeOutBack', function() {
				});
			}	*/		
			
		
		// control button에 active 클래스 부여/제거
		$('.control_button[data-index =' + index + ']').addClass('active');
		$('.control_button[data-index !=' + index + ']').removeClass('active');

		
		if ( banNum < 3) {
			banNum++;
		} else if ( banNum >= 3 ) {
			banNum = 0;
		}			
		
	};
	
	//초기 텍스트 위치 지정과 data-index 할당
	$('.slider_text').each( function (index) {
		$(this).attr('data-index', index);
	});
	
	//초기 배경 위치 지정과 data-index 할당
	$('.slider_image').each( function (index) {
		$(this).attr('data-index', index);
	});
	
	// 컨트롤 버튼의 클릭 핸들러 지정과 data-index 할당
	$('.control_button').each( function (index){
		$(this).attr('data-index', index);
	}).click( function() {
		var index = $(this).attr('data-index');
		banNum = index;
		moveSlider(banNum);
	});
	
	moveSlider(banNum);
	
	$('.animation_canvas').hover(
		function() {
			if(timer) {
				clearInterval(timer);
			}
		},
		function() {
			if(timer) {
				clearInterval(timer);
		}

		timer = setInterval(function () {				
		
				// 배경모션
				moveSlider(banNum);			
				//alert("aaa")
				
			}, 5000);
		}
	);
	$('.control_button').hover(
		function() {
			if(timer) {
				clearInterval(timer);
			}
		},
		function() {
			if(timer) {
				clearInterval(timer);
		}

		timer = setInterval(function () {				
		
				// 배경모션
				moveSlider(banNum);			
				//alert("aaa")
				
			}, 5000);
		}
	);
	
	if ( desktop == true ) {
		$('#modal ul li a').removeAttr('href');
	}
		
});
