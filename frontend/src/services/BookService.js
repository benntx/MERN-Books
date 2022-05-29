import axios from "axios";
const API_URL = "http://localhost:8000/api/v1/book";

class BookService {
  getAllBook() {
    return axios.get(API_URL);
  }

  getOneBook(id) {
    return axios.get(`${API_URL}/${id}`);
  }
}

export default new BookService();
