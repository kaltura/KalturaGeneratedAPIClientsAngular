
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserGenerateQrCodeActionArgs  extends KalturaRequestArgs {
    hashKey : string;
}

/**
 * Build request payload for service 'user' action 'generateQrCode'.
 *
 * Usage: get QR image content
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class UserGenerateQrCodeAction extends KalturaRequest<string> {

    hashKey : string;

    constructor(data : UserGenerateQrCodeActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'user' },
				action : { type : 'c', default : 'generateQrCode' },
				hashKey : { type : 's' }
            }
        );
        return result;
    }
}

