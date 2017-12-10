
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaThumbParams } from './KalturaThumbParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbAssetGetUrlActionArgs  extends KalturaRequestArgs {
    id : string;
	storageId? : number;
	thumbParams? : KalturaThumbParams;
}

/**
 * Build request payload for service 'thumbAsset' action 'getUrl'.
 *
 * Usage: Get download URL for the asset
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ThumbAssetGetUrlAction extends KalturaRequest<string> {

    id : string;
	storageId : number;
	thumbParams : KalturaThumbParams;

    constructor(data : ThumbAssetGetUrlActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'thumbasset' },
				action : { type : 'c', default : 'getUrl' },
				id : { type : 's' },
				storageId : { type : 'n' },
				thumbParams : { type : 'o', subTypeConstructor : KalturaThumbParams, subType : 'KalturaThumbParams' }
            }
        );
        return result;
    }
}

