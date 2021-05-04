import React from 'react';
import { ScrollView, Text } from 'react-native'
import { Card } from 'react-native-elements';
import YoutubePlayer from 'react-native-youtube-iframe';
import styles from './Matches.Style';


export default function ({ match }) {

    match.stream = "qsqn63av3cE"

    return (
        <ScrollView>
            {
                match.stream ?
                <Card>
                    <YoutubePlayer
                      height={190}
                      play={true}
                      videoId={match.stream}
                    />
                    <Card.Divider></Card.Divider>
                    <Text>{ match.isLive ? "Live Streaming" : "Highlights" }</Text>
                </Card>: null
            }
        </ScrollView>
    );
}