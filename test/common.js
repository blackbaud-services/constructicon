'use strict'

global.React = require('react')

global.chai = require('chai')
global.expect = chai.expect
global.sinon = require('sinon')

global.mocha = require('mocha')
global.describe = mocha.describe
global.after = mocha.after
global.it = mocha.it
global.beforeEach = mocha.beforeEach

global.enzyme = require('enzyme')
global.shallow = enzyme.shallow
global.mount = enzyme.mount

global.utils = require('./utils')

require('./testdom')('<html><body><div id="mount"><div></body></html>')
