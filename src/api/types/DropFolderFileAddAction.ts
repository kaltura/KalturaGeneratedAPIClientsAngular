
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFile } from './KalturaDropFolderFile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DropFolderFileAddActionArgs  extends KalturaRequestArgs {
    dropFolderFile : KalturaDropFolderFile;
}

/**
 * Build request payload for service 'dropFolderFile' action 'add'.
 *
 * Usage: Allows you to add a new KalturaDropFolderFile object
 *
 * Server response type:         KalturaDropFolderFile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DropFolderFileAddAction extends KalturaRequest<KalturaDropFolderFile> {

    dropFolderFile : KalturaDropFolderFile;

    constructor(data : DropFolderFileAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				dropFolderFile : { type : 'o', subTypeConstructor : KalturaDropFolderFile, subType : 'KalturaDropFolderFile' }
            }
        );
        return result;
    }
}

