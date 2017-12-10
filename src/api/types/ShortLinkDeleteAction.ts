
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaShortLink } from './KalturaShortLink';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ShortLinkDeleteActionArgs  extends KalturaRequestArgs {
    id : string;
}

/**
 * Build request payload for service 'shortLink' action 'delete'.
 *
 * Usage: Mark the short link as deleted
 *
 * Server response type:         KalturaShortLink
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ShortLinkDeleteAction extends KalturaRequest<KalturaShortLink> {

    id : string;

    constructor(data : ShortLinkDeleteActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaShortLink', responseConstructor : KalturaShortLink  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'shortlink_shortlink' },
				action : { type : 'c', default : 'delete' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

