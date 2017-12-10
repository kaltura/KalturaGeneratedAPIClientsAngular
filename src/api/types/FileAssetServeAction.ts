
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface FileAssetServeActionArgs  extends KalturaFileRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'fileAsset' action 'serve'.
 *
 * Usage: Serve file asset by id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaFileRequest
 */
export class FileAssetServeAction extends KalturaFileRequest {

    id : number;

    constructor(data : FileAssetServeActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'fileasset' },
				action : { type : 'c', default : 'serve' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

