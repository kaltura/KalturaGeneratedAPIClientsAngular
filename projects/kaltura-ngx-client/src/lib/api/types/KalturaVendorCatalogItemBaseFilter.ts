
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVendorCatalogItemStatus } from './KalturaVendorCatalogItemStatus';
import { KalturaVendorServiceType } from './KalturaVendorServiceType';
import { KalturaVendorServiceFeature } from './KalturaVendorServiceFeature';
import { KalturaVendorServiceTurnAroundTime } from './KalturaVendorServiceTurnAroundTime';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaVendorCatalogItemBaseFilterArgs  extends KalturaRelatedFilterArgs {
    idEqual? : number;
	idIn? : string;
	idNotIn? : string;
	vendorPartnerIdEqual? : number;
	vendorPartnerIdIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	statusEqual? : KalturaVendorCatalogItemStatus;
	statusIn? : string;
	serviceTypeEqual? : KalturaVendorServiceType;
	serviceTypeIn? : string;
	serviceFeatureEqual? : KalturaVendorServiceFeature;
	serviceFeatureIn? : string;
	turnAroundTimeEqual? : KalturaVendorServiceTurnAroundTime;
	turnAroundTimeIn? : string;
}


export class KalturaVendorCatalogItemBaseFilter extends KalturaRelatedFilter {

    idEqual : number;
	idIn : string;
	idNotIn : string;
	vendorPartnerIdEqual : number;
	vendorPartnerIdIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	statusEqual : KalturaVendorCatalogItemStatus;
	statusIn : string;
	serviceTypeEqual : KalturaVendorServiceType;
	serviceTypeIn : string;
	serviceFeatureEqual : KalturaVendorServiceFeature;
	serviceFeatureIn : string;
	turnAroundTimeEqual : KalturaVendorServiceTurnAroundTime;
	turnAroundTimeIn : string;

    constructor(data? : KalturaVendorCatalogItemBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorCatalogItemBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				idNotIn : { type : 's' },
				vendorPartnerIdEqual : { type : 'n' },
				vendorPartnerIdIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaVendorCatalogItemStatus, subType : 'KalturaVendorCatalogItemStatus' },
				statusIn : { type : 's' },
				serviceTypeEqual : { type : 'en', subTypeConstructor : KalturaVendorServiceType, subType : 'KalturaVendorServiceType' },
				serviceTypeIn : { type : 's' },
				serviceFeatureEqual : { type : 'en', subTypeConstructor : KalturaVendorServiceFeature, subType : 'KalturaVendorServiceFeature' },
				serviceFeatureIn : { type : 's' },
				turnAroundTimeEqual : { type : 'en', subTypeConstructor : KalturaVendorServiceTurnAroundTime, subType : 'KalturaVendorServiceTurnAroundTime' },
				turnAroundTimeIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVendorCatalogItemBaseFilter'] = KalturaVendorCatalogItemBaseFilter;