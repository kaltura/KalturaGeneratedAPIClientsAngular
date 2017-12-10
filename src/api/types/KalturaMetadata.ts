
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaMetadataStatus } from './KalturaMetadataStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMetadataArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaMetadata extends KalturaObjectBase {

    readonly id : number;
	readonly partnerId : number;
	readonly metadataProfileId : number;
	readonly metadataProfileVersion : number;
	readonly metadataObjectType : KalturaMetadataObjectType;
	readonly objectId : string;
	readonly version : number;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	readonly status : KalturaMetadataStatus;
	readonly xml : string;

    constructor(data? : KalturaMetadataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMetadata' },
				id : { type : 'n', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				metadataProfileId : { type : 'n', readOnly : true },
				metadataProfileVersion : { type : 'n', readOnly : true },
				metadataObjectType : { type : 'es', readOnly : true, subTypeConstructor : KalturaMetadataObjectType, subType : 'KalturaMetadataObjectType' },
				objectId : { type : 's', readOnly : true },
				version : { type : 'n', readOnly : true },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaMetadataStatus, subType : 'KalturaMetadataStatus' },
				xml : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetadata',KalturaMetadata);
