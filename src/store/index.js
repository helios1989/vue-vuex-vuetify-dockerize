import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '@/router';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        recipes: [],
        apiUrl: 'https://api.edamam.com/search',
        isAuthenticated: false,
        user: []
    },
    mutations: {
        setRecipes(state, payload) {
            state.recipes = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload;
        },
        setUserRecipes(state, payload) {
            state.userRecipes = payload;
        }
    },
    actions: {
        async getRecipes({ state, commit }, plan) {
            try {
                let response = await axios.get(`${state.apiUrl}`, {
                    params: {
                        q: plan,
                        app_id: '5b6623d5',
                        app_key: '46674aa2193dbb7b88ffd897331e661a',
                        from: 0,
                        to: 100
                    }
                });
                commit('setRecipes', response.data.hits);
            } catch (error) {
                commit('setRecipes', []);
            }
        },
        userLogin({ commit }, { email, password }) {
            console.log(email, password);
            commit('setUser', email);
            commit('setIsAuthenticated', true);
            router.push('/about');
        },
        userJoin({ commit }, { email, password }) {
            // firebase
            // user join and authenticated
            console.log(password);
            commit('setUser', email);
            commit('setIsAuthenticated', true);
            router.push('/about');
        },
        userSignOut({ commit }) {
            // userSignOut
            commit('setUser', null);
            commit('setIsAuthenticated', false);
            router.push('/');
        },
        addRecipe({ state }, payload) {
            console.log(state, payload);
        },
        getUserRecipes({ state, commit }) {
            console.log(state);
            commit('setUserRecipes', [
                {recipe:'vegan'},
                {recipe:'keto'}
            ]);
        }
    },
    getters: {
        isAuthenticated(state) {
            console.log(this);
            console.log('add');
            return state.user !== null && state.user !== undefined;
        }
    }
});