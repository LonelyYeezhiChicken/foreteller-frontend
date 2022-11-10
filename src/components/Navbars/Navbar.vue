<script  lang="ts">
import { account } from "../../store";
import { RouterMap } from "../../models/define";
const rootEl = document.getElementById("app");
export default {
  name: "Navbar",
  data() {
    return {
      isShow: false as boolean,
      isShowDataMaintenance: false as boolean,
    };
  },
  methods: {
    // 切換背景
    changDark: function (): void {
      const _self = this;
      if (rootEl !== null) {
        if (rootEl.className.includes("dark")) {
          rootEl.classList.remove("dark");
        } else {
          rootEl.classList.add("dark");
        }
      }
    },
    //登出
    logout: function (): void {
      account().logOut();
      /* @ts-ignore */
      this.$router.push(RouterMap.Login);
    },
    // 顯示選單
    showNav: function (): void {
      const _self = this;
      _self.isShow = !_self.isShow;
    },
    // 顯示選單
    showDataMaintenance: function (): void {
      const _self = this;
      _self.isShowDataMaintenance = !_self.isShowDataMaintenance;
    },
  },
  computed: {
    isAuth: function () {
      return account().isAuth;
    },
  },
};
</script>

<template>
  <nav
    class="
      relative
      flex flex-wrap
      items-center
      justify-between
      px-2
      py-3
      navbar-expand-lg
      bg-pink-500
    "
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="
          w-full
          relative
          flex
          justify-between
          md:w-auto
          px-4
          md:static md:block md:justify-start
        "
      >
        <router-link
          to="/Home"
          class="
            text-lg
            font-bold
            leading-relaxed
            inline-block
            mr-4
            py-2
            whitespace-no-wrap
            uppercase
            text-gray-200
          "
        >
          預言家
        </router-link>
        <button
          data-dropdown-toggle="dropdownNavbar"
          class="
            md:inline-block
            hidden
            text-lg
            font-bold
            leading-relaxed
            mr-4
            py-2
            whitespace-no-wrap
            uppercase
            text-gray-200
            justify-between
            items-center
            pr-4
            pl-3
            w-full
            rounded
            hover:bg-gray-100
            md:hover:bg-transparent
            md:border-0
            md:hover:text-white
            md:p-0
            md:w-auto
            dark:hover:text-white
            dark:focus:text-white
            dark:border-gray-700
            dark:hover:bg-gray-700
            md:dark:hover:bg-transparent
          "
          v-if="isAuth"
          @click="showDataMaintenance()"
        >
          <p class="flex">
            資料維護
            <svg
              class="ml-1 w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </p>
        </button>
        <!-- Dropdown menu -->
        <div
          v-if="isShowDataMaintenance && isAuth"
          class="
            flex
            z-10
            w-44
            font-normal
            bg-white
            rounded
            divide-y divide-gray-100
            shadow
            dark:bg-gray-700 dark:divide-gray-600
          "
        >
          <ul
            class="py-1 text-sm text-gray-00 dark:text-gray-400 text-gray-600"
            aria-labelledby="dropdownLargeButton"
          >
            <router-link
              to="/CarKind"
              class="
                block
                py-2
                px-4
                hover:bg-gray-100
                dark:hover:bg-gray-600 dark:hover:text-white
              "
              @click="showDataMaintenance()"
            >
              車種維護
            </router-link>
          </ul>
        </div>
        <div class="-mr-2 flex md:hidden">
          <button
            class="
              text-gray-800
              dark:text-white
              hover:text-gray-300
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              focus:outline-none
            "
            v-if="!isShow"
            @click="showNav()"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              class="h-8 w-8"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"
              ></path>
            </svg>
          </button>
        </div>
        <div v-if="isShow && isAuth" class="md:hidden transition-all">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              class="
                text-gray-800
                dark:text-white
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
              "
              @click="showNav()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                />
              </svg>
            </button>
            <router-link
              to="/home"
              class="
                text-gray-800
                dark:text-white
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
              "
            >
              車種維護
            </router-link>
            <div
              class="
                text-gray-800
                dark:text-white
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
              "
            >
              <ul class="flex flex-row list-none ml-auto">
                <li class="nav-item">
                  <button
                    class="
                      px-3
                      py-2
                      flex
                      items-center
                      text-xs
                      uppercase
                      font-bold
                      leading-snug
                      text-white
                      hover:opacity-75
                    "
                    @click="changDark()"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      />
                    </svg>
                  </button>
                </li>
                <li class="nav-item" v-if="isAuth">
                  <button
                    class="
                      px-3
                      py-2
                      flex
                      items-center
                      text-xs
                      uppercase
                      font-bold
                      leading-snug
                      text-white
                      hover:opacity-75
                    "
                    @click="logout()"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-grow items-center">
        <ul class="md:flex md:flex-row hidden list-none ml-auto">
          <li class="nav-item">
            <button
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                text-white
                hover:opacity-75
              "
              @click="changDark()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </button>
          </li>
          <li class="nav-item" v-if="isAuth">
            <button
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                text-white
                hover:opacity-75
              "
              @click="logout()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>;
