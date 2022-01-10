import { createApp } from 'vue'
import App from './App.vue'
import liff from '@line/liff'



async function main(){
  createApp(App).mount('#app')

  await liff.init({
    liffId: '1656795481-GomBd7X9', // Use own liffId
  })
  
  if(!liff.isLoggedIn()){
    liff.login()
  }else{
    console.log(liff.getLanguage());
    console.log(liff.getVersion());
    console.log(liff.isInClient());
    console.log(liff.isLoggedIn());
    console.log(liff.getOS());
    console.log(liff.getLineVersion());
  }
}

main()
