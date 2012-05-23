var siteURL = "http://frontstreetprimary.co.uk/";
var apiPath = "mobile/api/";
var imgPath = "wp-content/uploads/";


var categories;
var infoPages;


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
