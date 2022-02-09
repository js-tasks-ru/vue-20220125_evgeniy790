import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const vm = createApp({
  data() {
    return {
      CalcX: 1,
      CalcY: 1,
      //CalcZ: 2,
      Operand: 'sum',
    };
  },

  computed: {
    CalcZ() {
      let res;
      switch (this.Operand) {
        case 'sum':
          res = this.CalcX + this.CalcY;
          break;
        case 'subtract':
          res = this.CalcX - this.CalcY;
          break;
        case 'multiply':
          res = this.CalcX * this.CalcY;
          break;
        case 'divide':
          res = this.CalcY == 0 ? 0 : this.CalcX / this.CalcY;
          break;
      }
      return res;
    },
  },
}).mount('#app');
