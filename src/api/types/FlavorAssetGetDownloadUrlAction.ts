
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorAssetGetDownloadUrlActionArgs  extends KalturaRequestArgs {
    id : string;
	useCdn? : boolean;
}

/**
 * Build request payload for service 'flavorAsset' action 'getDownloadUrl'.
 *
 * Usage: Get download URL for the Flavor Asset
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class FlavorAssetGetDownloadUrlAction extends KalturaRequest<string> {

    id : string;
	useCdn : boolean;

    constructor(data : FlavorAssetGetDownloadUrlActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
        if (typeof this.useCdn === 'undefined') this.useCdn = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'flavorasset' },
				action : { type : 'c', default : 'getDownloadUrl' },
				id : { type : 's' },
				useCdn : { type : 'b' }
            }
        );
        return result;
    }
}

