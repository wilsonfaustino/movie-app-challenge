import { useLocalStorageValue } from '@react-hookz/web'

/**
 * A custom React hook for managing state in localStorage.
 *
 * @param {string} key - The key under which the value will be stored in localStorage.
 * @returns {[any, React.Dispatch<React.SetStateAction<any>>]} A tuple containing the current value and a setter function.
 *
 * @example
 * // Usage
 * const [value, setValue] = useLocalStorage('myKey');
 *
 * // Set a new value
 * setValue('new value');
 *
 * // Read the current value
 * console.log(value);
 *
 * @description
 * This hook provides a way to easily store and retrieve values from localStorage,
 * while keeping the React state in sync with the stored value.
 *
 * On initial render, it checks if a value exists in localStorage for the given key.
 * If it does, it parses the JSON string and sets it as the initial state.
 * If not, it sets the initial state to null.
 *
 * Whenever the state changes, the useEffect hook automatically updates the
 * localStorage with the new value, stringifying it first.
 *
 * The hook returns a tuple with the current value and a setter function,
 * similar to useState, allowing you to use it just like you would use useState,
 * but with the added benefit of persistence in localStorage.
 */
export function useLocalStorage<T>(key: string, defaultValue: T) {
  const { value, set } = useLocalStorageValue<T>(key, { initializeWithValue: false, defaultValue })

  return { value, set }
}
