const checkthemebtn = document.querySelector("#temadark")

function toggleDarkMode(){
    document.body.classList.toggle("dark");
}

function loadtheme(){
    const darkmode = localStorage.getItem("dark");

    if (darkmode){
        toggleDarkMode();
    }
}

loadtheme();

checkthemebtn.addEventListener("change", function(){
    toggleDarkMode();

    localStorage.removeItem("dark")

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1);
    }
});