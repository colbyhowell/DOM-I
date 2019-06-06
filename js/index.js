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
    "h1": "DOM<br>Is<br>Awesome",
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
    "address" : "123 Way 456 Street<br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navList = document.querySelectorAll("nav a")
navList.forEach((item, i) => {
  item.textContent = siteContent['nav'][`nav-item-${i + 1}`];
  item.style.color = "green"
  item.style.fontWeight = "700"
})

let onlyNav = document.querySelector("nav")

const appendNav = document.createElement("a")
const prependNav = document.createElement("a")

appendNav.textContent = "Back"
appendNav.style.color = "green"
appendNav.style.fontWeight = "700"
prependNav.textContent = "Front"
prependNav.style.color = "green"
prependNav.style.fontWeight = "700"

onlyNav.prepend(prependNav)
onlyNav.append(appendNav)

let awesomeDom = document.querySelector("h1")
awesomeDom.innerHTML = siteContent['cta']['h1']
awesomeDom.style.fontSize = "80px"
awesomeDom.style.fontStyle = "italic"
console.log(awesomeDom)

let ctaFlex = document.querySelector(".cta")
ctaFlex.style.display = "flex"
ctaFlex.style.justifyContent= "space-between"

let codeImage = document.querySelector('#cta-img')
codeImage.src = siteContent["cta"]["img-src"]

let buttonText = document.querySelector("button")
buttonText.textContent = siteContent['cta']['button']

let innerImage = document.querySelector('.middle-img')
innerImage.src = siteContent['main-content']['middle-img-src']

let topContent = document.querySelectorAll('.top-content h4')
console.log(topContent)
topContent[0].textContent = siteContent['main-content']['features-h4']
topContent[1].textContent = siteContent['main-content']['about-h4']

let pTopContent = document.querySelectorAll('.top-content p')
pTopContent[0].textContent = siteContent['main-content']['features-content']
pTopContent[1].textContent = siteContent['main-content']['about-content']

let pBotHeaders = document.querySelectorAll('.bottom-content h4')
pBotHeaders[0].textContent = siteContent['main-content']['services-h4']
pBotHeaders[1].textContent = siteContent['main-content']['product-h4']
pBotHeaders[2].textContent = siteContent['main-content']['vision-h4']

let pBotContent = document.querySelectorAll('.bottom-content p')
pBotContent[0].textContent = siteContent['main-content']['services-content']
pBotContent[1].textContent = siteContent['main-content']['product-content']
pBotContent[2].textContent = siteContent['main-content']['vision-content']


let contactHeader = document.querySelector(".contact h4")
contactHeader.innerHTML = siteContent['contact']['contact-h4']

let contactP = document.querySelectorAll(".contact p")
contactP[0].innerHTML = siteContent['contact']['address']
contactP[1].innerHTML = siteContent['contact']['phone']
contactP[2].innerHTML = siteContent['contact']['email']

let footerP = document.querySelector('footer p')
footerP.innerHTML = siteContent['footer']['copyright']