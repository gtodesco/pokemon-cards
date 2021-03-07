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
            {{ attack.name }}

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
          <div class="attack-descriptions">
            <h4>{{ attack.text }}</h4>
          </div>
          <div class="attack-descriptions">
            <h4>Mana Cost: {{ attack.convertedEnergyCost }}</h4>
          </div>
          <div class="attack-descriptions">
            <h4>Damage: {{ attack.damage }}</h4>
          </div>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'ModalAttack',
    props: {
      attack: {
        type: Object,
        default: () => {
          return {};
        },
      },
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

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
  max-width: 70rem;
}

.modal-header {
  padding: 15px;
  display: flex;
  border-bottom: solid;
  justify-content: space-between;
  font: italic small-caps 25px/20px Verdana, sans-serif;
  color: #1d1d1d;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.attack-descriptions {
  font: 20px/20px cursive;
  color: #1d1d1d;
  border-bottom: solid;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
}

</style>