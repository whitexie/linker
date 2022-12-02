import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Switch from '../Switch.vue'

describe('Switch.vue', () => {
  it('should render', () => {
    const wrapper = mount(Switch, { props: { modelValue: false } })
    expect(wrapper.find('.dot').exists()).toBe(true)
    // expect(wrapper.html()).toMatchSnapshot()
  })

  it('should emit update:modelValue', async () => {
    const wrapper = mount(Switch, { props: { modelValue: false } })

    await wrapper.find('.switch').trigger('click')
    // console.log('wrapper.emitted() => ', wrapper.emitted())
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true])
  })

  it('should custom value', async () => {
    const wrapper = mount(Switch, { props: { modelValue: 0, activeValue: 1, inactiveValue: 0 } })
    await wrapper.find('.switch').trigger('click')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([1])

    await wrapper.setProps({ modelValue: 1 })
    await wrapper.find('.switch').trigger('click')
    expect(wrapper.emitted()['update:modelValue'][1]).toEqual([0])
  })
})
