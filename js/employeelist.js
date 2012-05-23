var siteURL = "http://frontstreetprimary.co.uk/";
var apiPath = "mobile/api/";
var imgPath = "wp-content/uploads/";


var categories;


$("#categoryPage").bind("pageinit", function (e) {

	getCategoryList();

});


function getCategoryList() {

	$.getJSON(siteURL + apiPath + 'getcategories.php?', function(data) {
		$('#categoryList li').remove();
		categories = data.items;
		$.each(categories, function(index, category) {
			$('#categoryList').append('<li><a href="categorydetails.html?id=' + category.slug + '">' +
					'<h4>' + category.name + '</h4></a></li>');
		});

		$('#categoryList').listview('refresh');
		$(".ui-page div.ui-content").iscrollview()
		
		var numelements=$(".ui-link-inherit").length
		var boxheight=$(".ui-page div.ui-content").height()		
		var elemheight=Math.round(boxheight/numelements);
		var elempadding=Math.round((elemheight-40)/2);
		if (elempadding<0) { elempadding=0; }
		
		
		$("#categoryList a.ui-link-inherit").css("padding-top",elempadding+"px");
		$("#categoryList a.ui-link-inherit").css("padding-bottom",elempadding+"px");
		
		$("#categoryList div.ui-btn-inner").css("height",elemheight+"px");
		
		

	});
} 