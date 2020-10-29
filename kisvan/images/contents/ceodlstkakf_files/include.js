$(document).ready(function() {
	
	// GNB
	$(".gnb").append($("<li><a href=\"#\"><img src=\"../image/main/m1.gif\" alt=\"회사소개\" /></a></li>"));
	$(".gnb").append($("<li><a href=\"#\"><img src=\"../image/main/m2.gif\" alt=\"사업영역\" /></a></li>"));
	$(".gnb").append($("<li><a href=\"#\"><img src=\"../image/main/m3.gif\" alt=\"부가 서비스\" /></a></li>"));
	$(".gnb").append($("<li><a href=\"#\"><img src=\"../image/main/m4.gif\" alt=\"제품정보\" /></a></li>"));
	$(".gnb").append($("<li><a href=\"#\"><img src=\"../image/main/m5.gif\" alt=\"고객지원\" /></a></li>"));
	$(".gnb").append($("<li class=\"end\"><a href=\"#\"><img src=\"../image/main/m6.gif\" alt=\"채용\" /></a></li>"));
	
	var act_pageNum = pageNum - 1;
	
	$("#header .gnb li a").each( function (index) {
		$(this).attr('data-index', index);
	});
	$('#header .gnb li a[data-index =' + act_pageNum + ']' ).addClass('active');
	
	
	// GNB Open
	$(".gnb_open").append($("<div class=\"menu_area\"></div>"));
	$(".gnb_open .menu_area").append($("<ul class=\"total_menu\"><li class=\"m1\"></li><li class=\"m2\"></li><li class=\"m3\"></li><li class=\"m4\"></li><li class=\"m5\"></li><li class=\"m6\"></li></ul>"));

	$(".gnb_open .menu_area .total_menu .m1").append($("<ul class=\"sm\"></ul>"));
	$(".gnb_open .menu_area .total_menu .m1 .sm").append($("<li><a href=\"../company/1100.html\">CEO인사말</a></li>"));
	$(".gnb_open .menu_area .total_menu .m1 .sm").append($("<li><a href=\"../company/1200.html\">개요</a></li>"));
	$(".gnb_open .menu_area .total_menu .m1 .sm").append($("<li><a href=\"../company/1300.html\">연혁</a></li>"));
	$(".gnb_open .menu_area .total_menu .m1 .sm").append($("<li><a href=\"../company/1400.html\">특허보유</a></li>"));
	$(".gnb_open .menu_area .total_menu .m1 .sm").append($("<li><a href=\"../company/1500_1.html\">그룹소개</a></li>"));
	$(".gnb_open .menu_area .total_menu .m1 .sm").append($("<li><a href=\"../company/1600.html\">사회공헌활동</a></li>"));
	$(".gnb_open .menu_area .total_menu .m1 .sm").append($("<li><a href=\"../company/1700.html\">사이버감사실</a></li>"));
	$(".gnb_open .menu_area .total_menu .m1 .sm").append($("<li><a href=\"../company/1800.html\">오시는길</a></li>"));

	$(".gnb_open .menu_area .total_menu .m2").append($("<ul class=\"sm\"></ul>"));
	$(".gnb_open .menu_area .total_menu .m2 .sm").append($("<li><a href=\"../business/2100_1.html\">VAN서비스</a></li>"));
	$(".gnb_open .menu_area .total_menu .m2 .sm").append($("<li><a href=\"../business/2200_1.html\">유통사업</a></li>"));

	$(".gnb_open .menu_area .total_menu .m3").append($("<ul class=\"sm\"></ul>"));
	$(".gnb_open .menu_area .total_menu .m3 .sm").append($("<li><a href=\"../van/3100.html\">입금정산</a></li>"));
	$(".gnb_open .menu_area .total_menu .m3 .sm").append($("<li><a href=\"../van/3200_1_1.html\">POS솔루션</a></li>"));
	$(".gnb_open .menu_area .total_menu .m3 .sm").append($("<li><a href=\"../van/3300_1.html\">KIS멤버십</a></li>"));
	$(".gnb_open .menu_area .total_menu .m3 .sm").append($("<li><a href=\"../van/3400_1.html\">KIS선불카드</a></li>"));
	$(".gnb_open .menu_area .total_menu .m3 .sm").append($("<li><a href=\"../van/3500_1.html\">외국인결제</a></li>"));

	$(".gnb_open .menu_area .total_menu .m4").append($("<ul class=\"sm\"></ul>"));
	$(".gnb_open .menu_area .total_menu .m4 .sm").append($("<li><a href=\"../product/4100.html\">카드조회기-2인치</a></li>"));
	$(".gnb_open .menu_area .total_menu .m4 .sm").append($("<li><a href=\"../product/4200.html\">카드조회기-3인치</a></li>"));
	$(".gnb_open .menu_area .total_menu .m4 .sm").append($("<li><a href=\"../product/4300.html\">카드조회기-무선</a></li>"));
	$(".gnb_open .menu_area .total_menu .m4 .sm").append($("<li><a href=\"../product/4400.html\">서명패드-보급형</a></li>"));
	$(".gnb_open .menu_area .total_menu .m4 .sm").append($("<li><a href=\"../product/4500.html\">서명패드-고급형</a></li>"));
	$(".gnb_open .menu_area .total_menu .m4 .sm").append($("<li><a href=\"../product/4600.html\">부가장비-모뎀</a></li>"));
	$(".gnb_open .menu_area .total_menu .m4 .sm").append($("<li><a href=\"../product/4700.html\">부가장비-결제</a></li>"));
	$(".gnb_open .menu_area .total_menu .m4 .sm").append($("<li><a href=\"../product/4800.html\">POS</a></li>"));
	$(".gnb_open .menu_area .total_menu .m4 .sm").append($("<li><a href=\"../product/4900.html\">Safe MSR</a></li>"));

	$(".gnb_open .menu_area .total_menu .m5").append($("<ul class=\"sm\"></ul>"));
	$(".gnb_open .menu_area .total_menu .m5 .sm").append($("<li><a href=\"../customer/5100.html\">신규가입</a></li>"));
	$(".gnb_open .menu_area .total_menu .m5 .sm").append($("<li><a href=\"../customer/5200.html\">전표보관</a></li>"));
	$(".gnb_open .menu_area .total_menu .m5 .sm").append($("<li><a href=\"../customer/5300.html\">매입방법</a></li>"));
	$(".gnb_open .menu_area .total_menu .m5 .sm").append($("<li><a href=\"../customer/5400.html\">FAQ</a></li>"));

	$(".gnb_open .menu_area .total_menu .m6").append($("<ul class=\"sm\"></ul>"));
	$(".gnb_open .menu_area .total_menu .m6 .sm").append($("<li><a href=\"../recruit/6100.html\">인재상</a></li>"));
	$(".gnb_open .menu_area .total_menu .m6 .sm").append($("<li><a href=\"../recruit/6200.html\">복리후생</a></li>"));
	$(".gnb_open .menu_area .total_menu .m6 .sm").append($("<li><a href=\"../recruit/6300.html\">인사제도</a></li>"));
	$(".gnb_open .menu_area .total_menu .m6 .sm").append($("<li><a href=\"../recruit/6400.html\">채용안내</a></li>"));

	$(".gnb_open").append($("<div class=\"gnb_close\"></div>"));
	$(".gnb_open .gnb_close").append($("<img src=\"../image/main/gnb_close.gif\" alt=\"닫기\" />"));
	
	var act_pageNum = pageNum - 1;
	var act_subNum = subNum - 1;
	
	$('.gnb_open .m1 .sm').attr('data-index', 0);
	$('.gnb_open .m2 .sm').attr('data-index', 1);
	$('.gnb_open .m3 .sm').attr('data-index', 2);
	$('.gnb_open .m4 .sm').attr('data-index', 3);
	$('.gnb_open .m5 .sm').attr('data-index', 4);
	$('.gnb_open .m6 .sm').attr('data-index', 5);
	$('.gnb_open .m1 .sm a').each( function (index) {
		$(this).attr('data-index', index);
	});
	$('.gnb_open .m2 .sm a').each( function (index) {
		$(this).attr('data-index', index);
	});
	$('.gnb_open .m3 .sm a').each( function (index) {
		$(this).attr('data-index', index);
	});
	$('.gnb_open .m4 .sm a').each( function (index) {
		$(this).attr('data-index', index);
	});
	$('.gnb_open .m5 .sm a').each( function (index) {
		$(this).attr('data-index', index);
	});
	$('.gnb_open .m6 .sm a').each( function (index) {
		$(this).attr('data-index', index);
	});
	$('.gnb_open .menu_area .total_menu .sm[data-index='+ act_pageNum +'] li a[data-index='+ act_subNum +']').addClass('active');
	
	
	// 2depth
	var act_subNum = subNum - 1;
	if ( pageNum == 1 ) {
		$("#menu_2depth ul").append($("<li><a href=\"../company/1100.html\"><img src=\"../image/sub/2depth_1_1.gif\" alt=\"CEO인사말\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../company/1200.html\"><img src=\"../image/sub/2depth_1_2.gif\" alt=\"개요\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../company/1300.html\"><img src=\"../image/sub/2depth_1_3.gif\" alt=\"연혁\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../company/1400.html\"><img src=\"../image/sub/2depth_1_4.gif\" alt=\"특허보유\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../company/1500_1.html\"><img src=\"../image/sub/2depth_1_5.gif\" alt=\"그룹소개\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../company/1600.html\"><img src=\"../image/sub/2depth_1_6.gif\" alt=\"사회공헌활동\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../company/1700.html\"><img src=\"../image/sub/2depth_1_7.gif\" alt=\"사이버감사실\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../company/1800.html\"><img src=\"../image/sub/2depth_1_8.gif\" alt=\"오시는길\" /></a></li>"));
	}
	if ( pageNum == 2 ) {
		$("#menu_2depth ul").append($("<li><a href=\"../business/2100_1.html\"><img src=\"../image/sub/2depth_2_1.gif\" alt=\"VAN서비스\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../business/2200_1.html\"><img src=\"../image/sub/2depth_2_2.gif\" alt=\"유통사업\" /></a></li>"));
	}
	if ( pageNum == 3 ) {
		$("#menu_2depth ul").append($("<li><a href=\"../van/3100.html\"><img src=\"../image/sub/2depth_3_1.gif\" alt=\"입금정산\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../van/3200_1_1.html\"><img src=\"../image/sub/2depth_3_2.gif\" alt=\"POS솔루션\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../van/3300_1.html\"><img src=\"../image/sub/2depth_3_3.gif\" alt=\"KIS멤버십\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../van/3400_1.html\"><img src=\"../image/sub/2depth_3_4.gif\" alt=\"KIS선불카드\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../van/3500_1.html\"><img src=\"../image/sub/2depth_3_5.gif\" alt=\"외국인결제\" /></a></li>"));
	}
	if ( pageNum == 4 ) {
		$("#menu_2depth ul").append($("<li><a href=\"../product/4100.html\"><img src=\"../image/sub/2depth_4_1.gif\" alt=\"카드조회기-2인치\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../product/4200.html\"><img src=\"../image/sub/2depth_4_2.gif\" alt=\"카드조회기-3인치\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../product/4300.html\"><img src=\"../image/sub/2depth_4_3.gif\" alt=\"카드조회기-무선\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../product/4400.html\"><img src=\"../image/sub/2depth_4_4.gif\" alt=\"서명패드-보급형\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../product/4500.html\"><img src=\"../image/sub/2depth_4_5.gif\" alt=\"서명패드-고급형\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../product/4600.html\"><img src=\"../image/sub/2depth_4_6.gif\" alt=\"부가장비-모뎀\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../product/4700.html\"><img src=\"../image/sub/2depth_4_7.gif\" alt=\"부가장비-결제\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../product/4800.html\"><img src=\"../image/sub/2depth_4_8.gif\" alt=\"POS\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../product/4900.html\"><img src=\"../image/sub/2depth_4_9.gif\" alt=\"Safe MSR\" /></a></li>"));
	}
	if ( pageNum == 5 ) {
		$("#menu_2depth ul").append($("<li><a href=\"../customer/5100.html\"><img src=\"../image/sub/2depth_5_1.gif\" alt=\"신규가입\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../customer/5200.html\"><img src=\"../image/sub/2depth_5_2.gif\" alt=\"유의사항\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../customer/5300.html\"><img src=\"../image/sub/2depth_5_3.gif\" alt=\"전표보관\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../customer/5400.html\"><img src=\"../image/sub/2depth_5_4.gif\" alt=\"매입방법\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../customer/5500.html\"><img src=\"../image/sub/2depth_5_5.gif\" alt=\"매입처리\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../customer/5600.html\"><img src=\"../image/sub/2depth_5_6.gif\" alt=\"FAQ\" /></a></li>"));
	}
	if ( pageNum == 6 ) {
		$("#menu_2depth ul").append($("<li><a href=\"../recruit/6100.html\"><img src=\"../image/sub/2depth_6_1.gif\" alt=\"인재상\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../recruit/6200.html\"><img src=\"../image/sub/2depth_6_2.gif\" alt=\"복리후생\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../recruit/6300.html\"><img src=\"../image/sub/2depth_6_3.gif\" alt=\"인사제도\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../recruit/6400.html\"><img src=\"../image/sub/2depth_6_4.gif\" alt=\"채용안내\" /></a></li>"));
	}
	if ( pageNum == 7 ) {
		$("#menu_2depth").css( 'display','none' );
	}
	
	$("#menu_2depth ul li a img").each( function (index) {
		$(this).attr('data-index', index);
	});
	$('#menu_2depth ul li a img[data-index =' + act_subNum + ']' ).attr({ src: "../image/sub/2depth_"+ pageNum +"_"+ subNum +"_over.gif"});
	
	
	// sub visual
	$("#menu_2depth").before($("<div id=\"sub_visual\" class=\"visual_image_"+ pageNum +"\"></div>"));
	
	
	// title
	if ( pageNum != 7) {
		$(".contents_title").append($("<div class=\"title_image\"><img src=\"../image/sub/title_" + pageNum + subNum + "00.gif\" alt=\"\" /></div>"));
		$(".contents_title").append($("<div class=\"title_position\"><img src=\"../image/sub/title_icon.gif\" alt=\"홈\" /><img src=\"../image/sub/title_arrow.gif\" alt=\">\" class=\"title_arrow\" />"+ pageTitle+"<img src=\"../image/sub/title_arrow.gif\" alt=\">\" class=\"title_arrow\" />"+ subTitle +"</div>"));
	} else {
		$(".contents_title").append($("<div class=\"title_image\"><img src=\"../image/sub/title_" + pageNum + subNum + "00.gif\" alt=\"\" /></div>"));
		$(".contents_title").append($("<div class=\"title_position\"><img src=\"../image/sub/title_icon.gif\" alt=\"홈\" /><img src=\"../image/sub/title_arrow.gif\" alt=\">\" class=\"title_arrow\" />"+ subTitle +"</div>"));
	}	
	
	
	// footer
	$("#footer").append($("<div class=\"copylogo\"><img src=\"../image/main/copy_logo.jpg\" alt=\"KIS 정보통신\" /></div>"));
	$("#footer").append($("<div class=\"copymenu\"></div>"));
	$("#footer .copymenu").append($("<div><a href=\"../etc/7100.html\"><img src=\"../image/main/copy_menu.jpg\" alt=\"개인정보취급방침\" /></a></div>"));
	$("#footer .copymenu").append($("<address><img src=\"../image/main/copyright.jpg\" alr=\"서울시 금천구 가산디지털 2로 98 (가산동) IT캐슬2동 10층, TEL:1599-3711, FAX:2026-8820, Copyright(C) 2011 All Right Reserved.\" /></address>	"));	
	$("#footer").append($("<div class=\"select\"></div>"));
	//$("#footer .select").append($("<div class=\"btn\"><img src=\"../image/main/copy_select.jpg\" lat=\"Family Site\" /></div>"));
	
	
	// footer select
	//$("#footer").after($("<ul class=\"select_open\"></ul>"));
	//$("#footer .select_open").append($("<li><a href=\"https://ubms.kisvan.co.kr/\" target=\"_blank\">KIS UMBS</a></li>"));
	//$("#footer .select_open").append($("<li><a href=\"https://semplus.kisvan.co.kr/\" target=\"_blank\">셈플러스 서비스</a></li>"));
	//$("#footer .select_open").append($("<li><a href=\"https://kisedi.kisvan.co.kr/\" target=\"_blank\">KIS EDI</a></li>"));
	//$("#footer .select_open").append($("<li><a href=\"http://www.ukms.co.kr/main.jsp\" target=\"_blank\">KIS 멤버십</a></li>"));
	//$("#footer .select_open").append($("<li class=\"end\"><a href=\"https://icat.kisvan.co.kr/login/LoginAction/Init.do\" target=\"_blank\">인터넷 현금영수증</a></li>"));
	
});