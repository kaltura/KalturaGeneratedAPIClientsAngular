
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbnailTransformActionArgs  extends KalturaRequestArgs {
    transformString : string;
}

/**
 * Build request payload for service 'thumbnail' action 'transform'.
 *
 * Usage: Retrieves a thumbnail according to the required transformation
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export class ThumbnailTransformAction extends KalturaRequest<void> {

    transformString : string;

    constructor(data : ThumbnailTransformActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'thumbnail_thumbnail' },
				action : { type : 'c', default : 'transform' },
				transformString : { type : 's' }
            }
        );
        return result;
    }
}

