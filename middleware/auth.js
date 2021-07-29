export default function ({ store, redirect, route }) {
  let loggedIn = store.getters.loggedIn;
  if (route.name === 'admin' && !loggedIn) {
    redirect('/');
  }
}
