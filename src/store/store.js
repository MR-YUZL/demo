import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state,step) {
            state.count += step
        }
    },
    actions: {
        incrementN(context, step) {
            console.log('context',context)
            setTimeout(() => {
                context.commit('increment',step)
            }, 1000);
        }
    }
})

export default store