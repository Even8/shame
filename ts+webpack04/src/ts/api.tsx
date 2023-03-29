import {
    useState,
  } from 'react';
  
  export const useRequest = () => {
    const [show, setShow] = useState(false)
    setTimeout(() => {
      setShow(true)
    }, 1000)
    return {
      show
    };
  }