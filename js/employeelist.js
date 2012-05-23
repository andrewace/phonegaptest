var serviceURL = "http://ourapp.biz/phonegap/";

var employees;

$('#schoolClassPage').bind('pageinit', function(event) {
	getClassList();
});

$('#schoolClassPage').bind('pagechange', function(event) {
	getClassList();
});

$('#newsletterPage').bind('pageinit', function(event) {
	getNewsletterList();
});

$('#newsletterPage').bind('pagechange', function(event) {
	getNewsletterList();
});

$('#schoolInfoPage').bind('pageinit', function(event) {
	getSchoolInfoList();
});

$('#schoolInfoPage').bind('pagechange', function(event) {
	getSchoolInfoList();
});

$('#schoolContact').bind('pageinit', function(event) {

	$('#schoolContactList').listview('refresh');
	$(".ui-page div.ui-content").iscrollview()
});


function getClassList() {
	$.getJSON(serviceURL + 'getemployees.php', function(data) {
		$('#schoolClassList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#schoolClassList').append('<li><a href="employeedetails.html?id=' + employee.id + '">' +
					'<img src="pics/' + employee.picture + '"/>' +
					'<h4>' + employee.firstName + ' ' + employee.lastName + '</h4>' +
					'<p>' + employee.title + '</p>' +
					'<span class="ui-li-count">' + employee.reportCount + '</span></a></li>');
		});

		$('#schoolClassList').listview('refresh');
		$(".ui-page div.ui-header").append('<div id="searchform"></div>')
		$("#searchform").append($(".ui-page div.ui-content form"))		
		$(".ui-page div.ui-content").iscrollview()

	});
} 

function getNewsletterList() {
	$.getJSON(serviceURL + 'getemployees.php', function(data) {
		$('#newsletterList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#newsletterList').append('<li><a href="employeedetails.html?id=' + employee.id + '">' +
					'<img src="pics/' + employee.picture + '"/>' +
					'<h4>' + employee.firstName + ' ' + employee.lastName + '</h4>' +
					'<p>' + employee.title + '</p>' +
					'<span class="ui-li-count">' + employee.reportCount + '</span></a></li>');
		});

		$('#newsletterList').listview('refresh');
		$(".ui-page div.ui-header").append('<div id="searchform"></div>')
		$("#searchform").append($(".ui-page div.ui-content form"))		
		$(".ui-page div.ui-content").iscrollview()

	});
} 


function getSchoolInfoList() {
	$.getJSON(serviceURL + 'getemployees.php', function(data) {
		$('#schoolInfoList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#schoolInfoList').append('<li><a href="employeedetails.html?id=' + employee.id + '">' +
					'<img src="pics/' + employee.picture + '"/>' +
					'<h4>' + employee.firstName + ' ' + employee.lastName + '</h4>' +
					'<p>' + employee.title + '</p>' +
					'<span class="ui-li-count">' + employee.reportCount + '</span></a></li>');
		});

		$('#schoolInfoList').listview('refresh');
		$(".ui-page div.ui-header").append('<div id="searchform"></div>')
		$("#searchform").append($(".ui-page div.ui-content form"))		
		$(".ui-page div.ui-content").iscrollview()

	});
} 

