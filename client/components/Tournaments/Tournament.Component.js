import React from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import request from '../../utils/request';
import styles from './Tournament.Style';
import TournamentUnit from './Tournament.Unit';
import CreateTournamentForm from './Tournament.Create';
import {Overlay} from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome";
import commonStyles from '../../common/styles';

const Tournament = function (props) {

    const [tournaments, setTournaments] = React.useState([]);
    const [isAddVisible, setIsAddVisible] = React.useState(false);
    const [viewId, setViewId] = React.useState(null);

    const getTournaments = async () => {
        let res = await request({
            route: 'tournaments'
        });
        if (res.status === 'success') {
            setTournaments(res.data);
        }
    }

    React.useEffect(() => {
        getTournaments();
    }, []);

    const onTournamentCreate = () => {
        alert('Tournament created');
    }

    return (
        <>
        <Overlay
            isVisible={viewId !== null}
            onBackdropPress={() => setViewId(null)}
        >
            <View style={styles.overlay}>
                {(() => {
                    let tournament = tournaments[viewId];
                    
                    if (!tournament) {
                        return null;
                    }

                    return (
                        <>
                            <Text style={styles.title}>{tournament.name}</Text>
                            <Text style={styles.overlayText}>Player Count: {tournament.playerCount}</Text>
                            <Text style={styles.overlayText}>Registration Fee: {tournament.registrationFees} Rs</Text>
                            <Text style={styles.overlayText}>Winning Price: {tournament.winningPrice} Rs</Text>
                        </>
                    );
                    
                })()}
            </View>
        </Overlay>
        <ScrollView style={styles.container}>
            <Text style={{fontSize: 32, fontWeight: '600', margin: 20,}}>Tournaments</Text>
            {
                tournaments.map((tournament, index) => {

                    if (!tournament.approved)
                        return null;

                    return (
                        <TournamentUnit 
                            name={tournament.name}
                            playerCount={tournament.playerCount}
                            tournament={tournament}
                            view={() => setViewId(index)}
                        />
                    )
                })
            }
        </ScrollView>
        <Overlay
            isVisible={isAddVisible}
            onBackdropPress={() => setIsAddVisible(false)}
        >
            <CreateTournamentForm
                onTournamentCreate={onTournamentCreate}
            />
        </Overlay>


        <TouchableOpacity 
            style={commonStyles.floatingButton}
            onPress={() => setIsAddVisible(true)}
        >
            <Icon name="plus" style={{ color: 'white' }} size={24} />
        </TouchableOpacity>
        </>
    )

}

export default Tournament;