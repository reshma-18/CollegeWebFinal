<template>
    <div class="sidebar">
        <ul class="">
            <div class="bars">
                <i class="fa fa-bars"></i>
            </div>
            <router-link
             v-for="item in menuItems"
            :key="item.title"
            :to="item.path"
            :id="item.title"
            tag="li"
            exact
            >
            {{ item.title }}
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            menuItems: [
                { title: "Home", path: "/" },
                { title: "Faculty", path: "/faculty" },
                { title: "Fee Structure", path: "/fee" },
                { title: "About us", path: "/about" },
                { title: "Contact us", path: "/contact" },
                { title: "Admin Section", path: "/admin" },
            ]
        }
    }
    
}
</script>
<style scoped>
.sidebar{
    border: 2px solid red;
    /* text-align: right; */
    background-color: black;
    margin-top: 0;
    /* font-size: 16px; */
    padding: 10px;

}
.sidebar ul li{
    color: white;
    /* border: 1px solid white; */
    padding: 5px;
}
.bars{
    color: white;
    margin-right: 12px;
    text-align: right;
}


</style>