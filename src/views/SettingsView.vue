<template >
    <div id="setteings">
        <el-button type="primary" size="default" @click="btnSwitchDark">
            SwitchDark
        </el-button>
        <el-button type="primary" size="default" @click="btnAnimate">
            SwitchAnimate
        </el-button>
    </div>
</template>

<script setup lang="ts">
import { useDark, useToggle} from '@vueuse/core'
import { config } from '@/config';
import { ref } from 'vue';
const isDark = useDark();
let cfg = ref(config);
const btnSwitchDark = () =>
{
    useToggle(isDark)();
}
const btnAnimate = () =>
{
    cfg.value.enableAnimate =! cfg.value.enableAnimate;
}


</script>

<style scoped>
#setteings {
    padding: 12px;
}
</style>