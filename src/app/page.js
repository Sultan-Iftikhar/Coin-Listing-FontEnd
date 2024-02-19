// import Navbar from '@/components/Navbar/index'
// import Footer from '@/components/Footer/FooterLinks/index'

// export default function Home() {
//   return (
//     <div >
//       <h1 className='text-black'>Next app</h1>
//       <Navbar />
//       <Footer />
//     </div>
//   );
// }

import React from 'react'
import Navbar from '@/components/Navbar/index'
import Footer from '@/components/Footer/index'
import Body from '@/components/Body/index'

function page() {
  return (
      <>
      <Navbar />
    <div className='container m-auto'>
      <Body />
      <Footer />
    </div>
      </>
  )
}

export default page
