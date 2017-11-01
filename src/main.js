// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import ToggleButton from 'vue-js-toggle-button'

Vue.use(ToggleButton)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCcAUjyfyNfbX9Mu5iB3bAFMRhi9cxshss',
      authDomain: 'frame-824af.firebaseapp.com',
      databaseURL: 'https://frame-824af.firebaseio.com',
      projectId: 'frame-824af',
      storageBucket: 'frame-824af.appspot.com'
    })
  }
})
