
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeliveryProfileRtmp, KalturaDeliveryProfileRtmpArgs } from './KalturaDeliveryProfileRtmp';

export interface KalturaDeliveryProfileGenericRtmpArgs  extends KalturaDeliveryProfileRtmpArgs {
    pattern? : string;
	rendererClass? : string;
}


export class KalturaDeliveryProfileGenericRtmp extends KalturaDeliveryProfileRtmp {

    pattern : string;
	rendererClass : string;

    constructor(data? : KalturaDeliveryProfileGenericRtmpArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileGenericRtmp' },
				pattern : { type : 's' },
				rendererClass : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeliveryProfileGenericRtmp',KalturaDeliveryProfileGenericRtmp);
