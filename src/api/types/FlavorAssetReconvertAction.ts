
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorAssetReconvertActionArgs  extends KalturaRequestArgs {
    id : string;
}

/**
 * Build request payload for service 'flavorAsset' action 'reconvert'.
 *
 * Usage: Reconvert Flavor Asset by ID
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class FlavorAssetReconvertAction extends KalturaRequest<void> {

    id : string;

    constructor(data : FlavorAssetReconvertActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'flavorasset' },
				action : { type : 'c', default : 'reconvert' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

