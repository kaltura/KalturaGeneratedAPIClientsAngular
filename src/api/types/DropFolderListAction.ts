
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderListResponse } from './KalturaDropFolderListResponse';

import { KalturaDropFolderFilter } from './KalturaDropFolderFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DropFolderListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaDropFolderFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'dropFolder' action 'list'.
 *
 * Usage: List KalturaDropFolder objects
 *
 * Server response type:         KalturaDropFolderListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DropFolderListAction extends KalturaRequest<KalturaDropFolderListResponse> {

    filter : KalturaDropFolderFilter;
	pager : KalturaFilterPager;

    constructor(data? : DropFolderListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDropFolderListResponse', responseConstructor : KalturaDropFolderListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'dropfolder_dropfolder' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaDropFolderFilter, subType : 'KalturaDropFolderFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

