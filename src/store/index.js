import Vuex from 'vuex'
import packagesData from '@/store/modules/packagesData.module'
import app from '@/store/modules/app.module'

const store = new Vuex.Store({modules: {packagesData, app}})

export default store
