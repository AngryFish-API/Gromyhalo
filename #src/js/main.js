// @ @import('test.js');

// 1165 px transition tracking
function windowSize() {
    if ($(window).outerWidth() > '1165') {
        $('.top-list').show();
    } else {
        $('.top-list').hide();
    }
}
// All reset
function reset() {
    $('.list-img').removeClass('rotate-180');
    $('.top-item-title').removeClass('is-active');
    $('.js-sidebar-catalog').find('.list-img').attr("src", 'img/icons/next.png');
    $('.top-item-title').siblings('.sub-list').slideUp("200");
}
// Rotate
function rotate(rotate_elm) {
    if (rotate_elm.hasClass('rotate-180')) {
        rotate_elm.removeClass('rotate-180');
    } else {
        rotate_elm.addClass('rotate-180');
    }
}

function toggle(e) {
    if (e.css('display') == 'none') {
        reset();
        e.slideDown("200");
    } else {
        e.slideUp("200");
    }
}

$('.sidebar').click(function(e) {
    let element_id = e.target.id;
    if (element_id.includes('js-top-title-')) {
        let element = $("#" + element_id);
        let elemnt_sub_list = $(element).next('.sub-list');
        toggle(elemnt_sub_list);
        if (element_id.includes('js-top-title-')) {
            rotate(element.find('.list-img'));
            if (element_id.includes('js-top-title-c')) {
                if (element.hasClass('is-active')) {
                    $('.top-item-title').removeClass('is-active');
                    $('.js-sidebar-catalog').find('.list-img').attr("src", 'img/icons/next.png');
                } else {
                    element.addClass('is-active');
                    element.find('img').attr("src", "img/icons/next-left.png")
                }
            }
        }

    } else if (element_id.includes('js-sidebar-title-') && $(window).outerWidth() < '1165') {
        let element = $("#" + element_id);
        let top_list = $(element).closest('.sidebar-title').next().find('.top-list');
        reset();
        toggle(top_list);
        rotate(element.find('img'))
    }
});

$(window).on('load resize', windowSize);
// Range
$(".polzunok").slider({
    min: 124,
    max: 8909,
    values: [3000, 6000],
    range: true,
    animate: "fast",
    slide: function(event, ui) {
        $(".polzunok-input-from").val(ui.values[0]);
        $(".polzunok-input-to").val(ui.values[1]);
    }
});
$(".polzunok-input-from").val($(".polzunok").slider("values", 0));
$(".polzunok-input-to").val($(".polzunok").slider("values", 1));
$(document).focusout(function() {
    var input_left = $(".polzunok-input-from").val().replace(/[^0-9]/g, ''),
        opt_left = $(".polzunok").slider("option", "min"),
        where_right = $(".polzunok").slider("values", 1),
        input_right = $(".polzunok-input-to").val().replace(/[^0-9]/g, ''),
        opt_right = $(".polzunok").slider("option", "max"),
        where_left = $(".polzunok").slider("values", 0);
    if (input_left > where_right) {
        input_left = where_right;
    }
    if (input_left < opt_left) {
        input_left = opt_left;
    }
    if (input_left == "") {
        input_left = 0;
    }
    if (input_right < where_left) {
        input_right = where_left;
    }
    if (input_right > opt_right) {
        input_right = opt_right;
    }
    if (input_right == "") {
        input_right = 0;
    }
    $(".polzunok-input-from").val(input_left);
    $(".polzunok-input-to").val(input_right);
    $(".polzunok").slider("values", [input_left, input_right]);
});

$('.list-item').click(function() {
    rotate($(this).find('.widget-img'));
});