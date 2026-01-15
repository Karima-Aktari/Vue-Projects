// function add() {
//   counter = counter + 1;
// }

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
      // this.counter = this.counter + 1;
      // this.counter++;
    },
    reduce(num) {
      if (this.counter === 0) {
        return;
      }
      this.counter = this.counter - num;
      // this.counter = this.counter - 1;  ///without num parameter
      // this.counter--;
    },
  },
});

app.mount("#events");
