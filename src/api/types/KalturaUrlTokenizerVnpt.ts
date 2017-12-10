
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';

export interface KalturaUrlTokenizerVnptArgs  extends KalturaUrlTokenizerArgs {
    tokenizationFormat? : number;
	shouldIncludeClientIp? : boolean;
}


export class KalturaUrlTokenizerVnpt extends KalturaUrlTokenizer {

    tokenizationFormat : number;
	shouldIncludeClientIp : boolean;

    constructor(data? : KalturaUrlTokenizerVnptArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlTokenizerVnpt' },
				tokenizationFormat : { type : 'n' },
				shouldIncludeClientIp : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUrlTokenizerVnpt',KalturaUrlTokenizerVnpt);
