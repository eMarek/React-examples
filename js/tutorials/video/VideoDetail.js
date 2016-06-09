import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return ( <div>Loading...</div> );
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    // const url = 'https://www.youtube.com/embed/' + videoId;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-reponsive embed-reponsive-16by9" style={{
                width: '100%',
                height: '20px',
                paddingBottom: '56.25%',
                overflow: 'hidden',
                position: 'relative'
            }}>
                <iframe
                    className="embed-responsive-item"
                    src={url}
                    style={{
                        border: 'none',
                        width: '100%',
                        height: '100%',
                        position: 'absolute'
                    }}>
                </iframe>
            </div>
            <div className="details">
                <h3>{video.snippet.title}</h3>
                <small>{video.snippet.description}</small>
            </div>
        </div>
    );
}

export default VideoDetail;