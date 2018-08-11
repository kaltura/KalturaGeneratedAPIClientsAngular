
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';

export interface KalturaDeliveryProfileLivePackagerArgs  extends KalturaDeliveryProfileArgs {
    livePackagerSigningDomain? : string;
}


export class KalturaDeliveryProfileLivePackager extends KalturaDeliveryProfile {

    livePackagerSigningDomain : string;

    constructor(data? : KalturaDeliveryProfileLivePackagerArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileLivePackager' },
				livePackagerSigningDomain : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeliveryProfileLivePackager'] = KalturaDeliveryProfileLivePackager;