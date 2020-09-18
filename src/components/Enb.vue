<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="this.Enbs"
    >
      <template v-slot:items="props">
        <td>{{props.item._id}}</td>
        <td>{{props.item.name}}</td>
        <td>{{props.item.description}}</td>
        <td>{{props.item.version}}</td>
        <td>{{props.item.url}}</td>
        <td>{{props.item.available}}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            @click="openChangeEnb(props.item)"
            class="mr-2"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteEnb(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
    </v-data-table>

    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn @click="openAddEnb" color="primary" dark v-on="on">Добавить ENB</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Добавление ENB</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field
                    label="Name*"
                    required
                    v-model="lName"
                  ></v-text-field>
                  <v-text-field
                    label="Description*"
                    required
                    v-model="lDescription"
                  ></v-text-field>
                  <v-text-field
                    label="Version*"
                    required
                    v-model="lVersion"
                  ></v-text-field>
                  <v-text-field
                    label="Url*"
                    required
                    v-model="lUrl"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-checkbox
                    label="Available"
                    v-model="lAvailable"
                  ></v-checkbox>
                </v-flex>

              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="addEnb">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <v-layout row justify-center>
      <v-dialog v-model="changeDialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Изменение ENB</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field
                    label="_ID*"
                    required
                    readonly
                    v-model="lId"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="Name*"
                    required
                    v-model="lName"
                  ></v-text-field>
                  <v-text-field
                    label="Description*"
                    required
                    v-model="lDescription"
                  ></v-text-field>
                  <v-text-field
                    label="Version*"
                    required
                    v-model="lVersion"
                  ></v-text-field>
                  <v-text-field
                    label="Url*"
                    required
                    v-model="lUrl"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-checkbox
                    label="Available"
                    v-model="lAvailable"
                  ></v-checkbox>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="changeDialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="changeEnb">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
    export default {
        name: "Enb",
        data: function () {
          return {
            lId: null,
            lName: null,
            lDescription: null,
            lVersion: null,
            lUrl: null,
            lAvailable: null,
            dialog: false,
            changeDialog: false,
            headers:[
              {text: "_id", align: 'left', value: '_id'},
              {text: "name", align: 'left', value: 'name'},
              {text: "description", align: 'left', value: 'description'},
              {text: "version", align: 'left', value: 'version'},
              {text: "url", align: 'left', value: 'url'},
              {text: "available", align: 'left', value: 'available'},
              {text: "actions", align: 'left', value: 'actions'},
            ]
          }
        },
        computed:{
          Enbs(){
            return this.$store.getters.Enbs;
          }
        },
        mounted(){
            this.$store.dispatch('fetchEnbs');
        },
        methods: {
          openAddEnb(){
            this.lId = null;
            this.lName = null;
            this.lDescription = null;
            this.lVersion = null;
            this.lUrl = null;
            this.lAvailable = null;
            this.dialog = true;
          },
          openChangeEnb(enb){
            console.log(enb);
            this.lId = enb._id;
            this.lName = enb.name;
            this.lDescription = enb.description;
            this.lVersion = enb.version;
            this.lAvailable = enb.available;
            this.lUrl = enb.url;
            this.changeDialog = true;
          },
          addEnb(){
            let enb = {
              name: this.lName,
              description: this.lDescription,
              version: this.lVersion,
              url: this.lUrl,
              available: this.lAvailable,
            };
            console.log(enb);
            if (!enb.name || !enb.description || !enb.version || !enb.url) {
              return null;
            }
            this.$store.dispatch('addEnb', enb);
            this.dialog = false;
          },
          changeEnb()
          {
            let id = this.lId;
            let enb = {
              name: this.lName,
              description: this.lDescription,
              version: this.lVersion,
              url: this.lUrl,
              available: this.lAvailable,
            };
            if (!enb.name || !enb.description || !enb.version || !enb.url) {
              return null;
            }
            this.$store.dispatch('changeEnb', {id, enb});
            this.changeDialog = false;
          },
          deleteEnb(enb){
            console.log(enb);
            this.$store.dispatch('deleteEnb', enb);
          }
        }
    }
</script>

<style scoped>

</style>
