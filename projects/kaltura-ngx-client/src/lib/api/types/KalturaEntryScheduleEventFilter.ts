
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryScheduleEventBaseFilter, KalturaEntryScheduleEventBaseFilterArgs } from './KalturaEntryScheduleEventBaseFilter';

export interface KalturaEntryScheduleEventFilterArgs  extends KalturaEntryScheduleEventBaseFilterArgs {
    parentCategoryIdsLike? : string;
	parentCategoryIdsMultiLikeOr? : string;
	parentCategoryIdsMultiLikeAnd? : string;
}


export class KalturaEntryScheduleEventFilter extends KalturaEntryScheduleEventBaseFilter {

    parentCategoryIdsLike : string;
	parentCategoryIdsMultiLikeOr : string;
	parentCategoryIdsMultiLikeAnd : string;

    constructor(data? : KalturaEntryScheduleEventFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryScheduleEventFilter' },
				parentCategoryIdsLike : { type : 's' },
				parentCategoryIdsMultiLikeOr : { type : 's' },
				parentCategoryIdsMultiLikeAnd : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEntryScheduleEventFilter'] = KalturaEntryScheduleEventFilter;