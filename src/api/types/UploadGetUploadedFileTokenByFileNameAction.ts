
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUploadResponse } from './KalturaUploadResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UploadGetUploadedFileTokenByFileNameActionArgs  extends KalturaRequestArgs {
    fileName : string;
}

/**
 * Build request payload for service 'upload' action 'getUploadedFileTokenByFileName'.
 *
 * 
 *
 * Server response type:         KalturaUploadResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UploadGetUploadedFileTokenByFileNameAction extends KalturaRequest<KalturaUploadResponse> {

    fileName : string;

    constructor(data : UploadGetUploadedFileTokenByFileNameActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUploadResponse', responseConstructor : KalturaUploadResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'upload' },
				action : { type : 'c', default : 'getUploadedFileTokenByFileName' },
				fileName : { type : 's' }
            }
        );
        return result;
    }
}

