import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

type RegisterAPIType = {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
    referral_code?: string;
};

export const registerAPI = (data: RegisterAPIType) => {
    return axios.post(`${BASE_URL}/api/v1/register`, data);
};
