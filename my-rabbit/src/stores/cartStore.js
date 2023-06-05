import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {useUserStore} from "@/stores/userStore";
import {delCartAPI, findNewCartListAPI, insertCartAPI} from "@/apis/cart";


export const useCartStore = defineStore('cart', () => {
        const userStore = useUserStore();
        const isLogin = computed(() => userStore.userInfo.token);

        // 1.定义state - cartList
        const cartList = ref([])

        // 获取最新购物车列表action
        const updateNewList = async () => {
            // 获取最新购物车列表
            const res = await findNewCartListAPI()
            // 覆盖本地购物车列表
            cartList.value = res.result;
        }

        // 2.定义action - addCart
        // 添加购物车操作
        const addCart = async (goods) => {
            const {skuId, count} = goods;
            if (isLogin.value) {
                // 登陆之后加入购物车
                await insertCartAPI({skuId, count})
                updateNewList()
            } else {
                // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
                const item = cartList.value.find(item => goods.skuId === item.skuId);
                if (item) {
                    // 已经添加过 - count +1
                    item.count++;
                } else {
                    // 没有添加过 - 直接push
                    cartList.value.push(goods)
                }
            }
        }

        // 3.删除商品
        const delCart = async (skuId) => {
            if (isLogin.value) {
                // 调用接口实现接口购物车中的删除功能
                await delCartAPI([skuId])
                updateNewList()
            } else {
                // 1.找到要删除项下标值
                // 2.使用数组的过滤方法
                const idx = cartList.value.findIndex(item => item.skuId === skuId);
                cartList.value.splice(idx, 1);
            }
        }

        // 计算属性
        // 4.总的数量 所有项的count之和
        const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0));

        // 5.总价 所有项的count*price之和
        const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0));

        // 6.单选功能
        const singleCheck = (skuId, selected) => {
            // 通过skuId 找到要修改的那一项，然后把它的selected修改为传过来的selected
            const item = cartList.value.find(item => item.skuId === skuId)
            item.selected = selected;
        };

        // 7.是否全选
        const isAll = computed(() => cartList.value.every(item => item.selected))

        // 8.选中 / 取消选中 所有元素
        const allCheck = (selected) => {
            // 把cartList中的每一项的selected都设置为当前的全选框状态
            cartList.value.forEach(item => item.selected = selected);
        };

        // 计算属性
        // 9.已选择数量
        const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0));

        // 10.已选择商品价格合计
        const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0));

        // 11 清除购物车
        const clearCart=()=>{
            cartList.value = [];
        }

        return {
            cartList,
            addCart,
            delCart,
            allCount,
            allPrice,
            singleCheck,
            isAll,
            allCheck,
            selectedCount,
            selectedPrice,
            clearCart,
            updateNewList
        }
    },
    {
        persist: true,  // 持久化到localStorage
    });