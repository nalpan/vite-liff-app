import { createApp } from 'vue'
import App from './App.vue'
import liff from '@line/liff'



async function main(){
  await liff.init({
    liffId: '1656795481-GomBd7X9', // Use own liffId
  })

  if(liff.isInClient() && !liff.isLoggedIn()){
    liff.login()
  } else {
    const props = {
      getLanguage: liff.getLanguage(),
      getVersion: liff.getVersion(),
      isInClient: liff.isInClient(),
      isLoggedIn: liff.isLoggedIn(),
      getLineVersion: liff.getLineVersion()
    }
    createApp(App, props).mount('#app')
  }
}

main()
