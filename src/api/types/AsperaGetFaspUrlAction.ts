
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AsperaGetFaspUrlActionArgs  extends KalturaRequestArgs {
    flavorAssetId : string;
}

/**
 * Build request payload for service 'aspera' action 'getFaspUrl'.
 *
 * 
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AsperaGetFaspUrlAction extends KalturaRequest<string> {

    flavorAssetId : string;

    constructor(data : AsperaGetFaspUrlActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'aspera_aspera' },
				action : { type : 'c', default : 'getFaspUrl' },
				flavorAssetId : { type : 's' }
            }
        );
        return result;
    }
}

