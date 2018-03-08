<template>
    <ul class="stack">
      <li class="stack-item" :style="[transform(index)]" v-for="(item, index) in pages">
        <div v-html="item.html"></div>
      </li>
    </ul>
  </template>
  <script>
  export default {
    props: {
      stackinit: {
        type: Object,
        default: []
      },
      pages: {
        type: Array,
        default: []
      }
    },
    mounted () {
      this.$on('next', () =>{
        this.next();
      });
      this.$on('prev', ()=>{
        this.prev();
      })
      document
        .addEventListener('touchmove',
        (e) => e.preventDefault())
    },
    methods: {
      transform (index) {
        let style = {
          zIndex: index,
          opacity: 1
        }
        return style;
      },
      prev() {
        console.log('prev');
      },
      next() {
        console.log('next');
      }
      
    }
  }  
  </script>
  <style>
  .stack {
    width: 100%;
    height: 100%;
    position: relative;
    perspective: 1000px;
    perspective-origin:50% 150%;
    -webkit-perspective: 1000px;
    -webkit-perspective-origin:50% 150%;
    margin: 0;
    padding: 0;
  }
  .stack-item {
    position: absolute;
    background: #fff;
    width: 100%;
    height: 100%;
    border-radius:4px;
    text-align: center;
    overflow: hidden;
    opacity: 0;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select:none;
    pointer-events: auto;
  }
  .stack-item img {
    width: 100%;
    display: block;
    pointer-events: none;
  }
  
  </style>
  