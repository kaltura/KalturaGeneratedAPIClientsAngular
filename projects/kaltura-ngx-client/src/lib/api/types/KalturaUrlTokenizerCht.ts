
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';

export interface KalturaUrlTokenizerChtArgs  extends KalturaUrlTokenizerArgs {
    
}


export class KalturaUrlTokenizerCht extends KalturaUrlTokenizer {

    

    constructor(data? : KalturaUrlTokenizerChtArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlTokenizerCht' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUrlTokenizerCht'] = KalturaUrlTokenizerCht;