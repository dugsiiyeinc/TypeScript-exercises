import { useEffect, useState } from "react";

function UseLocalStorage <T> (key: string, initialValue: T): [T, (value: T) => void] {

    const [storedValue, setStoredValue] = useState<T>(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) as T : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}

export default UseLocalStorage

