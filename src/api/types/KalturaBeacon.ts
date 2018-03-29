
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBeaconObjectTypes } from './KalturaBeaconObjectTypes';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBeaconArgs  extends KalturaObjectBaseArgs {
    relatedObjectType? : KalturaBeaconObjectTypes;
	eventType? : string;
	objectId? : string;
	privateData? : string;
	rawData? : string;
}


export class KalturaBeacon extends KalturaObjectBase {

    readonly id : string;
	readonly indexType : string;
	readonly updatedAt : Date;
	relatedObjectType : KalturaBeaconObjectTypes;
	eventType : string;
	objectId : string;
	privateData : string;
	rawData : string;

    constructor(data? : KalturaBeaconArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBeacon' },
				id : { type : 's', readOnly : true },
				indexType : { type : 's', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				relatedObjectType : { type : 'es', subTypeConstructor : KalturaBeaconObjectTypes, subType : 'KalturaBeaconObjectTypes' },
				eventType : { type : 's' },
				objectId : { type : 's' },
				privateData : { type : 's' },
				rawData : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBeacon',KalturaBeacon);
