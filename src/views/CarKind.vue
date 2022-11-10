<script  lang="ts">
import {
  apiCarKindGet,
  apiCarKindPost,
  apiCarKindPut,
  apiCarKindDelete,
} from "../api/CarKindApi";
import { account } from "../store";
import { AdminModel } from "../models/admin";
export default {
  name: "home",
  created() {
    console.log("Car Kind");
    apiCarKindGet(null).then((res) => {
      console.log(res);
    });
  },
};
</script>

<template>
  <div class="container mx-auto px-4 h-full">
    <h1>Car Kind</h1>
  </div>
</template>
