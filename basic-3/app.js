// function add() {
//   counter = counter + 1;
// }

const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    outputFullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Aktari";
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      // event.preventDefault();
      alert("Submitted Form");
    },
    // named() {
    //   this.name = this.name;
    // },????
    setName(event, lastName) {
      this.name = event.target.value;
      // this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
      // this.counter = this.counter + 1;
      // this.counter++;
    },
    reduce(num) {
      if (this.counter === 0) {
        return alert("Done-All the best for now!");
      }
      this.counter = this.counter - num;
      // this.counter = this.counter - 1;  ///without num parameter
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
