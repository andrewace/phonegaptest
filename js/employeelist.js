var serviceURL = "http://ourapp.biz/phonegap/";

var employees;

jQuery(document).bind("pageinit", function (e) {

	getEmployeeList();

});


function getEmployeeList() {
	$.getJSON(serviceURL + 'getemployees.php', function(data) {
		$('.ui-listview li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('.ui-listview').append('<li><a href="employeedetails.html?id=' + employee.id + '">' +
					'<img src="pics/' + employee.picture + '"/>' +
					'<h4>' + employee.firstName + ' ' + employee.lastName + '</h4>' +
					'<p>' + employee.title + '</p>' +
					'<span class="ui-li-count">' + employee.reportCount + '</span></a></li>');
		});

		$('.ui-listview').listview('refresh');
		
		// THE BELOW IS FOR INCLUDING A DATA-FILTER SECTION WHEN WE WANT TO
		//$(".ui-page div.ui-header").append('<div id="searchform"></div>')
		//$("#searchform").append($(".ui-page div.ui-content form"))		
		
		$(".ui-page div.ui-content").iscrollview()

	});
} 