
<script setup lang="ts">
import { parseConfig } from '@/config';
import { ref, defineAsyncComponent, onUnmounted } from "vue";
const Tray = defineAsyncComponent(() => import("@/views/TrayView.vue"));
const Topbar = defineAsyncComponent(() => import("@/components/Topbar.vue"));
const MainBody = defineAsyncComponent(() => import("@/components/MainBody.vue"));
const isTray = ref(false);
parseConfig();






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
    font-family: "Fira Code Retina";
    src: url('~@/assets/FiraCode-Retina.ttf');
}

* {
    font-family: 'Fira Code Retina';
    padding: 0;
    margin: 0;
    text-decoration: none;
    overflow: hidden;
    user-select: none;
    -webkit-user-drag: none
}
</style>