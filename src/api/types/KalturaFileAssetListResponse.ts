
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFileAsset } from './KalturaFileAsset';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaFileAssetListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaFileAssetListResponse extends KalturaListResponse {

    readonly objects : KalturaFileAsset[];

    constructor(data? : KalturaFileAssetListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaFileAssetListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaFileAsset, subType : 'KalturaFileAsset' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFileAssetListResponse',KalturaFileAssetListResponse);
