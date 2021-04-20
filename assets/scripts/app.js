function spinner(field){
    var fieldCount = function(el) {
        var
            // Мин. значение
            min = el.data('min') || false,
            // Макс. значение
            max = el.data('max') || false,
            // Кнопка уменьшения кол-ва
            dec = el.prev('.spinner__dec'),
            // Кнопка увеличения кол-ва
            inc = el.next('.spinner__inc');

        function init(el) {
            if(!el.attr('disabled')){
                dec.on('click', decrement);
                inc.on('click', increment);
            }

            // Уменьшим значение
            function decrement() {
                var value = parseInt(el[0].value);
                value = value - 100;

                if(!min || value >= min) {
                    el[0].value = value;
                }
            };

            // Увеличим значение
            function increment() {
                var value = parseInt(el[0].value);

                value = value + 100;

                if(!max || value <= max) {
                    el[0].value = value++;
                }
            };

        }

        el.each(function() {
            init($(this));
        });
    };

    $(field).each(function(){
        fieldCount($(this));
    });
}

spinner('.spinner__input');

$('.calc__help-format').click(function() {
    $('.calc__help-popup-format').toggle();
});
$('.calc__help-edition').click(function() {
    $('.calc__help-popup-edition').toggle();
});
$('.calc__help-color').click(function() {
    $('.calc__help-popup-color').toggle();
});
$('.calc__help-paper').click(function() {
    $('.calc__help-popup-paper').toggle();
});
$('.calc__help-perforation').click(function() {
    $('.calc__help-popup-perforation').toggle();
});
$('.calc__help-number').click(function() {
    $('.calc__help-popup-number').toggle();
});
$('.calc__help-lamination').click(function() {
    $('.calc__help-popup-lamination').toggle();
});
$('.calc__help-thickness').click(function() {
    $('.calc__help-popup-thickness').toggle();
});
$(function(){
    $('.calc__paper-type').jScrollPane({
        showArrows: true
    });
});
$(function(){
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if(top < 325) {
            $('.calc__right').removeClass('absolute');
            $('.calc__right').removeClass('fixed');
        }
        if(top > 325 && top < 1060) {
            $('.calc__right').removeClass('absolute');
            $('.calc__right').addClass('fixed');
        }
        if(top > 1060) {
            $('.calc__right').removeClass('fixed');
            $('.calc__right').addClass('absolute');
        }
    });
});
$('.calc__size-width').blur(function(){
    var width = $(this).val();
    if(width != '') {
        $(this).css({border: '1px solid #f88249', color: '#f88249'});
    }
    else {
        $(this).css({border: '1px solid #e7e7e9', color: '#96979a'});
    }
    if(width != '' && $('.calc__size-height').val() != '') {
        $('.calc__size').css({border: '1px solid #f88249', color: '#f88249'});
    }
    else {
        $('.calc__size').css({border: '1px solid #96979a', color: '#96979a'});
    }
});
$('.calc__size-height').blur(function(){
    var height = $(this).val();
    if(height != '') {
        $(this).css({border: '1px solid #f88249', color: '#f88249'});
    }
    else {
        $(this).css({border: '1px solid #e7e7e9', color: '#96979a'});
    }
    if(height != '' && $('.calc__size-width').val() != '') {
        $('.calc__size').css({border: '1px solid #f88249', color: '#f88249'});
    }
    else {
        $('.calc__size').css({border: '1px solid #96979a', color: '#96979a'});
    }
});
$('.calc__edition-input').blur(function(){
    if($(this).val() != '') {
        $('input[name=edition]').removeAttr('checked');
        $(this).css({border: '1px solid #f88249', color: '#f88249'});
    }
    else {
        $(this).css({border: '1px solid #e7e7e9', color: '#96979a'});
    }
});
$('.nav').slicknav({label: ''});
$(".callback-btn").click(function() {
    $(".popup").show();
});
$(".popup__close, .popup__bg").click(function() {
    $(".popup").hide();
});
$('.card-product__slider').bxSlider({
    mode: 'horizontal',
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    slideWidth: 586,
    pagerCustom: '.card-product__pager',
    responsive: true
});
function getFileName () {
    var file = document.getElementById ('uploaded-file').value;
    file = file.replace (/\\/g, "/").split ('/').pop ();
    document.getElementById ('file-name').innerHTML = 'Имя файла: ' + file;
}

$('.our-office__slider').bxSlider({
    mode: 'horizontal',
    minSlides: 1,
    maxSlides: 4,
    moveSlides: 1,
    slideWidth: 279,
    slideHeight: 285,
    slideMargin: 28,
    pager: false,
    responsive: true
});
$('.slider__left').slidesjs({
    navigation: false,
    start: 1
    /*play: {
        auto: true
    }*/
});

$('a[href^="#"]').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 800);
    return false;
});
$(function() {
    $(window).scroll(function(){
        var top = $(document).scrollTop();
        if(top > 200) {
            $('.widjet').show();
        }
        else {
            $('.widjet').hide();
        }
    });
});

$('.products-nav__list').slicknav({
    label: 'Каталог',
    prependTo:'.products-nav_center'
});
$('.portfolio-home__slider').bxSlider({
    mode: 'horizontal',
    minSlides: 1,
    maxSlides: 4,
    moveSlides: 1,
    slideWidth: 279,
    slideMargin: 28,
    pager: false,
    responsive: true
});
$('.reviews-home__slider').bxSlider({
    mode: 'horizontal',
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 1,
    slideWidth: 280,
    slideMargin: 20,
    pager: false,
    responsive: true
});
$('.news-home__slider').bxSlider({
    mode: 'horizontal',
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    slideWidth: 280,
    pager: false,
    responsive: true
});
