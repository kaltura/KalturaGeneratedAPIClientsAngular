
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolder } from './KalturaDropFolder';

import { KalturaBasicFieldsDropFolder } from './KalturaBasicFieldsDropFolder';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DropFolderUpdateBasicFieldsActionArgs  extends KalturaRequestArgs {
    dropFolderId : number;
	dropFolder : KalturaBasicFieldsDropFolder;
}

/**
 * Build request payload for service 'dropFolder' action 'updateBasicFields'.
 *
 * 
 *
 * Server response type:         KalturaDropFolder
 * Server failure response type: KalturaAPIException
 */
export class DropFolderUpdateBasicFieldsAction extends KalturaRequest<KalturaDropFolder> {

    dropFolderId : number;
	dropFolder : KalturaBasicFieldsDropFolder;

    constructor(data : DropFolderUpdateBasicFieldsActionArgs)
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
				action : { type : 'c', default : 'updateBasicFields' },
				dropFolderId : { type : 'n' },
				dropFolder : { type : 'o', subTypeConstructor : KalturaBasicFieldsDropFolder, subType : 'KalturaBasicFieldsDropFolder' }
            }
        );
        return result;
    }
}

