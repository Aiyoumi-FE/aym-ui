<template>
    <div>
        <nav class="navbar  navbar-fixed-top hidden-sm hidden-xs">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand navbar-logo"
                        href="#">
                    <img src="../../assets/logo.gif"
                        alt="">
                </a>
                    <a class="navbar-brand"
                        href="#">
                {{title}}
                 </a>
                </div>
            </div>
        </nav>
        <!-- navbar navbar-inverse -->
        <nav class=" navbar-fixed-top visible-xs visible-sm mobie__navbar ">
            <div class="container-fluid">
                <div class="navbar-header">
                    <slot name="menuButton"></slot>
                    <!--  <a class="navbar-brand"
                        href="#">
                {{title}}
                 </a> -->
                    <a class="navbar-brand navbar-logo"
                        href="#">
                    <img src="../../assets/logo.gif"
                        alt=""><img src="../../assets/logo.gif"
                        alt="">
                </a>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'top',
    props: {
        title: {
            type: String,
            default: 'AYM UI'
        },
        logo: {
            type: String,
            default: ''
        }
    },
    computed: {
        examplesSrc() {
            // return this.origin + '/examples.html#' + this.$route.path
            return this.origin + '#' + this.$route.path
        }
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="scss"
    scoped>
@import 'document/assets/var.scss';

.navbar {
    position: relative;
    min-height: 50px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    box-shadow: 0 0 2px rgba(255, 228, 82, 0.25);
    background-color: #fff;
    border-color: $auiColorPrimary;
}

// mobie
.mobie__navbar {
    height: 50px;
    background-color: #fce601;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    .navbar-logo img {
        vertical-align: bottom;
        width: 40px;
    }
    .navbar-logo img+img {
        width: 20px;
    }
    .navbar-header {
        text-align: center;
    }
    .navbar-brand {
        // line-height: 40px;
        color: #fff;
        float: none;
    }
}

.navbar-header {
    // padding: 15px 0;
}


.navbar-brand {
    font-family: Monaco, "Lucida Console", monospace;

    float: left;
    height: 50px;
    font-size: 18px;
    line-height: 50px;
    color: $auiColorPrimary;
    font-weight: 700;
    &:hover,
    &:focus {
        text-decoration: none;
    }
    overflow: hidden;
}

.navbar-logo {
    padding-right: 0;
    margin-right: 20px;
    img {
        width: 70px;
    }
}

.navbar-fixed-top {
    position: fixed;
    top: 0;
    border-width: 0 0 1px;
    right: 0;
    left: 0;
    z-index: 9;
}
</style>
