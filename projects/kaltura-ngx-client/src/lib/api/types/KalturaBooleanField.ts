
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBooleanValue, KalturaBooleanValueArgs } from './KalturaBooleanValue';

export interface KalturaBooleanFieldArgs  extends KalturaBooleanValueArgs {
    
}


export class KalturaBooleanField extends KalturaBooleanValue {

    

    constructor(data? : KalturaBooleanFieldArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBooleanField' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBooleanField'] = KalturaBooleanField;