// FUNCTIONS
$(document).ready(function () {
    // expand function
   
    $('body').on('click', '.click-expand', function (e) {
        let this_data = $(this).attr('data-expand');
        let this_child = $(this).parent().find('.expand-block:first');
        let arrow = $(this).find('.icon-arrow');
        if (arrow.hasClass('icon-arrow__top')) {
            $(arrow).removeClass('icon-arrow__top');
        } else {
            $(arrow).addClass('icon-arrow__top');
        }
        $(arrow).toggleClass('icon-arrow__bottom');
        if (this_data === 'true') {
            this_child.hide();
            let arrow = $('.dropdown .icon-arrow');
            if (arrow.hasClass('icon-arrow__top')) {
                $(arrow).removeClass('icon-arrow__top');
            }
            $(arrow).addClass('icon-arrow__bottom');
            $('.dropdown-select.click-expand').attr('data-expand', 'false');
            $('.dropdown-select.click-expand').find('.text-show').show();
            $('.dropdown-select.click-expand').find('.text-hide').hide();
            $(this).attr('data-expand', 'false');
            $(this).find('.text-show').show();
            $(this).find('.text-hide').hide();
            $('.input-expand').blur();
        } else if (this_data === 'false') {
            $('.dropdown-list').hide();
            this_child.show();
            $(this).attr('data-expand', 'true');
            $(this).find('.text-show').hide();
            $(this).find('.text-hide').show();
        } else {
            this_child.hide();
            $('.input-expand').blur();
        }
    });
   
    $('body').on('click', '.dropdown-arrow', function () {
        this_parent = $(this).parent().find('.input-expand').focus();
    });

    // change_active function
    $('body').on('click', '.change_active', function () {
        let thic_parent = $(this).parent();
        let this_active = $(thic_parent).find('.change_active');
        $(this_active).removeClass('active');
        $(this).addClass('active');
    });
    
    // function for window click
    $(window).on('click', function (e) {
        if (!$(e.target).closest('.window-click').length) {
            $('.dropdown-list').hide();
            $('.creditClick, .creditDrop').removeClass('active');
            $('.dropdown-select').attr('data-expand', 'false');
            let arrow = $('.dropdown .icon-arrow');
            if (arrow.hasClass('icon-arrow__top')) {
                $(arrow).removeClass('icon-arrow__top');
            }
            $(arrow).addClass('icon-arrow__bottom');
        }
    });
});

// add files style js function
if (window.matchMedia("(min-width: 768px)").matches) {

    function clickUploadEstimates() {
        document.getElementsByTagName("body")[0].setAttribute("ondragenter", "dragEnter()");
    }

    function dragEnter() {
        document.body.classList.add('adding-file');
        document.getElementById('clickUploadEstimates').classList.add('active');
    }

    function dragLeave() {
        document.body.classList.remove('adding-file');
        document.getElementById('clickUploadEstimates').classList.remove('active');
    }

    function drop() {
        document.body.classList.remove('adding-file');
        document.getElementsByTagName("body")[0].removeAttribute("ondragenter", "dragEnter()");
        document.getElementById('clickUploadEstimates').classList.remove('active');
    }
}