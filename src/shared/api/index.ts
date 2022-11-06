import axios from 'axios';
import * as LS from 'shared/lib/local-storage';


// const baseURL = __IS_DEV__ ? 'http://localhost:8000' : 'https://prodaction.ru';


export const api = axios.create({
  baseURL: __API_URL__,
  headers: {
    authorization: LS.getAuth()?.username || ''
  }
});
