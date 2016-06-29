// Libraries
import React    from 'react';


module.exports = React.createClass ({
    getInitialState: function() {
        return({
            zoomInIcon: '',
            zoomOutIcon: '',
        });
    },
    componentDidMount: function() {
        this.setState({
            zoomInIcon: 'data:image/png;base64,' + require('../images/zoom-in.png'),
            zoomOutIcon: 'data:image/png;base64,' + require('../images/zoom-out.png')
        });
    },
    render: function() {
        return (
            <div>
                <div id='beta16-interactivemap-zoomin' className='beta16im-button beta16-button--zoomin'>
                    <img src={this.state.zoomInIcon} />
                </div>
                <div id='beta16-interactivemap-zoomout' className='beta16im-button beta16-button--zoomout'>
                    <img src={this.state.zoomOutIcon} />
                </div>
            </div>
        );
    }
})
