<template>
  <div>
    <h4>Доступные версии лаунчера:</h4>
<!--      <v-btn @click="showModal" fab dark color="indigo">-->
<!--        <v-icon dark>add</v-icon>-->
<!--      </v-btn>-->
      <v-data-table
        :headers="launcherHeaders"
        :items="this.launchers">
        <template v-slot:items="props">
          <td>{{props.item._id}}</td>
          <td>{{props.item.version}}</td>
          <td>{{props.item.dataUrl}}</td>
          <td>{{props.item.dataSize}}</td>
          <td>{{props.item.updaterUrl}}</td>
          <td v-if="props.item.available"><v-icon>check</v-icon></td>
          <td v-else><v-icon>times</v-icon></td>
          <td v-if="props.item.current"><v-icon>check</v-icon></td>
          <td v-else><v-icon>times</v-icon></td>
          <td class="justify-center layout px-0">
            <v-icon
              small
              class="mr-2"
              @click="openChangeLauncher(props.item)"
            >
              edit
            </v-icon>
            <v-icon
              small
              @click="deleteLauncher(props.item)"
            >
              delete
            </v-icon>
          </td>
        </template>
      </v-data-table>

    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn @click="openAddLauncher" color="primary" dark v-on="on">Добавить версию</v-btn>
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
                    hint="URL for ZIP with new launcher"
                    required
                    v-model="lDataUrl"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="Data Size *"
                    hint="Size of new launcher in bytes"
                    required
                    v-model="lDataSize"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="Updater URL*"
                    hint="URL for updater.exe"
                    required
                    v-model="lUpdaterUrl"
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
            <v-btn color="blue darken-1" flat @click="addLauncher">Save</v-btn>
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
                  hint="URL for ZIP with new launcher"
                  required
                  v-model="lDataUrl"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Data Size *"
                  hint="Size of new launcher in bytes"
                  required
                  v-model="lDataSize"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Updater URL*"
                  hint="URL for updater.exe"
                  required
                  v-model="lUpdaterUrl"
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
          <v-btn color="blue darken-1" flat @click="updateLauncher">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-layout>

  </div>

</template>

<script>
    import newModal from "./Launcher/NewModal";
    import changeModal from "./Launcher/ChangeModal"
    const checks = require('../assets/js/checks');
    export default {
      name: "Main",
      components: {newModal, changeModal},
      data: function () {
        return {
          lId: null,
          lVersion: null,
          lDataUrl: null,
          lDataSize: null,
          lUpdaterUrl: null,
          lAvailable: null,
          lCurrent: null,
          currentSelected: null,
          changeId: null,
          dialog:false,
          changeDialog: false,
          launcherHeaders: [
            {text: "_id", align: 'left', value: '_id'},
            {text: "version", align: 'left', value: 'version'},
            {text: "DataUrl", align: 'left', value: 'dataUrl'},
            {text: "Data Size", align: 'left', value: 'dataSize'},
            {text: "Updater url", align: 'left', value: 'updaterUrl'},
            {text: "Available", align: 'left', value: 'Available'},
            {text: "Current", align: 'left', value: 'current'},
            {text: "Action", align:'left', value:'actions'}
          ]
        }
      },
      computed:{
        launchers(){
          return this.$store.getters.Launchers;
        },
        currentLauncher(){
          return this.$store.getters.CurrentLauncher;
        }
      },
      mounted() {
        this.$store.dispatch('fetchLaunchers');
      },
      methods: {
        openChangeLauncher(launcher){
          console.log(launcher);
          this.lId = launcher._id;
          this.lVersion = launcher.version;
          this.lDataUrl = launcher.dataUrl;
          this.lDataSize = launcher.dataSize;
          this.lUpdaterUrl = launcher.updaterUrl;
          this.lAvailable = launcher.available;
          this.lCurrent = launcher.current;
          this.changeDialog = true;
        },
        openAddLauncher(){
          this.lVersion = null;
          this.lId = null;
          this.lDataUrl = null;
          this.lDataSize = null;
          this.lUpdaterUrl = null;
          this.lAvailable = null;
          this.lCurrent = null;
        },
        addLauncher(){
          let launcher = {
            version: this.lVersion,
            dataUrl: this.lDataUrl,
            dataSize: this.lDataSize,
            updaterUrl: this.lUpdaterUrl,
            available: this.lAvailable,
            current: false
          };
          console.log(launcher);
          if (checks.launcher(launcher)){
            if (confirm(`Вы действительно хотите добавить новую версию лаунчера?\n${JSON.stringify(launcher)}`)){
              this.dialog = false;
              this.$store.dispatch('addLauncher', launcher);
            }
          }
        },
        updateLauncher(){
          let id = this.lId;
          let launcher = {
            version: this.lVersion,
            dataUrl: this.lDataUrl,
            dataSize: this.lDataSize,
            updaterUrl: this.lUpdaterUrl,
            available: this.lAvailable,
            current: this.lCurrent
          };
          console.log(launcher);
          if (checks.launcher(launcher))
          {
            if (confirm(`Вы действительно хотите обновить ${id}\n${JSON.stringify(launcher)}`)){
              this.changeDialog = false;
              this.$store.dispatch('updateLauncher',{ id, launcher })
            }
          }

        },
        deleteLauncher(launcher) {
          if (launcher.current === true) {
            alert('Невозможно удалить current')
          } else if (confirm(`Вы действительно хотите удалить ${launcher._id}\n${JSON.stringify(launcher)}`)){
            this.$store.dispatch('deleteLauncher', launcher);
          }
        },
        updateCurrent(){
          console.log(this.currentLauncher)
        }
      }
    }
</script>

<style scoped>

</style>
