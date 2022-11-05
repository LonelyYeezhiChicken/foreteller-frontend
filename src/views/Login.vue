<script  lang="ts">
import { apiTest, apiLogin } from "../api/Api";
import { FooterAdmin, NavbarAdmin } from "../components/index";
import { defineComponent } from "vue";
import { account } from "../store";
import { RouterMap } from "../models/define";
export default defineComponent({
  name: "login",
  inheritAttrs: false,
  data() {
    return {
      userName: "" as string,
      password: "" as string,
    };
  },
  components: {
    FooterAdmin,
    NavbarAdmin,
  },
  mounted() {
    apiTest("").then((res: any) => {
      console.log(res);
    });
  },
  methods: {
    // 檢查資料
    checkData: function (): Boolean {
      const _self = this;
      if (_self.userName === "") return false;
      if (_self.password === "") return false;

      return true;
    },
    // 登入
    toLogin: function (): void {
      const _self = this;
      if (_self.checkData()) {
        apiLogin(_self.apiData()).then((res) => {
          account().setJwt(res.data.token);
          this.$router.push(RouterMap.Home);
        });
      }
    },
    // 組合Api資料
    apiData: function (): any {
      const _self = this;
      return {
        userName: _self.userName,
        password: _self.password,
      };
    },
  },
});
</script>

<template>
  <div class="container mx-auto px-4 h-full">
    <section class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div
          class="
            relative
            flex flex-col
            min-w-0
            break-words
            w-full
            mb-6
            shadow-lg
            rounded-lg
            bg-blueGray-200
            dark:bg-blueGray-600
            border-0
          "
        >
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-blueGray-400 text-center mb-3 font-bold text-lg">
              <small>歡迎回來 預言家~</small>
            </div>
            <form>
              <div class="relative w-full mb-3">
                <label
                  class="
                    block
                    uppercase
                    text-blueGray-600 text-xs
                    font-bold
                    mb-2
                  "
                  htmlFor="grid-password"
                >
                  使用者
                </label>
                <input
                  type="email"
                  class="
                    border-0
                    px-3
                    py-3
                    placeholder-blueGray-300
                    text-blueGray-600
                    bg-white
                    rounded
                    text-sm
                    shadow
                    focus:outline-none focus:ring
                    w-full
                    ease-linear
                    transition-all
                    duration-150
                  "
                  placeholder="User Name"
                  v-model="userName"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="
                    block
                    uppercase
                    text-blueGray-600 text-xs
                    font-bold
                    mb-2
                  "
                  htmlFor="grid-password"
                >
                  密碼
                </label>
                <input
                  type="password"
                  class="
                    border-0
                    px-3
                    py-3
                    placeholder-blueGray-300
                    text-blueGray-600
                    bg-white
                    rounded
                    text-sm
                    shadow
                    focus:outline-none focus:ring
                    w-full
                    ease-linear
                    transition-all
                    duration-150
                  "
                  placeholder="Password"
                  autocomplete="on"
                  v-model="password"
                />
              </div>
              <div class="text-center mt-6">
                <button
                  class="
                    bg-pink-500
                    text-white
                    active:bg-pink-600
                    text-sm
                    font-bold
                    uppercase
                    px-6
                    py-3
                    rounded
                    shadow
                    hover:shadow-lg
                    outline-none
                    focus:outline-none
                    mr-1
                    mb-1
                    w-full
                    ease-linear
                    transition-all
                    duration-150
                  "
                  type="button"
                  @click="toLogin()"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-wrap mt-6 relative">
          <div class="w-1/2">
            <a href="javascript:void(0)" class="text-blueGray-700">
              <small>Forgot password?</small>
            </a>
          </div>
          <div class="w-1/2 text-right">
            <a href="javascript:void(0)" class="text-blueGray-700">
              <small>Create new account</small>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

  