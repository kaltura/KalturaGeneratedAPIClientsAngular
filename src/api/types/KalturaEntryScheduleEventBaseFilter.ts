
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScheduleEventFilter, KalturaScheduleEventFilterArgs } from './KalturaScheduleEventFilter';

export interface KalturaEntryScheduleEventBaseFilterArgs  extends KalturaScheduleEventFilterArgs {
    templateEntryIdEqual? : string;
	entryIdsLike? : string;
	entryIdsMultiLikeOr? : string;
	entryIdsMultiLikeAnd? : string;
	categoryIdsLike? : string;
	categoryIdsMultiLikeOr? : string;
	categoryIdsMultiLikeAnd? : string;
}


export class KalturaEntryScheduleEventBaseFilter extends KalturaScheduleEventFilter {

    templateEntryIdEqual : string;
	entryIdsLike : string;
	entryIdsMultiLikeOr : string;
	entryIdsMultiLikeAnd : string;
	categoryIdsLike : string;
	categoryIdsMultiLikeOr : string;
	categoryIdsMultiLikeAnd : string;

    constructor(data? : KalturaEntryScheduleEventBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryScheduleEventBaseFilter' },
				templateEntryIdEqual : { type : 's' },
				entryIdsLike : { type : 's' },
				entryIdsMultiLikeOr : { type : 's' },
				entryIdsMultiLikeAnd : { type : 's' },
				categoryIdsLike : { type : 's' },
				categoryIdsMultiLikeOr : { type : 's' },
				categoryIdsMultiLikeAnd : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntryScheduleEventBaseFilter',KalturaEntryScheduleEventBaseFilter);
