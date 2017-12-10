
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolder } from './KalturaDropFolder';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DropFolderGetActionArgs  extends KalturaRequestArgs {
    dropFolderId : number;
}

/**
 * Build request payload for service 'dropFolder' action 'get'.
 *
 * Usage: Retrieve a KalturaDropFolder object by ID
 *
 * Server response type:         KalturaDropFolder
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DropFolderGetAction extends KalturaRequest<KalturaDropFolder> {

    dropFolderId : number;

    constructor(data : DropFolderGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				dropFolderId : { type : 'n' }
            }
        );
        return result;
    }
}

