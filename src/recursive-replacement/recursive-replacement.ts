export interface RecursiveData {
    [key: string]: string|RecursiveData;
}

export class RecursiveReplacement {

    protected replacementData:RecursiveData;
    
    protected delimiters = /\{\{[^}]+}}/;

    /**
     * Construct a RecursiveReplacement object
     * @param {{}}replacementData An object containing strings used for replacement
     */
    constructor(replacementData:RecursiveData) {
        this.replacementData = replacementData;
    }

    /**
     * 
     * @param testString
     */
    public static doesStringContainReplacements(testString:string)
    {
        
    }

}
