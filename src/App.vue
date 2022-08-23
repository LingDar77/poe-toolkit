
<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";
const Tray = defineAsyncComponent(() => import("@/views/TrayView.vue"));
const Topbar = defineAsyncComponent(() => import("@/components/Topbar.vue"));
const MainBody = defineAsyncComponent(() => import("@/components/MainBody.vue"));
const isTray = ref(false);
window.background.setAsTray((e, setted) =>
{
    isTray.value = setted;
});

</script>

<template>
    <div v-if="!isTray">
        <Topbar></Topbar>
        <MainBody></MainBody>
    </div>
    <div v-else>
        <Tray></Tray>
    </div>
</template>

<style lang="less">
@font-face {
    font-family: 'FiraCodeRetina';
    src: url("assets/fonts/FiraCode-Retina.ttf");
}

* {
    font-family: 'FiraCodeRetina';
    padding: 0;
    margin: 0;
    text-decoration: none;
    overflow: hidden;
    user-select: none;
    -webkit-user-drag: none
}
</style>