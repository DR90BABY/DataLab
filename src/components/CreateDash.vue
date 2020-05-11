!<template>
  <div class="text-center">
    <v-dialog v-model="modal" width="500">
      <template v-slot:activator="{ on }">
        <v-btn
          absolute
          medium
          dark
          fab
          bottom
          fixed
          right
          color="pink"
          class="mb-8"
          v-on="on"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-form>
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title
            >Create Dashboard</v-card-title
          >
          <v-card-text>
            <template>
              <v-text-field
                v-model="dash_title"
                prepend-icon="title"
                solo
                label="Dashboard Title"
                class="mt-4"
                dense
                outlined
              ></v-text-field>
              <v-combobox
                v-model="selected_devices"
                :items="devices"
                chips
                clearable
                label="Select Devices"
                multiple
                prepend-icon="filter_list"
                solo
              >
                <template v-slot:selection="{ attrs, item, select, selected }">
                  <v-chip
                    v-bind="attrs"
                    :input-value="selected"
                    close
                    @click="select"
                    @click:close="remove(item)"
                  >
                    <strong>{{ item }}</strong
                    >&nbsp;
                  </v-chip>
                </template>
              </v-combobox>
            </template>

            <template>
              <v-combobox
                v-model="chartType"
                :items="plotTypes"
                chips
                clearable
                label="Select ChartType"
                prepend-icon="filter_list"
                solo
                required
              >
                <template v-slot:selection="{ attrs, item, select, selected }">
                  <v-chip
                    v-bind="attrs"
                    :input-value="selected"
                    close
                    @click="select"
                    @click:close="remove(item)"
                  >
                    <strong>{{ item }}</strong
                    >&nbsp;
                  </v-chip>
                </template>
              </v-combobox>
            </template>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="modal = !modal">Cancel</v-btn>
            <v-btn color="primary" text @click="createDash">Add</v-btn>
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
      selected_devices: [],
      dash_title: '',
      chartType: '',
      plotTypes: ['multi-plot', 'single-plot']
    }
  },
  methods: {
    createDash () {
      let obj = {}
      obj.title = this.dash_title
      obj.id = 'id'
      obj.plot_type = this.chartType
      obj.devices = this.devices
      obj.visible = true
      this.$store.commit('createDash', obj)
    }
  }
}
</script>

<style></style>
