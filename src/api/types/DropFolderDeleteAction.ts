
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolder } from './KalturaDropFolder';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DropFolderDeleteActionArgs  extends KalturaRequestArgs {
    dropFolderId : number;
}

/**
 * Build request payload for service 'dropFolder' action 'delete'.
 *
 * Usage: Mark the KalturaDropFolder object as deleted
 *
 * Server response type:         KalturaDropFolder
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DropFolderDeleteAction extends KalturaRequest<KalturaDropFolder> {

    dropFolderId : number;

    constructor(data : DropFolderDeleteActionArgs)
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
				action : { type : 'c', default : 'delete' },
				dropFolderId : { type : 'n' }
            }
        );
        return result;
    }
}

