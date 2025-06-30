import { assets } from "../assets/assets_frontend/assets";
const Contact = () => {
  return (
    <div>
      <div className="text-2xl pt-10 text-center text-gray-500 uppercase">
        <h1>
          Contact{" "}
          <span className="text-gray-900 font-semibold uppercase ">us</span>
        </h1>
      </div>

      <div className="flex flex-col justify-center my-10 md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt="contact"
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <b className="text-lg text-gray-600">Our OFFICE</b>
          <p className="text-gray-500">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (415) 555-0132 <br /> Email: prescripto@gmail.com
          </p>
          <b className="text-lg text-gray-600">Careers at PRESCRIPTO</b>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-300">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
