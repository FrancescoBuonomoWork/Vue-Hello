console.log('funziona');
  //  destrutturazione / createapp è una proprieta dell oggetto vue
const { createApp } = Vue

createApp({
    data() {
      return {
        message: 'Hello Vue!',
        imgSrc: 'https://picsum.photos/200/300',
        bgGreen: 'bg-green',
        inputValue:'cosa vedi nell \' immagine ',
        numA: 2,
        numB: 6,
      }
    },
    methods: {
        onClick () {
            console.log('hai vinto un milione di euro');
        },
        somma (a, b) {
            return a + b
        },
        
    }
  }).mount('#app')