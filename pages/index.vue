<template>
  <v-row justify="center" align="center">
    <v-col>
      <v-row class="mt-10 " justify="center">
        <!-- ---------------- Price Card ---------------- -->
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
                        >Let's Try</v-btn
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
      </v-row>
      <!-- -------------------- price table ------------ -->

      <v-row class="mt-10" justify="center">
        <v-col>
          <v-card elevation="5" class="mx-auto" width="100%" min-height="165px">
            <v-row class="calculatorTitleRow">
              <v-col class="calculatorTitle">
                Price Section
              </v-col>
            </v-row>
            <v-tabs slider-color="#0c0c5a" slider-size="3">
              <v-tab>Table View</v-tab>
              <v-tab>Chart View</v-tab>
              <v-tab-item> <Table /> </v-tab-item>
              <v-tab-item> <ChartView /></v-tab-item>
            </v-tabs>
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
    return {};
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
