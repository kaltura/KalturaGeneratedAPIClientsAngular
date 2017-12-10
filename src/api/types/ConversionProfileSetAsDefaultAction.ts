
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionProfile } from './KalturaConversionProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConversionProfileSetAsDefaultActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'conversionProfile' action 'setAsDefault'.
 *
 * Usage: Set Conversion Profile to be the partner default
 *
 * Server response type:         KalturaConversionProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ConversionProfileSetAsDefaultAction extends KalturaRequest<KalturaConversionProfile> {

    id : number;

    constructor(data : ConversionProfileSetAsDefaultActionArgs)
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
				action : { type : 'c', default : 'setAsDefault' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

