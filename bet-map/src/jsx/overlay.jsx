// Libraries
import React    from 'react';
import ReactDOM    from 'react-dom';


module.exports = React.createClass({
    getInitialState: function() {
        return({
            content: '',
        });
    },
    componentDidMount: function() {
        new OpenSeadragon.MouseTracker({
            element: document.querySelector('.beta16im-overlay--close'),
            clickHandler: this.closeOverlay
        });
    },
    closeOverlay() {
        ReactDOM.unmountComponentAtNode(document.querySelector('.beta16im-overlay--container'));
    },
    render: function() {
        var close, content;

        close = 'data:image/png;base64,' + require('../images/close.png');

        switch(this.props.data.type) {
            case 'image':
            content = (<img className='beta16im-overlay--content beta16im-overlay--content__image' src={this.props.data.value} />);
            break;
            case 'video':
            content = (
                <iframe className='beta16im-overlay--content beta16im-overlay--content__video' src={this.props.data.value} width="400" height="200" />
            );
            break;
        }

        return(
            <div className='beta16im-overlay' data-pin={this.props.data.id}>
                <img src={this.props.icon} className='beta16im-overlay--icon'/>
                <img src={close} className='beta16im-overlay--close' />
                <span className='beta16im-overlay--subtitle'>{this.props.data.subtitle}</span>
                <span className='beta16im-overlay--title'>{this.props.data.title}</span>
                {content}
                <div className='beta16im-overlay--description'>{this.props.data.description}</div>
            </div>
        );
    }
});
