$(document).ready(function() {
	
	// GNB
	$(".gnb").append($("<li><a href=\"#\"><img src=\"../image/main/m1.gif\" alt=\"ȸ��Ұ�\" /></a></li>"));
	$(".gnb").append($("<li><a href=\"#\"><img src=\"../image/main/m2.gif\" alt=\"�������\" /></a></li>"));
	$(".gnb").append($("<li><a href=\"#\"><img src=\"../image/main/m3.gif\" alt=\"�ΰ� ����\" /></a></li>"));
	$(".gnb").append($("<li><a href=\"#\"><img src=\"../image/main/m4.gif\" alt=\"��ǰ����\" /></a></li>"));
	$(".gnb").append($("<li><a href=\"#\"><img src=\"../image/main/m5.gif\" alt=\"������\" /></a></li>"));
	$(".gnb").append($("<li class=\"end\"><a href=\"#\"><img src=\"../image/main/m6.gif\" alt=\"ä��\" /></a></li>"));
	
	var act_pageNum = pageNum - 1;
	
	$("#header .gnb li a").each( function (index) {
		$(this).attr('data-index', index);
	});
	$('#header .gnb li a[data-index =' + act_pageNum + ']' ).addClass('active');
	
	
	// GNB Open
	$(".gnb_open").append($("<div class=\"menu_area\"></div>"));
	$(".gnb_open .menu_area").append($("<ul class=\"total_menu\"><li class=\"m1\"></li><li class=\"m2\"></li><li class=\"m3\"></li><li class=\"m4\"></li><li class=\"m5\"></li><li class=\"m6\"></li></ul>"));

	$(".gnb_open .menu_area .total_menu .m1").append($("<ul class=\"sm\"></ul>"));
	$(".gnb_open .menu_area .total_menu .m1 .sm").append($("<li><a href=\"../company/1100.html\">CEO�λ縻</a></li>"));
	$(".gnb_open .menu_area .total_menu .m1 .sm").append($("<li><a href=\"../company/1200.html\">����</a></li>"));
	$(".gnb_open .menu_area .total_menu .m1 .sm").append($("<li><a href=\"../company/1300.html\">����</a></li>"));
	$(".gnb_open .menu_area .total_menu .m1 .sm").append($("<li><a href=\"../company/1400.html\">Ư�㺸��</a></li>"));
	$(".gnb_open .menu_area .total_menu .m1 .sm").append($("<li><a href=\"../company/1500_1.html\">�׷�Ұ�</a></li>"));
	$(".gnb_open .menu_area .total_menu .m1 .sm").append($("<li><a href=\"../company/1600.html\">��ȸ����Ȱ��</a></li>"));
	$(".gnb_open .menu_area .total_menu .m1 .sm").append($("<li><a href=\"../company/1700.html\">���̹������</a></li>"));
	$(".gnb_open .menu_area .total_menu .m1 .sm").append($("<li><a href=\"../company/1800.html\">���ô±�</a></li>"));

	$(".gnb_open .menu_area .total_menu .m2").append($("<ul class=\"sm\"></ul>"));
	$(".gnb_open .menu_area .total_menu .m2 .sm").append($("<li><a href=\"../business/2100_1.html\">VAN����</a></li>"));
	$(".gnb_open .menu_area .total_menu .m2 .sm").append($("<li><a href=\"../business/2200_1.html\">������</a></li>"));

	$(".gnb_open .menu_area .total_menu .m3").append($("<ul class=\"sm\"></ul>"));
	$(".gnb_open .menu_area .total_menu .m3 .sm").append($("<li><a href=\"../van/3100.html\">�Ա�����</a></li>"));
	$(".gnb_open .menu_area .total_menu .m3 .sm").append($("<li><a href=\"../van/3200_1_1.html\">POS�ַ��</a></li>"));
	$(".gnb_open .menu_area .total_menu .m3 .sm").append($("<li><a href=\"../van/3300_1.html\">KIS�����</a></li>"));
	$(".gnb_open .menu_area .total_menu .m3 .sm").append($("<li><a href=\"../van/3400_1.html\">KIS����ī��</a></li>"));
	$(".gnb_open .menu_area .total_menu .m3 .sm").append($("<li><a href=\"../van/3500_1.html\">�ܱ��ΰ���</a></li>"));

	$(".gnb_open .menu_area .total_menu .m4").append($("<ul class=\"sm\"></ul>"));
	$(".gnb_open .menu_area .total_menu .m4 .sm").append($("<li><a href=\"../product/4100.html\">ī����ȸ��-2��ġ</a></li>"));
	$(".gnb_open .menu_area .total_menu .m4 .sm").append($("<li><a href=\"../product/4200.html\">ī����ȸ��-3��ġ</a></li>"));
	$(".gnb_open .menu_area .total_menu .m4 .sm").append($("<li><a href=\"../product/4300.html\">ī����ȸ��-����</a></li>"));
	$(".gnb_open .menu_area .total_menu .m4 .sm").append($("<li><a href=\"../product/4400.html\">�����е�-������</a></li>"));
	$(".gnb_open .menu_area .total_menu .m4 .sm").append($("<li><a href=\"../product/4500.html\">�����е�-�����</a></li>"));
	$(".gnb_open .menu_area .total_menu .m4 .sm").append($("<li><a href=\"../product/4600.html\">�ΰ����-��</a></li>"));
	$(".gnb_open .menu_area .total_menu .m4 .sm").append($("<li><a href=\"../product/4700.html\">�ΰ����-����</a></li>"));
	$(".gnb_open .menu_area .total_menu .m4 .sm").append($("<li><a href=\"../product/4800.html\">POS</a></li>"));
	$(".gnb_open .menu_area .total_menu .m4 .sm").append($("<li><a href=\"../product/4900.html\">Safe MSR</a></li>"));

	$(".gnb_open .menu_area .total_menu .m5").append($("<ul class=\"sm\"></ul>"));
	$(".gnb_open .menu_area .total_menu .m5 .sm").append($("<li><a href=\"../customer/5100.html\">�ű԰���</a></li>"));
	$(".gnb_open .menu_area .total_menu .m5 .sm").append($("<li><a href=\"../customer/5200.html\">��ǥ����</a></li>"));
	$(".gnb_open .menu_area .total_menu .m5 .sm").append($("<li><a href=\"../customer/5300.html\">���Թ��</a></li>"));
	$(".gnb_open .menu_area .total_menu .m5 .sm").append($("<li><a href=\"../customer/5400.html\">FAQ</a></li>"));

	$(".gnb_open .menu_area .total_menu .m6").append($("<ul class=\"sm\"></ul>"));
	$(".gnb_open .menu_area .total_menu .m6 .sm").append($("<li><a href=\"../recruit/6100.html\">�����</a></li>"));
	$(".gnb_open .menu_area .total_menu .m6 .sm").append($("<li><a href=\"../recruit/6200.html\">�����Ļ�</a></li>"));
	$(".gnb_open .menu_area .total_menu .m6 .sm").append($("<li><a href=\"../recruit/6300.html\">�λ�����</a></li>"));
	$(".gnb_open .menu_area .total_menu .m6 .sm").append($("<li><a href=\"../recruit/6400.html\">ä��ȳ�</a></li>"));

	$(".gnb_open").append($("<div class=\"gnb_close\"></div>"));
	$(".gnb_open .gnb_close").append($("<img src=\"../image/main/gnb_close.gif\" alt=\"�ݱ�\" />"));
	
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
		$("#menu_2depth ul").append($("<li><a href=\"../company/1100.html\"><img src=\"../image/sub/2depth_1_1.gif\" alt=\"CEO�λ縻\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../company/1200.html\"><img src=\"../image/sub/2depth_1_2.gif\" alt=\"����\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../company/1300.html\"><img src=\"../image/sub/2depth_1_3.gif\" alt=\"����\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../company/1400.html\"><img src=\"../image/sub/2depth_1_4.gif\" alt=\"Ư�㺸��\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../company/1500_1.html\"><img src=\"../image/sub/2depth_1_5.gif\" alt=\"�׷�Ұ�\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../company/1600.html\"><img src=\"../image/sub/2depth_1_6.gif\" alt=\"��ȸ����Ȱ��\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../company/1700.html\"><img src=\"../image/sub/2depth_1_7.gif\" alt=\"���̹������\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../company/1800.html\"><img src=\"../image/sub/2depth_1_8.gif\" alt=\"���ô±�\" /></a></li>"));
	}
	if ( pageNum == 2 ) {
		$("#menu_2depth ul").append($("<li><a href=\"../business/2100_1.html\"><img src=\"../image/sub/2depth_2_1.gif\" alt=\"VAN����\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../business/2200_1.html\"><img src=\"../image/sub/2depth_2_2.gif\" alt=\"������\" /></a></li>"));
	}
	if ( pageNum == 3 ) {
		$("#menu_2depth ul").append($("<li><a href=\"../van/3100.html\"><img src=\"../image/sub/2depth_3_1.gif\" alt=\"�Ա�����\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../van/3200_1_1.html\"><img src=\"../image/sub/2depth_3_2.gif\" alt=\"POS�ַ��\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../van/3300_1.html\"><img src=\"../image/sub/2depth_3_3.gif\" alt=\"KIS�����\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../van/3400_1.html\"><img src=\"../image/sub/2depth_3_4.gif\" alt=\"KIS����ī��\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../van/3500_1.html\"><img src=\"../image/sub/2depth_3_5.gif\" alt=\"�ܱ��ΰ���\" /></a></li>"));
	}
	if ( pageNum == 4 ) {
		$("#menu_2depth ul").append($("<li><a href=\"../product/4100.html\"><img src=\"../image/sub/2depth_4_1.gif\" alt=\"ī����ȸ��-2��ġ\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../product/4200.html\"><img src=\"../image/sub/2depth_4_2.gif\" alt=\"ī����ȸ��-3��ġ\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../product/4300.html\"><img src=\"../image/sub/2depth_4_3.gif\" alt=\"ī����ȸ��-����\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../product/4400.html\"><img src=\"../image/sub/2depth_4_4.gif\" alt=\"�����е�-������\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../product/4500.html\"><img src=\"../image/sub/2depth_4_5.gif\" alt=\"�����е�-�����\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../product/4600.html\"><img src=\"../image/sub/2depth_4_6.gif\" alt=\"�ΰ����-��\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../product/4700.html\"><img src=\"../image/sub/2depth_4_7.gif\" alt=\"�ΰ����-����\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../product/4800.html\"><img src=\"../image/sub/2depth_4_8.gif\" alt=\"POS\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../product/4900.html\"><img src=\"../image/sub/2depth_4_9.gif\" alt=\"Safe MSR\" /></a></li>"));
	}
	if ( pageNum == 5 ) {
		$("#menu_2depth ul").append($("<li><a href=\"../customer/5100.html\"><img src=\"../image/sub/2depth_5_1.gif\" alt=\"�ű԰���\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../customer/5200.html\"><img src=\"../image/sub/2depth_5_2.gif\" alt=\"���ǻ���\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../customer/5300.html\"><img src=\"../image/sub/2depth_5_3.gif\" alt=\"��ǥ����\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../customer/5400.html\"><img src=\"../image/sub/2depth_5_4.gif\" alt=\"���Թ��\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../customer/5500.html\"><img src=\"../image/sub/2depth_5_5.gif\" alt=\"����ó��\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../customer/5600.html\"><img src=\"../image/sub/2depth_5_6.gif\" alt=\"FAQ\" /></a></li>"));
	}
	if ( pageNum == 6 ) {
		$("#menu_2depth ul").append($("<li><a href=\"../recruit/6100.html\"><img src=\"../image/sub/2depth_6_1.gif\" alt=\"�����\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../recruit/6200.html\"><img src=\"../image/sub/2depth_6_2.gif\" alt=\"�����Ļ�\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../recruit/6300.html\"><img src=\"../image/sub/2depth_6_3.gif\" alt=\"�λ�����\" /></a></li>"));
		$("#menu_2depth ul").append($("<li><a href=\"../recruit/6400.html\"><img src=\"../image/sub/2depth_6_4.gif\" alt=\"ä��ȳ�\" /></a></li>"));
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
		$(".contents_title").append($("<div class=\"title_position\"><img src=\"../image/sub/title_icon.gif\" alt=\"Ȩ\" /><img src=\"../image/sub/title_arrow.gif\" alt=\">\" class=\"title_arrow\" />"+ pageTitle+"<img src=\"../image/sub/title_arrow.gif\" alt=\">\" class=\"title_arrow\" />"+ subTitle +"</div>"));
	} else {
		$(".contents_title").append($("<div class=\"title_image\"><img src=\"../image/sub/title_" + pageNum + subNum + "00.gif\" alt=\"\" /></div>"));
		$(".contents_title").append($("<div class=\"title_position\"><img src=\"../image/sub/title_icon.gif\" alt=\"Ȩ\" /><img src=\"../image/sub/title_arrow.gif\" alt=\">\" class=\"title_arrow\" />"+ subTitle +"</div>"));
	}	
	
	
	// footer
	$("#footer").append($("<div class=\"copylogo\"><img src=\"../image/main/copy_logo.jpg\" alt=\"KIS �������\" /></div>"));
	$("#footer").append($("<div class=\"copymenu\"></div>"));
	$("#footer .copymenu").append($("<div><a href=\"../etc/7100.html\"><img src=\"../image/main/copy_menu.jpg\" alt=\"����������޹�ħ\" /></a></div>"));
	$("#footer .copymenu").append($("<address><img src=\"../image/main/copyright.jpg\" alr=\"����� ��õ�� ��������� 2�� 98 (���굿) ITĳ��2�� 10��, TEL:1599-3711, FAX:2026-8820, Copyright(C) 2011 All Right Reserved.\" /></address>	"));	
	$("#footer").append($("<div class=\"select\"></div>"));
	//$("#footer .select").append($("<div class=\"btn\"><img src=\"../image/main/copy_select.jpg\" lat=\"Family Site\" /></div>"));
	
	
	// footer select
	//$("#footer").after($("<ul class=\"select_open\"></ul>"));
	//$("#footer .select_open").append($("<li><a href=\"https://ubms.kisvan.co.kr/\" target=\"_blank\">KIS UMBS</a></li>"));
	//$("#footer .select_open").append($("<li><a href=\"https://semplus.kisvan.co.kr/\" target=\"_blank\">���÷��� ����</a></li>"));
	//$("#footer .select_open").append($("<li><a href=\"https://kisedi.kisvan.co.kr/\" target=\"_blank\">KIS EDI</a></li>"));
	//$("#footer .select_open").append($("<li><a href=\"http://www.ukms.co.kr/main.jsp\" target=\"_blank\">KIS �����</a></li>"));
	//$("#footer .select_open").append($("<li class=\"end\"><a href=\"https://icat.kisvan.co.kr/login/LoginAction/Init.do\" target=\"_blank\">���ͳ� ���ݿ�����</a></li>"));
	
});