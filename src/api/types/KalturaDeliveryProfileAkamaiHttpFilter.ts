
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeliveryProfileAkamaiHttpBaseFilter, KalturaDeliveryProfileAkamaiHttpBaseFilterArgs } from './KalturaDeliveryProfileAkamaiHttpBaseFilter';

export interface KalturaDeliveryProfileAkamaiHttpFilterArgs  extends KalturaDeliveryProfileAkamaiHttpBaseFilterArgs {
    
}


export class KalturaDeliveryProfileAkamaiHttpFilter extends KalturaDeliveryProfileAkamaiHttpBaseFilter {

    

    constructor(data? : KalturaDeliveryProfileAkamaiHttpFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileAkamaiHttpFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeliveryProfileAkamaiHttpFilter',KalturaDeliveryProfileAkamaiHttpFilter);
