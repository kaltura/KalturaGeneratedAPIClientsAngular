
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaExternalMediaEntryFilter } from './KalturaExternalMediaEntryFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ExternalMediaCountActionArgs  extends KalturaRequestArgs {
    filter? : KalturaExternalMediaEntryFilter;
}

/**
 * Build request payload for service 'externalMedia' action 'count'.
 *
 * Usage: Count media entries by filter
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ExternalMediaCountAction extends KalturaRequest<number> {

    filter : KalturaExternalMediaEntryFilter;

    constructor(data? : ExternalMediaCountActionArgs)
    {
        super(data, {responseType : 'n', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'externalmedia_externalmedia' },
				action : { type : 'c', default : 'count' },
				filter : { type : 'o', subTypeConstructor : KalturaExternalMediaEntryFilter, subType : 'KalturaExternalMediaEntryFilter' }
            }
        );
        return result;
    }
}

