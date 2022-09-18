import { fetchUser } from "../utils/FetchLocalStroageData"
const userInfo = fetchUser();
export const initialState ={

    user : userInfo,

}