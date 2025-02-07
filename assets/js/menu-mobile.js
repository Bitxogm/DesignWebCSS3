document.addEventListener('DOMContentLoaded', () => {

// seleccionamos los dos eelementos principales

    let mobile_btn = document.querySelector('.navbar__mobile-btn');
    let mobile_menu = document.querySelector('.menu-mobile');

// FUNCION  MOSTRAR Y OCULTAR MENU :

    const showHiddenMenu = ( ) => {
        let show = document.querySelector('.menu-mobile--show');

        if(show){
            mobile_menu.classList.remove('menu-mobile--show');
        }else{
            mobile_menu.classList.add('menu-mobile--show');
            
        }

    };




// AL DAR CLICK MOSTRAMOS EEL MENU D NAVEGACION RESPONSIVE
    mobile_btn.addEventListener('click', showHiddenMenu)
    
    // AL REDIMNSIONAR LA PANTALLA POR DEBAJO D 1000PX , QUE SE OCULTE EEL MENU DE NAVEGACION
    window.addEventListener('resize', () =>{
        
        let window_width = parseInt(document.body.clientWidth);
        if(window_width >= 1000){
            mobile_menu.classList.remove('menu-mobile--show');

        } 

    });    
        
        // PODER CERRAR EL MENU CON EL BOTON 'X'

        let btn_close = document.querySelector('.menu-mobile__close');
        btn_close.addEventListener('click', showHiddenMenu)


        // Deesplegar submenus 

        let menu_item = document.querySelectorAll('.menu-mobile__item');
        menu_item.forEach( item => {
            item.addEventListener('click', (evento) => {
                let submenu = item.lastElementChild ;

                if(submenu.className === 'menu-mobile__submenu'){
                   if( submenu.style.display === 'block'){
                    submenu.style.display = 'none';
                }else{
                    submenu.style.display = 'block'
                }

                }


            });
        });
        


});
