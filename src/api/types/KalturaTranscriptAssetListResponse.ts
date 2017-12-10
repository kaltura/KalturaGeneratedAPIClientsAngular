
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTranscriptAsset } from './KalturaTranscriptAsset';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaTranscriptAssetListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaTranscriptAssetListResponse extends KalturaListResponse {

    readonly objects : KalturaTranscriptAsset[];

    constructor(data? : KalturaTranscriptAssetListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTranscriptAssetListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaTranscriptAsset, subType : 'KalturaTranscriptAsset' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTranscriptAssetListResponse',KalturaTranscriptAssetListResponse);
