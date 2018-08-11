
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';

export interface KalturaUrlTokenizerLimeLightArgs  extends KalturaUrlTokenizerArgs {
    
}


export class KalturaUrlTokenizerLimeLight extends KalturaUrlTokenizer {

    

    constructor(data? : KalturaUrlTokenizerLimeLightArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlTokenizerLimeLight' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUrlTokenizerLimeLight'] = KalturaUrlTokenizerLimeLight;