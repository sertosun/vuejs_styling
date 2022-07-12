const app = Vue.createApp({
  data() {
    return {
      text: "Ich bin anders",
      myBox: false,
    };
  },
  methods: {
    myFunc() {
      this.myBox = !this.myBox;
    },
  },
});
app.mount("#styleVue");
