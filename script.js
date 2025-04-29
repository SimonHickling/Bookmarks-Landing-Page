//      

const featuresBtn = document.querySelectorAll(".tab-btn")
const heroChromeBtn = document.getElementById("hero-chrome-btn")
const accordianBtn = document.querySelectorAll('.accordianBtn')
const contentText = document.getElementById('content-text')
const contentImg = document.getElementById('content-img')
const featuresInfoBtn = document.getElementById('features-info-btn')


heroChromeBtn.onclick = () => {
     console.log('this works')
}

// Tab menu active

featuresBtn.forEach((btn) => {
     btn.addEventListener('click', () => {
          featuresBtn.forEach((button) => button.classList.remove('active'))
          btn.classList.add('active')
     });
     
})

//Tab menu content

featuresBtn.forEach(btn => {
     btn.addEventListener('click', () => {
         const textId = btn.getAttribute('data-text-id');
         const imageId = btn.getAttribute('data-image');
         const newContent = document.getElementById(textId).innerHTML;
 
         // Remove 'visible' class for fade-out
         contentText.classList.remove('visible');
         contentImg.classList.remove('visible');
        featuresInfoBtn.classList.remove('visible');
 
         // Wait for fade-out to complete (CSS transition time: 500ms)
         setTimeout(() => {
             // Update content and image after fade-out
             contentText.innerHTML = newContent;
             contentImg.src = imageId;
 
             // Add 'visible' class for fade-in
             contentText.classList.add('visible');
             contentImg.classList.add('visible');
             featuresInfoBtn.classList.add('visible');
         }, 500); // Matches CSS transition duration
     });
 });


document.addEventListener('DOMContentLoaded', () => {
     const firstImageSrc = "images/illustration-features-tab-1.svg"; 
     contentImg.src = firstImageSrc; 
     contentImg.classList.add('visible');
     contentText.classList.add('visible');
     featuresInfoBtn.classList.add('visible');
 });

//Accordian menu

accordianBtn.forEach(btn => {
     btn.addEventListener('click', function() {
          this.classList.toggle('active-faq')
          const activeSection = this.nextElementSibling;
          const accordianOpen = this.querySelector('.accordian-arrow')

          if (activeSection.style.maxHeight) {
               activeSection.style.maxHeight = null;
               if (accordianOpen) accordianOpen.style.rotate = '0deg';
          }
          else {
               activeSection.style.maxHeight = activeSection.scrollHeight + 'px';
               if (accordianOpen) accordianOpen.style.rotate = '180deg';
          }
     })
})

//hamburger menu
const navList = document.getElementById('nav-list-mobile');
const hamburgerOpen = document.getElementById('hamburger-open');
const hamburgerClose = document.getElementById('hamburger-close');
const hamburgerIcon = document.querySelectorAll('.hamburger-icon');
const headerLogo = document.getElementById('header-logo')
const mobileLogo = document.getElementById('mobile-logo')
const mobileLinks = document.querySelectorAll('.mobile-link')

hamburgerIcon.forEach((btn) => {
     btn.addEventListener('click', function() {
          hamburgerOpen.classList.toggle('hide');
          hamburgerClose.classList.toggle('hide');
          mobileLogo.classList.toggle('hide');
          headerLogo.classList.toggle('hide');
          navList.classList.toggle('show'); 
     })
})

mobileLinks.forEach((btn) => {
     btn.addEventListener ('click', function() {
     hamburgerOpen.classList.toggle('hide');
          hamburgerClose.classList.toggle('hide');
          mobileLogo.classList.toggle('hide');
          headerLogo.classList.toggle('hide');
          navList.classList.toggle('show');

})
})


document.addEventListener('DOMContentLoaded', () => {
     hamburgerClose.classList.add('hide')
     mobileLogo.classList.add('hide')
})

//email verification



// const submitBtn = document.getElementById('submit-btn');
// const errorMsg = document.getElementById('error-message');

// submitBtn.onclick = function() {console.log('Work work work')}

document.getElementById('submit-btn').addEventListener('click', function(event) {
     event.preventDefault(); 
     
     const emailInput = document.getElementById('email-form').value;
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
     const errorMsg = document.getElementById('error-message')

     if (emailRegex.test(emailInput)) {
          errorMsg.style.display = ('none')
     } else {
          errorMsg.style.display = ('flex')
     }
   
 });