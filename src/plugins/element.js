import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale'
import lang from '../assets/lang/uz-cyril-UZ'
Vue.use(Element, { locale })
locale.use(lang)