
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCuePointFilter, KalturaCuePointFilterArgs } from './KalturaCuePointFilter';

export interface KalturaCodeCuePointBaseFilterArgs  extends KalturaCuePointFilterArgs {
    codeLike? : string;
	codeMultiLikeOr? : string;
	codeMultiLikeAnd? : string;
	codeEqual? : string;
	codeIn? : string;
	descriptionLike? : string;
	descriptionMultiLikeOr? : string;
	descriptionMultiLikeAnd? : string;
	endTimeGreaterThanOrEqual? : number;
	endTimeLessThanOrEqual? : number;
	durationGreaterThanOrEqual? : number;
	durationLessThanOrEqual? : number;
}


export class KalturaCodeCuePointBaseFilter extends KalturaCuePointFilter {

    codeLike : string;
	codeMultiLikeOr : string;
	codeMultiLikeAnd : string;
	codeEqual : string;
	codeIn : string;
	descriptionLike : string;
	descriptionMultiLikeOr : string;
	descriptionMultiLikeAnd : string;
	endTimeGreaterThanOrEqual : number;
	endTimeLessThanOrEqual : number;
	durationGreaterThanOrEqual : number;
	durationLessThanOrEqual : number;

    constructor(data? : KalturaCodeCuePointBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCodeCuePointBaseFilter' },
				codeLike : { type : 's' },
				codeMultiLikeOr : { type : 's' },
				codeMultiLikeAnd : { type : 's' },
				codeEqual : { type : 's' },
				codeIn : { type : 's' },
				descriptionLike : { type : 's' },
				descriptionMultiLikeOr : { type : 's' },
				descriptionMultiLikeAnd : { type : 's' },
				endTimeGreaterThanOrEqual : { type : 'n' },
				endTimeLessThanOrEqual : { type : 'n' },
				durationGreaterThanOrEqual : { type : 'n' },
				durationLessThanOrEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCodeCuePointBaseFilter',KalturaCodeCuePointBaseFilter);
