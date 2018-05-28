 $(document).ready(function () {
    $('button.sent-question').on('click', function() {
        if( $(".write-your-question").val() == ''){
            $(".write-your-question").addClass('empty-field');
            
        }
        else{
            $(".write-your-question").removeClass('empty-field');
        };
        if( $(".input-your-name").val() == ''){
            $(".input-your-name").addClass('empty-field')
            
        }
        else{
            $(".input-your-name").removeClass('empty-field');
        }
        
    });
    $('.faq-body__btn').on('click', function() {
        if($(this).hasClass('open')){
            $(this).removeClass('open');
        }
        else{
            $(this).addClass('open');
        }
        if($(this).hasClass('open')){
            $(this).next().css({
                "display": "block"
            })
        }
        else{
            $(this).next().css({
                "display": "none"
            })
        }
        
    });
});     