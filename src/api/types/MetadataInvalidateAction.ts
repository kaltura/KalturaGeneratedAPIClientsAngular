
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetadataInvalidateActionArgs  extends KalturaRequestArgs {
    id : number;
	version? : number;
}

/**
 * Build request payload for service 'metadata' action 'invalidate'.
 *
 * Usage: Mark existing metadata as invalid
 * Used by batch metadata transform
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MetadataInvalidateAction extends KalturaRequest<void> {

    id : number;
	version : number;

    constructor(data : MetadataInvalidateActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'metadata_metadata' },
				action : { type : 'c', default : 'invalidate' },
				id : { type : 'n' },
				version : { type : 'n' }
            }
        );
        return result;
    }
}

