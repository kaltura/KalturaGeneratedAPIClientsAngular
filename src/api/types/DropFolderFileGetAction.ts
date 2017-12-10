
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFile } from './KalturaDropFolderFile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DropFolderFileGetActionArgs  extends KalturaRequestArgs {
    dropFolderFileId : number;
}

/**
 * Build request payload for service 'dropFolderFile' action 'get'.
 *
 * Usage: Retrieve a KalturaDropFolderFile object by ID
 *
 * Server response type:         KalturaDropFolderFile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DropFolderFileGetAction extends KalturaRequest<KalturaDropFolderFile> {

    dropFolderFileId : number;

    constructor(data : DropFolderFileGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDropFolderFile', responseConstructor : KalturaDropFolderFile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'dropfolder_dropfolderfile' },
				action : { type : 'c', default : 'get' },
				dropFolderFileId : { type : 'n' }
            }
        );
        return result;
    }
}

