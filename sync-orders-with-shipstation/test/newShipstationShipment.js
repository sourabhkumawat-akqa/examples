'use strict'

// tests for newShipstationShipment
// Generated by serverless-mocha-plugin

const mochaPlugin = require('serverless-mocha-plugin')

const { expect } = mochaPlugin.chai
const wrapped = mochaPlugin.getWrapper('newShipstationShipment', '/handler.js', 'newShipstationShipment')

describe('newShipstationShipment', () => {
    before((done) => {
        done()
    })

    it('implement tests here', () => wrapped.run({}).then((response) => {
        expect(response).to.not.be.empty
    }))
})
