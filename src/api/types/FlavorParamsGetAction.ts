
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParams } from './KalturaFlavorParams';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorParamsGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'flavorParams' action 'get'.
 *
 * Usage: Get Flavor Params by ID
 *
 * Server response type:         KalturaFlavorParams
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class FlavorParamsGetAction extends KalturaRequest<KalturaFlavorParams> {

    id : number;

    constructor(data : FlavorParamsGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

