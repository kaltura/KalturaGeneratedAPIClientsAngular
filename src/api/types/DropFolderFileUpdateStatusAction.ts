
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFile } from './KalturaDropFolderFile';

import { KalturaDropFolderFileStatus } from './KalturaDropFolderFileStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DropFolderFileUpdateStatusActionArgs  extends KalturaRequestArgs {
    dropFolderFileId : number;
	status : KalturaDropFolderFileStatus;
}

/**
 * Build request payload for service 'dropFolderFile' action 'updateStatus'.
 *
 * Usage: Update status of KalturaDropFolderFile
 *
 * Server response type:         KalturaDropFolderFile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DropFolderFileUpdateStatusAction extends KalturaRequest<KalturaDropFolderFile> {

    dropFolderFileId : number;
	status : KalturaDropFolderFileStatus;

    constructor(data : DropFolderFileUpdateStatusActionArgs)
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
				action : { type : 'c', default : 'updateStatus' },
				dropFolderFileId : { type : 'n' },
				status : { type : 'en', subTypeConstructor : KalturaDropFolderFileStatus, subType : 'KalturaDropFolderFileStatus' }
            }
        );
        return result;
    }
}

