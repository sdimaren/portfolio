'use client'

export default function Footer() {

  return (
    <div className="relative text-right bg-green-300">
      <div className="absolute bottom-[24px] right-[24px] flex flex-row">
        <div className="mt-2 mr-2">
          <a href="mailto:santiago.dimaren@gmail.com" className="text-gray-300 hover:text-gray-500 hover:mix-blend-color-dodge">Contact</a>
        </div>
        <div className="mt-2 mr-2">
          <a target="_blank" href="linkedin.com/in/santiago-dimaren" className="text-gray-300 hover:text-gray-500 hover:mix-blend-color-dodge">Linkedin</a>
        </div>
        <div className="mt-2 mr-2">
          <a target="_blank" href="https://github.com/sdimaren" className="text-gray-300 hover:text-gray-500 hover:mix-blend-color-dodge">Github</a>
        </div>
      </div>
    </div>
  )
}
