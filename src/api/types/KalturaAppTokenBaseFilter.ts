
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAppTokenStatus } from './KalturaAppTokenStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaAppTokenBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : string;
	idIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	statusEqual? : KalturaAppTokenStatus;
	statusIn? : string;
	sessionUserIdEqual? : string;
}


export class KalturaAppTokenBaseFilter extends KalturaFilter {

    idEqual : string;
	idIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	statusEqual : KalturaAppTokenStatus;
	statusIn : string;
	sessionUserIdEqual : string;

    constructor(data? : KalturaAppTokenBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAppTokenBaseFilter' },
				idEqual : { type : 's' },
				idIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaAppTokenStatus, subType : 'KalturaAppTokenStatus' },
				statusIn : { type : 's' },
				sessionUserIdEqual : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAppTokenBaseFilter',KalturaAppTokenBaseFilter);
