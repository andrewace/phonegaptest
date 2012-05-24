var siteURL = "http://frontstreetprimary.co.uk/";
var apiPath = "mobile/api/";
var imgPath = "wp-content/uploads/";


var categories;
var infoPages;
var newsletters;


// Date Format Method
// copyright Stephen Chapman, 20th November 2007, 19 January 2011
// http://javascript.about.com
// permission to use this JavaScript on your web page is granted
// provided that all of the code below in this script (including these
// comments) is used without any alteration

function getCategoryList() {

	$.getJSON(siteURL + apiPath + 'getcategories.php?', function(data) {
		$('#categoryList li').remove();
		categories = data.items;
		$.each(categories, function(index, category) {
			$('#categoryList').append('<li><a href="categorydetails.html?id=' + category.slug + '">' +
					'<h4>' + category.name + '</h4></a></li>');
		});

		$('#categoryList').listview('refresh');
		$(".ui-page div.ui-content").iscrollview();
		
		var numelements=$("#categoryList .ui-link-inherit").length;
		var boxheight=$(".ui-page div.ui-content").height();
		
		var elemheight=Math.round(boxheight/numelements);
		var elempadding=Math.round((elemheight-40)/2);
		if (elempadding<0) { elempadding=0; }
		
		$("#categoryList a.ui-link-inherit").css("padding-top",elempadding+"px");
		$("#categoryList a.ui-link-inherit").css("padding-bottom",elempadding+"px");
		$("#categoryList div.ui-btn-inner").css("height",elemheight+"px");
		

	});
} 

function getInfoList() {


	$.getJSON(siteURL + apiPath + 'getinfolist.php?', function(data) {
		$('#schoolInfoList li').remove();
		infoPages = data.items;
				
		$.each(infoPages, function(index, page) {
			$('#schoolInfoList').append('<li><a href="schoolInfodetails.html?id=' + page.ID + '">' +
					'<h4>' + page.post_title + '</h4></a></li>');
		});

		$('#schoolInfoList').append('<li><a href="sports.html"><h4>Sports &amp; Clubs</h4></a></li>');
		$('#schoolInfoList').append('<li><a href="events.html"><h4>Fundraising &amp; Events</h4></a></li>');

		$('#schoolInfoList').listview('refresh');
		$(".ui-page div.ui-content").iscrollview();
		
		var numelements=$("#schoolInfoList .ui-link-inherit").length;
		var boxheight=$("div.ui-content").height();	
		
		var elemheight=Math.round(boxheight/numelements);
		var elempadding=Math.round((elemheight-40)/2);
		if (elempadding<0) { elempadding=0; }
		
		$("#schoolInfoList a.ui-link-inherit").css("padding-top",elempadding+"px");
		$("#schoolInfoList a.ui-link-inherit").css("padding-bottom",elempadding+"px");
		$("#schoolInfoList div.ui-btn-inner").css("height",elemheight+"px");		
		

	});
} 

function getNewsletters() {

	$.getJSON(siteURL + apiPath + 'getnewsletters.php?', function(data) {



		$('#newsletterList li').remove();
		newsletters = data.items;
				
		$.each(newsletters, function(index, post) {
		
			var d = new Date(post.post_date);
			var mnth = d.getMonth() + 1;
			var month=new Array();
			month[0]="January";
			month[1]="February";
			month[2]="March";
			month[3]="April";
			month[4]="May";
			month[5]="June";
			month[6]="July";
			month[7]="August";
			month[8]="September";
			month[9]="October";
			month[10]="November";
			month[11]="December";
			var dt = d.getDate();
			var append = "th"
			if (dt==1||dt==21||dt==31) { append = "st" ; }
			if (dt==2||dt==22) { append = "nd" ; }
			if (dt==3||dt==23) { append = "rd" ; }
			thedate = dt + append + " " + month[d.getMonth()] + " " + d.getFullYear();
		
			$('#newsletterList').append('<li><a href="newsletter.html?id=' + post.ID + '">' +
					'<h4>' + thedate + '</h4></a></li>');
		});

		$('#newsletterList').listview('refresh');
		$(".ui-page div.ui-content").iscrollview();
		
		var numelements=$("#newsletterList .ui-link-inherit").length;
		var boxheight=$("div.ui-content").height();	
		
		var elemheight=Math.round(boxheight/numelements);
		var elempadding=Math.round((elemheight-40)/2);
		if (elempadding<0) { elempadding=0; }
		
		$("#newsletterList a.ui-link-inherit").css("padding-top",elempadding+"px");
		$("#newsletterList a.ui-link-inherit").css("padding-bottom",elempadding+"px");
		$("#newsletterList div.ui-btn-inner").css("height",elemheight+"px");		
		

	});
} 
