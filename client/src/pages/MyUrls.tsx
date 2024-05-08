import { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";

const MyUrls = () => {
  const [urls, setUrls] = useState([]);

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/url/myurls"
        );
        setUrls(response.data.data.urls);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUrls();
  }, []);

  const insertLineBreaks = (url: string) => {
    const chunks = [];
    for (let i = 0; i < url.length; i += 50) {
      chunks.push(url.substring(i, i + 50));
    }
    return chunks.join("\n");
  };

  const goToUrl = async (urlCode: string) => {
    const result= await axios.get('http://localhost:4000/api/url')
  };

  return (
    <div className="relative overflow-x-auto mt-32">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              NO
            </th>
            <th scope="col" className="px-6 py-3 ">
              NAME
            </th>
            <th scope="col" className="px-6 py-3">
              URL
            </th>
            <th scope="col" className="px-6 py-3 ">
              SHORTED URL
            </th>
            <th scope="col" className="px-6 py-3 ">
              DELETE URL
            </th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url: any, index) => (
            <tr key={index}>
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4">{url.name || "NA"}</td>
              <td className="px-6 py-4 hover:text-blue-600 cursor-pointer">
                <span style={{ whiteSpace: "pre-wrap" }}>
                  {insertLineBreaks(url.originalLink)}
                </span>
              </td>
              <td
                className="px-6 py-4 hover:text-primaryColor cursor-pointer"
                onClick={() => goToUrl(url.urlCode)}
              >
                {url.urlCode}
              </td>
              <td className="px-6 py-4">
                <MdDelete className="text-red-600 cursor-pointer" size={30} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyUrls;
