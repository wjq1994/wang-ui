<template>
    <div class="wang-row" :style="rowStyl">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'wang-row',
    props: {
        gutter:{
            type:Number,
            default:0
        },
        justify:{
            type:String,
            validator(type){
                if(type && !['start','end','center','space-around','space-between'].includes(type)){
                    console.error('类型必须是:'+['start','end','center','space-around','space-between'].join('、'))
                }
                return true
            }
        }
    },
    computed:{
        rowStyl(){
            let style = {};
            //原理：block元素且没有指定width，则p的width+padding+border+margin=父级div的width
            if(this.gutter){
                style = {
                    ...style,
                    marginLeft:-this.gutter/2+'px',
                    marginRight:-this.gutter/2+'px'
                }
            }
            if(this.justify){
                let key = ['start','end'].includes(this.justify)?'flex-'+this.justify :this.justify
                style = {
                    ...style,
                    justifyContent:key
                }
            }
            return style; // 通过外层的margin 负值 解决内部padding的问题
        }
    },
    mounted(){
        this.$children.forEach(child=>{
            child.gutter = this.gutter
        });
    }
}
</script>

<style lang="scss">
    .wang-row {
        display: flex;
        overflow: hidden;
        flex-wrap: wrap;
    }
</style>