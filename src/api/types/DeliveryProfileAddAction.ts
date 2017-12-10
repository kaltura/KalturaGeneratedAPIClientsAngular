
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfile } from './KalturaDeliveryProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DeliveryProfileAddActionArgs  extends KalturaRequestArgs {
    delivery : KalturaDeliveryProfile;
}

/**
 * Build request payload for service 'deliveryProfile' action 'add'.
 *
 * Usage: Add new delivery
 *
 * Server response type:         KalturaDeliveryProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DeliveryProfileAddAction extends KalturaRequest<KalturaDeliveryProfile> {

    delivery : KalturaDeliveryProfile;

    constructor(data : DeliveryProfileAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDeliveryProfile', responseConstructor : KalturaDeliveryProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'deliveryprofile' },
				action : { type : 'c', default : 'add' },
				delivery : { type : 'o', subTypeConstructor : KalturaDeliveryProfile, subType : 'KalturaDeliveryProfile' }
            }
        );
        return result;
    }
}

