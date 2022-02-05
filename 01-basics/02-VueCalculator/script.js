import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const vm = createApp({
  data() {
    return {
      CalcX: 1,
      CalcY: 1,
      CalcZ: 2,
      Operand: 'sum',
    };
  },

  methods: {
    CalculateGeneral(Operand) {
      if (Operand == undefined) Operand = this.Operand;
      switch (Operand) {
        case 'sum':
          this.CalcZ = this.CalcX + this.CalcY;
          break;
        case 'subtract':
          this.CalcZ = this.CalcX - this.CalcY;
          break;
        case 'multiply':
          this.CalcZ = this.CalcX * this.CalcY;
          break;
        case 'divide':
          this.CalcZ = this.CalcY == 0 ? 0 : this.CalcX / this.CalcY;
          break;
      }
    },
  },
}).mount('#app');
