
(function main(){
    fetchCategories()
    fetchCourses(4)
    fetchComments()
})();

// Fetch Data
//Categories
function fetchCategories(){
    fetch('http://localhost:3000/categories')
    .then(res => res.json())
    .then(data => renderCategories(data))
}

function renderCategories(data){
    const categories = document.querySelector('.categories')
    htmls = ''
    data.forEach(item => {
        htmls += `  <li>
                        <a href="#">
                            <h1 class="bold">${item.title}</h1>
                            <p>${item.description}</p>
                            <img src="${item.image}">
                        </a>
                    </li>`
    });
    categories.innerHTML = htmls
}



//courses
function renderStar(star){
    starHtml = '<i class="bi bi-star-fill"></i>'.repeat(star) + '<i class="bi bi-star"></i>'.repeat(5-star)
    return starHtml
}
window.onchange = ()=>{

}

let showAllBtn = document.querySelector('.show-all')
showAllBtn.addEventListener('click', () =>{
    fetchCourses(100)
    showAllBtn.classList.add('d-none')
    hideAwayBtn.classList.remove('d-none')
})

let hideAwayBtn = document.querySelector('.hide-away')
hideAwayBtn.addEventListener('click', () =>{
    fetchCourses(4)
    hideAwayBtn.classList.add('d-none')
    showAllBtn.classList.remove('d-none')
})


function fetchCourses(numCourse){
    fetch('http://localhost:3000/courses')
    .then(res => res.json())
    .then(data => renderCourses(data, numCourse))
}

function renderCourses(data, numCourse){
    const courses = document.querySelector('.courses')
    htmls = ''
    data.forEach((item, index) => {
        if((index + 1) <= numCourse){
            htmls += `  <li class="row">
                            <img
                                src="${item.thumb}">
    
                            <div class="featured_li__right">
                                <div class="featured_li__right_top">
                                    <div class="featured_li__star row">
                                        ${renderStar(item.star)}
                                    </div>
                                    <h3>${item.title}</h3>
                                    <div class="featured_li__lg row">
                                        <p>${item.class} Class</p>
                                        <div class="dot"></div>
                                        <p>${item.time}</p>
                                    </div>
                                    <div class="featured_user row">
                                        <img class="featured_user__img"
                                            src="${item.author_thumb}">
                                        <p>by <span>${item.author_name}</span></p>
                                    </div>
                                </div>
                                <div class="featured_li__right_below row">
                                    <span>$${item.cost}</span>
                                    <div class="cart row">
                                        <i class="bi bi-cart3 bg_col"></i>
                                        <h4>Buy Now</h4>
                                    </div>
                                </div>
                            </div>
                        </li>`
        }
    });
    courses.innerHTML = htmls
}


//Comments
function fetchComments(){
    fetch('http://localhost:3000/comments')
    .then(res => res.json())
    .then(data => renderComments(data))
}

function renderComments(data){
    const comments = document.querySelector('.comments')
    htmls = ''
    data.forEach(item => {
        htmls += `  <li class="few_word__item">
                        <div class="few_word__item_top row">
                            <div class="few_word__item_top-img" style="background: blue;">
                                <img src="${item.avatar}">
                            </div>

                            <span class="row"><i class="bi bi-star-fill"></i>
                                <p>${item.star}.0</p>
                            </span>
                        </div>
                        <h3>${item.name}</h3>
                        <h4>${item.job}</h4>
                        <p>"${item.comment}"</p>

                        <span class="brackets">❝</span>
                    </li>`
    });
    comments.innerHTML = htmls
}





// slider 
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let navbar_sl = document.getElementsByClassName('navbar_sl')[0];

next.addEventListener('click', () => {
    navbar_sl.scrollLeft += 408;
});
prev.addEventListener('click', () => {
    navbar_sl.scrollLeft -= 408;
});



//slider 
let prev_few = document.getElementsByClassName('fewWord_navigation__prev')[0];
let next_few = document.getElementsByClassName('fewWord_navigation__next')[0];
let few_word__slide_box = document.getElementsByClassName('few_word__slide_box')[0];

next_few.addEventListener('click', () => {
    few_word__slide_box.scrollLeft += 435;
});
prev_few.addEventListener('click', () => {
    few_word__slide_box.scrollLeft -= 435;
});



let modal_signIn = document.getElementsByClassName('modal_signIn')[0];
let close_signIn = document.getElementsByClassName('close_modal_signIn')[0];
let login = document.getElementsByClassName('login')[0];
let checkpoin = document.getElementsByClassName('checkpoin')[0];
let form_signIn__lg = document.getElementsByClassName('form_signIn__lg')[0];
let register_btn = document.getElementsByClassName('register_btn')[0];

let modal_register = document.getElementsByClassName('modal_register')[0];
let close_signUp = document.getElementsByClassName('close_modal_register')[0];
let register = document.getElementsByClassName('register')[0];
let login_btn = document.getElementsByClassName('login_btn')[0];

// sign in
login.addEventListener('click', () => {
    modal_signIn.classList.add('open_modal_signIn');
});
close_signIn.addEventListener('click', () => {
    modal_signIn.classList.remove('open_modal_signIn');
});
form_signIn__lg.addEventListener('click', () => {
    checkpoin.classList.toggle('open_check');
});
register_btn.addEventListener('click', () => {
    modal_signIn.classList.remove('open_modal_signIn');
    modal_register.classList.add('open_modal_register');
});


// sign up
register.addEventListener('click', () => {
    modal_register.classList.add('open_modal_register');
});
close_signUp.addEventListener('click', () => {
    modal_register.classList.remove('open_modal_register');
});
login_btn.addEventListener('click', () => {
    modal_signIn.classList.add('open_modal_signIn');
    modal_register.classList.remove('open_modal_register');
});

let modalSignIn = document.querySelector('.modal_signIn')
let formSignIn = document.querySelector('#form_signIn')
modalSignIn.addEventListener('click', ()=>{
    modal_signIn.classList.remove('open_modal_signIn');
})
formSignIn.addEventListener('click', e=>{
    e.stopPropagation()
})

let modalRegister = document.querySelector('.modal_register')
let formRegister = document.querySelector('#register_form')
modalRegister.addEventListener('click', ()=>{
    modalRegister.classList.remove('open_modal_register');
})
formRegister.addEventListener('click', e=>{
    e.stopPropagation()
})

//show/hide password
const inputWrapper = document.querySelectorAll('.form-group.password')
inputWrapper.forEach(input => {
    const eyeBtn = input.querySelector('i')
    const inputPassword = input.querySelector('.input-password')

    eyeBtn.onclick = (e)=>{
        eyeBtn.classList.toggle('fa-eye')
        eyeBtn.classList.toggle('fa-eye-slash')

        inputPassword.type = inputPassword.type == 'password' ? 'text':'password'
    }
})

//Validator form
document.addEventListener("DOMContentLoaded", function () {

    // Validator
    Validator({
        form: "#form_signIn",
        formGroupSelector: ".form-group",
        errorSelector: ".form-message",
        rules: [Validator.isEmail("#email"), Validator.minLength("#password", 6)],
        onSubmit: function (data) {
            // Call API
            console.log(data);
        },
    });

    Validator({
        form: "#register_form",
        formGroupSelector: ".form-group",
        errorSelector: ".form-message",
        rules: [
            Validator.isRequired("#fullname", "Vui lòng nhập tên đầy đủ của bạn"),
            Validator.isEmail("#email"),
            Validator.minLength("#password", 6),
            Validator.isRequired("#password_confirmation"),
            Validator.isConfirmed(
                "#password_confirmation",
                function () {
                    return document.querySelector("#form-1 #password").value;
                },
                "Mật khẩu nhập lại không chính xác"
            ),
        ],
        onSubmit: function (data) {
            // Call API
            console.log(data);
        },
    });

});



let listBtn = document.querySelector('.list-icon i')
let headerList = document.querySelector('.header_list')
let closeHeaderList = document.querySelector('.close_header__list')
listBtn.onclick = () =>{
    headerList.style.transform = 'translateX(0)'
}
closeHeaderList.onclick = () =>{
    headerList.style.transform = 'translateX(-100%)'
}