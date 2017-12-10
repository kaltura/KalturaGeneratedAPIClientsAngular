
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaCuePointFilter, KalturaCuePointFilterArgs } from './KalturaCuePointFilter';

export interface KalturaAnnotationBaseFilterArgs  extends KalturaCuePointFilterArgs {
    parentIdEqual? : string;
	parentIdIn? : string;
	textLike? : string;
	textMultiLikeOr? : string;
	textMultiLikeAnd? : string;
	endTimeGreaterThanOrEqual? : number;
	endTimeLessThanOrEqual? : number;
	durationGreaterThanOrEqual? : number;
	durationLessThanOrEqual? : number;
	isPublicEqual? : KalturaNullableBoolean;
}


export class KalturaAnnotationBaseFilter extends KalturaCuePointFilter {

    parentIdEqual : string;
	parentIdIn : string;
	textLike : string;
	textMultiLikeOr : string;
	textMultiLikeAnd : string;
	endTimeGreaterThanOrEqual : number;
	endTimeLessThanOrEqual : number;
	durationGreaterThanOrEqual : number;
	durationLessThanOrEqual : number;
	isPublicEqual : KalturaNullableBoolean;

    constructor(data? : KalturaAnnotationBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAnnotationBaseFilter' },
				parentIdEqual : { type : 's' },
				parentIdIn : { type : 's' },
				textLike : { type : 's' },
				textMultiLikeOr : { type : 's' },
				textMultiLikeAnd : { type : 's' },
				endTimeGreaterThanOrEqual : { type : 'n' },
				endTimeLessThanOrEqual : { type : 'n' },
				durationGreaterThanOrEqual : { type : 'n' },
				durationLessThanOrEqual : { type : 'n' },
				isPublicEqual : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAnnotationBaseFilter',KalturaAnnotationBaseFilter);
