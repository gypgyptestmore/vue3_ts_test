<template>
  <div class="person">
    {{ date }}
    {{ name }}
    {{ age }}
    我喜欢
    {{ obj.names }}年龄{{ obj.age }}
    <div>性别：{{ obj.sex }}</div>

    <div v-for="index in games" :key="index.id">我喜欢玩{{ index.name }}</div>

    <div>评价：{{ haha.a.b.c.d }}</div>
    <button @click="changeName">点击改名字</button>
    <button @click="changeDate">点击改日期</button>
    <button @click="changeNum">点击改数子</button>
    <button @click="changeMx">改明星名字</button>
    <button @click="changeSex">改明星性别</button><br />
    姓：<input type="text" v-model="firstTime" /><br />
    名：<input type="text" v-model="lastTime" /><br />
    全名：<span>{{ fullName }}</span
    ><br />
    倒转:<span>{{ fullName2() }}</span> <br />
    <button @click="changeFullName">全名改为：li-si</button>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
    <div>作家人</div>
    姓名：{{ person.name }} 年龄：{{ person.age }}
    <button @click="changeNames">改名字</button>
    <button @click="chantages">改年龄</button>
    <div>监视[reactive]定义的【对象类型】数据</div>
    <div>音乐家</div>
    姓名：{{ person1.name }} 年龄：{{ person1.age }}
    <button @click="changeNamesmus">改名字</button>
    <button @click="changeagesmus">改年龄</button>
    <button @click="changeallperson">修改整个人</button>
    <div>测试{{ obj1.a.b.c }}</div>
    <button @click="changeDeep">改变深层</button>
    <div>
      监视ref或reactive对象类型内的某个属性，属性值不是对象类型：写成函数；是对象类型：可直接编或者写函数
      手动开启深度监视
    </div>
    <div>
      汽车 1{{ person1.car.c1 }}<br />
      1{{ person1.car.c2 }}
    </div>
    <button @click="benchi">汽车1改</button>
    <button @click="baoma">汽车2改</button>
  </div>
</template>
  
<!-- <script lang="ts">
export default {
  name: "Person",
};
</script> -->

<script setup lang="ts" name="Person">
import { ref, reactive, toRef, toRefs, computed, watch } from "vue";

let name = ref("张三");
let date = ref("周三");
let age = ref(1);
let obj = reactive({ names: "赵丽颖", age: "18", sex: "woman" });
let games = reactive([
  { id: 1, name: "原神", bank: "yiban" },
  { id: 2, name: "幻兽帕鲁", bank: "xihuan" },
  { id: 3, name: "双人成行", bank: "henxihuan" },
]);
let haha = reactive({
  a: {
    b: {
      c: {
        d: 66,
      },
    },
  },
});
let { names, sex } = toRefs(obj);
let namesRef = toRef(obj, "names");

let firstTime = ref("我是张");
let lastTime = ref("我是三");
// 计算属性函数写法是只读
// let fullName = computed(() => {
//   return (
//     firstTime.value.slice(0, 1).toUpperCase() +
//     firstTime.value.slice(1) +
//     lastTime.value
//   );
// });
// 使用get，set写法的计算属性可读可写
const fullName = computed({
  get() {
    console.log("我是");
    return (
      firstTime.value.slice(0, 1).toUpperCase() +
      firstTime.value.slice(1) +
      lastTime.value
    );
  },

  set(val) {
    const [str1, str2] = val.split("-");
    console.log("set 点击之后触发changeFullName");
    (firstTime.value = str1), (lastTime.value = str2);
    console.log(val);
  },
});
function fullName2() {
  console.log("1111");
  return lastTime.value + firstTime.value;
}

function changeFullName() {
  fullName.value = "li-si";
}

function changeName() {
  name.value = "zhangsan";
  //   name = this.name;
  console.log(name, 222);
}
function changeDate() {
  date.value = "zhousi"; //这样修改页面不变化
  console.log(date, 3333);
}
function changeNum() {
  age.value += 1;
}
function changeMx() {
  names.value = "瓜6️⃣";
}
function changeSex() {
  sex.value = "明星性别";
}

//   data() {
//     return {
//       date: "周二",
//       name: "张三",
//       age: 1,
//     };
//   },
//   methods: {
//     changeName() {
//       this.name = "我改名字了";
//     },
//     changeDate() {
//       this.date = "周六去植物园逛逛";
//     },
//     changeNum() {
//       this.age += 1;
//     },
//   },

// watch监视基本数据类型的ref
let sum = ref(1);
function changeSum() {
  sum.value += 1;
}
const stopWatch = watch(sum, (newValue, oldValue) => {
  console.log("sum变化了", newValue, oldValue);
  if (newValue >= 10) {
    stopWatch();
  }
});
// watch监视对象类型的ref
let person = ref({ name: "余华", age: 55 });
function changeNames() {
  console.log("监视对象类型name");
  person.value.name = "莫言";
}
function chantages() {
  console.log("改对象类型的age");
  person.value.age = "60左右";
}
watch(
  person.value,
  (newValue, oldValue) => {
    console.log("person的值改变了", newValue, oldValue);
  },
  { deep: true }
);
let person1 = reactive({
  name: "莫扎特",
  age: 20,
  car: {
    c1: "福田",
    c2: "五菱",
  },
});
function changeagesmus() {
  person1.age += 1;
}
function changeNamesmus() {
  person1.name = "阿炳";
}
function changeallperson() {
  Object.assign(person1, { name: "使用Object.assign改变", age: "40" });
}
watch(person1, (newValue, oldValue) => {
  console.log("监听对象变化", newValue, oldValue);
});
let obj1 = reactive({
  a: {
    b: {
      c: "我是深层",
    },
  },
});
function changeDeep() {
  obj1.a.b.c = "直接改变对象调用属性，而不是使用Object.assign";
}
watch(obj1, (newValue, oldValue) => {
  console.log("深层改变", newValue, oldValue);
});

function benchi() {
  person1.car.c1 = "奔驰";
}
function baoma() {
  person1.car.c2 = "宝马";
}
watch(
  [() => person1.car, person1.name],
  (newValue, oldValue) => {
    console.log("对象属性值perosn.car变化了", newValue, oldValue);
  },
  { deep: true }
);
</script>
  
  <style scoped>
.person {
  background-color: pink;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 0 15px;
}
</style>