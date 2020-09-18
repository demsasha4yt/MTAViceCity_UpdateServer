<script>
  export default {
    name: 'modal',
    data: function()
    {
      return {
        _id: null,
        version: null,
        dataUrl: null,
        dataSize: null,
        updaterUrl: null,
        available: false
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      addNew(){
         let launcher = {
          version: this.version,
          dataUrl: this.dataUrl,
          dataSize: this.dataSize,
          updaterUrl: this.updaterUrl,
          available: this.available
        }
        console.log(launcher)
        axios
          .post('http://localhost:1337/api/launcher', launcher)
          .then((d) => {
            this.$emit('close')
          })
      }
    },
  };

</script>
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
           role="dialog"
           aria-labelledby="modalTitle"
           aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            <h3>Добавить новую версию лаунчера?</h3>

            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
              <form>
                <div class="form-group">
                  <label for="#version">Версия лаунчера: </label>
                  <input v-model="version" type="text"  class="form-control" id="#version">
                </div>
                <div class="form-group">
                  <label for="#version">Data Url: </label>
                  <input v-model="dataUrl" type="text" class="form-control" id="#data-url">
                </div>
                <div class="form-group">
                  <label for="#data-size">Data Size: </label>
                  <input v-model="dataSize" type="text" class="form-control" id="#data-size">
                </div>

                <div class="form-group">
                  <label for="#version">Updater URL: </label>
                  <input v-model="updaterUrl" type="text"  class="form-control" id="#updater-url">
                </div>

                <div class="form-group">
                  <label for="#available">Available: </label>
                  <input v-model="available" type="checkbox" class="form-control" id="#available">
                </div>

              </form>
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn-green"
              @click="addNew"
              aria-label="Сохранить"
            >
              Добавить!
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>
