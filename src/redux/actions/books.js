import Axios from "axios";
const idbook = localStorage.getItem("idbook");

const URL_STRING_TO_GET = "/api/v1/book";
const URL_STRING_TO_GET_BOOK_BY_ID = "/api/v1/book/viewBook/" + idbook;
const URL_STRING_TO_ADD = "/api/v1/book/addBook";
const URL_STRING_TO_UPDATE = "/api/v1/book/updateBook/" + idbook;
const URL_STRING_TO_DELETE = "api/v1/book/deleteBook/" + idbook;

const idUser = localStorage.getItem("id");
const token = localStorage.getItem("token");

export const getAllBook = () => {
  return {
    type: "GET_BOOK",
    payload: Axios.get(URL_STRING_TO_GET, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Algernon",
        "User-token": idUser,
        "x-token": "barier " + token
      }
    })
  };
};

export const getBookById = () => {
  return {
    type: "GET_BOOK_BY_ID",
    payload: Axios.get(URL_STRING_TO_GET_BOOK_BY_ID, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Algernon",
        "User-token": idUser,
        "x-token": "barier " + token
      }
    })
  };
};

export const postNewBook = data => {
  return {
    type: "POST_BOOK",
    payload: Axios.post(URL_STRING_TO_ADD, data)
  };
};

export const updateBook = data => {
  return {
    type: "UPDATE_BOOK",
    payload: Axios.patch(URL_STRING_TO_UPDATE, data)
  };
};

export const deleteBook = () => {
  return {
    type: "DELETE_BOOK",
    payload: Axios.delete(URL_STRING_TO_DELETE)
  };
};
