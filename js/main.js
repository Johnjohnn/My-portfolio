const scrolltp = document.querySelector("#scrolltp");
const toggle = document.querySelector(".toggle"); 
const sentMessage = document.querySelector('.message-sent');
const iconHover = document.querySelectorAll(".icons");
const iconText = document.querySelectorAll(".text");
gsap.registerPlugin(ScrollTrigger);



// Loader
gsap.to(".loading-wrapper",{
  delay: 1.5,
  duration:.3,
  background: "transparent",
  opacity: 0,
  zIndex:1,
});







// First Section 
    gsap.from('.welcome', {
        scrollTrigger:{
        trigger:".welcome",
        toggleActions: "restart none none none"
     },
        x: -200,
        opacity:0,
        duration:2.8,
        ease:Back.easeNone
        
    });
    gsap.from('.container img', {
      scrollTrigger:{
      trigger:".container img",
      toggleActions: "restart none none none"
   },
      y:-200,
      x: 200,
      opacity:0,
      duration:2.8,
      ease:Back.easeNone
      
  });
 
    gsap.from(".container-3 p",{
      scrollTrigger:{
      trigger:".welcome",
      toggleActions: "restart none none none"
   },
      x: 200,
      opacity:0,
      duration:2.8,
      ease:Back.easeNone
      
  });
  gsap.from(".card-container .card",{
    scrollTrigger:{
    trigger:".card-container .card",
    toggleActions: "restart none none none"
 },
    x: 200,
    opacity:0,
    duration:0.8,
    ease:Back.easeNone,
    stagger: {
      each:0.5,
      from: "end"
    }
});

    // gsap.from(',{
    //     scrollTrigger:{
    //     trigger:"",
    //     toggleActions: "restart none none none"
    //  },
    //     y: 100,
    //     opacity:0,
    //     duration:2.5,
    //     ease:Back.easeNone
        
    // });


 
    gsap.from('.container-4 div',{
        scrollTrigger:{
        trigger:".container-4 div",
        toggleActions: "restart none none none"
     },
        y: 100,
        opacity:0,
        duration:.3,
        ease:Back.easeNone,
        stagger:(index) => {
          
     }
    });
   // Dark Mode Toggle
    toggle.addEventListener('click', (e) => {
      const html = document.querySelector('html')
      if (html.classList.contains('dark')) {
          html.classList.remove('dark')
          
          e.target.innerHTML = 'Dark mode'
      } else {
          html.classList.add('dark')
          e.target.innerHTML = 'Light mode'
      }
      
  })

//Back To Top Button 

scrolltp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", function () {
  if (window.scrollY >= 3600) {
    scrolltp.style.opacity = 1;
  } else {
    scrolltp.style.opacity = 0;
  }
});

// Fire base Contact Me Config
const firebaseConfig = {
  apiKey: "AIzaSyCGMj9L4uK0R42cKZ4D0djk76aoONiXTqU",
  authDomain: "contactform-95e60.firebaseapp.com",
  databaseURL: "https://contactform-95e60-default-rtdb.firebaseio.com",
  projectId: "contactform-95e60",
  storageBucket: "contactform-95e60.appspot.com",
  messagingSenderId: "6728425988",
  appId: "1:6728425988:web:55ae6c5ab633699afe0b51"
};
// initialize Firebase
firebase.initializeApp(firebaseConfig);

// reference for the database

var contactFormDB = firebase.database().ref('contactForm');
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  var name = getElementVal('first-name');
  var lastName = getElementVal('last-name');
  var emailid = getElementVal('emailid');
  var phoneNumber = getElementVal('phoneNumber');
  var getMessage = getElementVal('message');
  
  saveMessages(name,lastName,emailid,phoneNumber,getMessage);

  // show sent message
  showMessage();
}

const saveMessages =(name, lastName, emailid, phoneNumber, getMessage) =>{
   var newContactForm = contactFormDB.push();

   newContactForm.set({
      firstName : name,
     lastName :lastName,
     email : emailid,
     phoneNumber: phoneNumber,
     message: getMessage
    
   })
};
const getElementVal = (id) => {
  return document.getElementById(id).value;
}


// show sent Message. 
function showMessage () {
  sentMessage.style.visibility = "visible";
  // hide sent Message. 
  setTimeout (() => {
    sentMessage.style.visibility = "hidden"
  },3000);
  // reset the Form
  document.getElementById('contactForm').reset();
}


// Icon description on hover show

for(let i = 0; i < iconHover.length && iconText.length; i++){
  iconHover[i].addEventListener("mouseover", hoverEffect)
  function hoverEffect () {
iconText[i].style.opacity= 1;
}
}


for(let i = 0; i < iconHover.length && iconText.length; i++){
  iconHover[i].addEventListener("mouseout", hoverOut)
function hoverOut () {
  iconText[i].style.opacity= 0;
}
}



