
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';

export interface KalturaFileSyncResourceArgs  extends KalturaContentResourceArgs {
    fileSyncObjectType? : number;
	objectSubType? : number;
	objectId? : string;
	version? : string;
}


export class KalturaFileSyncResource extends KalturaContentResource {

    fileSyncObjectType : number;
	objectSubType : number;
	objectId : string;
	version : string;

    constructor(data? : KalturaFileSyncResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFileSyncResource' },
				fileSyncObjectType : { type : 'n' },
				objectSubType : { type : 'n' },
				objectId : { type : 's' },
				version : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFileSyncResource',KalturaFileSyncResource);
