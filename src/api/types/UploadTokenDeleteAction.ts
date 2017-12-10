
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UploadTokenDeleteActionArgs  extends KalturaRequestArgs {
    uploadTokenId : string;
}

/**
 * Build request payload for service 'uploadToken' action 'delete'.
 *
 * Usage: Deletes the upload token by upload token id
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UploadTokenDeleteAction extends KalturaRequest<void> {

    uploadTokenId : string;

    constructor(data : UploadTokenDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'uploadtoken' },
				action : { type : 'c', default : 'delete' },
				uploadTokenId : { type : 's' }
            }
        );
        return result;
    }
}

