
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UnicornNotifyActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'unicorn' action 'notify'.
 *
 * 
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UnicornNotifyAction extends KalturaRequest<void> {

    id : number;

    constructor(data : UnicornNotifyActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'unicorndistribution_unicorn' },
				action : { type : 'c', default : 'notify' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

