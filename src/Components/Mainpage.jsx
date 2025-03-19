import React from 'react'

 const Mainpage = () => {
  const myFun = () => {
   const get = fetch(`www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
  }


  return (
    <>
    <div className='container'>
        <div className='searchbar'>
            <input type='text' placeholder='Enter Dish' />
            <button>Search</button>

            <div>
                
            </div>
        </div>
    </div>


    </>
    
  )
}
export default Mainpage 