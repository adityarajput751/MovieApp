import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/';
const instance = axios.create({
  baseURL,
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjVmY2U4ZjZiNmI3MWUxZTRjNTA5OTU1YzU0NThkYSIsInN1YiI6IjY0Y2Q0MDY2ZDY0YWMyMDBhYzhmNGFlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g_K7f3Y_ko-OfK0L8rbBOGHunX-MvNu9XR_qOpI9af0',
  },
});

export default instance;
