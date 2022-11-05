<script  lang="ts">
import { Footer, Navbar } from "../components/index";
export default {
  name: "home",
  components: {
    Footer,
    Navbar,
  },
  created() {
    console.log("home");
  },
};
</script>

<template>
  <navbar />
  <div class="container mx-auto px-4 h-full">
    <footer />
  </div>
</template>
