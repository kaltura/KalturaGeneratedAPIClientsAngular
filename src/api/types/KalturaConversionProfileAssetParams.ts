
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFlavorReadyBehaviorType } from './KalturaFlavorReadyBehaviorType';
import { KalturaAssetParamsOrigin } from './KalturaAssetParamsOrigin';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaAssetParamsDeletePolicy } from './KalturaAssetParamsDeletePolicy';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaConversionProfileAssetParamsArgs  extends KalturaObjectBaseArgs {
    readyBehavior? : KalturaFlavorReadyBehaviorType;
	origin? : KalturaAssetParamsOrigin;
	systemName? : string;
	forceNoneComplied? : KalturaNullableBoolean;
	deletePolicy? : KalturaAssetParamsDeletePolicy;
	isEncrypted? : KalturaNullableBoolean;
	contentAwareness? : number;
	chunkedEncodeMode? : number;
	twoPass? : KalturaNullableBoolean;
	tags? : string;
}


export class KalturaConversionProfileAssetParams extends KalturaObjectBase {

    readonly conversionProfileId : number;
	readonly assetParamsId : number;
	readyBehavior : KalturaFlavorReadyBehaviorType;
	origin : KalturaAssetParamsOrigin;
	systemName : string;
	forceNoneComplied : KalturaNullableBoolean;
	deletePolicy : KalturaAssetParamsDeletePolicy;
	isEncrypted : KalturaNullableBoolean;
	contentAwareness : number;
	chunkedEncodeMode : number;
	twoPass : KalturaNullableBoolean;
	tags : string;

    constructor(data? : KalturaConversionProfileAssetParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConversionProfileAssetParams' },
				conversionProfileId : { type : 'n', readOnly : true },
				assetParamsId : { type : 'n', readOnly : true },
				readyBehavior : { type : 'en', subTypeConstructor : KalturaFlavorReadyBehaviorType, subType : 'KalturaFlavorReadyBehaviorType' },
				origin : { type : 'en', subTypeConstructor : KalturaAssetParamsOrigin, subType : 'KalturaAssetParamsOrigin' },
				systemName : { type : 's' },
				forceNoneComplied : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				deletePolicy : { type : 'en', subTypeConstructor : KalturaAssetParamsDeletePolicy, subType : 'KalturaAssetParamsDeletePolicy' },
				isEncrypted : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				contentAwareness : { type : 'n' },
				chunkedEncodeMode : { type : 'n' },
				twoPass : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				tags : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConversionProfileAssetParams',KalturaConversionProfileAssetParams);
