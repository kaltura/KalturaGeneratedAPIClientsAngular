
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfileListResponse } from './KalturaDeliveryProfileListResponse';

import { KalturaDeliveryProfileFilter } from './KalturaDeliveryProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DeliveryProfileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaDeliveryProfileFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'deliveryProfile' action 'list'.
 *
 * Usage: Retrieve a list of available delivery depends on the filter given
 *
 * Server response type:         KalturaDeliveryProfileListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DeliveryProfileListAction extends KalturaRequest<KalturaDeliveryProfileListResponse> {

    filter : KalturaDeliveryProfileFilter;
	pager : KalturaFilterPager;

    constructor(data? : DeliveryProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDeliveryProfileListResponse', responseConstructor : KalturaDeliveryProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'deliveryprofile' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaDeliveryProfileFilter, subType : 'KalturaDeliveryProfileFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

