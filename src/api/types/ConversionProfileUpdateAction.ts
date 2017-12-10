
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionProfile } from './KalturaConversionProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConversionProfileUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	conversionProfile : KalturaConversionProfile;
}

/**
 * Build request payload for service 'conversionProfile' action 'update'.
 *
 * Usage: Update Conversion Profile by ID
 *
 * Server response type:         KalturaConversionProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ConversionProfileUpdateAction extends KalturaRequest<KalturaConversionProfile> {

    id : number;
	conversionProfile : KalturaConversionProfile;

    constructor(data : ConversionProfileUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaConversionProfile', responseConstructor : KalturaConversionProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'conversionprofile' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				conversionProfile : { type : 'o', subTypeConstructor : KalturaConversionProfile, subType : 'KalturaConversionProfile' }
            }
        );
        return result;
    }
}

