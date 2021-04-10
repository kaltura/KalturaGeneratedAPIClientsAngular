
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamRegisterConfActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'liveStream' action 'registerConf'.
 *
 * Usage: Mark that the conference has actually started
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export class LiveStreamRegisterConfAction extends KalturaRequest<boolean> {

    entryId : string;

    constructor(data : LiveStreamRegisterConfActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livestream' },
				action : { type : 'c', default : 'registerConf' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

