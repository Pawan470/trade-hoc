import { handleError } from "@/utils/helper"
import { useEffect } from "react"

export default function useToHandleApiError(error) {
    useEffect(() => {
        if(error){
            handleError(error)
        }

    },[error])


  return (
    <div>useToHandleApiError</div>
  )
}
