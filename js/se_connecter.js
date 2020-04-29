//------------------------------------
//----------Se connecter-----------
//------------------------------------
    
    //Cacher la fenêtre "Se connecter" au démarrage
    $(document).ready(function(){
        $(".se_connecter").hide();  
    });

    //Afficher la fenêtre "Se connecter"
    $(document).ready(function(){
        $(".btn_se_connecter").click(function(){

            if($('.enregistrer').show = true){
                $('.enregistrer').hide();
                if($('.contact').show = true){
                    $('.contact').hide();
                }
            }
            
            
            $('.se_connecter').slideToggle(1000);
        });  
    });

    
    
