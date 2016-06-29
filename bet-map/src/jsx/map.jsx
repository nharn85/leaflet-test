// Libraries
import React         from 'react';
import ReactDOM      from 'react-dom';
import OpenSeadragon from 'openseadragon';
import '../../vendor/openseadragon-viewerinputhook.min.js';

module.exports = React.createClass({
    componentDidMount: function() {
        var overlays = _.map(this.props.overlays, function(item, n) {
            return {
                id: item.id,
                px: parseInt(item.x),
                py: parseInt(item.y),
                placement: 'BOTTOM',
            };
        });

        console.log(overlays);

        var viewer = OpenSeadragon({
            id: 'beta16-interactivemap--osd',
            prefixUrl: 'images/',
            navigationControlAnchor: OpenSeadragon.ControlAnchor.BOTTOM_RIGHT,
            showNavigator: false,
            showHomeControl: false,
            showFullPageControl: false,
            autoHideControls: false,
            preserveImageSizeOnResize: true,
            zoomInButton: 'beta16-interactivemap-zoomin',
            zoomOutButton: 'beta16-interactivemap-zoomout',
            overlays: overlays,
            tileSources: [{
                type: 'image',
                url:  'images/map.jpg',
                width: 2580,
                height: 3598
            }]
        });

        // prevent the default click event
        viewer.addViewerInputHook({hooks: [
            {
                tracker: 'viewer',
                handler: 'clickHandler',
                hookHandler: function(e) {
                    e.stopHandlers = true;
                },
            }
        ]});
    },
    render: function() {
        return(<div id='beta16-interactivemap--osd' className='beta16im-map'></div>);
    }
});
