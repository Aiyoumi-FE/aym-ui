<template>
    <div id="app">
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'app'
}
</script>
<style>
html,
body {
    height: 100%;
}

body {
    position: relative;
    width: 16rem;
    margin: 0 auto;
}

h4 {
    font-weight: normal;
    font-size: 16px;
    padding: 10px;
    color: #999
}

h5 {
    font-weight: normal;
    font-size: 16px;
    padding: 0 20px 10px;
    color: #999
}



/* 左右滑动 */

.router-slide-enter-active,
.router-slide-leave-active {
    transition: all .5s;
}

.router-slide-enter,
.router-slide-leave-active {
    transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .3s ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0
}

.slide-enter-active {
    transition: all .5s ease;
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
}

.slide-enter {
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
}

.slide-up-enter-active {
    transition: all .3s ease;
}

.slide-up-enter,
.slide-up-leave-active {
    transition: all .3s ease;
    -webkit-transform: translate(0, 100%);
    transform: translate(0, 100%);
}
</style>
