<template>
    <div id="app">
        <div class='contentWrap'>
            <router-view/>
        </div>
    </div>
</template>

<script>
import headerBox from "@/modules/Header"
export default {
    name: 'App',
    data() {
        return {

        }
    },

}
</script>

<style lang='less' scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    height: 100%;
    .contentWrap {
        width: 1366px;
        height: 100%;
        margin: 0 auto;
    }
}
</style>
<style>
@import "./assets/less/theme.less";
</style>

