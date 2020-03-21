import Axios from "axios";
const idbook = localStorage.getItem("idbook");
// const keyword = localStorage.getItem("keyword");

const URL_STRING_TO_GET = "/api/v1/book/?search=";
const URL_STRING_TO_GET_BOOK_BY_ID = "/api/v1/book/viewBook/" + idbook;
const URL_STRING_TO_ADD = "/api/v1/book/addBook";
const URL_STRING_TO_UPDATE = "/api/v1/book/updateBook/" + idbook;
const URL_STRING_TO_DELETE = "api/v1/book/deleteBook/" + idbook;
const URL_STRING_TO_SEARCH = "api/v1/book/searchBook/?keyword=";
const URL_STRING_TO_SORT_TITLE = "api/v1/book/sortBookByTitle";
const URL_STRING_TO_SORT_DATE = "api/v1/book/sortBookByDate";
const URL_STRING_TO_SORT_GENRE = "api/v1/book/sortBookByGenre";
const URL_STRING_TO_SORT_AVAIL = "api/v1/book/sortBookByAvail";
const URL_STRING_TO_BOOK_RETURN = "api/v1/book/getBookReturn";
const URL_STRING_TO_BOOK_RETURN_PROCESS = "api/v1/book/returnBook/";

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

export const searchBookTitle = title => {
  return {
    type: "SEARCH_BOOK",
    payload: Axios.get(URL_STRING_TO_SEARCH + title)
  };
};

export const sortBookTitle = () => {
  return {
    type: "SORT_BOOK_TITLE",
    payload: Axios.get(URL_STRING_TO_SORT_TITLE)
  };
};

export const sortBookDate = () => {
  return {
    type: "SORT_BOOK_DATE",
    payload: Axios.get(URL_STRING_TO_SORT_DATE)
  };
};

export const sortBookGenre = () => {
  return {
    type: "SORT_BOOK_GENRE",
    payload: Axios.get(URL_STRING_TO_SORT_GENRE)
  };
};

export const sortBookAvail = () => {
  return {
    type: "SORT_BOOK_AVAIL",
    payload: Axios.get(URL_STRING_TO_SORT_AVAIL)
  };
};

export const getAllBookReturn = () => {
  return {
    type: "GET_BOOK_RETURN",
    payload: Axios.get(URL_STRING_TO_BOOK_RETURN)
  };
};

export const returnBookProcess = idbook => {
  return {
    type: "BOOK_RETURN_PROCESS",
    payload: Axios.patch(URL_STRING_TO_BOOK_RETURN_PROCESS + idbook)
  };
};
