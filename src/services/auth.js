// src/api/auth.js
import axiosInstance from './axiosInstance';
import { handleApiError } from '../utils/helper';
import { useQuery } from '@tanstack/react-query';



export const loginUser = async (data) => {
  try {
    const response = await axiosInstance.post('/login', data);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const signupUser = async (data) => {
  try {
    const response = await axiosInstance.post('/signup', data);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const forgetPassword = async (data) => {
  try {
    const response = await axiosInstance.post('/forget-password', data);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};


export const useToGetProfile = ({ page }) =>  {

  return useQuery({
    
      queryKey: ['PRODUCTS', page],
      queryFn: async () => {
        try {
          const response = await axiosInstance.get(`/products/${page}`);
          return response.data;
        } catch (error) {
          throw handleApiError(error);
        }
      }
  })
  
}


