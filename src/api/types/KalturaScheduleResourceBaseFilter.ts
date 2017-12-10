
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScheduleResourceStatus } from './KalturaScheduleResourceStatus';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaScheduleResourceBaseFilterArgs  extends KalturaRelatedFilterArgs {
    idEqual? : number;
	idIn? : string;
	idNotIn? : string;
	parentIdEqual? : number;
	parentIdIn? : string;
	nameEqual? : string;
	systemNameEqual? : string;
	systemNameIn? : string;
	statusEqual? : KalturaScheduleResourceStatus;
	statusIn? : string;
	tagsLike? : string;
	tagsMultiLikeOr? : string;
	tagsMultiLikeAnd? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
}


export class KalturaScheduleResourceBaseFilter extends KalturaRelatedFilter {

    idEqual : number;
	idIn : string;
	idNotIn : string;
	parentIdEqual : number;
	parentIdIn : string;
	nameEqual : string;
	systemNameEqual : string;
	systemNameIn : string;
	statusEqual : KalturaScheduleResourceStatus;
	statusIn : string;
	tagsLike : string;
	tagsMultiLikeOr : string;
	tagsMultiLikeAnd : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;

    constructor(data? : KalturaScheduleResourceBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaScheduleResourceBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				idNotIn : { type : 's' },
				parentIdEqual : { type : 'n' },
				parentIdIn : { type : 's' },
				nameEqual : { type : 's' },
				systemNameEqual : { type : 's' },
				systemNameIn : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaScheduleResourceStatus, subType : 'KalturaScheduleResourceStatus' },
				statusIn : { type : 's' },
				tagsLike : { type : 's' },
				tagsMultiLikeOr : { type : 's' },
				tagsMultiLikeAnd : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScheduleResourceBaseFilter',KalturaScheduleResourceBaseFilter);
