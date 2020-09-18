<template>
  <div id="app">

    <nav>
      <v-toolbar flat app dark>
        <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">MTA</span>
          <span>Vice City</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat color="grey">
          <span>Sign Out</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar>

      <v-navigation-drawer app dark class="grey--text" v-model="drawer">
        <v-list>
          <v-list-group
            v-for="item in gtaItems"
            :key="item.text"
            v-model="item.active"
            no-action
          >
            <template v-slot:activator>y
              <v-list-tile
              router
              :to="item.route">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.text }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-tile
              v-for="subItem in item.items"
              :key="subItem.text"
              router :to="subItem.route"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.text }}</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>{{ subItem.icon }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>

    </nav>
<!--    <v-toolbar dark color="primary">-->
<!--      <v-toolbar-title class="white&#45;&#45;text">MTA Vice City</v-toolbar-title>-->
<!--      <v-spacer></v-spacer>-->
<!--      <v-toolbar-items class="hidden-sm-and-down">-->
<!--        <router-link to="/" tag="v-btn"> <v-btn flat>Главная</v-btn></router-link>-->
<!--        <router-link to="/launcher" tag="v-btn"> <v-btn flat>Лаунчер</v-btn></router-link>-->
<!--        <router-link to="/gta" tag="v-btn"> <v-btn flat>GTA</v-btn></router-link>-->
<!--        <router-link to="/enb" tag="v-btn"> <v-btn flat>ENB</v-btn></router-link>-->
<!--      </v-toolbar-items>-->

<!--    </v-toolbar>-->
    <main role="main" class="container">
     <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'updater',
  data: function () {
    return {
      drawer: false,
      gtaItems: [
        {icon: 'dashboard', text: 'Главная', route: '/'},
        {icon: 'dashboard', text: 'Лаунчер', route: '/launcher'},
        {icon: 'dashboard', text: 'GTA', route: '/gta', items: [
            {icon: 'dashboard', text: "Main Folder", route: "/gta/mainf"},
            {icon: 'dashboard', text: "Audio", route: "/gta/audio"},
            {icon: 'dashboard', text: "Anim", route: "/gta/anim"},
            {icon: 'dashboard', text: "Data", route: "/gta/data"},
            {icon: 'dashboard', text: "Models", route: "/gta/models"},
            {icon: 'dashboard', text: "MTA", route: "/gta/mta"},
            {icon: 'dashboard', text: "Text", route: "/gta/text"},
            {icon: 'dashboard', text: "Gta3.img", route: "/gta/gta3"},
            {icon: 'dashboard', text: "Gta_Int.img", route: "/gta/gta_int"},
            {icon: 'dashboard', text: "Player.img", route: "/gta/player"},
            {icon: 'dashboard', text: "Vccol.img", route: "/gta/vccol"},
            {icon: 'dashboard', text: "Vcdff.img", route: "/gta/vcdff"},
            {icon: 'dashboard', text: "Vctxd.img", route: "/gta/vctxd"},
          ]
        },
        {icon: 'dashboard', text: 'ENB', route: '/enb'},
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

main{
  padding-top: 30px;
}
</style>
