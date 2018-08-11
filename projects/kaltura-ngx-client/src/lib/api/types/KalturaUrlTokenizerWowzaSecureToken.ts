
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';

export interface KalturaUrlTokenizerWowzaSecureTokenArgs  extends KalturaUrlTokenizerArgs {
    paramPrefix? : string;
	hashAlgorithm? : string;
}


export class KalturaUrlTokenizerWowzaSecureToken extends KalturaUrlTokenizer {

    paramPrefix : string;
	hashAlgorithm : string;

    constructor(data? : KalturaUrlTokenizerWowzaSecureTokenArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlTokenizerWowzaSecureToken' },
				paramPrefix : { type : 's' },
				hashAlgorithm : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUrlTokenizerWowzaSecureToken'] = KalturaUrlTokenizerWowzaSecureToken;