
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfileAkamaiHdsBaseFilter, KalturaDeliveryProfileAkamaiHdsBaseFilterArgs } from './KalturaDeliveryProfileAkamaiHdsBaseFilter';

export interface KalturaDeliveryProfileAkamaiHdsFilterArgs  extends KalturaDeliveryProfileAkamaiHdsBaseFilterArgs {
    
}


export class KalturaDeliveryProfileAkamaiHdsFilter extends KalturaDeliveryProfileAkamaiHdsBaseFilter {

    

    constructor(data? : KalturaDeliveryProfileAkamaiHdsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileAkamaiHdsFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeliveryProfileAkamaiHdsFilter'] = KalturaDeliveryProfileAkamaiHdsFilter;