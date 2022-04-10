<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <h3 class="menu-item">App Menu</h3>
      <div class="menu-item">
        <router-link to="/">Home</router-link> 
      </div>
      <div class="menu-item">
        <router-link to="/signin">Sign In</router-link> 
      </div>
      <div class="menu-item">
       <router-link to="/about">About</router-link> 
      </div>
      <div class="menu-item">
       <router-link to="/voting">Voting</router-link> 
      </div>
       <div class="menu-item">
       <router-link to="/dashboard">Dashboard</router-link> 
      </div>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Hello Vue.Js</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
};
</script>

<style scoped>
.menu-item {
  padding: 10px;
  margin-left: 10px;
}
</style>