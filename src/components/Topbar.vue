<template >
    <div class="header">
        <el-image :src="'./favicon.ico'" fit="fill" :lazy="true" style="height:16px; width:16px; padding-top:4px">
        </el-image>
        PoE Toolkit
        <span class="btns">
            <el-icon class="min" size="24px" @click="minimize">
                <svg t="1661196185865" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="7383" width="200" height="200">
                    <path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"
                        p-id="7384"></path>
                </svg>
            </el-icon>
            <el-icon size="24px" class="max" @click="maximize">
                <svg v-if="maximized" t="1661196217133" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="7661" width="200" height="200">
                    <path
                        d="M326 664H104c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h174v176c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V696c0-17.7-14.3-32-32-32zM342 88h-48c-8.8 0-16 7.2-16 16v176H104c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h222c17.7 0 32-14.3 32-32V104c0-8.8-7.2-16-16-16zM920 664H698c-17.7 0-32 14.3-32 32v224c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V744h174c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zM920 280H746V104c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v224c0 17.7 14.3 32 32 32h222c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16z"
                        p-id="7662"></path>
                </svg>
                <svg v-else t="1661196203884" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="7522" width="200" height="200">
                    <path
                        d="M342 88H120c-17.7 0-32 14.3-32 32v224c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V168h174c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zM920 664h-48c-8.8 0-16 7.2-16 16v176H682c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h222c17.7 0 32-14.3 32-32V680c0-8.8-7.2-16-16-16zM342 856H168V680c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v224c0 17.7 14.3 32 32 32h222c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zM904 88H682c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h174v176c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V120c0-17.7-14.3-32-32-32z"
                        p-id="7523"></path>
                </svg>
            </el-icon>
            <el-icon size="24px" class="close" @click="close">
                <svg t="1661196173374" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="7244" width="200" height="200">
                    <path
                        d="M563.8 512l262.5-312.9c4.4-5.2 0.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9c-4.4 5.2-0.7 13.1 6.1 13.1h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
                        p-id="7245"></path>
                </svg>
            </el-icon>
        </span>
    </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";

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


window.background.resized((e, max) =>
{
   maximized.value = max;
});


</script>

<style lang="less" scoped>
.header {
    padding: 4px;
    -webkit-app-region: drag;
    box-shadow: 0px 4px rgba(0, 0, 0, 0.2);

    .btns {
        float: right;

        .el-icon {
            margin-left: 8px;
            border-radius: 3px;

            &:hover {
                background-color: rgba(255, 255, 255, .3);
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
</style>