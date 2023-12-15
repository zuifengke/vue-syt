import { defineStore } from 'pinia';
import { reqHospitalDetail, reqHospitalDeparment } from '@/api/hospital/index';
import type { HospitalDetail, HosPitalDetail, DeparmentResponseData } from '@/api/hospital/type';
import type { DetailState } from './interface/index';
// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
const useDetailStore = defineStore('Detail', {
    // 大多数时候，state 是 store 的核心部分。 我们通常从定义应用程序的状态开始。 
    // 在 Pinia 中，状态被定义为返回初始状态的函数。(实际存储数据的位置) Pinia 在服务器端和客户端都可以工作。
    // state接收的是一个箭头函数返回的值，它不能直接接收一个对象。
    // 关于函数的返回值类型：示例如下
    // 定义一个 add 函数 指定其中参数 a和b的数据类型为 number ,指定函数返回值类型为 number
    // function add(a: number, b: number):number {
    //     return a + b;
    // }
    state: (): DetailState => {
        return {
            // 所有这些属性都将自动推断其类型
            // 医院详情数据
            hospitalInfo: ({} as HosPitalDetail),
            //存储医院科室的数据
            deparmentArr: []
        }
    },

    // Actions 相当于组件中的 methods。 
    // 它们可以使用 defineStore() 中的 actions 属性定义，并且它们非常适合定义业务逻辑：
    actions: {
        // 获取医院详情信息
        async getHospital(hoscode: string) {
            let result: HospitalDetail = await reqHospitalDetail(hoscode);
            if (result.code == 200) {
                // 存储到医院详情数据
                this.hospitalInfo = result.data;
            }
        },
        // 获取某一个医院科室的数据
        async getDeparment(hoscode: string) {
            let result: DeparmentResponseData = await reqHospitalDeparment(hoscode);
            if (result.code == 200) {
                this.deparmentArr = result.data;
            }
        }

        // increment() {
        //     this.counter++
        // },
        // randomizeCounter() {
        //     this.counter = Math.round(100 * Math.random())
        // },
    },

    // Getter 完全等同于 Store 状态的 计算值。 
    // 它们可以用 defineStore() 中的 getters 属性定义。 他们接收“状态”作为第一个参数以鼓励箭头函数的使用：
    getters: {

    },
})
// 这个 name，也称为 id，是必要的，Pinia 使用它来将 store 连接到 devtools。 
// 将返回的函数命名为 use... 是跨可组合项的约定，以使其符合你的使用习惯。


// 对外暴露获取仓库的方法
export default useDetailStore;