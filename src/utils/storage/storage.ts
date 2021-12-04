import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */
export async function loadString(key: string): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(key);
  } catch {
    // not sure why this would fail... even reading the RN docs I'm unclear
    return null;
  }
}

/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function saveString(key: string, value: string): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Saves a colorTheme to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */

export const storeTheme = async (value: string) => {
  try {
    await AsyncStorage.setItem('@theme', value);
  } catch (e) {
    // saving error
  }
};

/**
 * Loads a colorTheme from storage.
 *
 * @param key The key to fetch.
 */
export const getTheme = async () => {
  try {
    const value = await AsyncStorage.getItem('@theme');
    if (value !== null) {
      return value;
    }

    // value previously stored
  } catch (e) {
    // error reading value
  }
};
