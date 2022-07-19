<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="serialNumber" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import SocketioService from "./composables/useSocket";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const serialNumber = ref("");
    const socket = SocketioService.setupSocketConnection();
    socket.on("serialNumberOnServer", (data: string) => {
      serialNumber.value = data;
    });
    return {
      serialNumber,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
