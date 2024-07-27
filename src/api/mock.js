import { Mock } from "mockjs";
import homeApi from "./mockData/homeApi";
import storeApi from "./mockData/storeApi";
// 拦截home页数据
Mock.mock('/home/getHomeDate', homeApi.getHomeData());

Mock.mock('/store/getStoreData', storeApi.getStoreData());