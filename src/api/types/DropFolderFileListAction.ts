
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFileListResponse } from './KalturaDropFolderFileListResponse';

import { KalturaDropFolderFileFilter } from './KalturaDropFolderFileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DropFolderFileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaDropFolderFileFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'dropFolderFile' action 'list'.
 *
 * Usage: List KalturaDropFolderFile objects
 *
 * Server response type:         KalturaDropFolderFileListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DropFolderFileListAction extends KalturaRequest<KalturaDropFolderFileListResponse> {

    filter : KalturaDropFolderFileFilter;
	pager : KalturaFilterPager;

    constructor(data? : DropFolderFileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDropFolderFileListResponse', responseConstructor : KalturaDropFolderFileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'dropfolder_dropfolderfile' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaDropFolderFileFilter, subType : 'KalturaDropFolderFileFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

