'use strict';

const { createApp } = Vue;

createApp({
    data() {
      return {
        apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail'
      };
    },
    methods:{
        mailGenerator(){
            for(let i = 0; i < 10; i++){
                axios.get(this.apiUrl);
            }
        },
        

    },
  }).mount('#app')