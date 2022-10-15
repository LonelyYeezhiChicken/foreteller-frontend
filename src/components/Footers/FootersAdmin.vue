<script  lang="ts">
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>

<template>
  <footer class="block py-4 sticky bottom-0">
    <div class="container mx-auto px-4">
      <hr
        class="mb-4 border-b-1 dark:border-blueGray-200 border-blueGray-500"
      />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4">
          <div
            class="
              text-sm text-blueGray-500
              dark:text-blueGray-200
              font-semibold
              py-1
              text-center
              md:text-left
            "
          >
            Copyright © {{ date }}
            <a
              href="https://www.creative-tim.com?ref=vn-footer-admin"
              class="
                text-blueGray-500
                dark:text-blueGray-200
                hover:text-blueGray-700
                dark:hover:text-blueGray-400
                text-sm
                font-semibold
                py-1
              "
            >
              一隻雞
            </a>
          </div>
        </div>
        <div class="w-full md:w-8/12 px-4">
          <ul class="flex flex-wrap list-none md:justify-end justify-center">
            <li>
              <a
                href="http://blog.lychicken.com"
                class="
                  dark:text-blueGray-300 dark:hover:text-blueGray-500
                  text-blueGray-600
                  hover:text-blueGray-800
                  text-sm
                  font-semibold
                  block
                  py-1
                  px-3
                "
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

  