<template>
    <Topbar></Topbar>
    <MainBody></MainBody>
</template>

<script setup lang="ts">
import Topbar from "@/components/Topbar.vue";
import MainBody from "@/components/MainBody.vue";

</script>

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
}
</style>