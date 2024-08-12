let tablinks = document.getElementsByClassName("tab-links")
let tabContents = document.getElementsByClassName("tab-content")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

let sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

function sendMail(){
    let params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        message : document.getElementById("message").value
    }
    const form = document.getElementById("form");
    const msg = document.getElementById("msg");
    emailjs.send("service_u8lgt2v","template_y75s013",params).then(Response=>{
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = "";
        },5000)
        form.reset();
    })
}

function scrollToTop(){
    window.scrollTo(0,0);
}