import { createStore } from "vuex";
import mutations from "./mutations.js";

export default createStore({
    state: {
        cartList: [], //购物车数据
        isDelete: true, //确定header组件 点击编辑出现删除选项
        edit: true, //默认展示编辑状态
        orderList: [],
        userAddress: [{
            id: 1001,
            name: 'jason',
            tel: '15874859686',
            province: '广东省',
            city: '深圳市',
            county: '南山区',
            addressDetail: '深圳湾',
            isDefault: true,
            areaCode: '110101',
        },
        {
            id: 1002,
            name: 'allen',
            tel: '15874859685',
            province: '湖北省',
            city: '武汉市',
            county: '武昌区',
            addressDetail: '黄鹤楼',
            isDefault: false,
            areaCode: '110101',
        },],
        orderListEnd: [],
    },
    mutations,
    actions: {}
})