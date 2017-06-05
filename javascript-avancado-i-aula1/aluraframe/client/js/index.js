var campos = [
	$('#data'),
	$('#quantidade'),
	$('#valor')
];

$(".form").on("submit", function(event){
	event.preventDefault();
	$("table tbody").append("<tr>" +
		"<td>" + campos[0].val() + "</td>" +
		"<td>" + campos[1].val() + "</td>" +
		"<td>" + campos[2].val() + "</td>" +
		"<td>" + campos[1].val() * campos[2].val() + "</td>" +
	"</tr>");

	campos[0].val('');
	campos[1].val(1);
	campos[2].val(0);
	campos[0].focus();
});