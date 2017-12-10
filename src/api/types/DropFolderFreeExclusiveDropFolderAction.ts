
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolder } from './KalturaDropFolder';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DropFolderFreeExclusiveDropFolderActionArgs  extends KalturaRequestArgs {
    dropFolderId : number;
	errorCode? : string;
	errorDescription? : string;
}

/**
 * Build request payload for service 'dropFolder' action 'freeExclusiveDropFolder'.
 *
 * Usage: freeExclusive KalturaDropFolder object
 *
 * Server response type:         KalturaDropFolder
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DropFolderFreeExclusiveDropFolderAction extends KalturaRequest<KalturaDropFolder> {

    dropFolderId : number;
	errorCode : string;
	errorDescription : string;

    constructor(data : DropFolderFreeExclusiveDropFolderActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDropFolder', responseConstructor : KalturaDropFolder  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'dropfolder_dropfolder' },
				action : { type : 'c', default : 'freeExclusiveDropFolder' },
				dropFolderId : { type : 'n' },
				errorCode : { type : 's' },
				errorDescription : { type : 's' }
            }
        );
        return result;
    }
}

