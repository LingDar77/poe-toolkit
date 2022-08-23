<template >
    <div class="header">
        <el-image :src="'./favicon.ico'" fit="fill" :lazy="true" style="height:16px; width:16px; padding-top:4px">
        </el-image>
        PoE Toolkit
        <span class="btns">
            <el-icon class="dark" size="24px" @click.prevent="toggleDark()">
                <svg v-if="!isDark" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
                    <path fill="currentColor"
                        d="M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z">
                    </path>
                </svg>
                <svg v-else viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
                    <path fill="currentColor"
                        d="M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z">
                    </path>
                </svg>
            </el-icon>
            <el-icon class="min" size="24px" @click="minimize">
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
                    <path fill="currentColor" d="M128 448h768q64 0 64 64t-64 64H128q-64 0-64-64t64-64z"></path>
                </svg>
            </el-icon>
            <el-icon size="24px" class="max" @click="maximize">
                <svg v-if="maximized" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
                    <path fill="currentColor"
                        d="M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0v672z"></path>
                    <path fill="currentColor"
                        d="M832 224v704a32 32 0 1 1-64 0V256H96a32 32 0 0 1 0-64h704a32 32 0 0 1 32 32z"></path>
                </svg>
                <svg v-else viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
                    <path fill="currentColor"
                        d="m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z">
                    </path>
                </svg>
            </el-icon>
            <el-icon size="24px" class="close" @click="close">
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
                    <path fill="currentColor"
                        d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z">
                    </path>
                </svg>
            </el-icon>
        </span>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);

let maximized = ref(false);
const minimize = () =>
{
    window.background.ipc.send('window.minimize');
}

const maximize = () =>
{
    window.background.ipc.send('window.maximize', maximized.value);
    maximized.value = !maximized.value;
}
const close = () =>
{
    window.background.ipc.send('window.close');
}


window.background.maximized((e, max) =>
{
    maximized.value = max;
});


</script>

<style lang="less" scoped>

.header {
    padding: 4px;
    margin-bottom: 1px;
    -webkit-app-region: drag;
    box-shadow: 0px 1px rgba(0, 0, 0, 0.2);

    .btns {
        float: right;

        .el-icon {
            margin-left: 8px;
            border-radius: 3px;

            &:hover {
                background-color: rgba(128, 128, 128, .3);
                cursor: pointer;
            }

            &:last-of-type {
                &:hover {
                    background-color: rgba(255, 0, 0, .5);
                }
            }

            -webkit-app-region: no-drag;
        }
    }
}

html.dark {
    .header {
        box-shadow: 0px 1px rgba(255, 255, 255, 0.2);

        .btns {
            .el-icon {
                &:hover {
                    background-color: rgba(255, 255, 255, .3);
                }
            }
        }
    }
}
</style>