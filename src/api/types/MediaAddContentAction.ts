
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';

import { KalturaResource } from './KalturaResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaAddContentActionArgs  extends KalturaRequestArgs {
    entryId : string;
	resource? : KalturaResource;
}

/**
 * Build request payload for service 'media' action 'addContent'.
 *
 * Usage: Add content to media entry which is not yet associated with content (therefore is in status NO_CONTENT).
 * If the requirement is to replace the entry's associated content, use action updateContent
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MediaAddContentAction extends KalturaRequest<KalturaMediaEntry> {

    entryId : string;
	resource : KalturaResource;

    constructor(data : MediaAddContentActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMediaEntry', responseConstructor : KalturaMediaEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'media' },
				action : { type : 'c', default : 'addContent' },
				entryId : { type : 's' },
				resource : { type : 'o', subTypeConstructor : KalturaResource, subType : 'KalturaResource' }
            }
        );
        return result;
    }
}

