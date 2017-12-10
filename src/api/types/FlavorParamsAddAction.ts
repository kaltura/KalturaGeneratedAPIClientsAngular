
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParams } from './KalturaFlavorParams';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorParamsAddActionArgs  extends KalturaRequestArgs {
    flavorParams : KalturaFlavorParams;
}

/**
 * Build request payload for service 'flavorParams' action 'add'.
 *
 * Usage: Add new Flavor Params
 *
 * Server response type:         KalturaFlavorParams
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class FlavorParamsAddAction extends KalturaRequest<KalturaFlavorParams> {

    flavorParams : KalturaFlavorParams;

    constructor(data : FlavorParamsAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaFlavorParams', responseConstructor : KalturaFlavorParams  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'flavorparams' },
				action : { type : 'c', default : 'add' },
				flavorParams : { type : 'o', subTypeConstructor : KalturaFlavorParams, subType : 'KalturaFlavorParams' }
            }
        );
        return result;
    }
}

