
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface MetadataProfileServeActionArgs  extends KalturaFileRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'metadataProfile' action 'serve'.
 *
 * Usage: Serves metadata profile XSD file
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaFileRequest
 */
export class MetadataProfileServeAction extends KalturaFileRequest {

    id : number;

    constructor(data : MetadataProfileServeActionArgs)
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
				action : { type : 'c', default : 'serve' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

