
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserNotifyBanActionArgs  extends KalturaRequestArgs {
    userId : string;
}

/**
 * Build request payload for service 'user' action 'notifyBan'.
 *
 * Usage: Notifies that a user is banned from an account
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserNotifyBanAction extends KalturaRequest<void> {

    userId : string;

    constructor(data : UserNotifyBanActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'user' },
				action : { type : 'c', default : 'notifyBan' },
				userId : { type : 's' }
            }
        );
        return result;
    }
}

