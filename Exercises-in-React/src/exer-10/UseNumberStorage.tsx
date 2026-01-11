import { useEffect, useState } from "react"


function UseNumberStorage(key: string, initialValue: number):[number, (newValue: number) => void] {

    const [value, setValue] = useState<number>(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? Number(storedValue) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, value.toString());
    }, [key, value]);

    return [value, setValue];
}

export default UseNumberStorage
