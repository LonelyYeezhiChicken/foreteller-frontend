<script  lang="ts">
import FooterAdmin from "../components/Footers/FootersAdmin.vue";
import NavbarAdmin from "../components/Navbars/NavbarAdmin.vue";
export default {
  name: "login",
  components: {
    FooterAdmin,
    NavbarAdmin,
  },
};
</script>

<template>
  <navbar-admin />
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
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
                  Email
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
                  placeholder="Email"
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
                  Password
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
            <router-link to="/auth/register" class="text-blueGray-700">
              <small>Create new account</small>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <footer-admin />
  </div>
</template>

  