
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScheduleEventBaseFilter, KalturaScheduleEventBaseFilterArgs } from './KalturaScheduleEventBaseFilter';

export interface KalturaScheduleEventFilterArgs  extends KalturaScheduleEventBaseFilterArgs {
    resourceIdsLike? : string;
	resourceIdsMultiLikeOr? : string;
	resourceIdsMultiLikeAnd? : string;
	parentResourceIdsLike? : string;
	parentResourceIdsMultiLikeOr? : string;
	parentResourceIdsMultiLikeAnd? : string;
	templateEntryCategoriesIdsMultiLikeAnd? : string;
	templateEntryCategoriesIdsMultiLikeOr? : string;
	resourceSystemNamesMultiLikeOr? : string;
	templateEntryCategoriesIdsLike? : string;
	resourceSystemNamesMultiLikeAnd? : string;
	resourceSystemNamesLike? : string;
	resourceIdEqual? : string;
}


export class KalturaScheduleEventFilter extends KalturaScheduleEventBaseFilter {

    resourceIdsLike : string;
	resourceIdsMultiLikeOr : string;
	resourceIdsMultiLikeAnd : string;
	parentResourceIdsLike : string;
	parentResourceIdsMultiLikeOr : string;
	parentResourceIdsMultiLikeAnd : string;
	templateEntryCategoriesIdsMultiLikeAnd : string;
	templateEntryCategoriesIdsMultiLikeOr : string;
	resourceSystemNamesMultiLikeOr : string;
	templateEntryCategoriesIdsLike : string;
	resourceSystemNamesMultiLikeAnd : string;
	resourceSystemNamesLike : string;
	resourceIdEqual : string;

    constructor(data? : KalturaScheduleEventFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaScheduleEventFilter' },
				resourceIdsLike : { type : 's' },
				resourceIdsMultiLikeOr : { type : 's' },
				resourceIdsMultiLikeAnd : { type : 's' },
				parentResourceIdsLike : { type : 's' },
				parentResourceIdsMultiLikeOr : { type : 's' },
				parentResourceIdsMultiLikeAnd : { type : 's' },
				templateEntryCategoriesIdsMultiLikeAnd : { type : 's' },
				templateEntryCategoriesIdsMultiLikeOr : { type : 's' },
				resourceSystemNamesMultiLikeOr : { type : 's' },
				templateEntryCategoriesIdsLike : { type : 's' },
				resourceSystemNamesMultiLikeAnd : { type : 's' },
				resourceSystemNamesLike : { type : 's' },
				resourceIdEqual : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScheduleEventFilter',KalturaScheduleEventFilter);
