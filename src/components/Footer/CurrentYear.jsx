const CopyRight = () => {
    const currentYear = new Date().getFullYear();
    return (
      <>
      
      <div className='container text-center md:text-left text-white'>2021 - {currentYear} @ Coin Listing</div>
      </>
    );
  };
  
  export default CopyRight;