<template>
  <span>
    <v-navigation-drawer
      app
      v-model="drawer"
      class="brown lighten-2"
      dark
      disable-resize-watcher
    >
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index" :to="item.url">
            <v-list-tile-content>{{ item.title }}</v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-container>
      <v-card height="400" class="overflow-hidden">
        <v-navigation-drawer
          v-model="drawer"
          :color="color"
          :expand-on-hover="expandOnHover"
          :mini-variant="miniVariant"
          :right="right"
          :permanent="permanent"
          :src="bg"
          absolute
          dark
        >
          <v-list dense nav class="py-0">
            <v-list-item two-line :class="miniVariant && 'px-0'">
              <v-list-item-avatar>
                <img src="https://randomuser.me/api/portraits/men/81.jpg" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Application</v-list-item-title>
                <v-list-item-subtitle>Subtext</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </v-container> -->

    <v-toolbar app color="brown darken-4" red>
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link to="/">
        <v-toolbar-title to="/">{{ appTitle }}</v-toolbar-title>
      </router-link>
      <v-btn flat class="hidden-sm-and-down" to="/menu">Menu</v-btn>
      <v-btn flat class="hidden-sm-and-down" to="/items">Item</v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn flat class="hidden-sm-and-down" to="/sign-in">SIGN IN</v-btn>
      <v-btn color="brown lighten-3" class="hidden-sm-and-down" to="/join"
        >JOIN</v-btn
      >
    </v-toolbar>
  </span>
</template>
<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Meal Prep',
            drawer: false,
            items: [
                { title: 'Menu' },
                { title: 'Profile' }, 
                { title: 'Sign In' },
                { title: 'Join' }
            ]
        };
    }
};
</script>
<style scoped>
</style>