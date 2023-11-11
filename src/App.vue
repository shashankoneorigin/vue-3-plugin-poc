<script lang="ts">
import { defineComponent } from "vue";
import { useTitle } from "@vueuse/core";
export default defineComponent({
  name: "SomeComponent",
  methods: {
    trackEvent() {
      // @ts-ignore
      this.$gtmEvent("eventName", {
        eventCategory: "Category",
        eventAction: "Action",
        eventLabel: "Label",
      });
    },
  },
  created() {
    useTitle("Test title");
  },
});
</script>

<template>
  <main>
    <button @click="trackEvent()">this is a button</button>
  </main>
</template>
