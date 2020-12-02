import fetch from '@services/api'

const defaultState = {
  formError: false,
  userToken: undefined,
  msgError: '',
  user: {
    avatar: undefined,
    doctor_id: undefined,
    adm: undefined,
    name: undefined,
    id: undefined
  }
};

const actions = {
  authenticate: (context, payload) => {
    fetch.post('auth/login', {
      email: payload.user,
      password: payload.password
    })
    .then((res) => {
      if(res.data.status === 'success') {
        context.commit('TOKEN_USER', res.data.Authorization );
        context.commit('DATA_USER', res.data.user)
        context.commit('AUTHENTICATE_ERROR', false);
      } else {
        context.commit('MSG_ERROR', 'Usuário ou senha inválidos!');
        context.commit('AUTHENTICATE_ERROR', true);
      }
    })
    .catch((err) => {
      if(err) {
        context.commit('AUTHENTICATE_ERROR', true);
        context.commit('MSG_ERROR', 'Usuário ou senha inválidos!');
      }
    });
  },
};

const mutations = {
  DATA_USER: (state, user) => state.user = user,
  AUTHENTICATE_ERROR: (state, status) => state.formError = status,
  TOKEN_USER: (state, token) => state.userToken = token,
  MSG_ERROR: (state, msg) => state.msgError = msg
};

const getters = {
  formError: state => state.formError,
  token: state => state.userToken,
  msgError: state => state.msgError
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};