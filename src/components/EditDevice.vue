<template>
  <div class="text-center">
    <v-dialog v-model="modal" width="300">
      <template v-slot:activator="{ on }">
        <v-icon v-on="on" small class="ml-12 mb-2" color="#448aff">edit</v-icon>
      </template>
      <v-form>
        <v-card dense>
          <v-card-title class="body-2 blue darken-2 white--text">Edit Device</v-card-title>
          <v-card-text>
            <template>
              <v-text-field
                v-model="devName"
                prepend-inner-icon="title"
                solo
                label="Device Name"
                class="mt-4"
                dense
              ></v-text-field>
              <v-text-field
                v-model="ID"
                prepend-inner-icon="code"
                solo
                label="Device ID"
                class="mt-4"
                dense
                readonly
              ></v-text-field>
              <v-text-field
                v-model="devGeo"
                prepend-inner-icon="place"
                solo
                label="Device Location"
                class="mt-4"
                dense
              ></v-text-field>
            </template>

            <template>
              <v-combobox
                v-model="Type"
                chips
                label="Measured Parameter"
                prepend-inner-icon="bar_chart"
                solo
                required
                readonly
              >
              </v-combobox>
            </template>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="body-2 blue darken-2 white--text">
            <v-spacer></v-spacer>
            <v-btn color="white" text @click="modal = !modal">Cancel</v-btn>
            <v-btn color="white" text @click="editDevice">Add</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: ['Name', 'Location', 'ID', 'Type'],
  methods: {
    editDevice () {
      this.$store.commit('editDevice', { Name: this.devName, Location: this.devGeo, ID: this.ID })
      console.log(this.devGeo, this.devName)
      this.modal = false
    }
  },
  data () {
    return {
      modal: false,
      devName: this.Name,
      devGeo: this.Location
    }
  }
}
</script>

<style></style>
