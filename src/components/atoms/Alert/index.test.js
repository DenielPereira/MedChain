import { mount } from '@vue/test-utils'
import Button from './index.vue'

describe('Atom - Button', () =>
  test('Should be <button> with color blue gradient', () => {
    const wrapper = mount(Button, {
      propsData: { color: 'blue-gradient' }
    })

    expect(wrapper.contains('button')).toBe(true);
    expect(wrapper.contains('button')).toMatchSnapshot();
  })
)