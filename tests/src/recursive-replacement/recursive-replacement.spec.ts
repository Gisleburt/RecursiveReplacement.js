/// <reference path="../../../src/recursive-replacement/recursive-replacement.ts"/>

var assert = require('chai').assert;
var RecursiveReplacement = require('../../../js/recursive-replacement/recursive-replacement.js').RecursiveReplacement;

describe('We expect all functions of RecursiveReplacement to work',
    function() {

        describe('We can detect if there are replacements in a string',
            function() {

                it('This string contains {{ one }} replacement', function() {

                    assert.isTrue(
                        RecursiveReplacement.doestStringContainReplacements(
                            'This string contains {{ one }} replacement'
                        )
                    );

                })
            }
        );

        describe('We can find a replacement in RecursiveData',
            function() {
                xit('true is true', function() {
                    assert.isTrue(false);
                })
            }
        );

        describe('We can replace a replacement in a string',
            function() {
                xit('true is true', function() {
                    assert.isTrue(false);
                })
            }
        );

        describe('We can replace a replacement in replacement in a string',
            function() {
                xit('true is true', function() {
                    assert.isTrue(false);
                })
            }
        );
    }
);
