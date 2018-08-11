
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';

export interface KalturaUrlTokenizerBitGravityArgs  extends KalturaUrlTokenizerArgs {
    hashPatternRegex? : string;
}


export class KalturaUrlTokenizerBitGravity extends KalturaUrlTokenizer {

    hashPatternRegex : string;

    constructor(data? : KalturaUrlTokenizerBitGravityArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlTokenizerBitGravity' },
				hashPatternRegex : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUrlTokenizerBitGravity'] = KalturaUrlTokenizerBitGravity;