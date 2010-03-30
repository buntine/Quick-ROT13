
// Handles all events triggered from the results dialog.

// Setup my extensions namespace.
if(!com) var com={};
if(!com.andrewbuntine) com.andrewbuntine={};
if(!com.andrewbuntine.quick_rot) com.andrewbuntine.quick_rot={};

window.addEventListener("load", function() { com.andrewbuntine.quick_rot.results_handler.init(); }, false);

com.andrewbuntine.quick_rot.results_handler = function(){
  var pub = {};

  pub.init = function() {
    this.textarea = document.getElementById("quick_rot_results_text");
    this.ciphered_text = window.arguments[0].text;
    this.cipher_type = window.arguments[0].type;

    this.textarea.value = this.ciphered_text;

    // Attach event listeners.
    window.addEventListener("dialogextra1", function() { pub.on_copy_clicked(); }, false);
    window.addEventListener("dialogextra2", function() { pub.on_reapply_clicked(); }, false);
  };

  // Copies the text to the local clipboard.
  pub.on_copy_clicked = function() {
    alert("Copied");
  };

  // Re-applies the ROT-n cipher to the content in the textarea.
  pub.on_reapply_clicked = function() {
    alert(this.cipher_type);
  };

  return pub;
}();
