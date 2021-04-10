
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBeaconListResponse } from './KalturaBeaconListResponse';

import { KalturaBeaconSearchParams } from './KalturaBeaconSearchParams';
import { KalturaPager } from './KalturaPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BeaconSearchScheduledResourceActionArgs  extends KalturaRequestArgs {
    searchParams : KalturaBeaconSearchParams;
	pager? : KalturaPager;
}

/**
 * Build request payload for service 'beacon' action 'searchScheduledResource'.
 *
 * 
 *
 * Server response type:         KalturaBeaconListResponse
 * Server failure response type: KalturaAPIException
 */
export class BeaconSearchScheduledResourceAction extends KalturaRequest<KalturaBeaconListResponse> {

    searchParams : KalturaBeaconSearchParams;
	pager : KalturaPager;

    constructor(data : BeaconSearchScheduledResourceActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBeaconListResponse', responseConstructor : KalturaBeaconListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'beacon_beacon' },
				action : { type : 'c', default : 'searchScheduledResource' },
				searchParams : { type : 'o', subTypeConstructor : KalturaBeaconSearchParams, subType : 'KalturaBeaconSearchParams' },
				pager : { type : 'o', subTypeConstructor : KalturaPager, subType : 'KalturaPager' }
            }
        );
        return result;
    }
}

