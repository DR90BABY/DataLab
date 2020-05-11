<template>
  <v-col cols="12" sm="12" lg="3" md="6">
    <v-card class="mx-auto elevation-3" color="#FFFFFF" dense>
      <v-card-title>
        <v-icon medium left>mdi-chip</v-icon>
        <span class="body-1 text-uppercase" color="#212121">
          {{Name}}
          <br />
        </span>
        <v-icon class="btn ml-12 red--text darken-2" dense small>edit</v-icon>
      </v-card-title>
      <v-card-text>
        <span class="text-uppercase">
          <v-icon>bar_chart</v-icon>
          <span color="#757575">TYPE: {{Type}}</span>
          <br />
          <v-icon>code</v-icon> <span color="#757575">SERIAL: {{Serial}}</span>
          <br />
          <v-icon>place</v-icon> <span color="#757575">LOCATION: {{Location}}</span>
        </span>
      </v-card-text>
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: ['Name', 'Type', 'Serial', 'Location']
}
</script>
