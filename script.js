const iconToggle = document.querySelector(".toggle_icon");
const navbarMenu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu_link");
const iconClose = document.querySelector(".close_icon");
const form = document.querySelector('form');
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const mess = document.getElementById("message");

iconToggle.addEventListener("click",() =>{
    navbarMenu.classList.toggle('active');
});
iconClose.addEventListener("click",() =>{
    navbarMenu.classList.remove('active');
})
menuLinks.forEach((menulink) =>{
    menulink.addEventListener("click",() =>{
        navbarMenu.classList.remove('active');
    })
})
function scrollHeader(){
    const header = document.getElementById("header");
    if(this.scrollY>=20){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
}
window.addEventListener("scroll",scrollHeader);

/* type effect*/
const typed = document.querySelector('.typed');
if (typed){
    let typew = typed.getAttribute('data-typed-items');
    typew = typew.split(',');
    new Typed('.typed',{
        strings:typew,
        loop:true,
        typeSpeed:100,
        backSpeed:50,
        backDelay:2000
    });
}
//scroll section
const sections=document.querySelectorAll("section[id]");

function scrollActive(){
    const scrollY = window.pageYOffset;
    sections.forEach(section=>{
        const sectionHeight = section.offsetHeight;
        const top=section.offsetTop-50;
        let sectionId = section.getAttribute('id');
        if(scrollY>top && scrollY<=top+sectionHeight){
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.add('active-link');
        }
        else{
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
        })

}
window.addEventListener('scroll',scrollActive);

const pages=document.querySelectorAll(".page");
const resume=document.querySelector('.resume');
function activeLink(){
    const scrollY = window.pageYOffset;
    pages.forEach(page=>{
        const height = page.offsetHeight;
        const top = page.offsetTop;
        let sectionId = page.getAttribute('id');
        if(scrollY>top && scrollY<=top+height){
            document.querySelector('.resume_tabs a[href*=' + sectionId + ']').classList.add('current');

        }
        else{
            document.querySelector('.resume_tabs a[href*=' + sectionId + ']').classList.add('current');
        }

    })
}
window.addEventListener('scroll',activeLink);
/*send mails*/
function sendEmail(){
    
    const bodymess = `Full Name: ${fullname.value} <br> Email: ${email.value} <br> Message: ${mess.value}` ;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sharshika6566@gmail.com",
        Password : "16CBF1CE4C0D152E3690130EC0B95ABE5B0C",
        To : 'sharshika6566@gmail.com',
        From : 'sharshika6566@gmail.com',
        Subject : "message from your site",
        Body : bodymess
    }).then(
      message => {
        if(message==="OK"){
            Swal.fire({
                title: "Message Sent",
                text: "The message has been sent!",
                icon: "success"
              });
        }
      }
    );
}
form.addEventListener("submit",(e)=>{
     e.preventDefault();
     if (fullname.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
        alert('Please fill in all fields'); 
    } 
    else{
     sendEmail();
     form.reset();
    }
});
