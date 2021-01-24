<template>
  <v-app class="app-background">
    <v-main>
      <v-row>
        <v-col>
          <div style="width: 25%; float: left; height: 100vh; position: fixed">
            <v-navigation-drawer min-height="100vh" permanent>
              <v-list-item>
                <v-list-item-avatar size="70" style="border: 1px solid #191b73">
                  <v-img
                    src="https://cdn4.vectorstock.com/i/thumb-large/24/13/abstract-round-logo-symbolizing-update-exchange-vector-22382413.jpg"
                    width="60px"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="title">My Cart </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>

              <v-list class="mt-6" nav>
                <v-list-item
                  class="index-nav-class"
                  color="#ffffff"
                  active-class="index-active-class"
                  v-for="item in items"
                  :key="item.title"
                  :to="item.to"
                  link
                >
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title
                      class="nav-title"
                      style="color: #8B8D9B"
                      >{{ item.title }}</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
          </div>
          <div style="width: 75%; float: right; padding-right: 5%">
            <nuxt />
          </div>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Price List", icon: "mdi-currency-usd", to: "/" },
        {
          title: "Shopping Cart",
          icon: "mdi-cart-variant",
          to: "/shopping-cart"
        }
      ],
      right: null
    };
  }
};
</script>

<style scoped>
.app-background {
  background-color: #fbfcfc;
  background-position: center;

  background-size: cover;
  background-repeat: no-repeat;
}
</style>
