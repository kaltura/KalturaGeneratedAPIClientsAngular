
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSsoStatus } from './KalturaSsoStatus';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaSsoBaseFilterArgs  extends KalturaRelatedFilterArgs {
    idEqual? : number;
	idIn? : string;
	applicationTypeEqual? : string;
	partnerIdEqual? : number;
	domainEqual? : string;
	statusEqual? : KalturaSsoStatus;
	statusIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	redirectUrlEqual? : string;
}


export class KalturaSsoBaseFilter extends KalturaRelatedFilter {

    idEqual : number;
	idIn : string;
	applicationTypeEqual : string;
	partnerIdEqual : number;
	domainEqual : string;
	statusEqual : KalturaSsoStatus;
	statusIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	redirectUrlEqual : string;

    constructor(data? : KalturaSsoBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSsoBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				applicationTypeEqual : { type : 's' },
				partnerIdEqual : { type : 'n' },
				domainEqual : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaSsoStatus, subType : 'KalturaSsoStatus' },
				statusIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				redirectUrlEqual : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSsoBaseFilter'] = KalturaSsoBaseFilter;