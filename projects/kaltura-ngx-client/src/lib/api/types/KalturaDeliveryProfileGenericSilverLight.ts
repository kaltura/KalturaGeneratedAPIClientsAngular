
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';

export interface KalturaDeliveryProfileGenericSilverLightArgs  extends KalturaDeliveryProfileArgs {
    pattern? : string;
}


export class KalturaDeliveryProfileGenericSilverLight extends KalturaDeliveryProfile {

    pattern : string;

    constructor(data? : KalturaDeliveryProfileGenericSilverLightArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileGenericSilverLight' },
				pattern : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeliveryProfileGenericSilverLight'] = KalturaDeliveryProfileGenericSilverLight;