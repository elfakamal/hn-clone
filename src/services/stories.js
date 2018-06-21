import fetch from 'isomorphic-fetch';

import { API_URL, CATEGORIES } from '../constants';


export const getStoryIds = (endpoint = CATEGORIES[0].endpoint) => (
  new Promise((resolve, reject) => {
    fetch(`${API_URL}/${endpoint}.json`).then(response => {
      if (!response.ok) {
        reject(new Error(`Error occured : ${response}`));
      }

      response.json().then(resolve);
    });
  })
);


export const fetchStories = storyIds => Promise.all(
  storyIds.map(id => {
    return fetch(`${API_URL}/item/${id}.json`).then(response => {
      if (!response.ok) {
        Promise.reject(new Error(`Error occured : ${response}`));
      }

      return response.json();
    });
  })
);
