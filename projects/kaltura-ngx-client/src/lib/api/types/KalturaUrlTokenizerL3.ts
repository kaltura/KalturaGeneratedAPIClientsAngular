
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';

export interface KalturaUrlTokenizerL3Args  extends KalturaUrlTokenizerArgs {
    gen? : string;
	paramName? : string;
}


export class KalturaUrlTokenizerL3 extends KalturaUrlTokenizer {

    gen : string;
	paramName : string;

    constructor(data? : KalturaUrlTokenizerL3Args)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlTokenizerL3' },
				gen : { type : 's' },
				paramName : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUrlTokenizerL3'] = KalturaUrlTokenizerL3;