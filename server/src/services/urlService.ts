// import { generate as generateUrl } from "generate-password";

// import Url from "../model/urlSchema";
// import { UrlPayloadType } from "../types";

// // Create Shorten URL
// export const createURL = async (payload: UrlPayloadType) => {
//     if (!payload.originalLink) {
//         throw Error("Missing some parameters");
//     }
//     try {

//         // Creating short URL
//         const urlCode = generateUrl({
//             length: 8,
//             uppercase: true,
//         });

//         const data={
//             name:payload.name,
            
//         }

//         return 

//     } catch (error) {
//         console.error(error);
//     }
// };

// // Get original link by Url code
// export const getUrlByUrlCode = async (urlCode: string) => {
//     try {
//         const data = await Url.findOne({ urlCode });

//         if (!data) {
//             throw  Error("Bad request")
//         }

//         return data;
//     } catch (error) {
//         console.error(error);
//     }
// }
