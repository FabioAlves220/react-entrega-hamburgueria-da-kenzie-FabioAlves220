import { api } from "../lib/axios";

export const getProducts = (onSuccess, onError) => {
  api
    .get()
    .then((response) => onSuccess(response))
    .catch((err) => onError(err));
};
