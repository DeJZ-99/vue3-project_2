<template>
  <div class="cart">
    <Header title="购物车" :edit="true"></Header>
    <CartDetail v-if="isShow" :changeShow="changeShow"></CartDetail>
    <Empty v-else></Empty>
    <Footer></Footer>
  </div>
</template>
  
<script setup>
import Footer from "@/components/Footer.vue";
import Empty from "@/components/Empty.vue";
import Header from "@/components/Header.vue";
import CartDetail from "./components/CartDetail.vue";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const isShow = ref(true);
const store = useStore();
const init = () => {
  if (store.state.cartList.length === 0) {
    isShow.value = false;
  }
};

const changeShow = () => {
  isShow.value = false;
};

onMounted(() => {
  init();
});
</script>
  
<style lang="less" scoped>
.cart {
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>