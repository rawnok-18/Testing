import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className="footer z-10  border-l-transparent border-r-transparent text-white">
      <div className="mt-8 container p-12 flex justify-between">
        <span>
          <Image
            src="/images/logo.png"
            alt="hero image"
            width={150}
            height={150}
          />
        </span>
        <p className="pt-4 text-slate-600">© 2024. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
