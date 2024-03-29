$('.header-menu_open').on('click', function(){
    $(".header").toggleClass('open');
})

$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);
    var $navbarh = $(".header").height();

    if ($target.length) {
        $('html, body').animate({
            'scrollTop': $target.offset().top-$navbarh
        }, 500, 'swing');
    }
});

$(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();
    var sections = $('section');

    sections.each(function() {
        var sectionTop = $(this).offset().top-$(".header").height()-50;
        var sectionBottom = sectionTop + $(this).height();
        var hash = $(this).attr('id');

        if (scrollTop >= sectionTop && scrollTop <= sectionBottom) {
            var link = $('.header__links .link a[href="#' + hash + '"]');
            if (link.length) {
                $(".header__links .link a").removeClass('active');
                link.addClass('active');
            }
            return false;
        }
    });
});

const accordion = document.querySelectorAll(".accordion .item .ac-btn");
for (var i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    if(!this.parentElement.classList.contains("active")){
        for (var others = 0; others < accordion.length; others++) {
            accordion[others].parentElement.classList.remove("active");
        }
        this.parentElement.classList.toggle("active");
    }else{
        for (var others = 0; others < accordion.length; others++) {
            accordion[others].parentElement.classList.remove("active");
        }
    }
  });
}