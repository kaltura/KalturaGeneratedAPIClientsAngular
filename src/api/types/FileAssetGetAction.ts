
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileAsset } from './KalturaFileAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FileAssetGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'fileAsset' action 'get'.
 *
 * Usage: Get file asset by id
 *
 * Server response type:         KalturaFileAsset
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class FileAssetGetAction extends KalturaRequest<KalturaFileAsset> {

    id : number;

    constructor(data : FileAssetGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaFileAsset', responseConstructor : KalturaFileAsset  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'fileasset' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

