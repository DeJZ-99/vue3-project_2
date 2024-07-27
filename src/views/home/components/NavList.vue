<template>
    <div v-for="(item,index) in navlist" :key="index">
        <NavListItem :itemContent="item"></NavListItem>
    </div>
</template>

<script>
import NavListItem from "./NavListItem.vue";
export default {
  props: ["navlist"],
  components: {
    NavListItem,
  },
};
</script>