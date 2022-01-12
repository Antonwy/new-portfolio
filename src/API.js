import axios from 'axios';
import { useEffect, useState } from 'react';

export const baseUrl = 'https://cms.antonwy.tech';
export const apiUrl = baseUrl + '/api';
const jwt =
  '655169a886d44874ef73ecf854c84847f28770a81b28e60a567e7da8c4d72e260cb167914fb06a6544c389c8c981a574d2bba842618c88b63654409c92baa12e29f1e0b8f0343f030523cc3aa621f3411c739c5901c90071c056342908f77f8ed549f906b69753f47c36c9ada77943325c8d876a338c8613bdd9cb44c82ff1fc';

export const useAboutMe = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState({});

  useEffect(async () => {
    try {
      const res = await axios.get(`${apiUrl}/about-me?populate[0]=image`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log(res);

      setLoading(false);
      setResponse(res.data);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError(true);
    }
  }, []);

  return [response, loading, error];
};
