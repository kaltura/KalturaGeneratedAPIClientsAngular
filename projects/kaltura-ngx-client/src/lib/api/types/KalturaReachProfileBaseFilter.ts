
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaReachProfileStatus } from './KalturaReachProfileStatus';
import { KalturaReachProfileType } from './KalturaReachProfileType';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaReachProfileBaseFilterArgs  extends KalturaRelatedFilterArgs {
    idEqual? : number;
	idIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	statusEqual? : KalturaReachProfileStatus;
	statusIn? : string;
	profileTypeEqual? : KalturaReachProfileType;
	profileTypeIn? : string;
}


export class KalturaReachProfileBaseFilter extends KalturaRelatedFilter {

    idEqual : number;
	idIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	statusEqual : KalturaReachProfileStatus;
	statusIn : string;
	profileTypeEqual : KalturaReachProfileType;
	profileTypeIn : string;

    constructor(data? : KalturaReachProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReachProfileBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaReachProfileStatus, subType : 'KalturaReachProfileStatus' },
				statusIn : { type : 's' },
				profileTypeEqual : { type : 'en', subTypeConstructor : KalturaReachProfileType, subType : 'KalturaReachProfileType' },
				profileTypeIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaReachProfileBaseFilter'] = KalturaReachProfileBaseFilter;