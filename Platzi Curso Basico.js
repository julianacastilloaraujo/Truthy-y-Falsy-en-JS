Boolean(1); //true
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false

//String vacio

Boolean(""); //false

//String con minimo un caracter es verdadero

Boolean(1); //true

//Array
Boolean([]); //true 

//Objeto
Boolean({}); //true

//Cualquier funcion es verdadera
Boolean(function(){}); //true
