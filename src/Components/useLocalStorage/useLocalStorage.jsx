import React from 'react'
import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  // Obtengo local storage por la key
  const stored = localStorage.getItem(key);
  // Parseo stored json, si no return defaultValue
  const initial = stored ? JSON.parse(stored) : defaultValue;
  const [value, setValue] = useState(initial);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};


export default useLocalStorage;
