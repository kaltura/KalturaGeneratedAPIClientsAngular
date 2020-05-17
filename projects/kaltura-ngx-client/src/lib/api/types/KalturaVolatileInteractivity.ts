
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseInteractivity, KalturaBaseInteractivityArgs } from './KalturaBaseInteractivity';

export interface KalturaVolatileInteractivityArgs  extends KalturaBaseInteractivityArgs {
    
}


export class KalturaVolatileInteractivity extends KalturaBaseInteractivity {

    

    constructor(data? : KalturaVolatileInteractivityArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVolatileInteractivity' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVolatileInteractivity'] = KalturaVolatileInteractivity;