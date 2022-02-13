import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

export enum Endpoint {
  GET_USERS = 'https://jsonplaceholder.typicode.com/users',
}

const useAxios = (url: string, options: AxiosRequestConfig = {}) => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(url, options)
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url, options]);

  return { data, error, loading };
}

export { useAxios };
