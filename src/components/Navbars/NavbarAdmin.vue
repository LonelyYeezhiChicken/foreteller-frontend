<script  lang="ts">
const rootEl = document.getElementById("app");
export default {
  name: "thisApp",
  data() {
    return {};
  },
  methods: {
    changDark: function (): void {
      const _self = this;
      console.log(rootEl);
      if (rootEl !== null) {
        if (rootEl.className.includes("dark")) {
          rootEl.classList.remove("dark");
        } else {
          rootEl.classList.add("dark");
        }
      }
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
      mb-3
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
          lg:w-auto
          px-4
          lg:static lg:block lg:justify-start
        "
      >
        <a
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
          href="#pablo"
        >
          預言家
        </a>
        <button
          class="
            cursor-pointer
            text-xl
            leading-none
            px-3
            py-1
            border border-solid border-transparent
            rounded
            bg-transparent
            block
            lg:hidden
            outline-none
            focus:outline-none
            text-white
            hover:opacity-75
          "
          type="button"
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
      </div>
      <div class="lg:flex flex-grow items-center">
        <ul class="lg:flex lg:flex-row hidden list-none ml-auto">
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
        </ul>
      </div>
    </div>
  </nav>
</template>;
