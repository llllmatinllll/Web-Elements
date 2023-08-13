document.querySelector(".open_login_btn").addEventListener("click", function(){
    document.querySelector(".open_login_btn").classList.add("active");
    document.querySelector(".login_form").classList.add("active");
});

document.querySelector(".login_form .close_btn").addEventListener("click", function(){
    document.querySelector(".open_login_btn").classList.remove("active");
    document.querySelector(".login_form").classList.remove("active");
});