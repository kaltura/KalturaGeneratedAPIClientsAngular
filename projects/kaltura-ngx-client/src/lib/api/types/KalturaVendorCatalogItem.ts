
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVendorCatalogItemStatus } from './KalturaVendorCatalogItemStatus';
import { KalturaVendorServiceType } from './KalturaVendorServiceType';
import { KalturaVendorServiceFeature } from './KalturaVendorServiceFeature';
import { KalturaVendorServiceTurnAroundTime } from './KalturaVendorServiceTurnAroundTime';
import { KalturaVendorCatalogItemPricing } from './KalturaVendorCatalogItemPricing';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaVendorCatalogItemArgs  extends KalturaObjectBaseArgs {
    vendorPartnerId? : number;
	name? : string;
	systemName? : string;
	serviceType? : KalturaVendorServiceType;
	turnAroundTime? : KalturaVendorServiceTurnAroundTime;
	pricing? : KalturaVendorCatalogItemPricing;
	allowResubmission? : boolean;
}


export class KalturaVendorCatalogItem extends KalturaObjectBase {

    readonly id : number;
	vendorPartnerId : number;
	name : string;
	systemName : string;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	readonly status : KalturaVendorCatalogItemStatus;
	serviceType : KalturaVendorServiceType;
	readonly serviceFeature : KalturaVendorServiceFeature;
	turnAroundTime : KalturaVendorServiceTurnAroundTime;
	pricing : KalturaVendorCatalogItemPricing;
	allowResubmission : boolean;

    constructor(data? : KalturaVendorCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorCatalogItem' },
				id : { type : 'n', readOnly : true },
				vendorPartnerId : { type : 'n' },
				name : { type : 's' },
				systemName : { type : 's' },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaVendorCatalogItemStatus, subType : 'KalturaVendorCatalogItemStatus' },
				serviceType : { type : 'en', subTypeConstructor : KalturaVendorServiceType, subType : 'KalturaVendorServiceType' },
				serviceFeature : { type : 'en', readOnly : true, subTypeConstructor : KalturaVendorServiceFeature, subType : 'KalturaVendorServiceFeature' },
				turnAroundTime : { type : 'en', subTypeConstructor : KalturaVendorServiceTurnAroundTime, subType : 'KalturaVendorServiceTurnAroundTime' },
				pricing : { type : 'o', subTypeConstructor : KalturaVendorCatalogItemPricing, subType : 'KalturaVendorCatalogItemPricing' },
				allowResubmission : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVendorCatalogItem'] = KalturaVendorCatalogItem;