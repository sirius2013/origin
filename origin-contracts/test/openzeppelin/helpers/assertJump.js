/* eslint-disable semi,no-unused-vars,no-extra-semi */
async function assertJump(promise) {
  try {
    await promise
    assert.fail('Expected invalid opcode not received')
  } catch (error) {
    const invalidOpcodeReceived = error.message.search('invalid opcode') >= 0
    assert(
      invalidOpcodeReceived,
      `Expected "invalid opcode", got ${error} instead`
    )
  }
}

module.exports = {
  assertJump
}
