import { MdDeleteForever } from "react-icons/md";

const MyUrls = () => {
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
              SHORTED URL
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white ">
            <th className="px-6 py-4">1</th>
            <th className="px-6 py-4">xfghvjbk</th>
            <td className="px-6 py-4 text-sm">dxfcghvjbknlm;hgj</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <MdDeleteForever
                className="text-red-600 cursor-pointer"
                size={35}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyUrls;
