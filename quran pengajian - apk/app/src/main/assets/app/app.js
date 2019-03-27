menuju = function(x){
	$('html, body').animate({
		scrollTop: $(x).offset().top - 50
	}, 800)
}

$('form').on('submit', function(event){
	event.preventDefault()
	cari = $(this).find('.cari').val()
	cari = cari.replace(/:/g, '_')
	menuju('.bagian_' + cari)
})

$('.navbar-nav a').click(function(){
	$('.navbar-toggle').click()
}) 