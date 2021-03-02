import React, {useState} from 'react' 
import { ScrollView, View, Text } from 'react-native'
import ButtonGroup from './ButtonGroup'
import PastMatch from './Matches.Past.Unit'
import UpcomingMatch from './Matches.Upcoming.Unit'
import LiveMatch from './Matches.Live.Unit'
import { Overlay } from 'react-native-elements'

import MatchRequestForm from './Match.Request';

const Matches = (props) => {

    const [selectedIndex, setSelectedIndex] = useState(1);
    const [sendMatchRequestModal, setSendMatchRequestModal] = useState(false);
    const [requestTeamId, setToRequestTeamId] = useState(-1);

    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'white'
            }}
        >
            <View>
                <ButtonGroup 
                    selectedIndex={selectedIndex}
                    setSelectedIndex={(index) => setSelectedIndex(index)}
                />
            </View>
            <Overlay
                isVisible={true}
                onBackdropPress={() => alert('exit')}
            >
                <MatchRequestForm/>
            </Overlay>
            <ScrollView
                style={{
                    paddingBottom: 20,
                }}
            >
                <PastMatch 

                />
                <UpcomingMatch 
                
                />
                <LiveMatch 
                
                />
            </ScrollView>
        </View>
    )

}

export default Matches;