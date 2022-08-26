<template>
    <div class="container">

        <el-scrollbar :height="scrollbarHeight">
            <el-menu default-active="0" :collapse="cfg.isPanelCollapsed">
                <div @click="toggleCollapsed">
                    <el-icon>
                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
                            <path fill="currentColor"
                                d="M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64h261.44zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64h453.44zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64h133.44z">
                            </path>
                        </svg>
                    </el-icon>
                </div>
                <router-link :to="{ name: 'home' }">
                    <el-menu-item index="0">
                        <el-icon>
                            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
                                <path fill="currentColor"
                                    d="M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z">
                                </path>
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
                        <template #title>Life Monitor</template>
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
                        <template #title>Mana Monitor</template>
                    </el-menu-item>
                </router-link>
                <router-link :to="{ name: 'flasksLoops' }">
                    <el-menu-item index="3">
                        <el-icon>
                            <svg t="1661199802873" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="7943" width="200" height="200">
                                <path
                                    d="M946.5 505L560.1 118.8l-25.9-25.9c-12.3-12.2-32.1-12.2-44.4 0L77.5 505c-12.3 12.3-18.9 28.6-18.8 46 0.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8 12.1-12.1 18.7-28.2 18.7-45.3 0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204z m217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
                                    p-id="7944"></path>
                            </svg>
                        </el-icon>
                        <template #title>Flasks Loops</template>
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
                <router-link :to="{ name: 'timeRecorder' }">
                    <el-menu-item index="5">
                        <el-icon>
                            <svg t="1661199802873" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="7943" width="200" height="200">
                                <path
                                    d="M946.5 505L560.1 118.8l-25.9-25.9c-12.3-12.2-32.1-12.2-44.4 0L77.5 505c-12.3 12.3-18.9 28.6-18.8 46 0.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8 12.1-12.1 18.7-28.2 18.7-45.3 0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204z m217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
                                    p-id="7944"></path>
                            </svg>
                        </el-icon>
                        <template #title>Time Recorder</template>
                    </el-menu-item>
                </router-link>
                <router-link :to="{ name: 'itemQueryer' }">
                    <el-menu-item index="6">
                        <el-icon>
                            <svg t="1661199802873" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="7943" width="200" height="200">
                                <path
                                    d="M946.5 505L560.1 118.8l-25.9-25.9c-12.3-12.2-32.1-12.2-44.4 0L77.5 505c-12.3 12.3-18.9 28.6-18.8 46 0.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8 12.1-12.1 18.7-28.2 18.7-45.3 0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204z m217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
                                    p-id="7944"></path>
                            </svg>
                        </el-icon>
                        <template #title>Item Queryer</template>
                    </el-menu-item>
                </router-link>
                <router-link :to="{ name: 'settings' }">
                    <el-menu-item index="7">
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
        </el-scrollbar>
        <router-view v-slot="{ Component }" v-if="cfg.enableAnimate">
            <Transition enter-active-class="animate__animated animate__fadeInRight animate__faster"
                leave-active-class="animate__animated animate__fadeOutLeft animate__faster">
                <component :is="Component"></component>
            </Transition>
        </router-view>
        <router-view v-else></router-view>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { config } from '@/config';
let cfg = ref(config);
const scrollbarHeight = ref(528);
window.background.resize((e, newSize) =>
{
    scrollbarHeight.value = newSize[1] - 72;
});

const toggleCollapsed = () =>
{
    console.log(config);

    cfg.value.isPanelCollapsed = !cfg.value.isPanelCollapsed;
}
</script>

<style lang="less" scoped>
@import 'animate.css';

.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}

.container {
    display: flex;
    flex-direction: row;

    .el-scrollbar {
        margin-top: 16px;
        box-shadow: 1px 0px rgba(0, 0, 0, .3);

        .el-menu {
            border: 0;
            overflow-x: hidden;

            .el-menu-item {
                border-radius: 16px;
            }

            div {
                padding-left: 24px;
                padding-top: 12px;
                width: 48px;

                &:hover {
                    cursor: pointer;
                }
            }

        }
    }
}

html.dark {
    .el-scrollbar {
        box-shadow: 1px 0px rgba(255, 255, 255, .1);
    }
}
</style>