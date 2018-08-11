
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaConversionProfileFilter } from './KalturaConversionProfileFilter';
import { KalturaAssetParamsFilter } from './KalturaAssetParamsFilter';
import { KalturaConversionProfileAssetParamsBaseFilter, KalturaConversionProfileAssetParamsBaseFilterArgs } from './KalturaConversionProfileAssetParamsBaseFilter';

export interface KalturaConversionProfileAssetParamsFilterArgs  extends KalturaConversionProfileAssetParamsBaseFilterArgs {
    conversionProfileIdFilter? : KalturaConversionProfileFilter;
	assetParamsIdFilter? : KalturaAssetParamsFilter;
}


export class KalturaConversionProfileAssetParamsFilter extends KalturaConversionProfileAssetParamsBaseFilter {

    conversionProfileIdFilter : KalturaConversionProfileFilter;
	assetParamsIdFilter : KalturaAssetParamsFilter;

    constructor(data? : KalturaConversionProfileAssetParamsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConversionProfileAssetParamsFilter' },
				conversionProfileIdFilter : { type : 'o', subTypeConstructor : KalturaConversionProfileFilter, subType : 'KalturaConversionProfileFilter' },
				assetParamsIdFilter : { type : 'o', subTypeConstructor : KalturaAssetParamsFilter, subType : 'KalturaAssetParamsFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaConversionProfileAssetParamsFilter'] = KalturaConversionProfileAssetParamsFilter;