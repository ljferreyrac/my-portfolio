import { useForm } from "../hooks/useForm"
import { getEnvironments } from "../helpers/getEnvironments";

import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2'

const {
  VITE_EMAIL_SERVICE_ID,
  VITE_EMAIL_TEMPLATE_ID,
  VITE_EMAIL_PUBLIC_KEY
} = getEnvironments();

const initialForm = {
  name: '',
  email: '',
  message: ''
}

export const Contact = () => {

  const { name, email, message, onInputChange } = useForm(initialForm);

  const onSumbit = async (event) => {
    event.preventDefault();
    const formValues = {
      from_email: email,
      from_name: name,
      to_name: "Leonardo",
      message: message,
      reply_to: email
    };

    try {
      await emailjs.send(VITE_EMAIL_SERVICE_ID, VITE_EMAIL_TEMPLATE_ID, formValues, VITE_EMAIL_PUBLIC_KEY)
      Swal.fire({
        title: 'Email sent!',
        text: 'Your email has been sent successfully',
        icon:'success'
      })
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Error',
        text: 'An error occurred while trying to send the email',
        icon:'error'
      })
    }
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Pueblo+Libre&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                Direction
              </h2>
              <p className="mt-1">
                Av. colombia 930 <br />
                Pueblo Libre, Lima, Perú 15084
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                Email
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                lferreyrac04@hotmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                Mobile
              </h2>
              <p className="leading-relaxed">+51 934169751</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={onSumbit}
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire me!
          </h2>
          <p className="leading-relaxed mb-5">
            Looking for a passionate, quick-learning, and experienced developer? That's me! 
            I've worked with a wide range of technologies and I'm always ready for new 
            challenges. I can bring your ideas to life and help you achieve your goals. 
            Let's build something amazing together!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={onInputChange}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onInputChange}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={onInputChange}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Send
          </button>
        </form>
      </div>
    </section>
  )
}
