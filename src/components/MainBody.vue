<template>
    <div class="container">
        <el-menu default-active="0" :collapse="isPanelCollapsed">
            <div @click="toggleCollapsed">
                <el-icon>
                    <svg t="1661197027809" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="7800" width="200" height="200">
                        <path
                            d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-40 728H184V184h656v656z"
                            p-id="7801"></path>
                        <path
                            d="M492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM492 544h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM492 688h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"
                            p-id="7802"></path>
                        <path d="M380 368m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z" p-id="7803"></path>
                        <path d="M380 512m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z" p-id="7804"></path>
                        <path d="M380 656m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z" p-id="7805"></path>
                    </svg>
                </el-icon>
            </div>
            <router-link :to="{ name: 'home' }">
                <el-menu-item index="0">
                    <el-icon>
                        <svg t="1661199802873" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="7943" width="200" height="200">
                            <path
                                d="M946.5 505L560.1 118.8l-25.9-25.9c-12.3-12.2-32.1-12.2-44.4 0L77.5 505c-12.3 12.3-18.9 28.6-18.8 46 0.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8 12.1-12.1 18.7-28.2 18.7-45.3 0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204z m217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
                                p-id="7944"></path>
                        </svg>
                    </el-icon>
                    <template #title>Home</template>
                </el-menu-item>
            </router-link>
            <router-link :to="{ name: 'lifeMonitor' }">
                <el-menu-item index="1">
                    <el-icon>
                        <svg t="1661199802873" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="7943" width="200" height="200">
                            <path
                                d="M946.5 505L560.1 118.8l-25.9-25.9c-12.3-12.2-32.1-12.2-44.4 0L77.5 505c-12.3 12.3-18.9 28.6-18.8 46 0.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8 12.1-12.1 18.7-28.2 18.7-45.3 0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204z m217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
                                p-id="7944"></path>
                        </svg>
                    </el-icon>
                    <template #title>Life monitor</template>
                </el-menu-item>
            </router-link>
            <router-link :to="{ name: 'manaMonitor' }">
                <el-menu-item index="2">
                    <el-icon>
                        <svg t="1661199802873" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="7943" width="200" height="200">
                            <path
                                d="M946.5 505L560.1 118.8l-25.9-25.9c-12.3-12.2-32.1-12.2-44.4 0L77.5 505c-12.3 12.3-18.9 28.6-18.8 46 0.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8 12.1-12.1 18.7-28.2 18.7-45.3 0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204z m217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
                                p-id="7944"></path>
                        </svg>
                    </el-icon>
                    <template #title>Mana monitor</template>
                </el-menu-item>
            </router-link>
            <router-link :to="{ name: 'flasksLoop' }">
                <el-menu-item index="3">
                    <el-icon>
                        <svg t="1661199802873" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="7943" width="200" height="200">
                            <path
                                d="M946.5 505L560.1 118.8l-25.9-25.9c-12.3-12.2-32.1-12.2-44.4 0L77.5 505c-12.3 12.3-18.9 28.6-18.8 46 0.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8 12.1-12.1 18.7-28.2 18.7-45.3 0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204z m217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
                                p-id="7944"></path>
                        </svg>
                    </el-icon>
                    <template #title>Flasks Loop</template>
                </el-menu-item>
            </router-link>
            <router-link :to="{ name: 'cleanPackage' }">
                <el-menu-item index="4">
                    <el-icon>
                        <svg t="1661199802873" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="7943" width="200" height="200">
                            <path
                                d="M946.5 505L560.1 118.8l-25.9-25.9c-12.3-12.2-32.1-12.2-44.4 0L77.5 505c-12.3 12.3-18.9 28.6-18.8 46 0.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8 12.1-12.1 18.7-28.2 18.7-45.3 0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204z m217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
                                p-id="7944"></path>
                        </svg>
                    </el-icon>
                    <template #title>Clean Package</template>
                </el-menu-item>
            </router-link>
            <router-link :to="{ name: 'settings' }">
                <el-menu-item index="6">
                    <el-icon>
                        <svg t="1661199802873" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="7943" width="200" height="200">
                            <path
                                d="M946.5 505L560.1 118.8l-25.9-25.9c-12.3-12.2-32.1-12.2-44.4 0L77.5 505c-12.3 12.3-18.9 28.6-18.8 46 0.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8 12.1-12.1 18.7-28.2 18.7-45.3 0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204z m217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
                                p-id="7944"></path>
                        </svg>
                    </el-icon>
                    <template #title>Settings</template>
                </el-menu-item>
            </router-link>
        </el-menu>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isPanelCollapsed = ref(false);

const toggleCollapsed = () =>
{
    isPanelCollapsed.value = !isPanelCollapsed.value;
}
</script>

<style lang="less" scoped>
.container {
    display: flex;
    flex-direction: row;

    .el-menu {

        &:not(.el-menu--collapse) {
            width: 165px;
            min-width: 100px;
        }

        .el-menu-item {
            border-radius: 16px;
        }

        div {
            padding-left: 24px;
            padding-top: 12px;

            &:hover {
                cursor: pointer;
            }
        }

    }
}
</style>