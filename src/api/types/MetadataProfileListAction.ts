
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfileListResponse } from './KalturaMetadataProfileListResponse';

import { KalturaMetadataProfileFilter } from './KalturaMetadataProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetadataProfileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaMetadataProfileFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'metadataProfile' action 'list'.
 *
 * Usage: List metadata profile objects by filter and pager
 *
 * Server response type:         KalturaMetadataProfileListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MetadataProfileListAction extends KalturaRequest<KalturaMetadataProfileListResponse> {

    filter : KalturaMetadataProfileFilter;
	pager : KalturaFilterPager;

    constructor(data? : MetadataProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMetadataProfileListResponse', responseConstructor : KalturaMetadataProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'metadata_metadataprofile' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaMetadataProfileFilter, subType : 'KalturaMetadataProfileFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

