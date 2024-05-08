import { useState } from "react";
import { HashLoader } from "react-spinners";
import { FaLink } from "react-icons/fa";

const AddUrl = () => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <section className="px-5 lg:px-0 mt-32 md:mt-24 h-[60vh] md:h-auto">
      <div className="w-full max-w-[800px] mx-auto rounded-lg shadow-md md:p-10">
        <div className="flex items-center justify-center">
          <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
            Create A New Short <span className="text-primaryColor">URL</span>
          </h3>
          <FaLink size={50} className="text-primaryColor hover:scale-150" />
        </div>
        <form className="py-4 md:py-0 ">
          <div className="mb-5">
            <p className="form__label">Enter the original link*</p>
            <input
              type="text"
              placeholder="Copy the link here"
              name="originalLink"
              className="w-full px-4 py-3 rounded-lg border border-solid border-black focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer required:"
            />
          </div>
          <div className="mb-5">
            <p className="form__label">Enter the name</p>
            <input
              type="text"
              placeholder="Enter a name (optional)"
              name="name"
              className="w-full px-4 py-3 rounded-lg border border-solid border-black focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer required:"
            />
          </div>
          <div className="mt-7">
            <button
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
              type="submit"
            >
              {loading ? (
                <HashLoader size={25} color="#ffffff" />
              ) : (
                <span className="text-xl font-bold ">Short Url</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddUrl;
