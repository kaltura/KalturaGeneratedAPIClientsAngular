
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseInteractivity, KalturaBaseInteractivityArgs } from './KalturaBaseInteractivity';

export interface KalturaInteractivityArgs  extends KalturaBaseInteractivityArgs {
    
}


export class KalturaInteractivity extends KalturaBaseInteractivity {

    

    constructor(data? : KalturaInteractivityArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaInteractivity' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaInteractivity'] = KalturaInteractivity;