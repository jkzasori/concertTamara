$(document).foundation()

$('[data-toggle-dia]').click( function (ev) {
	const panel = $(this).data('toggleDia')
	$('#Lineup-tabs').foundation('selectTab', panel)
})
const $drilldown = $('[data-drilldown]');
const $offCanvas = $('#offCanvas');
$offCanvas.find('li').click(function (ev) {
	$drilldown.foundation('_hideAll');
	$offCanvas.foundation('close')
})


