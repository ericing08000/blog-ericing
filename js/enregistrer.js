//------------------------------------
//----------Enregistrer-----------
//------------------------------------
    
    //Cacher la fenêtre "enregistrer" au démarrage
    $(document).ready(function(){
        $(".enregistrer").hide();  
    });

    //Afficher la fenêtre "Nous contacter"
    $(document).ready(function(){
        $(".btn_enregistrer").click(function(){

            if($('.se_connecter').show = true)  {
                $('.se_connecter').hide();

                if($('.contact').show = true)  {
                    $('.contact').hide();
                }
            }

            $('.enregistrer').slideToggle(1000);  
        });   
    });