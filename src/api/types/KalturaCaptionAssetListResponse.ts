
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCaptionAsset } from './KalturaCaptionAsset';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaCaptionAssetListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaCaptionAssetListResponse extends KalturaListResponse {

    readonly objects : KalturaCaptionAsset[];

    constructor(data? : KalturaCaptionAssetListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaCaptionAssetListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaCaptionAsset, subType : 'KalturaCaptionAsset' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCaptionAssetListResponse',KalturaCaptionAssetListResponse);
