
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStorageProfileStatus } from './KalturaStorageProfileStatus';
import { KalturaStorageProfileProtocol } from './KalturaStorageProfileProtocol';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaStorageProfileBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	idIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	partnerIdEqual? : number;
	partnerIdIn? : string;
	systemNameEqual? : string;
	systemNameIn? : string;
	statusEqual? : KalturaStorageProfileStatus;
	statusIn? : string;
	protocolEqual? : KalturaStorageProfileProtocol;
	protocolIn? : string;
}


export class KalturaStorageProfileBaseFilter extends KalturaFilter {

    idEqual : number;
	idIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	partnerIdEqual : number;
	partnerIdIn : string;
	systemNameEqual : string;
	systemNameIn : string;
	statusEqual : KalturaStorageProfileStatus;
	statusIn : string;
	protocolEqual : KalturaStorageProfileProtocol;
	protocolIn : string;

    constructor(data? : KalturaStorageProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaStorageProfileBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				partnerIdEqual : { type : 'n' },
				partnerIdIn : { type : 's' },
				systemNameEqual : { type : 's' },
				systemNameIn : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaStorageProfileStatus, subType : 'KalturaStorageProfileStatus' },
				statusIn : { type : 's' },
				protocolEqual : { type : 'es', subTypeConstructor : KalturaStorageProfileProtocol, subType : 'KalturaStorageProfileProtocol' },
				protocolIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaStorageProfileBaseFilter',KalturaStorageProfileBaseFilter);
