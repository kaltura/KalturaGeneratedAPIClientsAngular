
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaThumbCuePointSubType } from './KalturaThumbCuePointSubType';
import { KalturaCuePointFilter, KalturaCuePointFilterArgs } from './KalturaCuePointFilter';

export interface KalturaThumbCuePointBaseFilterArgs  extends KalturaCuePointFilterArgs {
    descriptionLike? : string;
	descriptionMultiLikeOr? : string;
	descriptionMultiLikeAnd? : string;
	titleLike? : string;
	titleMultiLikeOr? : string;
	titleMultiLikeAnd? : string;
	subTypeEqual? : KalturaThumbCuePointSubType;
	subTypeIn? : string;
}


export class KalturaThumbCuePointBaseFilter extends KalturaCuePointFilter {

    descriptionLike : string;
	descriptionMultiLikeOr : string;
	descriptionMultiLikeAnd : string;
	titleLike : string;
	titleMultiLikeOr : string;
	titleMultiLikeAnd : string;
	subTypeEqual : KalturaThumbCuePointSubType;
	subTypeIn : string;

    constructor(data? : KalturaThumbCuePointBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaThumbCuePointBaseFilter' },
				descriptionLike : { type : 's' },
				descriptionMultiLikeOr : { type : 's' },
				descriptionMultiLikeAnd : { type : 's' },
				titleLike : { type : 's' },
				titleMultiLikeOr : { type : 's' },
				titleMultiLikeAnd : { type : 's' },
				subTypeEqual : { type : 'en', subTypeConstructor : KalturaThumbCuePointSubType, subType : 'KalturaThumbCuePointSubType' },
				subTypeIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaThumbCuePointBaseFilter',KalturaThumbCuePointBaseFilter);
