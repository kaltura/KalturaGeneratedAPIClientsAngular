
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaCaptionType } from './KalturaCaptionType';
import { KalturaAssetParams, KalturaAssetParamsArgs } from './KalturaAssetParams';

export interface KalturaCaptionParamsArgs  extends KalturaAssetParamsArgs {
    language? : KalturaLanguage;
	isDefault? : KalturaNullableBoolean;
	label? : string;
	format? : KalturaCaptionType;
	sourceParamsId? : number;
}


export class KalturaCaptionParams extends KalturaAssetParams {

    language : KalturaLanguage;
	isDefault : KalturaNullableBoolean;
	label : string;
	format : KalturaCaptionType;
	sourceParamsId : number;

    constructor(data? : KalturaCaptionParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCaptionParams' },
				language : { type : 'es', subTypeConstructor : KalturaLanguage, subType : 'KalturaLanguage' },
				isDefault : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				label : { type : 's' },
				format : { type : 'es', subTypeConstructor : KalturaCaptionType, subType : 'KalturaCaptionType' },
				sourceParamsId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCaptionParams',KalturaCaptionParams);
