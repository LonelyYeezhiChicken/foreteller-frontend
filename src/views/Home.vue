<script  lang="ts">
import { apiClaims } from "../api/Api";
import { account } from "../store";
import { AdminModel } from "../models/admin";
export default {
  name: "home",
  created() {
    console.log("home");
    apiClaims().then((end) => {
      let adData: AdminModel = {
        userName: end.data[0].value,
        role: end.data[3].value,
        uu: end.data[1].value,
      };
      account().setAdmin(adData);
    });
  },
};
</script>

<template>
  <div class="container mx-auto px-4 h-full">
    <h1>Home</h1>
  </div>
</template>
