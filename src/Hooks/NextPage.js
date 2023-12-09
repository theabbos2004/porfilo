import React, { useEffect } from "react";
export const NextPage =(scroolRef)=>{
    useEffect(() => {
        const handleScroll = () => {
            console.log("salom");
          // scroolRef?.current.scrollHeight-scroolRef?.current.clientHeight==scroolRef?.current.scrollTop
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