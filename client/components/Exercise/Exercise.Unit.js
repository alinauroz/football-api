import React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import YoutubePlayer from 'react-native-youtube-iframe';

const ExerciseUnit = ({ videoId, title, content }) => {
    return (
        <Card>
            <YoutubePlayer
              height={190}
              play={false}
              videoId={videoId}
            />
            <Text>
                {title}
            </Text>
            <Text>
                {content}
            </Text>
        </Card>
    )
}

export default ExerciseUnit;