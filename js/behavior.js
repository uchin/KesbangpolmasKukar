$(document).ready(function(){
    $('.bxslider, .slider-berita').bxSlider({
		  mode: 'fade',
            auto: true
		});
    
    //add plus minus to accordion
    jQuery(function ($) {
        var $active = $('#accordion .panel-collapse.in').prev().addClass('active');
        $active.find('a').append('<i class="glyphicon glyphicon-minus pull-right"></i>');
        $('#accordion .panel-heading').not($active).find('a').append('<i class="glyphicon glyphicon-plus pull-right"></i>');
        $('#accordion').on('show.bs.collapse', function (e) {
            $('#accordion .panel-heading.active').removeClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
            $(e.target).prev().addClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
        })
    });
    //add bullet between list
    $(function() {
        var lastElement = false;
        $(".nav-footer ul li").each(function() {
            if (lastElement && lastElement.offset().top != $(this).offset().top) {
                $(lastElement).addClass("nobullet");
            }
            lastElement = $(this);
        }).last().addClass("nobullet");
    });
    
    /*pimpinan*/
    $("#flip1").click(function() {
			$(".dsc1").slideToggle("slow");
        });
        $("#flip2").click(function() {
			$(".dsc2").slideToggle("slow");
		});
        $("#flip3").click(function() {
			$(".dsc3").slideToggle("slow");
		});
        $("#flip4").click(function() {
			$(".dsc4").slideToggle("slow");
		});
        $("#flip5").click(function() {
			$(".dsc5").slideToggle("slow");
		});
    //change arrow up down for all class panah when clicked
        $(".panah").click(function() {
            var iSelector = $(this).find('i:first');
            if(iSelector.hasClass('fa-chevron-circle-down')) {
                iSelector.removeClass('fa-chevron-circle-down')
                iSelector.addClass('fa-chevron-circle-up')
            } else {
                iSelector.removeClass('fa-chevron-circle-up')
                iSelector.addClass('fa-chevron-circle-down')
            }
        });
});