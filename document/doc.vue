<template>
    <!-- :demoUrl="dUrl" -->
    <adoc :navs="navs"
        :demoUrl="demoUrl"
        :topOptions="{
            logo:require('./assets/logo.gif'),
            title:'AYM UI'
        }">
        <router-view />
    </adoc>
</template>
<script>
import { navs } from './router'
export default {
    name: 'documentApp',
    data() {
        return {
            navs
        }
    },
    computed: {
        demoUrl() {
            return window.location.pathname.replace('document.html', 'examples.html')
        }
    },
    method: {}
}
</script>
<style>
body {
    padding-top: 80px;
}

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

:after,
:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

.menu-button {
    vertical-align: middle;
    float: left;
    width: 20px;
    height: 50px;
    padding-top: 17px;
    cursor: pointer;
}

.menu-button i {
    background: #fff;
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 1px;
}

.menu-button i+i {
    margin-top: 5px;
}

@media (max-width: 991px) {
    .sidebar {
        position: fixed;
        z-index: 10;
        background-color: #f9f9f9;
        height: 100%;
        overflow-y: scroll;
        top: 0;
        left: 0;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        transform: translate(-100%, 0);
        transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
    }

    .sidebar.open {
        display: block !important;
        transform: translate(0, 0);
    }
}


.viewbox {
    z-index: 1;
    overflow: hidden;
    position: absolute;
    border-radius: 6px;
    background: #f2f2f4;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    right: 30px;
    width: 375px;
    min-width: 375px;
    -webkit-box-shadow: 0 2px 3px hsla(0, 0%, 4%, .1), 0 0 0 1px hsla(0, 0%, 4%, .1);
    box-shadow: 0 2px 3px hsla(0, 0%, 4%, .1), 0 0 0 1px hsla(0, 0%, 4%, .1)
}


.viewbox-fixed {
    position: fixed;
    top: 80px
}

.viewbox iframe {
    width: 100%;
    display: block
}

.viewbox__nav {
    height: 63px;
    background: url('data:image/png;base64,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') no-repeat;
    background-size: 100%;
    border-bottom: 1px solid #e5e5e5
}

.viewbox__url {
    left: 20px;
    top: 25px;
    right: 40px;
    font-size: 15px;
    position: absolute;
    text-align: center;
    font-weight: 700;
    line-height: 28px;
    font-family: PingFang SC, Helvetica Neue, Helvetica, Arial, sans-serif;
    white-space: nowrap;
    overflow: hidden;
    /*overflow-x: scroll;*/
    text-overflow: ellipsis;
}

@media (max-width:1300px) {
    .viewbox__url {
        top: 21px;
        line-height: 24px
    }
}

.viewbox__reload {
    font-weight: 700;
    top: 25px;
    right: 10px;
    width: 28px;
    height: 28px;
    cursor: pointer;
    position: absolute
}
</style>
