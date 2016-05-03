interface RecursiveData {
    [key: string]: string|RecursiveData;
}

class RecursiveReplacement {

    protected replacementData:RecursiveData;

    /**
     * Construct a RecursiveReplacement object
     * @param {{}}replacementData An object containing strings used for replacement
     */
    constructor(replacementData:RecursiveData) {
        this.replacementData = replacementData;
    }

}
