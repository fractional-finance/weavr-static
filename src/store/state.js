import {
  whitelistState,
  whitelistGetters,
  whitelistMutations,
  whitelistActions,
  getCookie,
  setCookie,
} from "../whitelist";

function state() {
  return {
    ...whitelistState(),
  };
}

const getters = {
  ...whitelistGetters,
};

const actions = {
  ...whitelistActions({}),
};

const mutations = {
  ...whitelistMutations,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
