
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';

export interface KalturaDeliveryProfileLivePackagerArgs  extends KalturaDeliveryProfileArgs {
    livePackagerSigningDomain? : string;
	shouldRedirect? : boolean;
}


export class KalturaDeliveryProfileLivePackager extends KalturaDeliveryProfile {

    livePackagerSigningDomain : string;
	shouldRedirect : boolean;

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
				livePackagerSigningDomain : { type : 's' },
				shouldRedirect : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeliveryProfileLivePackager'] = KalturaDeliveryProfileLivePackager;