
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVirusScanProfileStatus } from './KalturaVirusScanProfileStatus';
import { KalturaVirusScanEngineType } from './KalturaVirusScanEngineType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaVirusScanProfileBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	idIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	partnerIdEqual? : number;
	partnerIdIn? : string;
	nameEqual? : string;
	nameLike? : string;
	statusEqual? : KalturaVirusScanProfileStatus;
	statusIn? : string;
	engineTypeEqual? : KalturaVirusScanEngineType;
	engineTypeIn? : string;
}


export class KalturaVirusScanProfileBaseFilter extends KalturaFilter {

    idEqual : number;
	idIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	partnerIdEqual : number;
	partnerIdIn : string;
	nameEqual : string;
	nameLike : string;
	statusEqual : KalturaVirusScanProfileStatus;
	statusIn : string;
	engineTypeEqual : KalturaVirusScanEngineType;
	engineTypeIn : string;

    constructor(data? : KalturaVirusScanProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVirusScanProfileBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				partnerIdEqual : { type : 'n' },
				partnerIdIn : { type : 's' },
				nameEqual : { type : 's' },
				nameLike : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaVirusScanProfileStatus, subType : 'KalturaVirusScanProfileStatus' },
				statusIn : { type : 's' },
				engineTypeEqual : { type : 'es', subTypeConstructor : KalturaVirusScanEngineType, subType : 'KalturaVirusScanEngineType' },
				engineTypeIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVirusScanProfileBaseFilter',KalturaVirusScanProfileBaseFilter);
