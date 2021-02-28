import AsyncStorage from '@react-native-async-storage/async-storage';

export const set = (key, value) => {
    
    if (typeof value === 'object') {
        value = JSON.stringify(value);
    }

    await AsyncStorage.setItem(key, value);
    return value;

}

export const get = (key) => {

    return AsyncStorage.getItem(key);

}