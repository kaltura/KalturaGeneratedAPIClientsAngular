
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParams } from './KalturaFlavorParams';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorParamsUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	flavorParams : KalturaFlavorParams;
}

/**
 * Build request payload for service 'flavorParams' action 'update'.
 *
 * Usage: Update Flavor Params by ID
 *
 * Server response type:         KalturaFlavorParams
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class FlavorParamsUpdateAction extends KalturaRequest<KalturaFlavorParams> {

    id : number;
	flavorParams : KalturaFlavorParams;

    constructor(data : FlavorParamsUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				flavorParams : { type : 'o', subTypeConstructor : KalturaFlavorParams, subType : 'KalturaFlavorParams' }
            }
        );
        return result;
    }
}

