<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    window.onresize = () => {
      setTimeout(() => {
        this.handleSize();
      }, 600);
    };
    this.handleSize();
  },
  methods: {
    handleSize() {
      let _el = document.getElementById("app");
      var hScale = window.innerHeight / 686;
      var wScale = window.innerWidth / 1440;
      _el.style.transform = "scaleX(" + wScale + ") scaleY(" + hScale + ")";
      _el.style.transformOrigin = "0 0";
    },
  },
};
</script>

<style>
#app {
  width: 1440px;
  height: 686px;
}
</style>
