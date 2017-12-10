
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStorageProfileListResponse } from './KalturaStorageProfileListResponse';

import { KalturaStorageProfileFilter } from './KalturaStorageProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface StorageProfileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaStorageProfileFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'storageProfile' action 'list'.
 *
 * 
 *
 * Server response type:         KalturaStorageProfileListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class StorageProfileListAction extends KalturaRequest<KalturaStorageProfileListResponse> {

    filter : KalturaStorageProfileFilter;
	pager : KalturaFilterPager;

    constructor(data? : StorageProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaStorageProfileListResponse', responseConstructor : KalturaStorageProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'storageprofile' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaStorageProfileFilter, subType : 'KalturaStorageProfileFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

