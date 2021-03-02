import AsyncStorage from '@react-native-async-storage/async-storage';

export const set = async (key, value) => {
    
    if (typeof value === 'object') {
        value = JSON.stringify(value);
    }

    await AsyncStorage.setItem(key, value);
    return value;

}

export const get = async (key) => {

    return AsyncStorage.getItem(key);

}