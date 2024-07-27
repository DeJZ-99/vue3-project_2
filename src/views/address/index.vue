<template>
  <Header title="地址管理"></Header>
  <van-address-list
    :list="list"
    default-tag-text="默认"
    @add="onAdd"
    @edit="onEdit"
  />
</template>

<script>
import Header from "@/components/Header.vue";
import { onMounted, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  components: { Header },
  setup() {
    const store = useStore();
    const router = useRouter();
    const data = reactive({
      list: [],
    });
    const init = () => {
      data.list = store.state.userAddress.map((item) => {
        return {
          id: item.id,
          name: item.name,
          tel: item.tel,
          address: `${item.province}${item.city}${item.county}${item.addressDetail}`,
          isDefault: item.isDefault,
        };
      });
    };

    onMounted(() => init());

    const onAdd = () => {
      router.push({
        path: "/addressedit",
        query: {
          type: "add",
        },
      });
    };

    const onEdit = (item) => {
      router.push({
        path: "/addressedit",
        query: {
          id: item.id,
          type: "edit",
        },
      });
    };

    return {
      ...toRefs(data),
      onAdd,
      onEdit,
    };
  },
};
</script>

<style lang="less" scoped>
:deep(.van-button--danger) {
  background-color: #ffc400;
  border-color: #ffc400;
}

:deep(.van-switch--on) {
  background-color: #ffc400;
}

:deep(.van-radio__icon) {
  display: none;
}
</style>