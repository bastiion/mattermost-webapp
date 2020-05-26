// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {getCurrentChannelId} from 'mattermost-redux/selectors/entities/channels';
import {getConfig} from 'mattermost-redux/selectors/entities/general';
import {getOpenGraphMetadataForUrl} from 'mattermost-redux/selectors/entities/posts';

import  ReactVideoPlayer from './react_video_player';

function mapStateToProps(state, ownProps) {
    const config = getConfig(state);

    return {
        currentChannelId: getCurrentChannelId(state),
        metadata: getOpenGraphMetadataForUrl(state, ownProps.postId, ownProps.link),
    };
}

export default connect(mapStateToProps)(ReactVideoPlayer);
