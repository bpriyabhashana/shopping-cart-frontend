export const state = () => ({
  allItems: [],
  cartPrice: {},
  tableItems: [
    {
      productId: "",
      productPriceMap: [{ amount: 0, price: 0 }]
    }
  ]
});

export const mutations = {
  SET_ALL_ITEMS(state, responseData) {
    state.allItems = responseData;
  },
  SET_TABLE_ITEMS(state, responseData) {
    state.tableItems = responseData;
  },
  SET_CART_PRICE(state, responseData) {
    state.cartPrice = responseData;
  }
};

export const actions = {
  async getAllItems({ commit, rootState }) {
    let itemResponse;
    try {
      itemResponse = await this.$axios.$get(`items/allItems`);

      commit("SET_ALL_ITEMS", itemResponse.data);
    } catch (e) {
      console.log("Error fetching all items", e);
    }
  },
  async getTableItems({ commit, rootState }) {
    let itemResponse;
    try {
      itemResponse = await this.$axios.$get(`items/tableItems`);

      commit("SET_TABLE_ITEMS", itemResponse.data);
    } catch (e) {
      console.log("Error fetching table items", e);
    }
  },
  async getCartPrice({ commit, rootState }, { penguinUnits, horseUnits }) {
    let cartPriceResponse;
    try {
      cartPriceResponse = await this.$axios.$get(
        `items/cartPrice?penguinUnits=${penguinUnits}&horseUnits=${horseUnits}`
      );

      commit("SET_CART_PRICE", cartPriceResponse.data);
    } catch (e) {
      console.log("Error fetching cart price", e);
    }
  }
};
