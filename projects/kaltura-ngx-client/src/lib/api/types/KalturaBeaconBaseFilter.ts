
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBeaconObjectTypes } from './KalturaBeaconObjectTypes';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaBeaconBaseFilterArgs  extends KalturaFilterArgs {
    updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	relatedObjectTypeIn? : string;
	relatedObjectTypeEqual? : KalturaBeaconObjectTypes;
	eventTypeIn? : string;
	objectIdIn? : string;
}


export class KalturaBeaconBaseFilter extends KalturaFilter {

    updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	relatedObjectTypeIn : string;
	relatedObjectTypeEqual : KalturaBeaconObjectTypes;
	eventTypeIn : string;
	objectIdIn : string;

    constructor(data? : KalturaBeaconBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBeaconBaseFilter' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				relatedObjectTypeIn : { type : 's' },
				relatedObjectTypeEqual : { type : 'es', subTypeConstructor : KalturaBeaconObjectTypes, subType : 'KalturaBeaconObjectTypes' },
				eventTypeIn : { type : 's' },
				objectIdIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBeaconBaseFilter'] = KalturaBeaconBaseFilter;