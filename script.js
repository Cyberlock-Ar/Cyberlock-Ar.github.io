const rigth= document.getElementById("rigth");
const registerbtn = document.getElementById("register-btn");

registerbtn.addEventListener('click',()=>{
    rigth.classList.toggle('active');
    registerbtn.textContent = rigth.classList.contains('active')
        ? 'Acceder a la cuenta'
        : 'Crear cuenta'
});
