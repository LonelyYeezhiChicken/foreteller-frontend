<script  lang="ts">
import Footer from "../components/Footers/FootersAdmin.vue";
import Navbar from "../components/Navbars/Navbar.vue";
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
    <footer-admin />
  </div>
</template>
