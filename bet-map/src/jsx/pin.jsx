// Libraries
import React    from 'react';

import ReactDOM      from 'react-dom';
import OpenSeadragon from 'openseadragon';

// Modules
import Overlay from './overlay.jsx'


module.exports = React.createClass ({
    getInitialState: function() {
        return({
            style: {},
            icon: '',
            data: {},
            className: '',
        })
    },
    componentDidMount: function() {
        var icon = 'data:image/png;base64,';

        switch(this.props.data.type) {
            case 'image':
            icon += require('../images/pin-image.png');
            break;
            case 'article':
            icon += require('../images/pin-article.png');
            break;
            case 'video':
            icon += require('../images/pin-video.png');
            break;
            default:
            icon += require('../images/pin-article.png');
        }

        this.setState({
            icon: icon,
            style: {
                top: this.props.data.y + 'px',
                left: this.props.data.x + 'px'
            },
            classNames: 'beta16im-pin beta16im-pin__' + this.props.data.type
        });

        new OpenSeadragon.MouseTracker({
            element: document.querySelector('#' + this.props.data.id),
            clickHandler: this.openOverlay
        });
    },
    openOverlay: function(e) {
        ReactDOM.render(
            <Overlay data={this.props.data} icon={this.state.icon} />,
            document.querySelector('.beta16im-overlay--container')
        );
    },
    render: function() {
        return (
            <a href='#'
            id={this.props.data.id}
            className={this.state.classNames}
            title={this.props.data.title}
            style={this.props.data.style}>
            <span className='pin-title'>{this.props.data.title}</span>
            <img src={this.state.icon} />
            </a>
        )
    }
});
