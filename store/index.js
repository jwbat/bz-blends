import { db } from '@/services/fireinit.js'

export const state = () => ({
  loggedIn: false,
  hours: [],
  menu: [],
  images: [
    '/mtAdams.jpg', 
    '/truck.jpg', 
    '/service.jpg', 
    '/fancy.jpg',
    '/whipped.jpg',
  ],
})

export const mutations = {
  setLoggedIn(state, payload) {
    state.loggedIn = payload;
  },
  setHours(state, hours) {
    state.hours = hours;
  },
  setMenu(state, menu) {
    state.menu = [ ...menu ];
  },
  setId(state, userId) {
    state.userId = userId;
  },
  setSigningIn(state, payload) {
    state.localStorage.signingIn = payload;
  }
}

export const actions = {

  async nuxtServerInit({ commit }) {
    let menu; let hours;

    await db.collection('menu')
      .doc('m')
      .get()
      .then(doc => {
        menu = Array.from(Object.values(doc.data()));
        commit('setMenu', menu);
      })
      .catch(err => console.log(err.message));

    await db.collection('hours')
      .doc('h')
      .get()
      .then(doc => {
        hours = Array.from(Object.values(doc.data()));
        commit('setHours', hours);
      })
      .catch(err => console.log(err.message));
    return ;
  },

  async login({ commit }, email) {
    let approved = await db.collection('users')
      .doc(email)
      .get()
      .then(doc => doc.exists)
      .catch(err => console.log(err.message));

    if (approved) {
      commit('setLoggedIn', true);
    }
  },

  logout({ commit }) {
    commit('setLoggedIn', false);
    commit('setSigningIn', false);
  },

  setSigningIn({ commit }, payload) {
    commit('setSigningIn', payload);
  },

  setItems({ dispatch }, { hours, menu }) {
    dispatch('editHours', hours); // firebase
    dispatch('editMenu', menu);   // firebase
    dispatch('setHours', hours);  // store
    dispatch('setMenu', menu);    // store
  },

  editHours(context, hours) {
    const hoursRef = db.collection('hours').doc('h');
    hoursRef.set({ ...hours })
      .catch(err => console.log(err.message));
  },

  editMenu(context, menu) {
    const menuRef = db.collection('menu').doc('m');
    menuRef.set({ ...menu })
      .catch(err => console.log(err.message));
  },

  setHours({ commit }, hours) {
    commit('setHours', hours);
  },

  setMenu({ commit }, menu) {
    commit('setMenu', menu);
  },
}

export const getters = {
  loggedIn(state) {
    return state.loggedIn;
  },
  menu(state) {
    return state.menu;
  },
  hours(state) {
    return state.hours;
  },
  signingIn(state) {
    return state.localStorage.signingIn;
  },
  images(state) {
    return state.images.slice(0, 3); 
  },
  foodImages(state) {
    return state.images.slice(3); 
  }
}
