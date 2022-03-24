import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont' 
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'md' || 'fa'
  }
});
