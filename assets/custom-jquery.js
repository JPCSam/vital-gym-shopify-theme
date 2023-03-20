
$(document).ready(function () {
    //Ajax add to cart
    // $(".addCartFormBtn").submit(function (e) {
    //     e.preventDefault();
    // });
    //Account page
   
    /*Close login/signup*/
    $('.open-custom-modal').click(function () {
        $('#my-custom-modal').css('display', 'flex');
    });
    $('.open_signup').click(function () {
        $('.modal-customer-register.modal-container').css('display', 'block');
        $('.modal-customer-login.modal-container').css('display', 'none');
    });

    
});

