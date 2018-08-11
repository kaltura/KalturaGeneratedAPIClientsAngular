
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfileFilter, KalturaDeliveryProfileFilterArgs } from './KalturaDeliveryProfileFilter';

export interface KalturaDeliveryProfileAkamaiHttpBaseFilterArgs  extends KalturaDeliveryProfileFilterArgs {
    
}


export class KalturaDeliveryProfileAkamaiHttpBaseFilter extends KalturaDeliveryProfileFilter {

    

    constructor(data? : KalturaDeliveryProfileAkamaiHttpBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileAkamaiHttpBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeliveryProfileAkamaiHttpBaseFilter'] = KalturaDeliveryProfileAkamaiHttpBaseFilter;