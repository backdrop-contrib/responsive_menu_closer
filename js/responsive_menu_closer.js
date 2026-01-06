

Backdrop.behaviors.responsive_menu_closerStartup = {
  attach: function (context) {

    // If we have explanded the mobile menu, we want to close it if we
    // click OUTSIDE of the menu block
    jQuery(document).click(function(event) {
      var clickover = jQuery(event.target);
          
      // Is our mobile menu showing?    
      var is_open = jQuery(".menu-toggle-state").prop('checked');  // will be boolean true or false if showing menu
                      
      // This bit is only for dev purposes. Un-comment to help debug issues.
      /*
      console.log(is_open);
      if (is_open == true) {
        console.log('DEV: open');            
      }
      else {
        console.log('DEV: closed');      
      }
      */
     
      // Check if the menu is open, the click is outside the menu, and the click is not on the toggle button
      if (is_open && !clickover.closest('.block-menu').length) {      
        //console.log('DEV: clicked outside of menu block');
        
        // We want to CLOSE the menu
        jQuery(".menu-toggle-state").prop('checked', false);
         
      }
    });

  }
};