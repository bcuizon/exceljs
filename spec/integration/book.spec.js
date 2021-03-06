'use strict';

var stream = require('stream');
var chai = require('chai');
var expect = chai.expect;

chai.use(require('chai-datetime'));

var _ = require('underscore');
var moment = require('moment');

var Excel = require('../../excel');
var testUtils = require('./../testutils');

// =============================================================================
// This spec is based around the real Excel workbook 'book.xlsx'

describe('Book', function() {

  describe('Read', function() {

    var wb;
    before(function() {
      wb = new Excel.Workbook();
      return wb.xlsx.readFile(__dirname + '/data/book.xlsx');
    });

    it('Values', function() {
      var ws = wb.getWorksheet('Values');

      expect(ws.getCell('B1').value).to.equal('I am Text');
      expect(ws.getCell('B2').value).to.equal(3.14);
      expect(ws.getCell('B3').value).to.equal(5);
      expect(ws.getCell('B4').value).to.equalDate(new Date('2016-05-17T00:00:00.000Z'));
      expect(ws.getCell('B5').value).to.deep.equal({formula: 'B1', result: 'I am Text'});
      expect(ws.getCell('B6').value).to.deep.equal({hyperlink: 'https://www.npmjs.com/package/exceljs', text: 'exceljs'});
    });

    it('Styles', function() {
    });
  });
});
