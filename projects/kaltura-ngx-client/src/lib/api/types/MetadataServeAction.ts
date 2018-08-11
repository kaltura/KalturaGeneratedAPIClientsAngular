
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface MetadataServeActionArgs  extends KalturaFileRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'metadata' action 'serve'.
 *
 * Usage: Serves metadata XML file
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class MetadataServeAction extends KalturaFileRequest {

    id : number;

    constructor(data : MetadataServeActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'metadata_metadata' },
				action : { type : 'c', default : 'serve' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

