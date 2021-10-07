
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaBaseEntryBaseFilter, KalturaBaseEntryBaseFilterArgs } from './KalturaBaseEntryBaseFilter';

export interface KalturaBaseEntryFilterArgs  extends KalturaBaseEntryBaseFilterArgs {
    freeText? : string;
	excludedFreeTextGroups? : string;
	descriptionLike? : string;
	isRoot? : KalturaNullableBoolean;
	categoriesFullNameIn? : string;
	categoryAncestorIdIn? : string;
	redirectFromEntryId? : string;
	conversionProfileIdEqual? : number;
}


export class KalturaBaseEntryFilter extends KalturaBaseEntryBaseFilter {

    freeText : string;
	excludedFreeTextGroups : string;
	descriptionLike : string;
	isRoot : KalturaNullableBoolean;
	categoriesFullNameIn : string;
	categoryAncestorIdIn : string;
	redirectFromEntryId : string;
	conversionProfileIdEqual : number;

    constructor(data? : KalturaBaseEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseEntryFilter' },
				freeText : { type : 's' },
				excludedFreeTextGroups : { type : 's' },
				descriptionLike : { type : 's' },
				isRoot : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				categoriesFullNameIn : { type : 's' },
				categoryAncestorIdIn : { type : 's' },
				redirectFromEntryId : { type : 's' },
				conversionProfileIdEqual : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBaseEntryFilter'] = KalturaBaseEntryFilter;