
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryVendorTaskStatus } from './KalturaEntryVendorTaskStatus';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaEntryVendorTaskBaseFilterArgs  extends KalturaRelatedFilterArgs {
    idEqual? : number;
	idIn? : string;
	vendorPartnerIdEqual? : number;
	vendorPartnerIdIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	queueTimeGreaterThanOrEqual? : Date;
	queueTimeLessThanOrEqual? : Date;
	finishTimeGreaterThanOrEqual? : Date;
	finishTimeLessThanOrEqual? : Date;
	entryIdEqual? : string;
	statusEqual? : KalturaEntryVendorTaskStatus;
	statusIn? : string;
	reachProfileIdEqual? : number;
	reachProfileIdIn? : string;
	catalogItemIdEqual? : number;
	catalogItemIdIn? : string;
	userIdEqual? : string;
	contextEqual? : string;
}


export class KalturaEntryVendorTaskBaseFilter extends KalturaRelatedFilter {

    idEqual : number;
	idIn : string;
	vendorPartnerIdEqual : number;
	vendorPartnerIdIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	queueTimeGreaterThanOrEqual : Date;
	queueTimeLessThanOrEqual : Date;
	finishTimeGreaterThanOrEqual : Date;
	finishTimeLessThanOrEqual : Date;
	entryIdEqual : string;
	statusEqual : KalturaEntryVendorTaskStatus;
	statusIn : string;
	reachProfileIdEqual : number;
	reachProfileIdIn : string;
	catalogItemIdEqual : number;
	catalogItemIdIn : string;
	userIdEqual : string;
	contextEqual : string;

    constructor(data? : KalturaEntryVendorTaskBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryVendorTaskBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				vendorPartnerIdEqual : { type : 'n' },
				vendorPartnerIdIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				queueTimeGreaterThanOrEqual : { type : 'd' },
				queueTimeLessThanOrEqual : { type : 'd' },
				finishTimeGreaterThanOrEqual : { type : 'd' },
				finishTimeLessThanOrEqual : { type : 'd' },
				entryIdEqual : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaEntryVendorTaskStatus, subType : 'KalturaEntryVendorTaskStatus' },
				statusIn : { type : 's' },
				reachProfileIdEqual : { type : 'n' },
				reachProfileIdIn : { type : 's' },
				catalogItemIdEqual : { type : 'n' },
				catalogItemIdIn : { type : 's' },
				userIdEqual : { type : 's' },
				contextEqual : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEntryVendorTaskBaseFilter'] = KalturaEntryVendorTaskBaseFilter;