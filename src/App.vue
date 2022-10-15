
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
  <main className="dark:bg-blueGray-700 font-mono border-blueGray-100 h-screen">
    <router-view class="relative w-full h-full py-40 min-h-screen" />
  </main>
</template>
