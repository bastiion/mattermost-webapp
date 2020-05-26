import PropTypes from 'prop-types';
import React from 'react';
import ReactPlayer from "react-player";


export default class ReactVideoPlayer extends React.PureComponent {
    static propTypes = {
        link: PropTypes.string.isRequired,
        show: PropTypes.bool.isRequired,
        metadata: PropTypes.object,
    }

    constructor(props) {
        super(props);

        this.state = {
            playing: false,
        };
    }

    render() {
        const {metadata, link} = this.props;
        const header = (
            <h4>
                <span className='video-type'>{'Video - '}</span>
                <span className='video-title'>
                    <a
                        href={this.props.link}
                        target='blank'
                        rel='noopener noreferrer'
                    >
                        {metadata.title}
                    </a>
                </span>
            </h4>
        );

        let content = (
            <ReactPlayer
                url={this.props.link}
                controls={true}
                width="100%"
            ></ReactPlayer>
        )


        return (
            <div
                className='post__embed-container'
            >
                <div>
                    {header}
                    <div
                        className='video-div embed-responsive-item'
                        onClick={this.play}
                    >
                        {content}
                    </div>
                </div>
            </div>
        );
    }

    static isVideoLink(link) {
        return link.trim().match(/(?:http|https):\/\/(?:www\.|m\.)?(vimeo\.com\/.*)/)
    }
}
