const initialValue = {
  bookData: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulFilled: false
};

const bookReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_BOOK_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulFilled: false
      };

    case "GET_BOOK_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data
      };

    case "GET_BOOK_FULFILLED":
      // console.log("bookdata: ", action.payload.data.data);
      return {
        ...state,
        isPending: false,
        isFulFilled: true,
        bookData: action.payload.data.data
      };

    case "GET_BOOK_BY_ID_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulFilled: false
      };

    case "GET_BOOK_BY_ID_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data
      };

    case "GET_BOOK_BY_ID_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulFilled: true,
        bookData: action.payload.data
      };

    case "POST_BOOK_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulFilled: false
      };
    case "POST_BOOK_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data
      };

    case "POST_BOOK_FULFILLED":
      state.bookData.data.push(JSON.parse(action.payload.config.data));
      console.log("state.bookData:", state.bookData);
      return {
        ...state,
        isPending: false,
        isFulFilled: true,
        bookData: state.bookData
      };

    case "UPDATE_BOOK_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulFilled: false
      };
    case "UPDATE_BOOK_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data
      };

    case "UPDATE_BOOK_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulFilled: true,
        bookData: state.bookData
      };

    case "DELETE_BOOK_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulFilled: false
      };
    case "DELETE_BOOK_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data
      };

    case "DELETE_BOOK_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulFilled: true,
        bookData: action.payload.data
      };

    case "SEARCH_BOOK_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulFilled: false
      };
    case "SEARCH_BOOK_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data
      };

    case "SEARCH_BOOK_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulFilled: true,
        bookData: action.payload.data
      };

    case "SORT_BOOK_TITLE_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulFilled: false
      };
    case "SORT_BOOK_TITLE_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data
      };

    case "SORT_BOOK_TITLE_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulFilled: true,
        bookData: action.payload.data
      };

    case "SORT_BOOK_DATE_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulFilled: false
      };
    case "SORT_BOOK_DATE_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data
      };

    case "SORT_BOOK_DATE_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulFilled: true,
        bookData: action.payload.data
      };

    case "SORT_BOOK_GENRE_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulFilled: false
      };
    case "SORT_BOOK_GENRE_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data
      };

    case "SORT_BOOK_GENRE_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulFilled: true,
        bookData: action.payload.data
      };

    case "SORT_BOOK_AVAIL_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulFilled: false
      };
    case "SORT_BOOK_AVAIL_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data
      };

    case "SORT_BOOK_AVAIL_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulFilled: true,
        bookData: action.payload.data
      };

    default:
      return state;
  }
};

export default bookReducer;
