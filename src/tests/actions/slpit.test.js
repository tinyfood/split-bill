import {
  editFriends,
  editTips,
  editBill,
  deleteBill,
  clearBill,
  calculateTipsAmount,
  calculateTotal
} from '../../actions/split'

test('should setup edit friends action object', () => {
  const action = editFriends(3)

  expect(action).toEqual({
    type: 'EDIT_FRIENDS',
    friends: 3
  })
})

test('should setup edit tips action object', () => {
  const action = editTips(10)

  expect(action).toEqual({
    type: 'EDIT_TIPS',
    tipsPercentage: 10
  })
})

test('should setup edit bill action object', () => {
  const action = editBill(100)

  expect(action).toEqual({
    type: 'EDIT_BILL',
    bill: 100
  })
})

test('should setup delete bill action object', () => {
  expect(deleteBill()).toEqual({ type: 'DELETE_BILL' })
})

test('should setup clear bill action object', () => {
  expect(clearBill()).toEqual({ type: 'CLEAR_BILL' })
})

test('should setup calculate tips amount action object', () => {
  expect(calculateTipsAmount()).toEqual({ type: 'CALCULATE_TIPS_AMOUNT' })
})

test('should setup calculate total action object', () => {
  expect(calculateTotal()).toEqual({ type: 'CALCULATE_TOTAL' })
})
