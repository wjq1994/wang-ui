<template>
    <!-- icon-font -->
    <svg class="wang-icon" aria-hidden="true">
        <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
</template>

<script>
import '../styles/icon'
export default {
    name:'wang-icon',
    props:{
        icon:{
            type:String,
            required:true
        }
    }
}
</script>

<style lang="scss">
.wang-icon{
    width: 25px;
    height:25px;
    vertical-align: middle;
}
</style>