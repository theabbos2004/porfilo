
export const PreviousPage =(scrollRef,prevPageFunc)=>{
    const handleScroll = () => {
      let {scrollTop}=scrollRef?.current
      if(scrollTop==0){
        prevPageFunc()
        console.log("prevpage");
      }
    };
    if (scrollRef && scrollRef?.current) {
      scrollRef?.current?.addEventListener('scroll', handleScroll);
    }
  }