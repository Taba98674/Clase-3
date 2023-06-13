function dividir() {
    let numero1=parseInt (document.getElementById("n1").value)
    let numero2=parseInt (document.getElementById("n2").value)
    let divicion=numero1/numero2
    // mostrar el resultado 
    document.getElementById("resultado").textContent="la divicion es.."+divicion;
    
}