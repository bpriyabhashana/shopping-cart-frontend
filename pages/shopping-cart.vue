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
            <v-row class="calculatorRow mt-5" justify="center" align="center">
              <v-col>sa</v-col>
              <v-col>asa</v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  layout: "layout_index",
  components: {
    Logo,
    VuetifyLogo
  }
};
</script>
