import { describe, it, expect } from 'vitest'
import validateVin from './validateVin'

describe('validateVin', () => {
  it('returns error if empty', () => {
    expect(validateVin({ vin: '' }).vin).toBe('This field is required.')
  })

  it('returns error if length is not 17', () => {
    expect(validateVin({ vin: '123' }).vin).toBeDefined()
  })

  it('rejects invalid characters (I, O, Q)', () => {
    expect(validateVin({ vin: '1HGCM82633A00I352' }).vin).toBeDefined()
  })

  it('accepts valid VIN', () => {
    const result = validateVin({ vin: '1HGCM82633A004352' })
    expect(result.vin).toBeUndefined()
  })
})