import React from 'react';
import { FitnessTrackerAPI } from '@kilohealth/rn-fitness-tracker';
import { Text } from 'react-native';

let stepss;
export default function () {

    const main = async () => {
    const authorizationStatus = await FitnessTrackerAPI.setupTracking();

// Get steps total today
const _steps = await FitnessTrackerAPI.getStepsToday();

// Get steps total this week
const steps = await FitnessTrackerAPI.getStepsWeekTotal();
stepss = steps;

// Get running & walking distance today
const distance = await FitnessTrackerAPI.getDistanceToday();

// Get floors climbed today
const floorsClimbed = await FitnessTrackerAPI.getFloorsToday();


console.log('???', steps)
    }





    React.useEffect(() => {main()}, []);
    return <Text>{stepss}</Text>
    

}