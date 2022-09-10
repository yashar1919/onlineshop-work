import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

const getProducts = async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
}
export { getProducts };

const getUser = async () => {
    const response = await axios.get(`${BASE_URL}/users/1`);
    return response.data;
}
export { getUser };