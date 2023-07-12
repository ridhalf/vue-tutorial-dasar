<template>
    <div>
        <Navbar/>
        <b-container>
            <router-view></router-view>
        </b-container>
        
    </div>
</template>
<script>
import Navbar from '../components/NavbarComp.vue'
export default{
    components:{
        Navbar
    }
}
</script>