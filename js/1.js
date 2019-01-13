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
window.onscroll = function() {scrollFunction()};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// CONTACT FORM
