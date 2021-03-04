import React, {useState} from 'react' 
import { ScrollView, View } from 'react-native'
import ButtonGroup from './ButtonGroup'
import PastMatch from './Matches.Past.Unit'
import UpcomingMatch from './Matches.Upcoming.Unit'
import LiveMatch from './Matches.Live.Unit'

const Matches = (props) => {

    const [selectedIndex, setSelectedIndex] = useState(1);
    const [sendMatchRequestModal, setSendMatchRequestModal] = useState(false);

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