
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUploadToken } from './KalturaUploadToken';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UploadTokenGetActionArgs  extends KalturaRequestArgs {
    uploadTokenId : string;
}

/**
 * Build request payload for service 'uploadToken' action 'get'.
 *
 * Usage: Get upload token by id
 *
 * Server response type:         KalturaUploadToken
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UploadTokenGetAction extends KalturaRequest<KalturaUploadToken> {

    uploadTokenId : string;

    constructor(data : UploadTokenGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUploadToken', responseConstructor : KalturaUploadToken  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'uploadtoken' },
				action : { type : 'c', default : 'get' },
				uploadTokenId : { type : 's' }
            }
        );
        return result;
    }
}

