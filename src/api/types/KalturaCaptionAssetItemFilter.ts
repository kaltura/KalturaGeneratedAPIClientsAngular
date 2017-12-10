
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaCaptionAssetFilter, KalturaCaptionAssetFilterArgs } from './KalturaCaptionAssetFilter';

export interface KalturaCaptionAssetItemFilterArgs  extends KalturaCaptionAssetFilterArgs {
    contentLike? : string;
	contentMultiLikeOr? : string;
	contentMultiLikeAnd? : string;
	partnerDescriptionLike? : string;
	partnerDescriptionMultiLikeOr? : string;
	partnerDescriptionMultiLikeAnd? : string;
	languageEqual? : KalturaLanguage;
	languageIn? : string;
	labelEqual? : string;
	labelIn? : string;
	startTimeGreaterThanOrEqual? : number;
	startTimeLessThanOrEqual? : number;
	endTimeGreaterThanOrEqual? : number;
	endTimeLessThanOrEqual? : number;
}


export class KalturaCaptionAssetItemFilter extends KalturaCaptionAssetFilter {

    contentLike : string;
	contentMultiLikeOr : string;
	contentMultiLikeAnd : string;
	partnerDescriptionLike : string;
	partnerDescriptionMultiLikeOr : string;
	partnerDescriptionMultiLikeAnd : string;
	languageEqual : KalturaLanguage;
	languageIn : string;
	labelEqual : string;
	labelIn : string;
	startTimeGreaterThanOrEqual : number;
	startTimeLessThanOrEqual : number;
	endTimeGreaterThanOrEqual : number;
	endTimeLessThanOrEqual : number;

    constructor(data? : KalturaCaptionAssetItemFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCaptionAssetItemFilter' },
				contentLike : { type : 's' },
				contentMultiLikeOr : { type : 's' },
				contentMultiLikeAnd : { type : 's' },
				partnerDescriptionLike : { type : 's' },
				partnerDescriptionMultiLikeOr : { type : 's' },
				partnerDescriptionMultiLikeAnd : { type : 's' },
				languageEqual : { type : 'es', subTypeConstructor : KalturaLanguage, subType : 'KalturaLanguage' },
				languageIn : { type : 's' },
				labelEqual : { type : 's' },
				labelIn : { type : 's' },
				startTimeGreaterThanOrEqual : { type : 'n' },
				startTimeLessThanOrEqual : { type : 'n' },
				endTimeGreaterThanOrEqual : { type : 'n' },
				endTimeLessThanOrEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCaptionAssetItemFilter',KalturaCaptionAssetItemFilter);
