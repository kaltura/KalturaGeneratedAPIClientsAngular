
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaModerationFlag } from './KalturaModerationFlag';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaFlagActionArgs  extends KalturaRequestArgs {
    moderationFlag : KalturaModerationFlag;
}

/**
 * Build request payload for service 'media' action 'flag'.
 *
 * Usage: Flag inappropriate media entry for moderation
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MediaFlagAction extends KalturaRequest<void> {

    moderationFlag : KalturaModerationFlag;

    constructor(data : MediaFlagActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'media' },
				action : { type : 'c', default : 'flag' },
				moderationFlag : { type : 'o', subTypeConstructor : KalturaModerationFlag, subType : 'KalturaModerationFlag' }
            }
        );
        return result;
    }
}

