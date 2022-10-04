import WalletState from "../models/walletState";
import ServiceProvider from "../services/provider";
import { CONTRACTS, DAO } from "../services/constants";
const {getMetaMaskProvider, getCoinbaseWalletProvider, getBraveProvider} = require("../data/web3/ethereum/providers.js")

import {
  whitelistState,
  whitelistGetters,
  whitelistMutations,
  whitelistActions,
  getCookie,
  setCookie,
} from "../whitelist";


const wallet = ServiceProvider.wallet();

function state() {
  return {
    user: {
      wallet: WalletState
    },
    ...whitelistState(),
  };
}

const getters = {
  ...whitelistGetters,
  userWalletAddress(state) {
    return state.user.wallet.address;
  },
  assetTokenSymbol(state) {
    return state.user.wallet.tokenSymbol;
  },
  userEthBalance(state) {
    return state.user.wallet.ethBalance;
  },
  async syncWallet(context, params) {
    console.log("SYNC");
    let { $toast} = params
    // const toast = createToaster({});
    let walletState = await wallet.getState(params.wallet);
    const symbol = await token.getTokenSymbol(CONTRACTS.FRBC);
    const balance = await token.getTokenBalance(
      CONTRACTS.FRBC,
      walletState.address
    );
    Promise.all([walletState, symbol, balance]).then(
      (val) => {
        console.log(val);
      }
    )
    
    walletState = new WalletState(
      walletState.address,
      walletState.ethBalance,
      ethers.utils.formatEther(balance).toString(),
      symbol
    );
    context.commit("setWallet", walletState);
    console.log(await wallet.getState());
    $toast.clear();
    $toast.success("Wallet fully synced", {
      duration: 1000,
      position: "top",
    });
  },

};

const actions = {
  ...whitelistActions({}),
};

const mutations = {
  ...whitelistMutations,
  setWallet(state, wallet) {
    state.user.wallet = wallet;
  },
  setEthBalance(state, ethBalance) {
    state.user.wallet.ethBalance = ethBalance;
  },
  setTokenBalance(state, balance) {
    state.user.wallet.tokenBalance = balance;
  },
  setTokenSymbol(state, symbol) {
    state.user.wallet.tokenSymbol = symbol;
  },
  setWalletConnetected(state) {
    if(state.user.wallet.connected != "null")
    !state.user.wallet.connected;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
