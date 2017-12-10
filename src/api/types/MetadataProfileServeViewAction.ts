
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface MetadataProfileServeViewActionArgs  extends KalturaFileRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'metadataProfile' action 'serveView'.
 *
 * Usage: Serves metadata profile view file
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaFileRequest
 */
export class MetadataProfileServeViewAction extends KalturaFileRequest {

    id : number;

    constructor(data : MetadataProfileServeViewActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'metadata_metadataprofile' },
				action : { type : 'c', default : 'serveView' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

