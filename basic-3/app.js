// function add() {
//   counter = counter + 1;
// }

const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      lastName: "",
      // fullname: "",
      // confirmedName: "",
    };
  },
  watch: {
    counter(value) {
      if (value) {
        if (value > 70) {
          const that = this;
          setTimeout(function () {
            that.counter = 0;
          }, 2000);
        }
      }
    },
    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + this.lastName;
    //     // this.fullname = value + " " + "Aktari";
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // },
  },
  computed: {
    fullname() {
      console.log("Running Again");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
      // return this.name + " " + "Aktari";
    },
  },
  methods: {
    outputFullname() {
      console.log("Running Again");
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
