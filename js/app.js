var siteURL = "http://www.frontstreetprimary.co.uk";
var apiPath = "/mobile/api/";
var postPath = "/news/age/";
var imgPath = "/wp-content/uploads/";

var categories;
var infoPages;
var newsletters;
var posts;

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function getCategoryList() {

	$.getJSON(siteURL + apiPath + 'getcategories.php?', function(data) {
		$('#categoryList li').remove();
		categories = data.items;
		$.each(categories, function(index, category) {
			$('#categoryList').append('<li><a href="posts.html?id=' + category.slug + '&title=' + category.name + '">' +
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

		$('#schoolInfoList').append('<li><a href="posts.html?id=clubs&title=Sports%20%26%20Clubs"><h4>Sports &amp; Clubs</h4></a></li>');
		$('#schoolInfoList').append('<li><a href="posts.html?id=events&title=Events"><h4>Fundraising &amp; Events</h4></a></li>');

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
		
			var strDate=post.post_date;
			var arrDate=strDate.split(" ");	
			arrDate=arrDate[0].split("-");
			
			var month=new Array();
			month[1]="January";
			month[2]="February";
			month[3]="March";
			month[4]="April";
			month[5]="May";
			month[6]="June";
			month[7]="July";
			month[8]="August";
			month[9]="September";
			month[10]="October";
			month[11]="November";
			month[12]="December";
			
			var yr = arrDate[0];
			var mt = month[parseInt(arrDate[1])];
			var dt = parseInt(arrDate[2]);

			var append = "th";
			if (dt=="1"||dt=="21"||dt=="31") { append = "st" ; }
			if (dt=="2"||dt=="22") { append = "nd" ; }
			if (dt=="3"||dt=="23") { append = "rd" ; }

			thedate = dt + append + " " + mt + " " + yr ;
		
			$('#newsletterList').append('<li><a href="newsletter.html?id=' + post.ID + '">' +
					'<h4>' + thedate + '</h4></a></li>');
		});

		$('#newsletterList').listview('refresh');
		$(".ui-page div.ui-content").iscrollview();
		
		$('#newsletterList li:first-child div div a h4').append('<span class="latestnews">LATEST</span>');
		
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

function getPostList(data) {

	posts = data.items;
	$('#postList li').remove();
	$.each(posts, function(index, post) {
		$('#postList').append('<li><a href="postdetails.html?id=' + post.link + '">' +

				post.image +
				'<h4>' + post.title + '</h4>' +
				'<p>' + post.date + '</p>' +
				'</a></li>');
	});

	$('#postList').listview('refresh');
	$(".ui-page div.ui-content").iscrollview();

} 