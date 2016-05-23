var assert = require('chai').assert;
var RecursiveReplacement = require('../../../js/recursive-replacement/recursive-replacement.js').RecursiveReplacement;

describe('We expect all functions of RecursiveReplacement to work',
    function() {

        it('This string contains {{ one }} replacement', function() {

            assert.isTrue(
                RecursiveReplacement.doestStringContainReplacements(
                    'This string contains no replacements'
                )
            );

            assert.isTrue(
                RecursiveReplacement.doestStringContainReplacements(
                    'This string contains {{ one }} replacement'
                )
            );

            assert.isTrue(
                RecursiveReplacement.doestStringContainReplacements(
                    'This string contains one replacement with {{ nospace }}'
                )
            );

            assert.isTrue(
                RecursiveReplacement.doestStringContainReplacements(
                    'This string {{ contains }} {{ two }} replacements'
                )
            );

            assert.isTrue(
                RecursiveReplacement.doestStringContainReplacements(
                    'This string contains bb different dd mathcing replacements', 'bb dd'
                )
            );

            assert.isTrue(
                RecursiveReplacement.doestStringContainReplacements(
                    'This string contains {{ no }} mathcing replacements', 'bb dd'
                )
            );
        });


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
