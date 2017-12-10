
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaThumbAsset } from './KalturaThumbAsset';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaThumbAssetListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaThumbAssetListResponse extends KalturaListResponse {

    readonly objects : KalturaThumbAsset[];

    constructor(data? : KalturaThumbAssetListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaThumbAssetListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaThumbAsset, subType : 'KalturaThumbAsset' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaThumbAssetListResponse',KalturaThumbAssetListResponse);
