import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { activeMenu } from "../Layout/Store/StoreSlice";
export const NextPage =(scroolRef,pathName)=>{
    let dispatch =useDispatch()
    useEffect(() => {
        const handleScroll = () => {
         let {scrollHeight,clientHeight,scrollTop}=scroolRef?.current
          if((scrollHeight-clientHeight)==scrollTop){
            dispatch(activeMenu(pathName))
          }
        };
    
        if (scroolRef && scroolRef.current) {
          scroolRef.current.addEventListener('scroll', handleScroll);
        }
    
        return () => {
          if (scroolRef && scroolRef.current) {
            scroolRef.current.removeEventListener('scroll', handleScroll);
          }
        };
      }, [])
}