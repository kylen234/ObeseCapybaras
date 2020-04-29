import axios from "axios";
import MyProfile from "../pages/MyProfile";

export const loginUserService = (request) => {

    axios
        .post(`http://localhost:3000/collection2/login`, request.user)
        .then(response => {
            // If data comes back with a CastError, send error message to client
            console.log(response.data.success);
        }).then(json => {
            return json;
        });
};