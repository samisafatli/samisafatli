/* eslint-disable react/no-unescaped-entities */

import Title from '../Title/Title'

function Contact() {
  return (
     <div className="flex flex-col mb-10 mx-auto">
        <div className="flex justify-center items-center">
           <form
              action="https://getform.io/f/7f76b609-ed07-4f57-841b-7ac2fbf15009"
              method="POST"
              className="flex flex-col w-full md:w-7/12"
           >
              <Title>Contact</Title>
              <input
                 required
                 type="text"
                 name="name"
                 placeholder="Name"
                 className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
              />
              <input
                 required
                 type="text"
                 name="email"
                 placeholder="Email"
                 className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
              />
              <textarea
                 required
                 name="message"
                 placeholder="Message"
                 rows="10"
                 className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
              />
              <button
                 type="submit"
                 className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-600 to-red-600 drop-shadow-md hover:stroke-white"
              >
                 Let's chat!
              </button>
           </form>
        </div>
     </div>
  )
}


export default Contact