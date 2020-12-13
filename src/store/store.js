import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            {id: '1', name: 'macbook air', price: 2000},
            {id: '2', name: 'macbook pro', price: 3000},
            {id: '3', name: 'iphone', price: 1000}
          ]
    }

})
