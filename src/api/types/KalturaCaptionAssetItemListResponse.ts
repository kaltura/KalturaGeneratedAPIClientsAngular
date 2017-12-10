
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCaptionAssetItem } from './KalturaCaptionAssetItem';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaCaptionAssetItemListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaCaptionAssetItemListResponse extends KalturaListResponse {

    readonly objects : KalturaCaptionAssetItem[];

    constructor(data? : KalturaCaptionAssetItemListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaCaptionAssetItemListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaCaptionAssetItem, subType : 'KalturaCaptionAssetItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCaptionAssetItemListResponse',KalturaCaptionAssetItemListResponse);
