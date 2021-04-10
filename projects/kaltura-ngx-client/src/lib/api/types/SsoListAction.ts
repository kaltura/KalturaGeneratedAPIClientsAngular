
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSsoListResponse } from './KalturaSsoListResponse';

import { KalturaSsoFilter } from './KalturaSsoFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SsoListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaSsoFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'sso' action 'list'.
 *
 * Usage: Lists sso objects that are associated with an account
 *
 * Server response type:         KalturaSsoListResponse
 * Server failure response type: KalturaAPIException
 */
export class SsoListAction extends KalturaRequest<KalturaSsoListResponse> {

    filter : KalturaSsoFilter;
	pager : KalturaFilterPager;

    constructor(data? : SsoListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSsoListResponse', responseConstructor : KalturaSsoListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'sso_sso' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaSsoFilter, subType : 'KalturaSsoFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

