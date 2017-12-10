
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaGenericDistributionProviderStatus } from './KalturaGenericDistributionProviderStatus';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';

export interface KalturaGenericDistributionProviderBaseFilterArgs  extends KalturaDistributionProviderFilterArgs {
    idEqual? : number;
	idIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	partnerIdEqual? : number;
	partnerIdIn? : string;
	isDefaultEqual? : KalturaNullableBoolean;
	isDefaultIn? : string;
	statusEqual? : KalturaGenericDistributionProviderStatus;
	statusIn? : string;
}


export class KalturaGenericDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {

    idEqual : number;
	idIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	partnerIdEqual : number;
	partnerIdIn : string;
	isDefaultEqual : KalturaNullableBoolean;
	isDefaultIn : string;
	statusEqual : KalturaGenericDistributionProviderStatus;
	statusIn : string;

    constructor(data? : KalturaGenericDistributionProviderBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGenericDistributionProviderBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				partnerIdEqual : { type : 'n' },
				partnerIdIn : { type : 's' },
				isDefaultEqual : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				isDefaultIn : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaGenericDistributionProviderStatus, subType : 'KalturaGenericDistributionProviderStatus' },
				statusIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGenericDistributionProviderBaseFilter',KalturaGenericDistributionProviderBaseFilter);
