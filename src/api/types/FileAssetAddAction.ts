
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileAsset } from './KalturaFileAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FileAssetAddActionArgs  extends KalturaRequestArgs {
    fileAsset : KalturaFileAsset;
}

/**
 * Build request payload for service 'fileAsset' action 'add'.
 *
 * Usage: Add new file asset
 *
 * Server response type:         KalturaFileAsset
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class FileAssetAddAction extends KalturaRequest<KalturaFileAsset> {

    fileAsset : KalturaFileAsset;

    constructor(data : FileAssetAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				fileAsset : { type : 'o', subTypeConstructor : KalturaFileAsset, subType : 'KalturaFileAsset' }
            }
        );
        return result;
    }
}

