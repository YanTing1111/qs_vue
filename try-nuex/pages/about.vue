<template>
  <div>
    <p>Hi, from {{name}}</p>
    <nuxt-link to="/">Back Home</nuxt-link>
  </div>
</template>
<script>
    export default{
        asyncData(){
            // nuxt 本质是将.vue交给后端去渲染
            // webpack werver-side-renderer
            // react里有一个生态next.js
            // .vue => html/css/js
            // 区分 前端？后端？
            return{
                name:process.static ? 'static':(process.server ?
                'server':'client')
            }
        },
        head:{
            title:'About page'
        }
    }
</script>
<style>

</style>