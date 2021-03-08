import { mount } from '@vue/test-utils'
import ModalAttack from '../../src/components/ModalAttack.vue'

test('setProps ModalAttack', async () => {
  const wrapper = mount(ModalAttack)

  await wrapper.setProps({ attack: {
      "name": "Teleport Blast",
      "cost": [
      "Psychic",
      "Psychic",
      "Colorless"
      ],
      "convertedEnergyCost": 3,
      "damage": "30",
      "text": "You may switch Dark Alakazam with 1 of your Benched Pokémon. (Do the damage before switching the Pokémon.)"
    } 
  })

  expect(wrapper.vm.attack).toStrictEqual({
      "name": "Teleport Blast",
      "cost": [
      "Psychic",
      "Psychic",
      "Colorless"
      ],
      "convertedEnergyCost": 3,
      "damage": "30",
      "text": "You may switch Dark Alakazam with 1 of your Benched Pokémon. (Do the damage before switching the Pokémon.)"
    } 
  )
})