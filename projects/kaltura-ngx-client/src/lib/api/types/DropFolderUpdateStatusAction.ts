
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaDropFolderStatus } from './KalturaDropFolderStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DropFolderUpdateStatusActionArgs  extends KalturaRequestArgs {
    dropFolderId : number;
	status : KalturaDropFolderStatus;
}

/**
 * Build request payload for service 'dropFolder' action 'updateStatus'.
 *
 * 
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export class DropFolderUpdateStatusAction extends KalturaRequest<void> {

    dropFolderId : number;
	status : KalturaDropFolderStatus;

    constructor(data : DropFolderUpdateStatusActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'dropfolder_dropfolder' },
				action : { type : 'c', default : 'updateStatus' },
				dropFolderId : { type : 'n' },
				status : { type : 'en', subTypeConstructor : KalturaDropFolderStatus, subType : 'KalturaDropFolderStatus' }
            }
        );
        return result;
    }
}

