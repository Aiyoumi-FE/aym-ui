<template>
    <ul class="menu-root">
        <li v-for="(item,key) in config"
            :key="key">
            <p class="menu__group__title">{{item.title}}</p>
            <ul class="menu__group__item">
                <li v-for="(sub,key) in item.list"
                    :key="key">
                    <router-link :to="{path: sub.path}">
                        {{sub.name}}
                    </router-link>
                </li>
            </ul>
        </li>
    </ul>
</template>
<script>
export default {

    name: 'side',
    props: {
        config: {
            type: Array

        }
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="scss">
@import 'document/assets/var.scss';

.menu-root {
    padding: 0 40px;
}

.menu-root li {
    list-style: none;
}

.menu__group__title {
    font-weight: 600;
    color: $auiTextColorGeneral;
}

.menu__group__item {
    font-weight: 400;
    padding-left: 20px;
    a {
        font-size: 16px;
        color: $auiTextColorGeneral;
        &.active {
            color: $auiColorPrimary;
        }
    }
}
</style>
