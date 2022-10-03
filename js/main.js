import {setFormValue, submitSignUpForm, validateEmail, validatePassword, formValidation, getValidationStatus} from "./utils.js"


////// ДЕМОНСТРАЦИОННЫЙ УЧАСТОК КОДА. На оценку не влияет, исключительно для саморазвития.

// Предлагаю "поиграться" с частями кода ниже, чтобы познакомиться с JS
// Получаем элемент и меняем его класс, который определеён в библиотеке стилей materialize
//const password = document.getElementById('password');
//password.classList.remove("valid")

// В браузере можно посмотреть, что из себя представляет документ
// (CTRL+SHIFT+i для открытия консоли и открыть вкладку "консоль", туда будет залогированно значение)
//console.log("Document")
//console.log(document)

// Если запросить id, которого нет в DOM дереве - вернется undefined
// => надо быть осторожней: коллега может поменять id вашего элемента и упадёт !ВАШ! код

// Селекция по классу. Может пригодится, для того, чтобы упростить обработку полей в двух формах.
// Чтобы не делать кучу уникальных айди, можно определённым полям формы давать один класс и обрабатывать их в цикле
// const passwords = document.querySelectorAll('.password')
// console.log(passwords)
// for (const password of passwords) {
//   password.style.background = "red"
// }

////// КОНЕЦ ДЕМОНСТРАЦИОННОГО УЧАСТКА КОДА. Дальше код для оцениваемой части задания


// Выписываем все айдишники HTMl-элементов в константы для переиспользования
const first_name_id = 'first_name'
const last_name_id = 'last_name'
const password_id = 'password'
const email_id = 'email'

const password_id2 = 'password_sign_in'
const email_id2 = 'email_sign_in'

const sign_in_link_id = 'sign_in_link'
const sign_up_form_id = 'sign_up_form'
// const sign_in_form_id = 'sign_in_form'  // Пригодится
const sign_up_btn_id = 'sign_up_btn'
const sign_in_btn_id = 'sign_in_btn'
const sign_in_form_id = 'sign_in_form'
const password_repeat_id = 'password-repeat'


// Получаем элемент DOM-дерева по id и присваиваем значение аттрибуту oninput
// oninput вызывается с параметром "event" каждый раз, когда ввод меняется
// Значение, которое мы присваеваем этому аттрибуту - это функция, определённая в стрелочном стиле
// Гуглить по тегам "события JS", "onchange/oninput HTML", "стрелочные функции JS", ...

const first_name = document.getElementById(first_name_id);
const password = document.getElementById(password_id);
const password_repeat = document.getElementById(password_repeat_id);
const email = document.getElementById(email_id);

const password2 = document.getElementById(password_id2);
const email2 = document.getElementById(email_id2);

const saved_password = ""

first_name.oninput = (e) => {setFormValue(first_name_id, e.target.value)}

email.oninput = (e) => {
  setFormValue(email_id, e.target.value, validateEmail)
  if (getValidationStatus() && first_name.target !== undefined && password.target !== undefined && password_repeat.target !== undefined && email.target !== undefined){
    document.getElementById(sign_up_btn_id).disabled = false;
  } else {
    document.getElementById(sign_up_btn_id).disabled = true;
  }
}

 password.oninput = (e) => {
   saved_password = e.target.value
   setFormValue(password_id, e.target.value, validatePassword)
    if (!formValidation[password_id]){
      password.style.borderBottom = "3px solid red";
      }
    else {
      password.style.borderBottom = "3px solid green";
      }
 if (getValidationStatus() && first_name.target !== undefined && password.target !== undefined && password_repeat.target !== undefined && email.target !== undefined){
   document.getElementById(sign_up_btn_id).disabled = false;
 } else {
   document.getElementById(sign_up_btn_id).disabled = true;
 }
 }

 password_repeat.oninput = (e) => {
 console.log(document.getElementById('password').value)
 console.log(document.getElementById('password-repeat').value)
 console.log(document.getElementById('password').value === document.getElementById('password-repeat').value)
    if (document.getElementById('password').value === document.getElementById('password-repeat').value){
      password_repeat.style.borderBottom = "3px solid green";
      }
    else {
      password_repeat.style.borderBottom = "3px solid red";
      }
 if (getValidationStatus() && document.getElementById('password').value === document.getElementById('password-repeat').value){
   document.getElementById(sign_up_btn_id).disabled = false;
 } else {
   document.getElementById(sign_up_btn_id).disabled = true;
 }
 }

const sign_up_btn = document.getElementById(sign_up_btn_id);
sign_up_btn.onclick = (e) => {
  // При нажатии кнопки в форме по умолчанию происходит перезагрузка страницы.
  // Чтобы отключить его, нужно отменить стандартное поведение события
  e.preventDefault()
  submitSignUpForm()
}

// Меняем стили объекта DOM дерева. Это позволяет скрыть форму регистрации и показать форму авторизации
// Объект формы не исключается из DOM дерева, а просто становистя невидимым
const switch_to_sign_in = document.getElementById(sign_in_link_id);
switch_to_sign_in.onclick = (e) => {
  document.getElementById(sign_up_form_id).style.display = "none"
  document.getElementById(sign_in_form_id).style.display = ""
}

email2.oninput = (e) => {
  setFormValue(email_id2, e.target.value, validateEmail)
  if (document.getElementById(password_id2).value.length > 0 && document.getElementById(email_id2).value.length > 0){
    document.getElementById(sign_in_btn_id).disabled = false;
  } else {
    document.getElementById(sign_in_btn_id).disabled = true;
  }
}

 password2.oninput = (e) => {
   setFormValue(password_id2, e.target.value)
   console.log(e.target.value)
 if (document.getElementById(password_id2).value.length > 0 && document.getElementById(email_id2).value.length > 0){
   document.getElementById(sign_in_btn_id).disabled = false;
 } else {
   document.getElementById(sign_in_btn_id).disabled = true;
 }
 }



