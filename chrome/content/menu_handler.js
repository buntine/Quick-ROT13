
// Handles all user interaction with Quick ROT.
// Implements a closure pattern to allow for private internals.

// Setup my extensions namespace.
if(!com) var com={};
if(!com.andrewbuntine) com.andrewbuntine={};
if(!com.andrewbuntine.quick_rot) com.andrewbuntine.quick_rot={};

window.addEventListener("load", function() { com.andrewbuntine.quick_rot.event_handler.init(); }, false);

com.andrewbuntine.quick_rot.event_handler = function(){
  var pub = {};

  pub.init = function() {
    this.menu_item = document.getElementById("quick_rot_menu");

    // Attach event handlers.
    document.getElementById("contentAreaContextMenu").addEventListener("popupshowing", function() { pub.on_menu_opening(); }, false);
  };

  pub.on_menu_opening = function() {
    this.menu_item.disabled = (getBrowserSelection().length == 0);
  };

  return pub;
}();