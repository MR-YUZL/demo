<template>
  <main>
    <button @click="handleClick">按钮</button>
    <div class="title">
      {{ obj.name }}<span class="title_child">{{ obj.age }}</span>
    </div>
    <div class="title">{{ arr[0].name }}-----{{ $store.state.count }}</div>
    <div v-for="(v, key, index) in obj" :key="v">
      {{ v }} --- {{ key }} --- {{ index }}
    </div>
    <input type="text" v-model="obj.name" />
    <div class="scale" @click="(e) => handClickOne(e)">
      <div class="scale1"></div>
    </div>
    <section>
      <div class="container">
        <div class="middle">测试测试测试测试测试测试测试测试测试测试测试</div>
      </div>
      <div class="left"></div>

      <div class="right"></div>
    </section>
    <section class="container2" @mousemove="handleMove"></section>
    <section class="container3">
      <div class="block"></div>
      <div class="block"></div>
      <div class="block2"></div>
    </section>
    <div class="outer">
      <div
        style="float: left; background: red; height: 50px; width: 50px"
      ></div>
      <div style="overflow: hidden; background: blue; height: 50px"></div>
    </div>

    <div v-if="ifElse" :h1="msg">lalal</div>
    <div v-else>wowowo</div>
    <HelloWorld :obj="obj"></HelloWorld>
  </main>
</template>

<script>
import { HelloWorld } from "@/components";
import { debounce, throttle } from "@/utils/untils";
import { mapActions, mapMutations } from "vuex";
import { test } from "@/api/one";
export default {
  name: "one",
  components: {
    HelloWorld,
  },
  data() {
    return {
      msg: "hello world",
      ifElse: false,
      obj: {
        name: "yuzelin",
        age: 22,
      },
      arr: [{ name: "nanan" }],
    };
  },
  watch: {
    obj: {
      handler() {
        console.log("obj");
      },
      deep: true,
    },
  },
  mounted() {
    test();
    // //数组扁平化
    // let arr = [1, [1], 2, [2, [3]], [2, [4, [5]]]];
    // let arr2 = arr.flat();
    // arr2.push(1);
    // console.log("arr2", arr);
    // let flater = (arr) => {
    //   return arr.reduce((per, cur) => {
    //     return Array.isArray(cur) ? flater([...per, ...cur]) : [...per, cur];
    //   }, []);
    // };
    // console.log("flater", flater(arr));

    // let flater2 = (arr) => {
    //   let res = [];
    //   for (let i = 0; i < arr.length; i++) {
    //     if (Array.isArray(arr[i])) {
    //       res.push(...flater2(arr[i]));
    //     } else {
    //       res.push(arr[i]);
    //     }
    //   }
    //   return res;
    // };
    // console.log("arr2", flater2(arr));

    //数组去重
    const arr = [1, 1, "1", 17, true, true, false, false, "true", "a", {}, {}];
    let arr2 = Array.from(new Set(arr));
    console.log("arr2", arr2);
    let unique = (arr) => {
      let array = [];
      for (let i of arr) {
        if (array.indexOf(i) === -1) {
          array.push(i);
        }
      }
      return array;
    };
    console.log("arr3", unique(arr));

    let unique2 = arr.reduce(
      (per, cur) => (per.indexOf(cur) !== -1 ? [...per] : [...per, cur]),
      []
    );
    console.log("unique2", unique2);

    // setInterval(
    //   throttle(() => {
    //     console.log("ok");
    //   }, 1000),
    //   10
    // );

    function Person(age) {
      this.name = "yuzelin";
      this.age = age;
    }
    let a = {
      address: "lalal",
      age: 1,
    };
    Person.call(a);
    console.log("a", a);

    function newObj(fn, ...arg) {
      let obj = {};
      obj.__proto__ = fn.prototype;
      fn.call(obj, ...arg);
      return obj;
    }
    let obj = newObj(Person, 10);
    console.log("obj", obj);

    let object = {};
    console.log("object", object.__proto__);
    function _instanceof(A, B) {
      let o = B.prototype;
      A = A.__proto__;
      while (true) {
        if (A === null) return false;
        if (A === o) return true;
        A = Object.getPrototypeOf(A);
      }
    }
    console.log(_instanceof(object, Object));
    console.log(_instanceof(arr, Array));
    console.log(object instanceof Object);

    //深拷贝
    let array2 = JSON.parse(JSON.stringify(arr));
    function deep(arr) {
      let cloneArr = Array.isArray(arr) ? [] : {};
      for (let i in arr) {
        if (arr.hasOwnProperty(i)) {
          if (arr[i] && typeof arr[i] === "object") {
            cloneArr[i] = deep(arr[i]);
          } else {
            cloneArr[i] = arr[i];
          }
        }
      }
      return cloneArr;
    }
    let array3 = deep(arr);
    array3.push(5);
    console.log("array3", array3);
    console.log("arr", arr);

    const sleep = (timeountMS) =>
      new Promise((resolve) => {
        setTimeout(resolve, timeountMS);
      });

    (async () => {
      // 声明即执行的 async 函数表达式
      for (var i = 0; i < 5; i++) {
        if (i > 0) {
          await sleep(1000);
        }
        console.log(new Date(), i);
      }

      await sleep(1000);
      console.log(new Date(), i);
    })();
    // this.$store.commit("increment");
    // console.log(this.$store.state.count);

    Promise.resolve()
      .then(() => {
        return new Error("error!!!");
      })
      .then((res) => {
        console.log("then: ", res);
      })
      .catch((err) => {
        console.log("catch: ", err);
      });

    Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);

    Promise.resolve(1)
      .then(() => {
        2;
      })
      .then(Promise.resolve(3))
      .then(console.log);

    Promise.resolve(1).then((res) => {
      console.log("res", res);
    });
  },
  methods: {
    ...mapMutations(["increment"]),
    ...mapActions(["incrementN"]),
    handleClick() {
      this.obj.name = "gaotianliang";
      this.obj.address = "henan";
      //   this.arr[0] = {name:"lalal"};
      this.$set(this.arr, 0, { name: "lalal" });
      setTimeout(() => {
        console.log("ok");
        this.increment(5);
      }, 3000);
    },
    handClickOne(e) {
      console.log("e", e.target);
    },
    handleMove: debounce(function () {
      console.log("1");
    }, 3000),
  },
};
</script>

<style scoped>
.title {
  font-size: 40px;
}
.scale {
  width: 100px;
  height: 100px;
  background: red;
  transform: scale(0.5, 0.5);
}
.scale1 {
  width: 50px;
  height: 50px;
  background: blue;
}
.container {
  width: 100%;
  float: left;
  zoom: 1;
}
.container::after {
  display: block;
  content: "";
  visibility: hidden;
  clear: both;
  height: 0;
}
.middle {
  margin: 0 200px;
  background: paleturquoise;
  height: 200px;
}
.left {
  background: palevioletred;
  width: 200px;
  height: 200px;
  float: left;
  font-size: 40px;
  color: #fff;
  margin-left: -100%;
}
.right {
  width: 200px;
  height: 200px;
  background: purple;
  font-size: 40px;
  float: left;
  color: #fff;
  margin-left: -200px;
}
.container2 {
  width: 100%;
  height: 200px;
  background: red;
}
.container3 {
  display: flex;
  justify-content: space-around;
}
.block {
  width: 100px;
  height: 100px;
  background: red;
  margin: 20px;
}
.block2 {
  width: 100px;
  height: 100px;
  background: red;
  margin: 20px;
  flex: right;
}
</style>