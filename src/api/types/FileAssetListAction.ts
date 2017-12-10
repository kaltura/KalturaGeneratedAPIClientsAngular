
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileAssetListResponse } from './KalturaFileAssetListResponse';

import { KalturaFileAssetFilter } from './KalturaFileAssetFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FileAssetListActionArgs  extends KalturaRequestArgs {
    filter : KalturaFileAssetFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'fileAsset' action 'list'.
 *
 * Usage: List file assets by filter and pager
 *
 * Server response type:         KalturaFileAssetListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class FileAssetListAction extends KalturaRequest<KalturaFileAssetListResponse> {

    filter : KalturaFileAssetFilter;
	pager : KalturaFilterPager;

    constructor(data : FileAssetListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaFileAssetListResponse', responseConstructor : KalturaFileAssetListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'fileasset' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaFileAssetFilter, subType : 'KalturaFileAssetFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

