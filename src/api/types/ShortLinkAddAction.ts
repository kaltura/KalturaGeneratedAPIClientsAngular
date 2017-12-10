
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaShortLink } from './KalturaShortLink';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ShortLinkAddActionArgs  extends KalturaRequestArgs {
    shortLink : KalturaShortLink;
}

/**
 * Build request payload for service 'shortLink' action 'add'.
 *
 * Usage: Allows you to add a short link object
 *
 * Server response type:         KalturaShortLink
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ShortLinkAddAction extends KalturaRequest<KalturaShortLink> {

    shortLink : KalturaShortLink;

    constructor(data : ShortLinkAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				shortLink : { type : 'o', subTypeConstructor : KalturaShortLink, subType : 'KalturaShortLink' }
            }
        );
        return result;
    }
}

