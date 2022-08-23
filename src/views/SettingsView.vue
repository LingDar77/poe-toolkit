<template >
    <div id="setteings">
        <el-button type="primary" size="default" @click="btnSwitchDark">SwitchDark</el-button>
    </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark();
const toggleDark = useToggle(isDark);

const btnSwitchDark = () =>
{
    toggleDark();
}


</script>

<style scoped>
#setteings {
    padding: 12px;
}
</style>