<template>
    <div class="tab-bar-item" @click=itemclick()>
        <div v-if="!isActive"><slot name='item-icon'></slot></div>
        <div v-else><slot name='item-icon-active'></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
        <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
        <div>首页</div> -->
    </div>
</template>>


<script>
export default {
    name: 'TabBarItem',
    props: {
        path: String,
        activeColor: {
            type: String,
            default: 'red'
        }
    },
    data() {
        return {
            //
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {
            return this.isActive ? {color: this.activeColor} : {}
        }
    },
    methods: {
        itemclick() {
            // console.log(this.path)
            console.log(this.$route)
            this.$router.replace(this.path)
            console.log('itemclick')
        }
    },
    
}
</script>

<style scoped>
    .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;
    }
    .tab-bar-item img{
        width: 24px;
        height: 24px;
        /* virtical-align: middle; */
        margin-top: 3px;
    }


</style>