
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFlavorReadyBehaviorType } from './KalturaFlavorReadyBehaviorType';
import { KalturaAssetParamsOrigin } from './KalturaAssetParamsOrigin';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaConversionProfileAssetParamsBaseFilterArgs  extends KalturaRelatedFilterArgs {
    conversionProfileIdEqual? : number;
	conversionProfileIdIn? : string;
	assetParamsIdEqual? : number;
	assetParamsIdIn? : string;
	readyBehaviorEqual? : KalturaFlavorReadyBehaviorType;
	readyBehaviorIn? : string;
	originEqual? : KalturaAssetParamsOrigin;
	originIn? : string;
	systemNameEqual? : string;
	systemNameIn? : string;
}


export class KalturaConversionProfileAssetParamsBaseFilter extends KalturaRelatedFilter {

    conversionProfileIdEqual : number;
	conversionProfileIdIn : string;
	assetParamsIdEqual : number;
	assetParamsIdIn : string;
	readyBehaviorEqual : KalturaFlavorReadyBehaviorType;
	readyBehaviorIn : string;
	originEqual : KalturaAssetParamsOrigin;
	originIn : string;
	systemNameEqual : string;
	systemNameIn : string;

    constructor(data? : KalturaConversionProfileAssetParamsBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConversionProfileAssetParamsBaseFilter' },
				conversionProfileIdEqual : { type : 'n' },
				conversionProfileIdIn : { type : 's' },
				assetParamsIdEqual : { type : 'n' },
				assetParamsIdIn : { type : 's' },
				readyBehaviorEqual : { type : 'en', subTypeConstructor : KalturaFlavorReadyBehaviorType, subType : 'KalturaFlavorReadyBehaviorType' },
				readyBehaviorIn : { type : 's' },
				originEqual : { type : 'en', subTypeConstructor : KalturaAssetParamsOrigin, subType : 'KalturaAssetParamsOrigin' },
				originIn : { type : 's' },
				systemNameEqual : { type : 's' },
				systemNameIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConversionProfileAssetParamsBaseFilter',KalturaConversionProfileAssetParamsBaseFilter);
