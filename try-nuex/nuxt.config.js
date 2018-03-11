module.exports = {
  build:{
    // vendor表示lib
    vendor:['axios']
  },
  loading:{
    corlor:'#4fc08d',
    failedCorlor:'#bf5050',
    duration:1500
  },
  head:{
    title:'Nuxt vue blog'
  },
  generate:{
    router:[
      '/posts/1'
    ]
  }
}