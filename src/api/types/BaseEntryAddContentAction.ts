
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';

import { KalturaResource } from './KalturaResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryAddContentActionArgs  extends KalturaRequestArgs {
    entryId : string;
	resource : KalturaResource;
}

/**
 * Build request payload for service 'baseEntry' action 'addContent'.
 *
 * Usage: Attach content resource to entry in status NO_MEDIA
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BaseEntryAddContentAction extends KalturaRequest<KalturaBaseEntry> {

    entryId : string;
	resource : KalturaResource;

    constructor(data : BaseEntryAddContentActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBaseEntry', responseConstructor : KalturaBaseEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'baseentry' },
				action : { type : 'c', default : 'addContent' },
				entryId : { type : 's' },
				resource : { type : 'o', subTypeConstructor : KalturaResource, subType : 'KalturaResource' }
            }
        );
        return result;
    }
}

