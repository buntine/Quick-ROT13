
// Handles all user interaction with Quick ROT.
// Implements a closure pattern to allow for private internals.

// Setup my extensions namespace.
if(!com) var com={};
if(!com.andrewbuntine) com.andrewbuntine={};
if(!com.andrewbuntine.quick_rot) com.andrewbuntine.quick_rot={};

window.addEventListener("load", function() { com.andrewbuntine.quick_rot.event_handler.init(); }, false);

com.andrewbuntine.quick_rot.event_handler = function(){
  var pub = {};
  var rot_ciphers = com.andrewbuntine.quick_rot.rot_ciphers;

  pub.init = function() {
    this.menu_item = document.getElementById("quick_rot_menu");

    // Attach event listeners.
    document.getElementById("contentAreaContextMenu").addEventListener("popupshowing", function() { pub.on_menu_opening(); }, false);
    document.getElementById("quick_rot_submenu_13").addEventListener("command", function() { pub.on_rot_clicked("13"); }, false);
    document.getElementById("quick_rot_submenu_47").addEventListener("command", function() { pub.on_rot_clicked("47"); }, false);
  };

  pub.on_menu_opening = function() {
    this.menu_item.disabled = (getBrowserSelection().length == 0);
  };

  pub.on_rot_clicked = function(rot_type) {
    var text = "cipher me";
    var result = rot_ciphers.apply_cipher(text, rot_type);

    open_dialog(result, rot_type);
  };

  // Private procedure to open the results dialog. We're only interested in it's side-effects.
  function open_dialog(ciphered_text, rot_type) {
    var file = "chrome://quick_rot/content/results.xul";
    var params = { text : ciphered_text,
                   type : rot_type };

    window.openDialog(file, "", "centerscreen,chrome,dialog,modal", params).focus();
  }

  return pub;
}();
