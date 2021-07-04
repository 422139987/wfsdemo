import Vue from 'vue'
import App from './App.vue'
import Wfs from './lib/wfs'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted() {
    if (Wfs.isSupported()) {
      var video1 = document.getElementById("video1"),
        wfs = new Wfs();
      wfs.attachMedia(video1, 'ch1');

      var video2 = document.getElementById("video2"),
        wfs2 = new Wfs();
      wfs2.attachMedia(video2, 'ch2');
    }
  }
}).$mount('#app')
