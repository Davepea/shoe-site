import React from 'react'


const header = () => {
  return (
    <>
        <nav className=' flex justify-between xl:px-20 md:px-10 py-4 xs:px-4 '>
            <div>newShop</div>
            <ul className=' flex justify-between gap-10 xs:hidden md:flex'>
                <li><a>home</a></li>
                <li><a>product</a></li>
                <li><a>about us</a></li>
                <li><a>contact us &RightArrow;</a></li>
            </ul>
        </nav>
      
    </>
  )
}

export default header
