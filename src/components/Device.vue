<template>
  <v-col cols="12" sm="12" lg="3" md="6">
    <v-card class="mx-auto elevation-3" color="#FFFFFF" dense>
      <v-card-title dense>
        <v-icon medium left>mdi-chip</v-icon>
        <span class="body-1 text-uppercase" color="#212121">
          {{Name}}
          <br />
        </span> <v-spacer> </v-spacer>
        <EditDevice :Name="Name" :ID="Serial" :Location="Location" :Type="Type"/>
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
import EditDevice from './EditDevice'
export default {
  components: { EditDevice },
  props: ['Name', 'Type', 'Serial', 'Location']
}
</script>
