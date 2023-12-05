'use strict';

const { createApp } = Vue;

createApp({
    data() {
      return {
        apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
        mails: [],

      };
    },
    mounted(){
        this.mailGenerator()
    },
    methods:{
        mailGenerator(){
            for(let i = 0; i < 10; i++){
                axios.get(this.apiUrl)
                    .then(response => { 
                        console.log(response.data.response);
                        this.mails.push(response.data.response);
                    });
            }
        },
        reloadPage() {
            window.location.reload();
          }
    },
  }).mount('#app')