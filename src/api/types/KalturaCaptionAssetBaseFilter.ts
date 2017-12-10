
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCaptionType } from './KalturaCaptionType';
import { KalturaCaptionAssetStatus } from './KalturaCaptionAssetStatus';
import { KalturaAssetFilter, KalturaAssetFilterArgs } from './KalturaAssetFilter';

export interface KalturaCaptionAssetBaseFilterArgs  extends KalturaAssetFilterArgs {
    captionParamsIdEqual? : number;
	captionParamsIdIn? : string;
	formatEqual? : KalturaCaptionType;
	formatIn? : string;
	statusEqual? : KalturaCaptionAssetStatus;
	statusIn? : string;
	statusNotIn? : string;
}


export class KalturaCaptionAssetBaseFilter extends KalturaAssetFilter {

    captionParamsIdEqual : number;
	captionParamsIdIn : string;
	formatEqual : KalturaCaptionType;
	formatIn : string;
	statusEqual : KalturaCaptionAssetStatus;
	statusIn : string;
	statusNotIn : string;

    constructor(data? : KalturaCaptionAssetBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCaptionAssetBaseFilter' },
				captionParamsIdEqual : { type : 'n' },
				captionParamsIdIn : { type : 's' },
				formatEqual : { type : 'es', subTypeConstructor : KalturaCaptionType, subType : 'KalturaCaptionType' },
				formatIn : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaCaptionAssetStatus, subType : 'KalturaCaptionAssetStatus' },
				statusIn : { type : 's' },
				statusNotIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCaptionAssetBaseFilter',KalturaCaptionAssetBaseFilter);
