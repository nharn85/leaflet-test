    var viewer = OpenSeadragon({
        id: "openseadragon1",
        prefixUrl: "images/",
        toolbar:        "toolbarDiv",
        zoomInButton:   "zoom-in",
        zoomOutButton:  "zoom-out",
        homeButton:     "home",
        fullPageButton: "full-page",
        nextButton:     "next",
        previousButton: "previous",
        buildPyramid: false,
        // preserveImageSizeOnResize: true,
        // showNavigator:  true,
        sequenceMode: true,
        tileSources: [{
            type: 'image',
            url:  'rq-map.jpg',
            overlays: [{
              id: 'example-overlay',
              x: 0.5,
              y: 0.5,
              placement: 'bottom',
			        // checkResize: true
              }]
          }, {
            type: 'image',
            url:  'rq-map.jpg',
            overlays: [{
              id: 'example-overlay',
              x: 0.5,
              y: 0.5,
              placement: 'bottom',
			        // checkResize: true
              }]
          }],
          defaultZoomLevel: 	2,
          minZoomLevel: 	1,
          maxZoomLevel: 	3,
          useCanvas: false,
          applyConstraints: true,
          visibilityRatio: 1,
          debug: true,
	    // immediateRender: true,
	    // maxLevel: 3,
    });
    // viewer.addHandler("open", function(){
      //   $("#example-overlay").click(function(e){
      //     $("#example-tip").toggle('display');
      // });
    // });
    // prevent the default click event
    //     viewer.addViewerInputHook({hooks: [
    //         {
    //             tracker: 'viewer',
    //             handler: 'clickHandler',
    //             hookHandler: function(e) {
    //                 e.stopHandlers = true;
    //             },
    //         }
    //     ]});
    // viewer.addHandler("page", function (data) {
    //     document.getElementById("currentpage").innerHTML = ( data.page + 1 ) + " of 2";
    // });
    jQuery(function() {
        setTimeout(bindtooltip, 2000);
    });

    function bindtooltip(){
        jQuery("#example-overlay").click(function(e){
           alert('clicked');
        });
    };