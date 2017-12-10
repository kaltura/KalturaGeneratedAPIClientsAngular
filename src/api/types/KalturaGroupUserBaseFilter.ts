
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGroupUserStatus } from './KalturaGroupUserStatus';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaGroupUserBaseFilterArgs  extends KalturaRelatedFilterArgs {
    userIdEqual? : string;
	userIdIn? : string;
	groupIdEqual? : string;
	groupIdIn? : string;
	statusEqual? : KalturaGroupUserStatus;
	statusIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
}


export class KalturaGroupUserBaseFilter extends KalturaRelatedFilter {

    userIdEqual : string;
	userIdIn : string;
	groupIdEqual : string;
	groupIdIn : string;
	statusEqual : KalturaGroupUserStatus;
	statusIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;

    constructor(data? : KalturaGroupUserBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGroupUserBaseFilter' },
				userIdEqual : { type : 's' },
				userIdIn : { type : 's' },
				groupIdEqual : { type : 's' },
				groupIdIn : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaGroupUserStatus, subType : 'KalturaGroupUserStatus' },
				statusIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGroupUserBaseFilter',KalturaGroupUserBaseFilter);
