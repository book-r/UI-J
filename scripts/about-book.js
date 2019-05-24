      function loadApp() {

          // Create the flipbook

          $('.flipbook').turn({
              // Width

              width: 700,

              // Height

              height: 455,

              // Elevation

              elevation: 50,

              // Enable gradients

              gradients: true,

              // Auto center this flipbook

              autoCenter: true

          });
      }

      // Load the HTML4 version if there's not CSS transform

      yepnope({
          test: Modernizr.csstransforms,
          yep: ['/scripts/lib/turn.js'],
          nope: ['/scripts/turn.html4.min.js'],
          both: ['css/book.css'],
          complete: loadApp
      });