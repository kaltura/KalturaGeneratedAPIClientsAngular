
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParams } from './KalturaFlavorParams';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorParamsGetByConversionProfileIdActionArgs  extends KalturaRequestArgs {
    conversionProfileId : number;
}

/**
 * Build request payload for service 'flavorParams' action 'getByConversionProfileId'.
 *
 * Usage: Get Flavor Params by Conversion Profile ID
 *
 * Server response type:         KalturaFlavorParams[]
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class FlavorParamsGetByConversionProfileIdAction extends KalturaRequest<KalturaFlavorParams[]> {

    conversionProfileId : number;

    constructor(data : FlavorParamsGetByConversionProfileIdActionArgs)
    {
        super(data, {responseType : 'a', responseSubType : 'KalturaFlavorParams', responseConstructor : KalturaFlavorParams  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'flavorparams' },
				action : { type : 'c', default : 'getByConversionProfileId' },
				conversionProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

