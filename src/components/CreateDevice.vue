!<template>
  <div class="text-center">
    <v-dialog v-model="modal" persistent width="300">
      <template v-slot:activator="{ on }">
        <v-btn
          absolute
          dark
          fab
          bottom
          fixed
          right
          color="#2196f3"
          class="mb-12"
          v-on="on"
        >
          <v-icon color="#FFFFFF">mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-form>
        <v-card dense>
          <v-card-title class="body-2 blue darken-2 white--text"> Add Device</v-card-title
          >
          <v-card-text>
            <template>
              <v-text-field
                v-model="Name"
                prepend-inner-icon="title"
                solo
                label="Device Name"
                class="mt-4"
                dense
              ></v-text-field>
              <v-text-field
                v-model="ID"
                prepend-inner-icon="title"
                solo
                label="Device ID"
                class="mt-4"
                dense
              ></v-text-field>
              <v-text-field
                v-model="Location"
                prepend-inner-icon="title"
                solo
                label="Device Location"
                class="mt-4"
                dense
              ></v-text-field>
                    </template>

            <template>
              <v-combobox
                v-model="Type"
                :items="plotTypes"
                chips
                clearable
                label="Measured Parameter"
                prepend-inner-icon="filter_list"
                solo
                required
              >
            </v-combobox>
            </template>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="body-2 blue darken-2 white--text">
            <v-spacer></v-spacer>
            <v-btn color="white" text @click="modal = !modal">Cancel</v-btn>
            <v-btn color="white" text @click="addDevice">Add</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </div>
</template>
<script>
export default {
  computed: {
    devices () {
      return this.$store.getters.getDevices
    }
  },
  data () {
    return {
      modal: false,
      Location: '',
      Name: '',
      Type: '',
      ID: '',
      plotTypes: ['multi-plot', 'single-plot']
    }
  },
  methods: {
    addDevice () {
      let obj = {}
      obj.Name = this.Name
      obj.ID = this.ID
      obj.Type = this.Type
      obj.Location = this.Location
      obj.Active = true
      this.$store.commit('addDevice', obj)
      this.modal = false
    }
  }
}
</script>

<style></style>
