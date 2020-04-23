
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamFinishConfActionArgs  extends KalturaRequestArgs {
    entryId : string;
	serverNodeId? : number;
}

/**
 * Build request payload for service 'liveStream' action 'finishConf'.
 *
 * Usage: When the conf is finished this API should be called
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export class LiveStreamFinishConfAction extends KalturaRequest<boolean> {

    entryId : string;
	serverNodeId : number;

    constructor(data : LiveStreamFinishConfActionArgs)
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
				action : { type : 'c', default : 'finishConf' },
				entryId : { type : 's' },
				serverNodeId : { type : 'n' }
            }
        );
        return result;
    }
}

