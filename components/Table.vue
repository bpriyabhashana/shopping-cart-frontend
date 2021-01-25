<template>
  <v-simple-table style="padding: 25px !important" fixed-header height="600px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center tableHeader">
            Units
          </th>
          <th class="text-center tableHeader">
            Penguin-ears ($)
          </th>
          <th class="text-center tableHeader">
            Horseshoe ($)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableItems" :key="index">
          <td class="text-center">{{ item.amount }}</td>
          <td class="text-center">{{ item.pricePenguin }}</td>
          <td class="text-center">{{ item.priceHorse }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
import { mapState } from "vuex";

export default {
  layout: "layout_index",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tableItems: state => state.price.tableItems
    })
  },
  mounted() {
    this.$store.dispatch("price/getTableItems");
  }
};
</script>
