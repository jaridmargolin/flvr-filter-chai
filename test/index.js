/* eslint-env mocha */
'use strict'

/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// 3rd party
const assert = require('chai').assert

// lib
const filter = require('../lib/index.js')

/* -----------------------------------------------------------------------------
 * test
 * -------------------------------------------------------------------------- */

describe('flvr-filter-chai', function () {
  it('Should remove chai frames from stack trace.', function () {
    const orig = Error.prepareStackTrace

    Error.prepareStackTrace = function (_, stack) { return stack }

    try {
      assert.isTrue(false)
    } catch (e) {
      assert.isFalse(filter(null, e.stack)[0].toString().includes('chai/lib'))
    }

    Error.prepareStackTrace = orig
  })
})
