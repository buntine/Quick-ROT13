
// Handles all events triggered from the results dialog.

// Setup my extensions namespace.
if(!com) var com={};
if(!com.andrewbuntine) com.andrewbuntine={};
if(!com.andrewbuntine.quick_rot) com.andrewbuntine.quick_rot={};

window.addEventListener("load", function() { com.andrewbuntine.quick_rot.results_handler.init(); }, false);

com.andrewbuntine.quick_rot.results_handler = function(){
  var pub = {};
  var rot_ciphers = com.andrewbuntine.quick_rot.rot_ciphers;

  pub.init = function() {
    this.textarea = document.getElementById("quick_rot_results_text");
    this.ciphered_text = window.arguments[0].text;
    this.cipher_type = window.arguments[0].type;

    this.textarea.value = this.ciphered_text;

    // Attach event listeners.
    window.addEventListener("dialogextra1", function() { pub.on_copy_clicked(); }, false);
    window.addEventListener("dialogextra2", function() { pub.on_reapply_clicked(); }, false);
  };

  // Copies the textarea contents to the local clipboard.
  pub.on_copy_clicked = function() {
    var clipboard = Components.classes["@mozilla.org/widget/clipboardhelper;1"].
                    getService(Components.interfaces.nsIClipboardHelper);
    clipboard.copyString(this.textarea.value);
  };

  // Re-applies the ROT-n cipher to the content in the textarea.
  pub.on_reapply_clicked = function() {
    var result = rot_ciphers.apply_cipher(this.textarea.value, this.cipher_type);

    this.textarea.value = result;
  };

  return pub;
}();
