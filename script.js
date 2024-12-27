// Hero section
const resume_button = document.getElementById("resume_button");
resume_button.onclick = () => { 
    window.alert("Resume coming soon!");
}




// Navigation section
const navigation = document.getElementById("mobile_nav");
let x = false;

function mobile_navigation() {
    if (x == false) {
        navigation.style.display = "flex"
        document.getElementById("hamburger_icon").style.display = "none"
        document.getElementById("close_icon").style.display = "unset"
        x = true
    } else {
        navigation.style.display = "none"
        x = false
        document.getElementById("hamburger_icon").style.display = "unset"
        document.getElementById("close_icon").style.display = "none"
    }
}

document.getElementById("menu_button_1").onclick = () => {
    navigation.style.display = "none"
    document.getElementById("hamburger_icon").style.display = "unset"
    document.getElementById("close_icon").style.display = "none"
}

document.getElementById("menu_button_2").onclick = () => {
    navigation.style.display = "none"
    document.getElementById("hamburger_icon").style.display = "unset"
    document.getElementById("close_icon").style.display = "none"
}

document.getElementById("menu_button_3").onclick = () => {
    navigation.style.display = "none"
    document.getElementById("hamburger_icon").style.display = "unset"
    document.getElementById("close_icon").style.display = "none"
}

document.getElementById("menu_button_4").onclick = () => {
    navigation.style.display = "none"
    document.getElementById("hamburger_icon").style.display = "unset"
    document.getElementById("close_icon").style.display = "none"
}

document.getElementById("menu_button_5").onclick = () => {
    navigation.style.display = "none"
    document.getElementById("hamburger_icon").style.display = "unset"
    document.getElementById("close_icon").style.display = "none"
}

document.getElementById("home").onclick = () => { 
    navigation.style.display = "none"
    document.getElementById("hamburger_icon").style.display = "unset"
    document.getElementById("close_icon").style.display = "none"
    x = false
    window.scrollTo(0, 0);
}




// Projects section
document.getElementById("thumbnail_highlight_1").addEventListener("mouseenter", () => {
    document.getElementById("highlight_cover_1").play();
    document.getElementById("highlight_cover_1").style.transform = "scale(1.05)";
});

document.getElementById("thumbnail_highlight_1").addEventListener("mouseleave", () => {
    document.getElementById("highlight_cover_1").pause();
    document.getElementById("highlight_cover_1").load();
    document.getElementById("highlight_cover_1").style.transform = "scale(1)";

});

document.getElementById("thumbnail_highlight_2").onclick = () => {
    window.alert("This project is currently under development. Please check back later!");
}

document.getElementById("thumbnail_highlight_2").addEventListener("mouseenter", () => {
    document.getElementById("highlight_cover_2").style.transform = "scale(1.05)";
});

document.getElementById("thumbnail_highlight_2").addEventListener("mouseleave", () => {
    document.getElementById("highlight_cover_2").style.transform = "scale(1)"
});

document.getElementById("thumbnail_1").addEventListener("mouseover", event => {
    document.getElementById("thumbnail_image_1").style.transform = "scale(1.05)"
});

document.getElementById("thumbnail_1").onclick = () => {
    window.alert("This project is currently under development. Please check back later!");
}

document.getElementById("thumbnail_1").addEventListener("mouseout", event => {
    document.getElementById("thumbnail_image_1").style.transform = "scale(1)"
});

document.getElementById("thumbnail_2").addEventListener("mouseover", event => {
    document.getElementById("thumbnail_image_2").style.transform = "scale(1.05)"
});

document.getElementById("thumbnail_2").addEventListener("mouseout", event => {
    document.getElementById("thumbnail_image_2").style.transform = "scale(1)"
});

document.getElementById("thumbnail_3").addEventListener("mouseover", event => {
    document.getElementById("thumbnail_image_3").style.transform = "scale(1.05)"
});

document.getElementById("thumbnail_3").addEventListener("mouseout", event => {
    document.getElementById("thumbnail_image_3").style.transform = "scale(1)"
});

document.getElementById("thumbnail_4").addEventListener("mouseover", event => {
    document.getElementById("thumbnail_image_4").style.transform = "scale(1.05)"
});

document.getElementById("thumbnail_4").addEventListener("mouseout", event => {
    document.getElementById("thumbnail_image_4").style.transform = "scale(1)"
});



// Footer section
document.getElementById("resume_button_2").onclick = () => {
    window.alert("Resume coming soon!");
}