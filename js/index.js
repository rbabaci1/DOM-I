const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// add text content to the anchors
let links = document.querySelectorAll('a');
for (let i = 0; i < links.length; i++) {
  links[i].textContent = siteContent["nav"]["nav-item-" + (i + 1)];
  links[i].style.color = "green";
}

// Update the img src for section
let sectionImg = document.getElementById("cta-img");
sectionImg.src = siteContent.cta["img-src"];

// add text content to the .cta-text children
let splitH1 = siteContent.cta.h1.split(' ').join('<br>');

let ctaText = document.querySelector('.cta-text');
ctaText.children[0].innerHtm = splitH1;
ctaText.children[1].textContent = siteContent.cta.button;

// add text content to the main-content
let dataToArray = Object.values(siteContent["main-content"]);
let middleImgSrc = dataToArray.splice(4,1);
let mainContent = document.querySelectorAll('.text-content h4, .text-content p');
let middleImg = document.getElementById("middle-img");

// Update src attribute of the middle image
middleImg.setAttribute('src', middleImgSrc);

for (let i = 0; i < mainContent.length; i++) {
  mainContent[i].textContent = dataToArray[i];
}

// add text content to the contact section
let contactToArray = Object.values(siteContent["contact"]);
let contactSec = document.querySelectorAll('.contact h4, .contact p');

for (let i = 0; i < contactSec.length; i++) {
  contactSec[i].textContent = contactToArray[i];
}

// add text content to the footer
document.querySelector('footer p').textContent = siteContent.footer.copyright;