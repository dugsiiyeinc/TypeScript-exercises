import { useEffect, useState } from "react";

interface SettingValues {
  language: string;
  notification: boolean;
}

function UseSettingStorage(key: string, defaultValue: SettingValues): [SettingValues, (newValue:
    SettingValues) => void] {

  const [value, setValue] = useState<SettingValues>(() => {
    const storedValue = localStorage.getItem(key);

    if (!storedValue) return defaultValue;

    try {
      return JSON.parse(storedValue) as SettingValues;
    } catch (error) {
      console.error("Invalid JSON in localStorage:", error);
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default UseSettingStorage;
