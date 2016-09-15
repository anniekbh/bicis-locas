function validateForm(){
	var x = document.getElementById("name").value;
    if (x == null || x == "") {
        alert("ERROR");
        return false;
    };
    var x = document.getElementById("lastname").value;
    if (x == null || x == "") {
        alert("ERROR");
        return false;
    };
    var x = document.getElementById("input-email").value;
    if (x == null || x == "") {
        alert("ERROR");
        return false;
    };
    var x = document.getElementById("input-password").value;
    if (x == null || x == "") {
        alert("ERROR");
        return false;
    };
   	var nom = document.getElementById("input-password").value;
    if ( nom == "123456" || nom == "098754" || nom == "password" || nom.length < 5 || /^\s+$/.test(nom)) {
      window.alert ("No Válido") ;
    } else {
        return true;
    };
    var email = document.getElementById("input-email").value;
	if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)) ) {
  	return false;
	};
	if(document.getElementsByTagName('select')[0].value == 0){
            alert("Selecciona un tipo de bici");
    };
}
