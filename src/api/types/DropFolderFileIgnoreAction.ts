
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFile } from './KalturaDropFolderFile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DropFolderFileIgnoreActionArgs  extends KalturaRequestArgs {
    dropFolderFileId : number;
}

/**
 * Build request payload for service 'dropFolderFile' action 'ignore'.
 *
 * Usage: Set the KalturaDropFolderFile status to ignore (KalturaDropFolderFileStatus::IGNORE)
 *
 * Server response type:         KalturaDropFolderFile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DropFolderFileIgnoreAction extends KalturaRequest<KalturaDropFolderFile> {

    dropFolderFileId : number;

    constructor(data : DropFolderFileIgnoreActionArgs)
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
				action : { type : 'c', default : 'ignore' },
				dropFolderFileId : { type : 'n' }
            }
        );
        return result;
    }
}

