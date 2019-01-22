// Scroll Monitor
var myElementAbout = document.querySelector(".about");
var elementWatcherAbout = scrollMonitor.create( myElementAbout );
var myElementService = document.querySelector(".service");
var elementWatcherService = scrollMonitor.create( myElementService);
// var myElementExperience = document.querySelector(".experience");
// var elementWatcherExperience = scrollMonitor.create( myElementExperience);

//Anime.js
var drawAbout = document.querySelector(".about .svgAbout rect");
var anhDisplay = document.querySelector(".about img");
var drawAboutMove = anime.timeline();
//Service
var animationServiceWebDesign = document.querySelector(".service .webDesign");
var animationServiceGraphicDesign = document.querySelector(".service .graphicDesign");
var animationServiceWebDevelop = document.querySelector(".service .webDevelop");
var animationServiceMove = anime.timeline();
var animationServiceGraphicDesignMove = anime.timeline();
var animationServiceWebDevelopMove = anime.timeline();

//Experience
var animationExperience =  document.querySelector(".experience .svgExperience circle");
var anhDisplayExperience = document.querySelector(".experience img");
//var expTime = document.querySelector(".experience .expTime");
var animationExperienceMove = anime.timeline();

// Package Animation Experience
// ERROR FIX ANIMATION
function experiencePack(experience){
    experience.classList.add('experienceAnimation');
    var experienceOld = experience.innerHTML;
    var experienceNew = "<div class='chu'>" + experienceOld + "</div>";
    experience.innerHTML = experienceNew;
    var chu = experience.querySelector('.chu');
    chu.style.opacity = "0";
    // var expTimeMove = anime.timeline();
    anime({
        targets: '.chu',
        translateX: -200,
        easing: "easeOutSine",
        complete: function(){
          chu.style.opacity = "1";
          anime({
              targets: '.chu',
              translateX: 0,
              easing: "easeOutSine"
          });
        }
    });
}
function experiencePack1(experience1){
    experience1.classList.add('experienceAnimation1');
    var experienceOld1 = experience1.innerHTML;
    var experienceNew1 = "<div class='chu1'>" + experienceOld + "</div>";
    experience1.innerHTML = experienceNew1;
    var chu = experience1.querySelector('.chu1');
    chu1.style.opacity = "0";
    // var expTimeMove = anime.timeline();
    anime({
        targets: '.chu1',
        translateX: 200,
        easing: "easeOutSine",
        complete: function(){
          chu1.style.opacity = "1";
          anime({
              targets: '.chu1',
              translateX: 0,
              easing: "easeOutSine"
          });
        }
    });
}
experiencePack(document.getElementById('e1'));
experiencePack(document.getElementById('e3'));

// Scroll Monitor Effect Experience
function scrollExperienceAnimation(scrollExperience){
    var scrollExperienceMonitor = scrollMonitor.create(scrollExperience);
    scrollExperienceMonitor.enterViewport(function(){
        experiencePack(scrollExperience);
        scrollExperienceMonitor.destroy();
    });
}
scrollExperienceAnimation(document.getElementById('e1'));
scrollExperienceAnimation(document.getElementById('e3'));

function scrollExperienceAnimation1(scrollExperience1){
    var scrollExperienceMonitor1 = scrollMonitor.create(scrollExperience1);
    scrollExperienceMonitor1.enterViewport(function(){
        experiencePack(scrollExperience1);
        scrollExperienceMonitor1.destroy();
    });
}
scrollExperienceAnimation1(document.getElementById('e2'));
scrollExperienceAnimation1(document.getElementById('e4'));
// ERROR FIX ANIMATION

// Animation Experience
// elementWatcherExperience.enterViewport(function(){
//     console.log("Animation Experience is running!");
//     animationExperienceMove.add({
//         targets: animationExperience,
//         duration: 3000,
//         strokeDashoffset: [anime.setDashoffset, 0],
//         easing: "easeOutSine"
//     });
//     animationExperienceMove.add({
//         targets: anhDisplayExperience,
//         strokeDashoffset:[anime.setDashoffset, 0],
//         duration: 1000,
//         easing: 'easeOutSine',
//         opacity: [0,1]
//     });
    
//     animationExperienceMove.add({
//         targets: animationExperience,
//         duration: 100,
//         opacity: [1,0]
//     });
// });
//Animation About
elementWatcherAbout.enterViewport(function() {
    console.log( 'I have entered the viewport' );
    drawAboutMove.add({
      targets: drawAbout,
      strokeDashoffset:[anime.setDashoffset, 0],
      duration: 2000,
      easing: 'easeOutSine'
    });
    drawAboutMove.add({
      targets: anhDisplay,
      strokeDashoffset:[anime.setDashoffset, 0],
      duration: 2000,
      easing: 'easeOutSine',
      opacity: [0,1]
    });
    drawAboutMove.add({
      targets: drawAbout,
      opacity: [1,0]
    });
});

//Animation Service
elementWatcherService.enterViewport(function() {
    console.log( 'Animation Service is running!' );
    animationServiceMove.add({
        targets: animationServiceWebDesign,
        opacity: 0,
        translateX: -200
    });
    animationServiceMove.add({
        targets: animationServiceWebDesign,
        opacity: 1,
        translateX: 0,
        easing: "easeOutSine"
    });
    animationServiceGraphicDesignMove.add({
        targets: animationServiceGraphicDesign,
        opacity: 0,
        translateY: -100
    });
    animationServiceGraphicDesignMove.add({
        targets: animationServiceGraphicDesign,
        opacity: 1,
        translateY: 0,
        easing: "easeOutSine"
    });
    animationServiceWebDevelopMove.add({
        targets: animationServiceWebDevelop,
        opacity: 0,
        translateX: 200
    });
    animationServiceWebDevelopMove.add({
        targets: animationServiceWebDevelop,
        opacity: 1,
        translateX: 0,
        easing: "easeOutSine"
    });
});


// Animtion Title
function TitlePackge(layerMark){
    layerMark.classList.add('cohieuung');

    //Add animation
    var cu = layerMark.innerHTML;
    layerMark.insertAdjacentHTML('beforeend', '<div class="chunhat"></div>');
    var chunhat = layerMark.querySelector('.chunhat');
    var chu = layerMark.querySelector('.chu');
    chunhat.style.transform = "scaleX(0)";
    chunhat.style.transformOrigin = "0% 50%";
    anime({
        targets: ".chunhat",
        scaleX: 1,
        easing: "easeInOutQuint",
        duration: 600,
        complete: function(){
            chunhat.style.transformOrigin = "100% 50%";
            anime({
                targets: ".chunhat",
                delay: 100,
                easing: "easeInOutQuint",
                duration: 600,
                scaleX:0
            });
        }
    });
}

function scrollTitleAnimation(scrollTitle){
    var scrollTitleMonitor = scrollMonitor.create(scrollTitle);
    scrollTitleMonitor.enterViewport(function(){
        TitlePackge(scrollTitle);
        scrollTitleMonitor.destroy();
    });
}
scrollTitleAnimation(document.getElementById('serviceAnimation'));
scrollTitleAnimation(document.getElementById('experienceAnimation'));



var bar = new ProgressBar.Line(photoshop, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'black',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: 'black',
      position: 'absolute',
      right: '0',
      top: '0',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(0.8);  // Number from 0.0 to 1.0

//illustrator
var bar = new ProgressBar.Line(illustrator, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'black',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: 'black',
      position: 'absolute',
      right: '0',
      top: '0',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(0.87);  // Number from 0.0 to 1.0

//muse
var bar = new ProgressBar.Line(muse, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'black',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: 'black',
      position: 'absolute',
      right: '0',
      top: '0',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(0.75);  // Number from 0.0 to 1.0

//html
var bar = new ProgressBar.Line(html, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'black',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: 'black',
      position: 'absolute',
      right: '0',
      top: '0',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(0.8);  // Number from 0.0 to 1.0

//javascript
var bar = new ProgressBar.Line(javascript, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'black',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: 'black',
      position: 'absolute',
      right: '0',
      top: '0',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(0.7);  // Number from 0.0 to 1.0

//nodejs
var bar = new ProgressBar.Line(nodejs, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'black',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: 'black',
      position: 'absolute',
      right: '0',
      top: '0',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(0.6);  // Number from 0.0 to 1.0

// BACK TO TOP
// window.onscroll = function() {scrollFunction()};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// CONTACT FORM
