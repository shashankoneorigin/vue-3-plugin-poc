<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SomeComponent",
  methods: {
    trackEvent() {
      this.$gtmEvent("eventName", {
        eventCategory: "Category",
        eventAction: "Action",
        eventLabel: "Label",
      });
    },
  },
});
</script>

<template>
  <main>
    <button @click="trackEvent()">this is a button</button>
  </main>
</template>
