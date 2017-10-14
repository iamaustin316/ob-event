//http://blog.webgolds.com/view/377
//2017/06/01 

$('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: false,
    //focus: '#username',
    midClick: true,
    closeOnBgClick: 'false',
    enableEscapeKey: 'false',
    closeBtnInside: true,
    fixedContentPos: true,
    alignTop: true,
    //modal: true,
    callbacks: {
        open: function () {
            //alert('Popup is opened');
            var magnificPopup = $.magnificPopup.instance,
                cur = magnificPopup.st.el;
            console.log(cur.data('webgolds'));

            $('.close-btn').on('click', function (event) {
                event.preventDefault();
                $.magnificPopup.close();
            });
        }
    }
});
/*
$(document).on('click', '.popup-modal-dismiss', function (e) {
e.preventDefault();
$.magnificPopup.close();
});
*/