import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Switch from '../Switch.vue'

describe('Counter.vue', () => {
  it('should render', () => {
    const wrapper = mount(Switch, { props: { modelValue: false } })
    expect(wrapper.find('.dot').exists()).toBe(true)
    expect(wrapper.find('.dot').attributes('class')).toContain('rounded-50%')
    // expect(wrapper.html()).toMatchSnapshot()
  })

  it('should be interactive', async () => {
    const wrapper = mount(Switch, { props: { modelValue: false } })

    await wrapper.find('.switch').trigger('click')
    // console.log('wrapper.emitted() => ', wrapper.emitted())
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true])
  })
})
