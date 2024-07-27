<template>
  <div class="register">
    <Header title="注册"></Header>
    <div class="img">买团</div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          color="#ffc400"
        >
          注册
        </van-button>
      </div>
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          color="#ffc400"
          class="register"
          @click="toLogin"
        >
          去登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>
  
<script>
import Header from "@/components/Header.vue";
import { Toast } from "vant";
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    Header,
  },
  setup() {
    const router = useRouter();
    const data = reactive({
      username: "",
      password: "",
    });

    const register = (value) => {
      localStorage.setItem("userInfo", JSON.stringify(value));
      Toast("注册成功");
      router.push("/login");
    };

    const onSubmit = (value) => {
      if (localStorage.userInfo) {
        let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (userInfo["username"] === value["username"]) {
          Toast("该用户已存在");
          return;
        }
      } else {
        register(value);
      }
    };

    const toLogin = () => {
      router.push("/login");
    };

    return {
      ...toRefs(data),
      onSubmit,
      toLogin,
    };
  },
};
</script>
  
<style lang="less" scoped>
.register {
  .img {
    width: 200px;
    height: 200px;
    background-color: #ffc400;
    font-size: 80px;
    line-height: 200px;
    text-align: center;
    border-radius: 40px;
    margin: 20px auto;
  }
  .register {
    margin-top: 20px;
  }
}
</style>