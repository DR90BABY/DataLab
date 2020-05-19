<template>
  <div>
    <v-navigation-drawer
      color="#1976d2"
      dark
      v-model="NavDrawState"
      app
      width="200px"
    >
      <v-list-item dense>
        <v-list-item-content>
          <v-list-item-title class="title">Bit Stream</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list flat>
        <v-list-item-group v-model="NavItems">
          <v-list-item v-for="(NavItem, i) in NavItems" :key="i">
            <v-list-item-icon>
              <v-icon v-text="NavItem.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title to="NavItem.path" v-text="NavItem.text">
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#1976d2" dense dark>
      <v-app-bar-nav-icon
        color="white"
        @click="NavDrawState = !NavDrawState"/>
      <v-toolbar-title v-show="!NavDrawState">Bit Stream</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  computed: {
    NavItems () {
      return this.$store.getters.getNav
    }
  },
  data () {
    return {
      NavDrawState: null
    }
  }
}
</script>
