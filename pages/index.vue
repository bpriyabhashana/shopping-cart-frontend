<template>
  <v-row justify="center" align="center">
    <v-col>
      <v-row class="mt-10" justify="center">
        <!-- ---------------- Penguin-ears Card ---------------- -->
        <v-col v-for="(item, index) in allItems" :key="index">
          <v-card elevation="5" class="mx-auto" width="100%" min-height="175px">
            <v-list-item>
              <v-list-item-avatar size="50" style="border: 1px solid #191b73">
                <v-img :src="item.imageUrl"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="priceCardTitle">
                  {{ item.productId }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  A carton contains {{ item.cartonAmount }} units
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-row class="ml-2 " justify="center" align="center">
              <v-col>
                <v-list-item>
                  <v-list-item-action>
                    <div class="priceSection">
                      <v-list-item-title class="priceCardPriceTag"
                        >$ {{ item.cartonPrice }}</v-list-item-title
                      >
                      <v-list-item-subtitle
                        >For one carton</v-list-item-subtitle
                      >
                    </div>
                  </v-list-item-action>
                  <v-list-item-content>
                    <div class="addToCartBtn">
                      <v-btn outlined color="#191B73" to="/shopping-cart"
                        >Add to Cart</v-btn
                      >
                    </div>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
            <div class="discuontMessage">
              Buy 3+ cartons & get 10% Discount
            </div>
          </v-card>
        </v-col>
        <!-- ---------------- Horseshoe Card ---------------- -->
        <!-- <v-col>
          <v-card elevation="5" class="mx-auto" width="100%" min-height="175px">
            <v-list-item>
              <v-list-item-avatar size="50" style="border: 1px solid #191b73">
                <v-img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0O2bkbB_4TJho1HcutoNoSlpMnzJ3WmLcw&usqp=CAU"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="priceCardTitle">
                  Horseshoe
                </v-list-item-title>
                <v-list-item-subtitle>
                  A carton contains 5 units
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-row class="ml-2 " justify="center" align="center">
              <v-col>
                <v-list-item>
                  <v-list-item-action>
                    <div class="priceSection">
                      <v-list-item-title class="priceCardPriceTag"
                        >$ 825</v-list-item-title
                      >
                      <v-list-item-subtitle
                        >For one carton</v-list-item-subtitle
                      >
                    </div>
                  </v-list-item-action>
                  <v-list-item-content>
                    <div class="addToCartBtn">
                      <v-btn outlined color="#191B73" to="/shopping-cart"
                        >Add to Cart</v-btn
                      >
                    </div>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
            <div class="discuontMessage">
              Buy 3+ cartons & get 10% Discount
            </div>
          </v-card>
        </v-col> -->
      </v-row>
      {{ allItems }}
      <!-- -------------------- price table ------------ -->

      <v-row class="mt-10" justify="center">
        <v-col>
          <v-card elevation="5" class="mx-auto" width="100%" min-height="165px">
            <v-simple-table fixed-header height="400px">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      Units
                    </th>
                    <th class="text-left">
                      Penguin-ears
                    </th>
                    <th class="text-left">
                      Horseshoe
                    </th>
                    <th class="text-left">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                    <td>
                      <v-btn x-small outlined>View</v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import { mapState } from "vuex";

export default {
  layout: "layout_index",
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159
        },
        {
          name: "Ice cream sandwich",
          calories: 237
        },
        {
          name: "Eclair",
          calories: 262
        },
        {
          name: "Cupcake",
          calories: 305
        },
        {
          name: "Gingerbread",
          calories: 356
        },
        {
          name: "Jelly bean",
          calories: 375
        },
        {
          name: "Lollipop",
          calories: 392
        },
        {
          name: "Honeycomb",
          calories: 408
        },
        {
          name: "Donut",
          calories: 452
        },
        {
          name: "KitKat",
          calories: 518
        }
      ]
    };
  },
  computed: {
    ...mapState({
      allItems: state => state.price.allItems
    })
  },
  mounted() {
    this.$store.dispatch("price/getAllItems");
  }
};
</script>
