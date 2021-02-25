import React, {useState} from 'react' 
import { ScrollView, View } from 'react-native'
import ButtonGroup from './ButtonGroup'
import PastMatch from './Matches.Past.Unit'

const Matches = (props) => {

    const [selectedIndex, setSelectedIndex] = useState(1);


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
            <ScrollView>
                <PastMatch 
                    
                />
            </ScrollView>
        </View>
    )

}

export default Matches;