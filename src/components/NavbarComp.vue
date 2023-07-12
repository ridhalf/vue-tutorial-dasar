<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="">Belajar</b-navbar-brand>
        <b-navbar-nav v-for="item in items" :key="item.routes">
            <b-nav-item :href="item.routes">{{ item.text }}</b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default{
    data(){
        return{
            items:[
                {
                    text:'Dasboard',
                    routes:'/'
                },
                {
                    text:'Product',
                    routes:'/product'
                }
            ]
        }
    }
}
</script>