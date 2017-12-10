
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaShortLinkStatus } from './KalturaShortLinkStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaShortLinkBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : string;
	idIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	expiresAtGreaterThanOrEqual? : number;
	expiresAtLessThanOrEqual? : number;
	partnerIdEqual? : number;
	partnerIdIn? : string;
	userIdEqual? : string;
	userIdIn? : string;
	systemNameEqual? : string;
	systemNameIn? : string;
	statusEqual? : KalturaShortLinkStatus;
	statusIn? : string;
}


export class KalturaShortLinkBaseFilter extends KalturaFilter {

    idEqual : string;
	idIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	expiresAtGreaterThanOrEqual : number;
	expiresAtLessThanOrEqual : number;
	partnerIdEqual : number;
	partnerIdIn : string;
	userIdEqual : string;
	userIdIn : string;
	systemNameEqual : string;
	systemNameIn : string;
	statusEqual : KalturaShortLinkStatus;
	statusIn : string;

    constructor(data? : KalturaShortLinkBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaShortLinkBaseFilter' },
				idEqual : { type : 's' },
				idIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				expiresAtGreaterThanOrEqual : { type : 'n' },
				expiresAtLessThanOrEqual : { type : 'n' },
				partnerIdEqual : { type : 'n' },
				partnerIdIn : { type : 's' },
				userIdEqual : { type : 's' },
				userIdIn : { type : 's' },
				systemNameEqual : { type : 's' },
				systemNameIn : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaShortLinkStatus, subType : 'KalturaShortLinkStatus' },
				statusIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaShortLinkBaseFilter',KalturaShortLinkBaseFilter);
