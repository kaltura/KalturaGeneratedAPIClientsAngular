
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVirtualEventStatus } from './KalturaVirtualEventStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaVirtualEventBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	idIn? : string;
	idNotIn? : string;
	partnerIdEqual? : number;
	partnerIdIn? : string;
	statusEqual? : KalturaVirtualEventStatus;
	statusIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
}


export class KalturaVirtualEventBaseFilter extends KalturaFilter {

    idEqual : number;
	idIn : string;
	idNotIn : string;
	partnerIdEqual : number;
	partnerIdIn : string;
	statusEqual : KalturaVirtualEventStatus;
	statusIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;

    constructor(data? : KalturaVirtualEventBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVirtualEventBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				idNotIn : { type : 's' },
				partnerIdEqual : { type : 'n' },
				partnerIdIn : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaVirtualEventStatus, subType : 'KalturaVirtualEventStatus' },
				statusIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVirtualEventBaseFilter'] = KalturaVirtualEventBaseFilter;