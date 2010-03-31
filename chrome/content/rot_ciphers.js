
// Defines ROT ciphers and (possibly) other general-purpose functionality.

// Setup my extensions namespace.
if(!com) var com={};
if(!com.andrewbuntine) com.andrewbuntine={};
if(!com.andrewbuntine.quick_rot) com.andrewbuntine.quick_rot={};

com.andrewbuntine.quick_rot.rot_ciphers = function(){
  var pub = {};

  // Maps a cipher-type to it's function.
  var cipher_funcs = {
    "13" : rot_13,
    "47" : rot_47
  };

  pub.apply_cipher = function(text, rot_type) {
    return cipher_funcs[rot_type](text);
  };

  function rot_13(text) { 
    // Credit: Jonas Raoni Soares Silva (http://jsfromhell.com/string/rot13)
    var result = text.replace(/[a-zA-Z]/g, function(c){
                   return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
                 });

    return result;
  }

  function rot_47(text) {
    return "rot 47";
  }

  return pub;
}();
