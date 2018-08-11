
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaThumbParams } from './KalturaThumbParams';
import { KalturaThumbnailServeOptions } from './KalturaThumbnailServeOptions';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface ThumbAssetServeActionArgs  extends KalturaFileRequestArgs {
    thumbAssetId : string;
	version? : number;
	thumbParams? : KalturaThumbParams;
	options? : KalturaThumbnailServeOptions;
}

/**
 * Build request payload for service 'thumbAsset' action 'serve'.
 *
 * Usage: Serves thumbnail by its id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class ThumbAssetServeAction extends KalturaFileRequest {

    thumbAssetId : string;
	version : number;
	thumbParams : KalturaThumbParams;
	options : KalturaThumbnailServeOptions;

    constructor(data : ThumbAssetServeActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'thumbasset' },
				action : { type : 'c', default : 'serve' },
				thumbAssetId : { type : 's' },
				version : { type : 'n' },
				thumbParams : { type : 'o', subTypeConstructor : KalturaThumbParams, subType : 'KalturaThumbParams' },
				options : { type : 'o', subTypeConstructor : KalturaThumbnailServeOptions, subType : 'KalturaThumbnailServeOptions' }
            }
        );
        return result;
    }
}

