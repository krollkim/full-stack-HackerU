$(function() {
    $.get("clients.json", function(res) {
        const clients = res;
        const temp = $('.frame template').html();
        clients.slice(0, 50).forEach(c => {
            const accord = $(temp)

            accord.find('header').text(c.fullName);
            accord.find('#fullName').text(c.fullName);
            accord.find('#personId').text(c.personId);
            accord.find('#email').text(c.email);
            accord.find('#phone').text(c.phone);

            $('.frame').append(accord)
        });

        $(".card").click(function(){
            const isVisible = $(this).find('.content').is(':visible');
                $('.content').slideUp();

                if(isVisible){
                    $(this).find('.content').slideUp();
                }else{
                    $(this).find('.content').slideDown();
                }
        });

        $(".card button").click(function(){
            $(this).parent().remove();
        });
    });
});

