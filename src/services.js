// services.js

import axios from 'axios';

export function getRoverImage(imageUrl) {
  return axios.get(imageUrl)
}
