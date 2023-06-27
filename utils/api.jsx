import {API_TOKEN_SPRAPI,API_URL} from './utils'

export const fetchdata = async (endpoint) => {
    const options = {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + API_TOKEN_SPRAPI,
        }
      };

        const res = await fetch(`${API_URL}${endpoint}`,options);
        const data = await res.json();
        return data;
}

export const makePaymentMethod = async (endpoint, payload) => {
  const res = await fetch(`${API_URL}${endpoint}`,{
    method: 'POST',
        headers: {
          Authorization: 'Bearer ' + API_TOKEN_SPRAPI,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
  })
  const data = await res.json();
  return data;
}