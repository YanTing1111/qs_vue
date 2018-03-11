<template>
  <div class="container">
    <h1>user agent</h1>
    <p>{{userAgent}}</p>
    <p>
      <nuxt-link to="/posts">Blog</nuxt-link>
    </p>
  </div>
</template>
<script>
  export default{
    asyncData:({req}) => ({
      userAgent:(req? req.headers['user-agent']:(typeof navigator !== 
      undefined? navigator.userAgent:'no user agennt(generate)'))
    })
  }
</script>
<style>

</style>