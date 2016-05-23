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

        it('We can find a replacement in RecursiveData', function() {
            let replacements = null;

            replacements = RecursiveReplacement.getReplacementsInString(
                'This string contains no replacements'
            );
            assert.isArray(replacements);
            assert.lengthOf(replacements, 0);

            replacements = RecursiveReplacement.getReplacementsInString(
                'This string contains {{ one }} replacement'
            );
            assert.isArray(replacements);
            assert.lengthOf(replacements, 1);
            assert.include(replacements, 'one');

            replacements = RecursiveReplacement.getReplacementsInString(
                'This string contains one replacement with {{nospace}}'
            );
            assert.isArray(replacements);
            assert.lengthOf(replacements, 1);
            assert.include(replacements, 'nospace');

            replacements = RecursiveReplacement.getReplacementsInString(
                'This string {{ contains }} {{ two }} replacements'
            );
            assert.isArray(replacements);
            assert.lengthOf(replacements, 2);
            assert.include(replacements, 'contains');
            assert.include(replacements, 'two');

            replacements = RecursiveReplacement.getReplacementsInString(
                'This string contains bb different dd mathcing replacements', 'bb dd'
            );
            assert.isArray(replacements);
            assert.lengthOf(replacements, 1);
            assert.include(replacements, 'different');

            replacements = RecursiveReplacement.getReplacementsInString(
                'This string contains {{ no }} mathcing replacements', 'bb dd'
            );
            assert.isArray(replacements);
            assert.lengthOf(replacements, 0);

        });

        xit('We can replace a replacement in a string', function() {
            assert.isTrue(false);
        });

        xit('We can replace a replacement in replacement in a string', function() {
            assert.isTrue(false);
        });
    }
);
