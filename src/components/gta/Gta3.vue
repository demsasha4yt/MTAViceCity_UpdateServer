<template>
  <div>
    <h4>Доступные версии {{name}}</h4>
    <v-data-table
      :headers="headers"
      :items="gta3s">
      <template v-slot:items="props">
        <td>{{props.item._id}}</td>
        <td>{{props.item.version}}</td>
        <td>{{props.item.dataUrl}}</td>
        <td>{{props.item.dataSize}}</td>
        <td v-if="props.item.available"><v-icon>check</v-icon></td>
        <td v-else><v-icon>fa-times</v-icon></td>
        <td v-if="props.item.current"><v-icon>check</v-icon></td>
        <td v-else><v-icon>fa-times</v-icon></td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="openChange(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteData(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
    </v-data-table>

    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn @click="openAdd" color="primary" dark v-on="on">Добавить версию</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Добавление новой версии</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field
                    label="Version*"
                    required
                    v-model="lVersion"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="Data URL*"
                    hint="URL for ZIP"
                    required
                    v-model="lDataUrl"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="Data Size *"
                    hint="Size in bytes"
                    required
                    v-model="lDataSize"
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
            <v-btn color="blue darken-1" flat @click="add">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <v-layout row justify-center>
      <v-dialog v-model="changeDialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Добавление новой версии</span>
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
                    label="Version*"
                    required
                    v-model="lVersion"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="Data URL*"
                    hint="URL for ZIP"
                    required
                    v-model="lDataUrl"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="Data Size *"
                    hint="Size in bytes"
                    required
                    v-model="lDataSize"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-checkbox
                    label="Available"
                    v-model="lAvailable"
                  ></v-checkbox>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-checkbox
                    label="Current"
                    v-model="lCurrent"
                  ></v-checkbox>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="changeDialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="change">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>

  </div>
</template>

<script>
  const checks = require('../../assets/js/checks');

  export default {
    name: "Gta3",
    data: function () {
      return {
        name: "Gta3", // Change in other components
        lId: null,
        lVersion: null,
        lDataUrl: null,
        lDataSize: null,
        lAvailable: null,
        lCurrent: null,
        dialog:false,
        changeDialog: false,
        headers: [
          {text: "_id", align: 'left', value: '_id'},
          {text: "version", align: 'left', value: 'version'},
          {text: "DataUrl", align: 'left', value: 'dataUrl'},
          {text: "Data Size", align: 'left', value: 'dataSize'},
          {text: "Available", align: 'left', value: 'Available'},
          {text: "Current", align: 'left', value: 'current'},
          {text: "Action", align:'left', value:'actions'}
        ]
      }
    },
    computed: {
      gta3s(){
        return this.$store.getters.Gta3s; // Change in other components
      }
    },
    methods:{
      openAdd(){
        this.lVersion = null;
        this.lId = null;
        this.lDataUrl = null;
        this.lDataSize = null;
        this.lAvailable = null;
        this.lCurrent = null;
      },
      add(){
        let data = {
          version: this.lVersion,
          dataUrl: this.lDataUrl,
          dataSize: this.lDataSize,
          available: this.lAvailable,
          current: false
        };
        console.log(data);
        if (checks.gta(data)){
          if (confirm(`Вы действительно хоитите добавить ${this.name}?\n ${JSON.stringify(data)}`)){
            this.$store.dispatch('addGta3', data); // Change in other components
            this.dialog = false;
          }
        }
      },
      openChange(data){
        console.log(data);
        this.lId = data._id;
        this.lVersion = data.version;
        this.lDataUrl = data.dataUrl;
        this.lDataSize = data.dataSize;
        this.lAvailable = data.available;
        this.lCurrent = data.current;
        this.changeDialog = true;
      },
      change(){
        let id = this.lId;
        let data = {
          version: this.lVersion,
          dataUrl: this.lDataUrl,
          dataSize: this.lDataSize,
          available: this.lAvailable,
          current: this.lCurrent
        };
        console.log(data);
        if (checks.gta(data)){
          if (confirm(`Вы действительно хотите обновить ${this.name} ${id}?\n${JSON.stringify(data)}`)){
            this.changeDialog = false;
            this.$store.dispatch('updateGta3', {id, data}); // Change in other components
          }
        }
      },
      deleteData(data){
        if (data.current === true)
        {
          alert('Невозможно удалить CURRENT');
        } else if (confirm(`Вы действительно хотите удалить этот объект ${this.name}?\n${JSON.stringify(data)}`)){
          this.$store.dispatch('deleteGta3', data); // Change in other components
        }
      }
    },
    mounted() {
      this.$store.dispatch('fetchGta3s'); // Change in other components
    }
  }
</script>

<style scoped>

</style>
