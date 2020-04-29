//------------------------------------
//----------Contcatez-nous-----------
//------------------------------------
    
    //Cacher la fenêtre "contactez-nous" au démarrage
    $(document).ready(function(){
        $(".contact").hide();  
    });

    //Afficher la fenêtre "Nous contacter"
    $(document).ready(function(){
        $(".btn_contact").click(function(){

            if($('.enregistrer').show = true){
                $('.enregistrer').hide();
                if($('.se_connecter').show = true){
                    $('.se_connecter').hide();
                }
            }
            

            $('.contact').slideToggle(1000);
    
        });  
    });

    
    
