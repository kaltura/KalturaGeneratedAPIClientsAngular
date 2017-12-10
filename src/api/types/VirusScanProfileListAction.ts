
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVirusScanProfileListResponse } from './KalturaVirusScanProfileListResponse';

import { KalturaVirusScanProfileFilter } from './KalturaVirusScanProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VirusScanProfileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaVirusScanProfileFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'virusScanProfile' action 'list'.
 *
 * Usage: List virus scan profile objects by filter and pager
 *
 * Server response type:         KalturaVirusScanProfileListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class VirusScanProfileListAction extends KalturaRequest<KalturaVirusScanProfileListResponse> {

    filter : KalturaVirusScanProfileFilter;
	pager : KalturaFilterPager;

    constructor(data? : VirusScanProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaVirusScanProfileListResponse', responseConstructor : KalturaVirusScanProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'virusscan_virusscanprofile' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaVirusScanProfileFilter, subType : 'KalturaVirusScanProfileFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

