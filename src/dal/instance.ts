import axios from "axios";

export const instance = axios.create({
  baseURL:'https://olegegoism.pythonanywhere.com/',
  headers: {
    'Content-Type': 'application/json'
  }
})
