
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaPartner } from './KalturaPartner';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerRegistrationValidationActionArgs  extends KalturaRequestArgs {
    partner : KalturaPartner;
	cmsPassword? : string;
	templatePartnerId? : number;
	silent? : boolean;
}

/**
 * Build request payload for service 'partner' action 'registrationValidation'.
 *
 * Usage: Create a new Partner object
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export class PartnerRegistrationValidationAction extends KalturaRequest<boolean> {

    partner : KalturaPartner;
	cmsPassword : string;
	templatePartnerId : number;
	silent : boolean;

    constructor(data : PartnerRegistrationValidationActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
        if (typeof this.silent === 'undefined') this.silent = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'partner' },
				action : { type : 'c', default : 'registrationValidation' },
				partner : { type : 'o', subTypeConstructor : KalturaPartner, subType : 'KalturaPartner' },
				cmsPassword : { type : 's' },
				templatePartnerId : { type : 'n' },
				silent : { type : 'b' }
            }
        );
        return result;
    }
}

