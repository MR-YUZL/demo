<template>
  <div>
    <h1 class="hello">
      {{ msg }}
    </h1>
    <h1 class="hello">
      {{ msg2 }}
    </h1>
    <h1 class="hello">
      {{ msg3 }}
    </h1>
    <button @click="handleClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    obj: {
      type: Object,
    },
  },
  watch: {
    msg: {
      handler(val, olVal) {
        console.log("msg,olVal", val, olVal);
      },
      deep: true,
    },
    msg2: {
      handler(val, olVal) {
        console.log("msg2,olVal", val, olVal);
      },
      deep: true,
    },
    msg3: {
      handler(val, olVal) {
        console.log("msg3,olVal", val, olVal);
      },
      deep: true,
    },
  },
  data() {
    return {
      msg: JSON.parse(JSON.stringify(this.obj)),
      msg2: {
        name: "yuzelin",
        age: 12,
      },
      msg3: this.obj,
    };
  },
  methods: {
    handleClick() {
      this.msg = Object.assign({}, this.msg, { add: "1" });
      this.msg2 = Object.assign({}, this.msg2, { add: "2" });
      this.msg3 = Object.assign({}, this.msg3, { add: "3" });
      // this.msg.add = "lalal1";
      // this.msg2.add = "bbb";
      // this.msg3.add = "aaa";
      // this.msg.name = "lalal1";
      // this.msg2.name = "bbb";
      // this.msg3.name = "aaa";
      //  this.$set(this.msg,name,'llll')
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  font-size: 40px;
}
</style>
