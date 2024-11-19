let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images =>{
    images.onclick = () =>{
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop : true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
    },
});



// Önceden belirlenmiş verileri bir dizi içinde sakla

var preDefinedData = ["Cool Lime", "Ice Fraise", "Mualla (Çilekli)", "Mualla (Yaban Mersinli Bubble)", "Mualla (Orman Meyveli)", "Mualla (Mango)", "Mualla (Ananaslı)", "Mualla (Karadut)", "Mualla (Yeşil Elmalı)", "Mualla (Limonlu)", "Frozen", "Smoohtie","Milkshake", "Limonata", "Waffle", "Meyve Cup", "Nutellalı Asuman" ,"Cazibe" , "Salep" , "Sıcak Çikolata" , "Mocha" , "White Mocha" , "Americano", "Bubble Ice Latte" , "Bubble Tea Lemonade", "Pumpkin Spice Latte" ,"Coconut Latte", "Nutella Special Latte" , "Caramel Latte" , "Toffee Nut Latte", "Cookie Latte"];
// Rastgele Sun butonuna tıklandığında, diziden rastgele bir veriyi seçip kullanıcıya göster
document.getElementById('randomButton').addEventListener('click', function() {
  var outputDiv = document.getElementById('output');
  
  if(preDefinedData.length > 0) {
    // Animasyon sınıfını ekleyerek kaybolma animasyonunu başlat
    outputDiv.classList.add('fadeOutAnimation');

    // Output'u belirli bir süre sonra değiştir
    setTimeout(function() {
      var randomIndex = Math.floor(Math.random() * preDefinedData.length);
      var randomData = preDefinedData[randomIndex];
      outputDiv.textContent = 'Mualla sana şunu öneriyor: ' + randomData;

      // Animasyon sınıfını kaldırarak yeniden görünme animasyonunu başlat
      outputDiv.classList.remove('fadeOutAnimation');
      outputDiv.classList.add('fadeInAnimation');
    }, 0.1); // 500 milisaniye sonra yeni veriyi göster
  } else {
    outputDiv.textContent = 'Veri bulunmamaktadır.';
  }
});

