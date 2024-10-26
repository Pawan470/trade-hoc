import { useEffect } from 'react'
import { useQuery  } from '@tanstack/react-query';
import { useSelector } from '@/store/Provider'
import { handleError } from '@/utils/helper'
import { STORAGE_KEYS } from '@/constants'
import { getProfile } from '@/services/auth'
import { USER_DETAILS } from '@/store/action';
import axiosInstance from '@/services/axiosInstance'

export default function useAuth() {
  const { state , action }  = useSelector()
  const isAuthenticated = state.isAuthenticated
  let token = localStorage.getItem(STORAGE_KEYS.USER_TOKEN)
  if(token){
    token = JSON.parse(token)
  }
  
  const { data, isFetching ,isError , error , isSuccess }  = useQuery({
    queryKey: ['PROFILE'],
    queryFn: async () => getProfile(token),
    staleTime: 100000, 
    enabled:Boolean(token)
  })

  useEffect(() => {
    if(isSuccess && data){
        action(USER_DETAILS,data)
    }
  }, [isSuccess])
  



  // This Effect call when user login/logout
  useEffect(() => {
    authSetUp()
  }, [isAuthenticated])

  const authSetUp = async () => {
    try {
      if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = token
        axiosInstance.interceptors.response.use(
          function (response) {
            return response
          },
          function (error) {
            if (error.response.status === 401) {
              // localStorage.clear()
            }
            return Promise.reject(error)
          },
        )

      }
    } catch (error) {
      handleError(error)
    }
  }

  return {
     isPending :isFetching , 
     isError, 
     error

  }
}
