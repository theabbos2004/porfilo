import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { prevPage } from "../Layout/Store/StoreSlice";
export const PreviousPage =(scroolRef,pathName)=>{
    let dispatch=useDispatch()
    useEffect(() => {
      const handleScroll = () => {
        let {scrollTop}=scroolRef?.current
            if(scrollTop==0){
                    dispatch(prevPage(pathName))
            }
        };
        scroolRef.current.addEventListener('scroll', handleScroll);
        return () => {
          if (scroolRef && scroolRef.current) {
            scroolRef.current.removeEventListener('scroll', handleScroll);
          }
        };
      }, [])
  }