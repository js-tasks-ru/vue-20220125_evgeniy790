import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение
const vm = createApp({
  data() {
    return {
      NumberMeetup: 0,
      MEETUP_TITLE: '',
    };
  },

  watch: {
    NumberMeetup() {
      // let meetupJSON = fetchMeetupById(this.NumberMeetup);
      // console.log(meetupJSON);
      // let meetupObj = JSON.parse(meetupJSON);
      // console.log(meetupObj);
      // this.MEETUP_TITLE = meetupObj.title;
      fetchMeetupById(this.NumberMeetup).then( response => {
        this.MEETUP_TITLE = response.title;
      });
    },
  },
}).mount('#app');
