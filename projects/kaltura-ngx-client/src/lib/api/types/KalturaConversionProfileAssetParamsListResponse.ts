
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaConversionProfileAssetParams } from './KalturaConversionProfileAssetParams';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaConversionProfileAssetParamsListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaConversionProfileAssetParamsListResponse extends KalturaListResponse {

    readonly objects : KalturaConversionProfileAssetParams[];

    constructor(data? : KalturaConversionProfileAssetParamsListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaConversionProfileAssetParamsListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaConversionProfileAssetParams, subType : 'KalturaConversionProfileAssetParams' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaConversionProfileAssetParamsListResponse'] = KalturaConversionProfileAssetParamsListResponse;