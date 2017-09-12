$ = jQuery

jQuery.fn.extend
	placeHolder : ->

		@.focus ->
			if jQuery(this).attr("value") == jQuery(this).attr("title")
				jQuery(this).attr("value", "");


		@.blur ->
			if jQuery(this).attr("value") == ""
				jQuery(this).attr("value", jQuery(this).attr("title"))


		@.parents('form').submit ->
			if jQuery(@).attr("value") == jQuery(this).attr("title")
				jQuery(@).attr("value", "")





$(document).ready ->
	carusel = $(".carusel")

	# Placeholder Init
	$(".inputbox").placeHolder()

	# click outside for closeing.
	$(document).click (event) ->
		if $(event.target).closest("#elem-id").length
			return
		$("#elem-id").hide()
		event.stopPropagation()


	#$(".carusel ul").jcarousel()

	$('.carusel ul').jcarousel({
		scroll : 1,
		visible : 3,
		animation : 'medium',
		itemLoadCallback: {
			onAfterAnimation: ->
				$(".jcarousel-next, .jcarousel-prev").show();
		}

	})

	$(".galery").find('.preview-pic img').on 'click', ->
		if !($(@).hasClass("active"))
			src = $(@).data("source")

			$(".galery").find('img.active').removeClass("active")
			$(@).addClass("active")
			$(".main-pic").find('img').attr('src', src)


	return #Document ready


jQuery(window).load ->
	carusel = $(".carusel")
	carusel.find("li").first().addClass("active")
	$(".main-carusel-holder").find(".jcarousel-prev").on 'click', ->

		if(not carusel.find("li").first().hasClass('active'))
			$(@).hide()
			setTimeout( ->
				$(".jcarousel-next, .jcarousel-prev").show();
			,300)
			carusel.find("li.active").removeClass('active').prev().addClass("active")
	$(".main-carusel-holder").find(".jcarousel-next").on 'click', ->
		if(not carusel.find("li").last().hasClass('active'))
			$(@).hide()
			setTimeout( ->
				$(".jcarousel-next, .jcarousel-prev").show();
			,300)
			carusel.find("li.active").removeClass('active').next().addClass("active")
	carusel.find("li").on 'click', ->
		carusel.find("li.active").removeClass("active")
		$(@).addClass('active')
	return