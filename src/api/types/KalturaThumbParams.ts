
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaThumbCropType } from './KalturaThumbCropType';
import { KalturaContainerFormat } from './KalturaContainerFormat';
import { KalturaAssetParams, KalturaAssetParamsArgs } from './KalturaAssetParams';

export interface KalturaThumbParamsArgs  extends KalturaAssetParamsArgs {
    cropType? : KalturaThumbCropType;
	quality? : number;
	cropX? : number;
	cropY? : number;
	cropWidth? : number;
	cropHeight? : number;
	videoOffset? : number;
	width? : number;
	height? : number;
	scaleWidth? : number;
	scaleHeight? : number;
	backgroundColor? : string;
	sourceParamsId? : number;
	format? : KalturaContainerFormat;
	density? : number;
	stripProfiles? : boolean;
	videoOffsetInPercentage? : number;
}


export class KalturaThumbParams extends KalturaAssetParams {

    cropType : KalturaThumbCropType;
	quality : number;
	cropX : number;
	cropY : number;
	cropWidth : number;
	cropHeight : number;
	videoOffset : number;
	width : number;
	height : number;
	scaleWidth : number;
	scaleHeight : number;
	backgroundColor : string;
	sourceParamsId : number;
	format : KalturaContainerFormat;
	density : number;
	stripProfiles : boolean;
	videoOffsetInPercentage : number;

    constructor(data? : KalturaThumbParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaThumbParams' },
				cropType : { type : 'en', subTypeConstructor : KalturaThumbCropType, subType : 'KalturaThumbCropType' },
				quality : { type : 'n' },
				cropX : { type : 'n' },
				cropY : { type : 'n' },
				cropWidth : { type : 'n' },
				cropHeight : { type : 'n' },
				videoOffset : { type : 'n' },
				width : { type : 'n' },
				height : { type : 'n' },
				scaleWidth : { type : 'n' },
				scaleHeight : { type : 'n' },
				backgroundColor : { type : 's' },
				sourceParamsId : { type : 'n' },
				format : { type : 'es', subTypeConstructor : KalturaContainerFormat, subType : 'KalturaContainerFormat' },
				density : { type : 'n' },
				stripProfiles : { type : 'b' },
				videoOffsetInPercentage : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaThumbParams',KalturaThumbParams);
