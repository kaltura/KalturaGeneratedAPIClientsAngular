
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartner } from './KalturaPartner';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerGetInfoActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'partner' action 'getInfo'.
 *
 * Usage: Retrieve all info attributed to the partner
 * This action expects no parameters. It returns information for the current KS partnerId
 *
 * Server response type:         KalturaPartner
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PartnerGetInfoAction extends KalturaRequest<KalturaPartner> {

    

    constructor(data? : PartnerGetInfoActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPartner', responseConstructor : KalturaPartner  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'partner' },
				action : { type : 'c', default : 'getInfo' }
            }
        );
        return result;
    }
}

