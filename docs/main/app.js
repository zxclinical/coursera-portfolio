$(function(){
    var $contactForm = $("#form");
    if($contactForm.length){
        $contactForm.validate({
            rules:{
                username:{
                    required: true
                },
                email:{
                    required: true
                },
                number:{
                    required: true
                },
                textarea:{
                    required: true
                }
            },
            messages:{
                username:{
                    required: 'You cannot leave this field empty'
                },
                email:{
                    required: 'You cannot leave this field empty'
                },
                number:{
                    required: 'You cannot leave this field empty'
                },
                textarea:{
                    required: 'You cannot leave this field empty'
                }
            }
        })
    }
});