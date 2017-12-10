
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFile } from './KalturaDropFolderFile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DropFolderFileUpdateActionArgs  extends KalturaRequestArgs {
    dropFolderFileId : number;
	dropFolderFile : KalturaDropFolderFile;
}

/**
 * Build request payload for service 'dropFolderFile' action 'update'.
 *
 * Usage: Update an existing KalturaDropFolderFile object
 *
 * Server response type:         KalturaDropFolderFile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DropFolderFileUpdateAction extends KalturaRequest<KalturaDropFolderFile> {

    dropFolderFileId : number;
	dropFolderFile : KalturaDropFolderFile;

    constructor(data : DropFolderFileUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				dropFolderFileId : { type : 'n' },
				dropFolderFile : { type : 'o', subTypeConstructor : KalturaDropFolderFile, subType : 'KalturaDropFolderFile' }
            }
        );
        return result;
    }
}

