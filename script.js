
window.addEventListener("scroll", function () {
    const nav = document.getElementById("header-icons");
    const disc_tag = this.document.getElementById("discount-tag");
    if (window.scrollY > 3200) {
        nav.classList.add("hide");
        disc_tag.classList.add("hide");
    } else {
        nav.classList.remove("hide");
        disc_tag.classList.remove("hide")
    }
});


// HAM-BURGER MENU

document.getElementById("ham-burger").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.add("menu-appear");
});

document.getElementById("close-menu").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.remove("menu-appear");
});



// MENU SUB CATEGORIES

// document.getElementById("menu-link").addEventListener("click", function () {
//     const sub_cat = document.getElementById("sub-category");
//     sub_cat.classList.toggle("sub-category-show");
// });
// document.getElementById("menu-link").addEventListener("click", function () {
//     const sub_cat = document.getElementById("sub-category-2");
//     sub_cat.classList.toggle("sub-category-show");
// });

// const sub_cat = document.getElementsByClassName("sub-category");

// for (let i = 0; i < sub_cat.length; i++) {
//     document.getElementById("menu-link").addEventListener("click", function () {
//         sub_cat[i].classList.toggle("sub-category-show");
        
//     });
// }


document.getElementById("menu-link").addEventListener("click", function() {
    document.getElementById("menu-link-icon").classList.toggle("menu-icon-rotate")
})
document.getElementById("menu-link-2").addEventListener("click", function() {
    document.getElementById("menu-link-icon-2").classList.toggle("menu-icon-rotate")
})
document.getElementById("menu-link-3").addEventListener("click", function() {
    document.getElementById("menu-link-icon-3").classList.toggle("menu-icon-rotate")
})
document.getElementById("menu-link-4").addEventListener("click", function() {
    document.getElementById("menu-link-icon-4").classList.toggle("menu-icon-rotate")
})
document.getElementById("menu-link-5").addEventListener("click", function() {
    document.getElementById("menu-link-icon-5").classList.toggle("menu-icon-rotate")
})


// SUB CATEGORY

const sub_cat = document.getElementById("menu-category");

document.getElementById("menu-link").addEventListener("click", function() {
    sub_cat.classList.toggle("cat-appear");
})


const sub_cat_2 = document.getElementById("menu-category-2");

document.getElementById("menu-link-2").addEventListener("click", function() {
    sub_cat_2.classList.toggle("cat-appear");
})


const sub_cat_3 = document.getElementById("menu-category-3");

document.getElementById("menu-link-3").addEventListener("click", function() {
    sub_cat_3.classList.toggle("cat-appear");
})


const sub_cat_4 = document.getElementById("menu-category-4");

document.getElementById("menu-link-4").addEventListener("click", function() {
    sub_cat_4.classList.toggle("cat-appear");
})


const sub_cat_5 = document.getElementById("menu-category-5");

document.getElementById("menu-link-5").addEventListener("click", function() {
    sub_cat_5.classList.toggle("cat-appear");
})



// WISHLIST POPUP TOGGLE

const hearts_1 = document.getElementsByClassName("icon-1");
const hearts_2 = document.getElementsByClassName("icon-2");
const popup_1 = document.getElementById("p-1");
const popup_2 = document.getElementById("p-2");

// loop through all the hearts
for (let i = 0; i < hearts_1.length; i++) {
    hearts_1[i].addEventListener("click", function () {
        hearts_1[i].classList.replace("show", "hide");
        hearts_2[i].classList.replace("hide", "show-2");

        popup_1.classList.replace("hide", "popup-para-show");
        popup_2.classList.replace("popup-para-show", "hide");
    });

    hearts_2[i].addEventListener("click", function () {
        hearts_2[i].classList.replace("show-2", "hide");
        hearts_1[i].classList.replace("hide", "show");

        popup_2.classList.replace("hide", "popup-para-show");
        popup_1.classList.replace("popup-para-show", "hide");
    });
}