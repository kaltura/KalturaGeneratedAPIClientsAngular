
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionProfile } from './KalturaConversionProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConversionProfileAddActionArgs  extends KalturaRequestArgs {
    conversionProfile : KalturaConversionProfile;
}

/**
 * Build request payload for service 'conversionProfile' action 'add'.
 *
 * Usage: Add new Conversion Profile
 *
 * Server response type:         KalturaConversionProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ConversionProfileAddAction extends KalturaRequest<KalturaConversionProfile> {

    conversionProfile : KalturaConversionProfile;

    constructor(data : ConversionProfileAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				conversionProfile : { type : 'o', subTypeConstructor : KalturaConversionProfile, subType : 'KalturaConversionProfile' }
            }
        );
        return result;
    }
}

