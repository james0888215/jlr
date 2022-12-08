import axios from 'axios';
import { MOCK_TESTS, MOCK_ASSETS } from "./consts";

//Would be used to get asset from BE service
// export default axios.create({
//     baseURL: "http://127.0.0.1:8000/ciara_backend_api/assets",
//     headers: {
//         'Accept':'application/json',
//         'Content-Type':'application/json',
//     }
// })

export const getAssetName = (assestID) => {
    return MOCK_ASSETS.filter(a => a.id === assestID)[0].assetName
};

export const getTestName = (testID) => {
    return MOCK_TESTS.filter(t => t.id === testID )[0].testName
};
