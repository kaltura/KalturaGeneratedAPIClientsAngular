
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAttachmentAsset } from './KalturaAttachmentAsset';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaAttachmentAssetListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaAttachmentAssetListResponse extends KalturaListResponse {

    readonly objects : KalturaAttachmentAsset[];

    constructor(data? : KalturaAttachmentAssetListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaAttachmentAssetListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaAttachmentAsset, subType : 'KalturaAttachmentAsset' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAttachmentAssetListResponse'] = KalturaAttachmentAssetListResponse;