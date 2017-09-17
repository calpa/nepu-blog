import axios from 'axios';

const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'n3ctvxixp1mr';
const API_TOKEN = '22acebb1f8d8c45324d922831c49a56d2b2d317d1f72c9d6326c462046ecc13a';

export const getAbout = async () => {
  const res = await axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=about`);
  return res;
};

export const getPosts = async () => {
  const res = await axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=post`);
  console.log(res);
  return res;
};
