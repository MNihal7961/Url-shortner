import { useNavigate } from "react-router-dom";

const Empty = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-center w-full h-[70vh]">
        <h3 className="text-headingColor text-[20px] leading-[30px] font-semibold gap-2">
          NO SHORT URLS CLICK TO ADD{" "}
          <button
            onClick={() => navigate("/")}
            className="rounded-md px-8 py-3 ml-3 bg-white text-primaryColor border border-primaryColor"
          >
            ADD A URL
          </button>
        </h3>
      </div>
    </>
  );
};

export default Empty;
