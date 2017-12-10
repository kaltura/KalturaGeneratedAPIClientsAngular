
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCategoryEntryStatus } from './KalturaCategoryEntryStatus';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaCategoryEntryBaseFilterArgs  extends KalturaRelatedFilterArgs {
    categoryIdEqual? : number;
	categoryIdIn? : string;
	entryIdEqual? : string;
	entryIdIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	categoryFullIdsStartsWith? : string;
	statusEqual? : KalturaCategoryEntryStatus;
	statusIn? : string;
	creatorUserIdEqual? : string;
	creatorUserIdIn? : string;
}


export class KalturaCategoryEntryBaseFilter extends KalturaRelatedFilter {

    categoryIdEqual : number;
	categoryIdIn : string;
	entryIdEqual : string;
	entryIdIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	categoryFullIdsStartsWith : string;
	statusEqual : KalturaCategoryEntryStatus;
	statusIn : string;
	creatorUserIdEqual : string;
	creatorUserIdIn : string;

    constructor(data? : KalturaCategoryEntryBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryEntryBaseFilter' },
				categoryIdEqual : { type : 'n' },
				categoryIdIn : { type : 's' },
				entryIdEqual : { type : 's' },
				entryIdIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				categoryFullIdsStartsWith : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaCategoryEntryStatus, subType : 'KalturaCategoryEntryStatus' },
				statusIn : { type : 's' },
				creatorUserIdEqual : { type : 's' },
				creatorUserIdIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryEntryBaseFilter',KalturaCategoryEntryBaseFilter);
