const toggleShowHide = document.querySelectorAll('.show-hide-pass');


toggleShowHide.forEach(item => {
  let show = false;
  item.addEventListener('click', () => {
    show = !show;
    item.parentElement.children[1].setAttribute( 
      'type',
      show ? 'text' : 'password'
    );
    item.classList.toggle('show');
  })
})

// kiểm tra lỗi trong ô input
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');
const cfPassError = document.getElementById('cfpass-error');
const submitError = document.getElementById('submit-error');

function validateName() {
  var name = document.getElementById('contact-name').value;
  if (name.length == 0) {
    nameError.innerHTML = 'Tên đăng nhập là bắt buộc';
    document.querySelector('#inputName').style.border = '1px solid red';
    return false;
  }
  if (name.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,),.,`,',;,",:,|,\,=,]/)) {
    nameError.innerHTML = 'Tên đăng nhập không được có kí tự đặt biệt';
    return false;
  }
  if (name.length < 4) {
    nameError.innerHTML = 'Tên đăng nhập từ 4 kí tự trở lên';
    return false;
  }
  nameError.innerHTML = '<div></div>';
  document.querySelector('#inputName').style.border = 'none';
  return true;
}
// kiểm tra email
function validateEmail() {
  var email = document.getElementById('email').value;
  if (email.length == 0) {
    emailError.innerHTML = 'Email là bắt buộc';
    document.querySelector('#inputEmail').style.border = '1px solid red';
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = 'Email sai định dạng'
    document.querySelector('#inputEmail').style.border = '1px solid red';
    return false;
  }
  emailError.innerHTML = '<div></div>';
  document.querySelector('#inputEmail').style.border = 'none';
  return true;
}
// kiểm tra phone
function validatePhone() {
  var phone = document.getElementById('phone').value;
  if (phone.length == 0) {
    phoneError.innerHTML = 'Số điện thoại là bắt buộc';
    document.querySelector('#inputPhone').style.border = '1px solid red';
    return false;
  }
  if (!phone.match(/((09|03|07|08|05)+([0-9]{8})\b)/g)) {
    phoneError.innerHTML = 'Số điện thoại sai định dạng'
    document.querySelector('#inputPhone').style.border = '1px solid red';
    return false;
  }
  phoneError.innerHTML = '<div></div>';
  document.querySelector('#inputPhone').style.border = 'none';
  return true;
}

function validateCfPass() {
  if (cfpass.value == '') {
    cfPassError.innerHTML = 'Nhập mật khẩu lại lần nữa!';
    document.querySelector('#inputCfPass').style.border = '1px solid red';
    return false;
  }
  if (cfpass.value !== pass.value) {
    cfPassError.innerHTML = 'Mật khẩu nhập lại không giống!';
    document.querySelector('#inputCfPass').style.border = '1px solid red';
    return false;
  }
  cfPassError.innerHTML = '<div></div>';
  document.querySelector('#inputCfPass').style.border = 'none';
  return true;
}
// kiểm tra hết
function validateSubmit() {
  if (!validateName() || !validatePhone() || !validateEmail()) {
    return false;
  }
  return true;
}



//ngăn người dùng nhập ngoài bảng chữ cái tiếng anh - ví dụ 'thái' sẽ bị xóa đi và bắt nhập thành 'thai'
$(function () {
  $("#contact-name").keypress(function (event) {
    var ew = event.which;
    if (ew == 32)
      return true;
    if (48 <= ew && ew <= 57)
      return true;
    if (65 <= ew && ew <= 90)
      return true;
    if (97 <= ew && ew <= 122)
      return true;
    return false;
  });
});
// ẩn hiện mẳt
const password = document.querySelectorAll('.Password');
password.forEach(item => {
  item.addEventListener('keyup', () => {
    if (item.value != '') {
      item.parentElement.children[2].style.display = 'block';
      
    } else {
      item.parentElement.children[2].style.display = 'none';
      
    }
  })

})