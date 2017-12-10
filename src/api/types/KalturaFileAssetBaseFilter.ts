
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFileAssetObjectType } from './KalturaFileAssetObjectType';
import { KalturaFileAssetStatus } from './KalturaFileAssetStatus';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaFileAssetBaseFilterArgs  extends KalturaRelatedFilterArgs {
    idEqual? : number;
	idIn? : string;
	partnerIdEqual? : number;
	fileAssetObjectTypeEqual? : KalturaFileAssetObjectType;
	objectIdEqual? : string;
	objectIdIn? : string;
	createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
	updatedAtGreaterThanOrEqual? : number;
	updatedAtLessThanOrEqual? : number;
	statusEqual? : KalturaFileAssetStatus;
	statusIn? : string;
}


export class KalturaFileAssetBaseFilter extends KalturaRelatedFilter {

    idEqual : number;
	idIn : string;
	partnerIdEqual : number;
	fileAssetObjectTypeEqual : KalturaFileAssetObjectType;
	objectIdEqual : string;
	objectIdIn : string;
	createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;
	updatedAtGreaterThanOrEqual : number;
	updatedAtLessThanOrEqual : number;
	statusEqual : KalturaFileAssetStatus;
	statusIn : string;

    constructor(data? : KalturaFileAssetBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFileAssetBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				partnerIdEqual : { type : 'n' },
				fileAssetObjectTypeEqual : { type : 'es', subTypeConstructor : KalturaFileAssetObjectType, subType : 'KalturaFileAssetObjectType' },
				objectIdEqual : { type : 's' },
				objectIdIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'n' },
				createdAtLessThanOrEqual : { type : 'n' },
				updatedAtGreaterThanOrEqual : { type : 'n' },
				updatedAtLessThanOrEqual : { type : 'n' },
				statusEqual : { type : 'es', subTypeConstructor : KalturaFileAssetStatus, subType : 'KalturaFileAssetStatus' },
				statusIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFileAssetBaseFilter',KalturaFileAssetBaseFilter);
