
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';

export interface KalturaDeliveryProfileHttpArgs  extends KalturaDeliveryProfileArgs {
    maxSize? : number;
}


export class KalturaDeliveryProfileHttp extends KalturaDeliveryProfile {

    maxSize : number;

    constructor(data? : KalturaDeliveryProfileHttpArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileHttp' },
				maxSize : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeliveryProfileHttp'] = KalturaDeliveryProfileHttp;