
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';

export interface KalturaDeliveryProfileRtmpArgs  extends KalturaDeliveryProfileArgs {
    enforceRtmpe? : boolean;
	prefix? : string;
}


export class KalturaDeliveryProfileRtmp extends KalturaDeliveryProfile {

    enforceRtmpe : boolean;
	prefix : string;

    constructor(data? : KalturaDeliveryProfileRtmpArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileRtmp' },
				enforceRtmpe : { type : 'b' },
				prefix : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeliveryProfileRtmp'] = KalturaDeliveryProfileRtmp;