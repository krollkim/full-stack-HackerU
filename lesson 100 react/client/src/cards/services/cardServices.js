import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

export const getCards = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/cards`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getCard = async id => {
  try {
    const { data } = await axios.get(`${apiUrl}/cards/${id}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getMyCards = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/cards/my-cards`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const createCard = async card => {
  try {
    const { data } = await axios.post(`${apiUrl}/cards`, card);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

// export const editCard = async (card = {}) => {
//   try {
//     const { data } = await axios.put(`${apiUrl}/cards`, card);
//     return data;
//   } catch (error) {
//     return Promise.reject(error.message);
//   }
// };

// export const changeLikeStatus = async (cardId = "") => {
//   try {
//     const { data } = await axios.patch(`${apiUrl}/cards/${cardId}`);
//     return data;
//   } catch (error) {
//     return Promise.reject(error.message);
//   }
// };

// export const deleteCard = async (cardId = "") => {
//   try {
//     const { data } = await axios.delete(`${apiUrl}/cards/${cardId}`);
//     return data;
//   } catch (error) {
//     return Promise.reject(error.message);
//   }
  
// };
