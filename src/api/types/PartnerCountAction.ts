
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaPartnerFilter } from './KalturaPartnerFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerCountActionArgs  extends KalturaRequestArgs {
    filter? : KalturaPartnerFilter;
}

/**
 * Build request payload for service 'partner' action 'count'.
 *
 * Usage: Count partner's existing sub-publishers (count includes the partner itself)
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PartnerCountAction extends KalturaRequest<number> {

    filter : KalturaPartnerFilter;

    constructor(data? : PartnerCountActionArgs)
    {
        super(data, {responseType : 'n', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'partner' },
				action : { type : 'c', default : 'count' },
				filter : { type : 'o', subTypeConstructor : KalturaPartnerFilter, subType : 'KalturaPartnerFilter' }
            }
        );
        return result;
    }
}

