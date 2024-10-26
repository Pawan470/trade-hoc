import axiosInstance from './axiosInstance';
import { handleApiError } from '../utils/helper';
import { useQuery , useMutation } from '@tanstack/react-query';
import { APIs } from './getBackendApi';



const loginUser = async (body) => {
  try {
    const { data } = await axiosInstance.post(APIs.LOGIN, body);
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const useLoginMutation = () => useMutation({
  mutationFn: loginUser
});


export const signupUser = async (body) => {
  try {    
    const { data } = await axiosInstance.post(APIs.SIGNUP, body);
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const useSignupMutation = () => useMutation({
  mutationFn: signupUser
});

export const forgetPassword = async (body) => {
  try {
    const response = await axiosInstance.post('/forget-password', body);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const getProfile = async (token) => {
  try {
    const { data } = await axiosInstance.get(`/auth/profile` ,
      { headers: {"Authorization" : `Bearer ${token}`} }
    );
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
}

export const useToGetProfile = (token, options) =>  {

  return useQuery({
    
      queryKey: ['PROFILE'],
      queryFn: async () => {
        try {
          const response = await axiosInstance.get(`/auth/profile` ,
            { headers: {"Authorization" : `Bearer ${token}`} }
          );
          return response.data;
        } catch (error) {
          throw handleApiError(error);
        }
      },
      options
  })
  
}


