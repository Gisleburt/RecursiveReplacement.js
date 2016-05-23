module RecursiveReplacement {

    /**
     * An array of string keys to either string keys or other arrays
     */
    export interface Data {
        [key:string]:string|Data;
    }

    /**
     * An array of string keys to string values
     */
    export interface Replacements {
        [ke:string]:string;
    }

    /**
     * A collection of functions that will repeatedly make replacements in a string until no more replacements
     * can be made
     */
    export class RecursiveReplacement {

        /**
         * Does the string contain any delimiters
         * @param {string} testString The string to checl
         * @param {string} delimiter Defaults to "{{ }}", must have a single space to separate beginning and end
         * @return {boolean}
         */
        public static doestStringContainReplacements(testString:string, delimiter:string = '{{ }}') {
            // Check correct parameter usage
            if((typeof testString) !== 'string') {
                throw new Error("The first parameter of 'doestStringContainReplacements' must be a string");
            }
            if((typeof delimiter) !== 'string') {
                throw new Error("The second parameter of 'doestStringContainReplacements' must be a string");
            }
            let parts = delimiter.split(' ');
            if(parts.length != 2) {
                throw new Error("The second parameter of 'doestStringContainReplacements' must contain a single space");
            }

            // Are there any replacements in this string?
            // If the delimiter were 'bb dd' this is /bb((.(?!dd))+.)dd/g
            let regexp = new RegExp(parts[0]+"((.(?!"+parts[1]+"))+.)"+parts[1], "g");
            let result = testString.match(regexp);
            return !!result && result.length > 0;
        }

        /**
         * This will check for any replacements using the given delimiter and return an of names. The array will be
         * empty if there were no replacements found.
         * @param {string} testString The string to search for replacements
         * @param {string} delimiter Defaults to "{{ }}", must have a single space to separate beginning and end
         * @return {string[]}
         */
        public static getReplacementsInString(testString:string, delimiter:string = '{{ }}') {

        }

        /**
         * This will replace strings
         * @param {string} stringWithReplacements The string to do the replacements in
         * @param {string} delimiter Defaults to "{{ }}", must have a single space to separate beginning and end
         * @param replacements
         */
        public static replaceInString(stringWithReplacements:string, replacements:Replacements, delimiter:string = '{{ }}') {

        }

        /**
         * Get the string value from the recursive data object
         * @param key
         * @param replacementData
         */
        public static getReplacementFromData(key:string, replacementData:Data) {

        }
    }
}

export = RecursiveReplacement;
