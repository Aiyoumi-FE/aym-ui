<template>
    <m-page>
        <m-header slot="header"></m-header>
        <demo-content>
            <p>自动无限loop</p>
            <div class="swiper_container swiper_1">
                <m-swiper :dataList="dataList"></m-swiper>
            </div>
            <!-- <p>自动无限loop 每帧尺寸不一致</p>
            <div class="swiper_container swiper_2">
                <m-swiper :dataList="dataList3"></m-swiper>
            </div> -->
            <!-- <div class="swiper_container swiper_3">
                <m-swiper :dataList="dataList3"></m-swiper>
            </div> -->
            <!-- <m-swiper :dataList="dataList"></m-swiper>
            <m-swiper :dataList="dataList"></m-swiper>
            <m-swiper :dataList="dataList"></m-swiper> -->
        </demo-content>
    </m-page>
</template>
<script>
export default {
    name: 'demo-swiper',
    data() {
        return {
            isCheck: true,
            isCheck2: true,
            isCheck3: false,
            dataList: [{ title: "出行大礼包", img: "https://img.aiyoumi.com/null/20180118/165014999/20181108165014_560x220.jpg?height=220&width=560", bannerType: "1", bannerValue: "https://wx.17u.cn/groundtrafficAct/collegeActivity#/" }, { title: "【认证专享】喜马拉雅7天会员", img: "https://img.aiyoumi.com/null/201882/2047511/20180802204750_560x220.png?height=220&width=560", bannerType: "1", bannerValue: "https://m.aiyoumi.com/cms/renderPage?alias=rzlxmlyyh" }, { title: "中食旅游卡", img: "https://img.aiyoumi.com/null/2018830/163206642/20180830163206_560x220.png?height=220&width=560", bannerType: "2", bannerValue: "49" }],
            // dataList: [{ title: "出行大礼包", img: "https://img.aiyoumi.com/null/20180118/165014999/20181108165014_560x220.jpg?height=220&width=560", bannerType: "1", bannerValue: "https://wx.17u.cn/groundtrafficAct/collegeActivity#/" }]
            dataList2: [{"id":"20655399","productId":"10175653","img":"https://img.aiyoumi.com/merchant/20180113/000500374/154117470036714898.jpg","thumb":"https://img.aiyoumi.com/merchant/20180113/000500374/154117470036714898.jpg?x-oss-process=image/resize,w_290","convertUrl":"https://img.aiyoumi.com/merchant/20180113/000500374/154117470036714898.jpg"},{"id":"20655400","productId":"10175653","img":"https://img.aiyoumi.com/merchant/2018112/175930871/151575117086717249.JPG","thumb":"https://img.aiyoumi.com/merchant/2018112/175930871/151575117086717249.JPG?x-oss-process=image/resize,w_290","convertUrl":"https://img.aiyoumi.com/merchant/2018112/175930871/151575117086717249.JPG"},{"id":"20655401","productId":"10175653","img":"https://img.aiyoumi.com/merchant/2018112/17595329/151575119302587821.jpg","thumb":"https://img.aiyoumi.com/merchant/2018112/17595329/151575119302587821.jpg?x-oss-process=image/resize,w_290","convertUrl":"https://img.aiyoumi.com/merchant/2018112/17595329/151575119302587821.jpg"},{"id":"20655402","productId":"10175653","img":"https://img.aiyoumi.com/merchant/2018112/175953648/151575119364438635.JPG","thumb":"https://img.aiyoumi.com/merchant/2018112/175953648/151575119364438635.JPG?x-oss-process=image/resize,w_290","convertUrl":"https://img.aiyoumi.com/merchant/2018112/175953648/151575119364438635.JPG"}],
            dataList3: [{
                "id":121,"productId":333,"thumb":"图片缩略图链接地址","img":"https://img.aiyoumi.com/null/2017515/165057206/20170515165056_750x750.png?height=750&width=750"
            }, {
                "id":121,"productId":333,"thumb":"图片缩略图链接地址","img":"https://img.aiyoumi.com/null/2017515/165212846/20170515165212_750x750.png?height=750&width=750"
            }, {
                "id":121,"productId":333,"thumb":"图片缩略图链接地址","img":"https://img.aiyoumi.com/null/2017515/165230471/20170515165230_674x601.png?height=601&width=674"
            }, {
                "id":121,"productId":333,"thumb":"图片缩略图链接地址","img":"https://img.aixuedai.com/null/201768/122629649/20170608122629_573x750.png?height=750&width=573"
            }]
        }
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
.content-wrap {
    background-color: #fff;
}
.swiper_container {
    text-align: center;
}
.swiper_1 {
    // width: 300px;
    margin: 0 auto;
}
.swiper_2 {
    width: 100%;
    height: 200px;
    border: 1px solid red;
}
</style>
