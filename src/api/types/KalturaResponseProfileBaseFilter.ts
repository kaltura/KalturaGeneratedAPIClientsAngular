
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaResponseProfileStatus } from './KalturaResponseProfileStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaResponseProfileBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	idIn? : string;
	systemNameEqual? : string;
	systemNameIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	statusEqual? : KalturaResponseProfileStatus;
	statusIn? : string;
}


export class KalturaResponseProfileBaseFilter extends KalturaFilter {

    idEqual : number;
	idIn : string;
	systemNameEqual : string;
	systemNameIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	statusEqual : KalturaResponseProfileStatus;
	statusIn : string;

    constructor(data? : KalturaResponseProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaResponseProfileBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				systemNameEqual : { type : 's' },
				systemNameIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaResponseProfileStatus, subType : 'KalturaResponseProfileStatus' },
				statusIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaResponseProfileBaseFilter',KalturaResponseProfileBaseFilter);
