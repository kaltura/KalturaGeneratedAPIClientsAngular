
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaDeliveryStatus } from './KalturaDeliveryStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaDeliveryProfileBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	idIn? : string;
	partnerIdEqual? : number;
	partnerIdIn? : string;
	systemNameEqual? : string;
	systemNameIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	streamerTypeEqual? : KalturaPlaybackProtocol;
	statusEqual? : KalturaDeliveryStatus;
	statusIn? : string;
}


export class KalturaDeliveryProfileBaseFilter extends KalturaFilter {

    idEqual : number;
	idIn : string;
	partnerIdEqual : number;
	partnerIdIn : string;
	systemNameEqual : string;
	systemNameIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	streamerTypeEqual : KalturaPlaybackProtocol;
	statusEqual : KalturaDeliveryStatus;
	statusIn : string;

    constructor(data? : KalturaDeliveryProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				partnerIdEqual : { type : 'n' },
				partnerIdIn : { type : 's' },
				systemNameEqual : { type : 's' },
				systemNameIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				streamerTypeEqual : { type : 'es', subTypeConstructor : KalturaPlaybackProtocol, subType : 'KalturaPlaybackProtocol' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaDeliveryStatus, subType : 'KalturaDeliveryStatus' },
				statusIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeliveryProfileBaseFilter',KalturaDeliveryProfileBaseFilter);
