var assert = require('chai').assert;
var RecursiveReplacement = require('../src/recursive-replacement.js').RecursiveReplacement;

describe('We expect all functions of RecursiveReplacement to work',
    function() {

        it('We can detect one or more replacements in a string', function() {

            assert.isFalse(
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
                    'This string contains one replacement with {{nospace}}'
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

            assert.isFalse(
                RecursiveReplacement.doestStringContainReplacements(
                    'This string contains {{ no }} mathcing replacements', 'bb dd'
                )
            );
        });

        xit('We can find a replacement in RecursiveData', function() {
            assert.isTrue(false);
        });

        xit('We can replace a replacement in a string', function() {
            assert.isTrue(false);
        });

        xit('We can replace a replacement in replacement in a string', function() {
            assert.isTrue(false);
        });
    }
);
