import AsyncStorage from '@react-native-async-storage/async-storage';

export const handleStorage = async ({keys, value, type}) => {
  switch (type) {
    case 'set':
      await AsyncStorage.setItem(keys[0], JSON.stringify(value));
      break;
    case 'getOne':
      const storedItem = await AsyncStorage.getItem(keys[0]);
      return storedItem && JSON.parse(storedItem);
    case 'getMany':
      return JSON.parse(await AsyncStorage.getMany(keys));
    case 'update':
      return await AsyncStorage.mergeItem(keys[0], value);
    case 'removeOne':
      return await AsyncStorage.removeItem(keys[0]);
    default:
      return;
  }
};
