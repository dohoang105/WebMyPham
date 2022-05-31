
// -----------------------------------------------
const toggleMenuSignIn = document.querySelector('.toggleModal.Sign-in');
const toggleMenuSignUp = document.querySelector('.toggleModal.Sign-up'); 
const login = document.querySelector('.login'); 
const login_form = document.querySelector('.login-form');
const btnClose = document.querySelectorAll('.btn_close');
const signUp = document.querySelector('.signUp');

btnClose.forEach(item =>{
  let close = false;
  item.addEventListener('click', ()=>{
    close = !close;
    item.parentElement.parentElement.classList.remove('active');
  })
})

login.addEventListener('click', ()=>{
  toggleMenuSignIn.classList.add('active');
  toggleMenuSignUp.classList.remove('active');
})
login_form.addEventListener('click', () => {
  toggleMenuSignIn.classList.add('active');
  toggleMenuSignUp.classList.remove('active');
})

signUp.addEventListener('click', ()=>{
  toggleMenuSignIn.classList.remove('active');
  toggleMenuSignUp.classList.add('active');
});

