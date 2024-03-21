import { ref} from "vue";


let sum = ref(1);
let addTen = ref()
export default function(){
    function add() {
        sum.value += 1;
      }
    function addTen(){
        sum.value+=10
    }
    return {sum,add,addTen}
}