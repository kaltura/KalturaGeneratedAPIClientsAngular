
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';

export interface KalturaDeliveryProfileGenericHttpArgs  extends KalturaDeliveryProfileArgs {
    pattern? : string;
}


export class KalturaDeliveryProfileGenericHttp extends KalturaDeliveryProfile {

    pattern : string;

    constructor(data? : KalturaDeliveryProfileGenericHttpArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileGenericHttp' },
				pattern : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeliveryProfileGenericHttp'] = KalturaDeliveryProfileGenericHttp;