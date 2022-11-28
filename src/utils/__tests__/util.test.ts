import { describe, expect, it } from 'vitest'
import { copy } from '../util'

describe('util.ts', () => {
  it('test copy success', async () => {
    // eslint-disable-next-line no-console
    console.log(navigator)
    expect(copy('123')).toEqual('123')
  })
})
