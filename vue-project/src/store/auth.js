import axios from "axios";
import Cookies from "js-cookie";

export default {
  namespaced: true,
  state() {
    return {
      token: null,
      tokenExpirationDate: null,
      userLogin: {},
      isLogin: false,
    };
  },
  mutations: {
    setToken(state, { idToken, expiresIn }) {
      state.token = idToken;
      state.tokenExpirationDate = expiresIn;
      Cookies.set("tokenExpirationDate", expiresIn);
      Cookies.set("jwt", idToken);
    },

    setUserLogin(state, { userData, loginStatus }) {
      state.userLogin = userData;
      state.isLogin = loginStatus;
    },

    setUserLogout(state) {
      state.token = null;
      state.userLogin = {};
      state.isLogin = false;
      state.tokenExpirationDate = null;
      Cookies.remove("jwt");
      Cookies.remove("tokenExpirationDate");
      Cookies.remove("UID");
    },
  },
  actions: {
    async getRegisterData({ commit, dispatch }, payload) {
      const APIkey = "AIzaSyCLGuEj09xdc7-egK0cHuF4fq70xfMp2TA";
      const authUrl =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
      try {
        const { data } = await axios.post(authUrl + APIkey, {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        });

        commit("setToken", {
          idToken: data.idToken,
          expiresIn:
            new Date().getTime() + Number.parseInt(data.expiresIn) * 1000,
        });

        const newUserData = {
          userId: data.localId,
          fullname: payload.fullname,
          username: payload.username,
          email: payload.email,
          imageLink: payload.imageLink,
        };

        Cookies.set("UID", newUserData.userId);
        await dispatch("addNewUser", newUserData);
      } catch (err) {
        console.log(err);
      }
    },

    async addNewUser({ commit, state }, payload) {
      try {
        const { data } = await axios.post(
          `https://fe-final-test-dc7df-default-rtdb.firebaseio.com/user.json?auth=${state.token}`,
          payload
        );

        commit("setUserLogin", { userData: payload, loginStatus: true });
      } catch (err) {
        console.log(err);
      }
    },

    async getLoginData({ commit, dispatch }, payload) {
      const APIkey = "AIzaSyCLGuEj09xdc7-egK0cHuF4fq70xfMp2TA";
      const authUrl =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
      try {
        const { data } = await axios.post(authUrl + APIkey, {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        });
        commit("setToken", {
          idToken: data.idToken,
          expiresIn:
            new Date().getTime() + Number.parseInt(data.expiresIn) * 1000,
        });

        await dispatch("getUser", data.localId);
      } catch (err) {
        console.log(err);
      }
    },

    async getUser({ commit }, payload) {
      try {
        const { data } = await axios.get(
          `https://fe-final-test-dc7df-default-rtdb.firebaseio.com/user.json`
        );

        for (let key in data) {
          if (data[key].userId === payload) {
            Cookies.set("UID", data[key].userId);
            console.log(data[key]);
            commit("setUserLogin", { userData: data[key], loginStatus: true });
          }
        }
      } catch (err) {
        console.log(err);
      }
    },

    async editUser({ commit, state }, payload) {
      try {
        const { data } = await axios.put(
          `https://fe-final-test-dc7df-default-rtdb.firebaseio.com/user/${state.userLogin.userId}.json?auth=${state.token}`,
          payload
        );

        // const editUserData = {
        //   fullname: payload.fullname,
        //   username: payload.username,
        //   email: payload.email,
        //   imageLink: payload.imageLink,
        // };

        commit("setUserLogin", { userData: data, loginStatus: true });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
