<template>
  <v-row justify="center" align="center">
    <v-col>
      <v-row class="mt-10" justify="center">
        <v-col>
          <v-card
            elevation="5"
            class="mx-auto"
            width="100%"
            min-height="165px"
            style="padding: 10px"
          >
            <v-row class="calculatorTitleRow">
              <v-col class="calculatorTitle">
                Investment Calculator
              </v-col>
            </v-row>
            <v-form>
              <!-- ----- checkbox ------ -->
              <v-row class="mt-5">
                <v-col>
                  <v-row justify="center" align="center">
                    <v-checkbox
                      @change="
                        e => (
                          (penguinQty = 0),
                          (penguinCartons = 0),
                          (penguinUnits = 0)
                        )
                      "
                      label="Penguin-ears"
                      v-model="penguin"
                    ></v-checkbox>
                  </v-row>
                </v-col>
                <v-col justify="center" align="center">
                  <v-row justify="center" align="center">
                    <v-checkbox
                      @change="
                        e => (
                          (horseQty = 0), (horseCartons = 0), (horseUnits = 0)
                        )
                      "
                      label="Horseshoe"
                      v-model="horse"
                    ></v-checkbox>
                  </v-row>
                </v-col>
              </v-row>
              <!-- ------------- inputs ------------ -->
              <v-row justify="center" align="center">
                <!-- ---------- penguin column -------- -->
                <v-col>
                  <v-row justify="center" align="center" class="formField">
                    <v-text-field
                      v-if="penguin"
                      outlined
                      label="Quantity (Units)"
                      v-model="penguinQty"
                      type="number"
                      @input="getPenguinData()"
                    ></v-text-field>
                  </v-row>
                </v-col>
                <!-- ---------- horse column -------- -->
                <v-col>
                  <v-row justify="center" align="center" class="formField">
                    <v-text-field
                      v-if="horse"
                      outlined
                      label="Quantity (Units)"
                      v-model="horseQty"
                      type="number"
                      @input="getHorseData()"
                    ></v-text-field>
                  </v-row>
                </v-col>
              </v-row>
              <v-row class="mb-5">
                <v-col justify="center" align="center">
                  <span v-if="penguinQty != 0" class="qtyDetails">
                    <span class="infoTextColor"> {{ penguinCartons }}</span>
                    carton
                    <span class="infoTextColor">{{ penguinUnits }}</span>
                    units</span
                  ></v-col
                >
                <v-col justify="center" align="center" class="formField">
                  <span v-if="horseQty != 0" class="qtyDetails">
                    <span class="infoTextColor"> {{ horseCartons }}</span>
                    carton
                    <span class="infoTextColor">{{ horseUnits }} </span
                    >units</span
                  >
                </v-col>
              </v-row>
              <v-row
                v-if="!penguin && !horse"
                justify="center"
                align="center"
                class="mb-5"
              >
                <span>What do you need? Just tell us.</span>
              </v-row>
              <v-row justify="center" align="center" class="mb-5">
                <v-btn
                  :disabled="!penguin && !horse"
                  depressed
                  style="color: #ffffff"
                  color="#191B73"
                  @click="
                    priceDialog = true;
                    getCartPrice();
                  "
                  >Proceed</v-btn
                >
              </v-row>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
      <!-- ---------------- price dialog ------------ -->
      <v-dialog v-model="priceDialog" width="500">
        <v-card>
          <div class="lighten-2 dialogHeader">
            Price summary for your cart
          </div>

          <div class="iconImage">
            <v-img
              width="200px"
              src="https://i.pinimg.com/originals/88/12/0b/88120b4f8117a1c7d2c7e38396fbaf99.jpg"
            ></v-img>
          </div>
          <div class="text-center ">
            <table style="width:100%; color: #11152D; padding: 20px">
              <tr>
                <th class="text-left" style="width: 30%"></th>
                <th style="width: 20%">Carton</th>
                <th style="width: 20%">Units</th>
                <th style="width: 20%">Price</th>
              </tr>
              <tr>
                <th class="text-left">Penguin-ears</th>
                <td>{{ penguinCartons }}</td>
                <td>{{ penguinUnits }}</td>
                <td>${{ cartPrice.penguinTotalPrice }}</td>
              </tr>
              <tr>
                <th class="text-left">Horseshoe</th>
                <td>{{ horseCartons }}</td>
                <td>{{ horseUnits }}</td>
                <td>${{ cartPrice.horseTotalPrice }}</td>
              </tr>
              <tr>
                <th class="text-left">Total</th>
                <td></td>
                <td></td>
                <th>
                  <v-text-field
                    solo
                    dense
                    flat
                    outlined
                    background-color="#c8c9ce"
                    :value="'$' + cartPrice.totalCartPrice"
                    readonly
                  ></v-text-field>
                </th>
              </tr>
            </table>
          </div>
          <div class="text-center priceMessage">
            Just invest
            <span class="price">${{ cartPrice.totalCartPrice }}. </span> Its all
            yours!
          </div>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              outlined
              @click="
                priceDialog = false;
                penguin = false;
                horse = false;
                penguinQty = 0;
                horseQty = 0;
              "
            >
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
      penguin: false,
      penguinCartons: 0,
      penguinUnits: 0,
      horse: false,
      horseCartons: 0,
      horseUnits: 0,
      penguinQty: 0,
      horseQty: 0,

      priceDialog: false
    };
  },
  methods: {
    getCartPrice() {
      this.$store.dispatch("price/getCartPrice", {
        penguinUnits: this.penguinQty,
        horseUnits: this.horseQty
      });
    },
    getPenguinData() {
      this.penguinCartons = Math.floor(this.penguinQty / 20);
      this.penguinUnits = this.penguinQty % 20;
    },
    getHorseData() {
      this.horseCartons = Math.floor(this.horseQty / 5);
      this.horseUnits = this.horseQty % 5;
    }
  },
  computed: {
    ...mapState({
      cartPrice: state => state.price.cartPrice
    })
  }
};
</script>
