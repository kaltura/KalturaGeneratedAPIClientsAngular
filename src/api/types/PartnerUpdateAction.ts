
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartner } from './KalturaPartner';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerUpdateActionArgs  extends KalturaRequestArgs {
    partner : KalturaPartner;
	allowEmpty? : boolean;
}

/**
 * Build request payload for service 'partner' action 'update'.
 *
 * Usage: Update details and settings of an existing partner
 *
 * Server response type:         KalturaPartner
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PartnerUpdateAction extends KalturaRequest<KalturaPartner> {

    partner : KalturaPartner;
	allowEmpty : boolean;

    constructor(data : PartnerUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPartner', responseConstructor : KalturaPartner  });
        if (typeof this.allowEmpty === 'undefined') this.allowEmpty = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'partner' },
				action : { type : 'c', default : 'update' },
				partner : { type : 'o', subTypeConstructor : KalturaPartner, subType : 'KalturaPartner' },
				allowEmpty : { type : 'b' }
            }
        );
        return result;
    }
}

