console.log('funziona');
  //  destrutturazione / createapp è una proprieta dell oggetto vue
const { createApp } = Vue

createApp({
    data() {
      return {
        message: 'Hello Vue!',
        imgSrc: 'https://picsum.photos/200/300'
      }
    }
  }).mount('#app')