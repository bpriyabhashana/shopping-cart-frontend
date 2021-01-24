export const state = () => ({
  allItems: []
});

export const mutations = {
  SET_ALL_ITEMS(state, responseData) {
    state.allItems = responseData;
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
  }
};
