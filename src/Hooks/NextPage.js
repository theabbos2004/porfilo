import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { nextPage } from "../Layout/Store/StoreSlice";
export const NextPage =(scrollRef,pathName)=>{
    let dispatch =useDispatch()
    useEffect(() => {
        const handleScroll = () => {
         let {scrollHeight,clientHeight,scrollTop}=scrollRef?.current
          
        };
    
        if (scrollRef && scrollRef.current) {
          scrollRef.current.addEventListener('scroll', handleScroll);
        }
    
        return () => {
          if (scrollRef && scrollRef.current) {
            scrollRef.current.removeEventListener('scroll', handleScroll);
          }
        };
      }, [])
}
