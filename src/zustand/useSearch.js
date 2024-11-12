import { useQuery } from '@tanstack/react-query'
import { request } from './request'
export const useSearch = (input = "") => {
  return (
    useQuery({
      queryKey:['search',input],
      queryFn:()=> request.get('/products',{
         params:{
          title_like:input ? input : '00000'
         }
      }).then((res)=> res.data)
    })
  )
}
