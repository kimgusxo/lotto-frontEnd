<template>
  <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link v-for="item in items" :key="item.title" @click="drawer = false">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>

</style>