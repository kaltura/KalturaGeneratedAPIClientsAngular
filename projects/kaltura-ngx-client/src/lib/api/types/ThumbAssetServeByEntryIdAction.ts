
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface ThumbAssetServeByEntryIdActionArgs  extends KalturaFileRequestArgs {
    entryId : string;
	thumbParamId? : number;
}

/**
 * Build request payload for service 'thumbAsset' action 'serveByEntryId'.
 *
 * Usage: Serves thumbnail by entry id and thumnail params id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class ThumbAssetServeByEntryIdAction extends KalturaFileRequest {

    entryId : string;
	thumbParamId : number;

    constructor(data : ThumbAssetServeByEntryIdActionArgs)
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
				action : { type : 'c', default : 'serveByEntryId' },
				entryId : { type : 's' },
				thumbParamId : { type : 'n' }
            }
        );
        return result;
    }
}

