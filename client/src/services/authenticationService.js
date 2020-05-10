import axios from "axios";

export const loginUserService = (request) => {
    axios
        .post(`/collection2/login`, request.user)
        .then(response => {
            // If data comes back with a CastError, send error message to client
            return response;
        }).then(json => {
            return json;
        });
};