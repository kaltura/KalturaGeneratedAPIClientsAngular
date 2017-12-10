
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFlavorAssetStatus } from './KalturaFlavorAssetStatus';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaAsset, KalturaAssetArgs } from './KalturaAsset';

export interface KalturaFlavorAssetArgs  extends KalturaAssetArgs {
    flavorParamsId? : number;
	language? : KalturaLanguage;
	label? : string;
	isDefault? : KalturaNullableBoolean;
}


export class KalturaFlavorAsset extends KalturaAsset {

    flavorParamsId : number;
	readonly width : number;
	readonly height : number;
	readonly bitrate : number;
	readonly frameRate : number;
	readonly isOriginal : boolean;
	readonly isWeb : boolean;
	readonly containerFormat : string;
	readonly videoCodecId : string;
	readonly status : KalturaFlavorAssetStatus;
	language : KalturaLanguage;
	label : string;
	isDefault : KalturaNullableBoolean;

    constructor(data? : KalturaFlavorAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFlavorAsset' },
				flavorParamsId : { type : 'n' },
				width : { type : 'n', readOnly : true },
				height : { type : 'n', readOnly : true },
				bitrate : { type : 'n', readOnly : true },
				frameRate : { type : 'n', readOnly : true },
				isOriginal : { type : 'b', readOnly : true },
				isWeb : { type : 'b', readOnly : true },
				containerFormat : { type : 's', readOnly : true },
				videoCodecId : { type : 's', readOnly : true },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaFlavorAssetStatus, subType : 'KalturaFlavorAssetStatus' },
				language : { type : 'es', subTypeConstructor : KalturaLanguage, subType : 'KalturaLanguage' },
				label : { type : 's' },
				isDefault : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFlavorAsset',KalturaFlavorAsset);
