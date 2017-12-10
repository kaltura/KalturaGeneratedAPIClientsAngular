
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUrlResource, KalturaUrlResourceArgs } from './KalturaUrlResource';

export interface KalturaRemoteStorageResourceArgs  extends KalturaUrlResourceArgs {
    storageProfileId? : number;
}


export class KalturaRemoteStorageResource extends KalturaUrlResource {

    storageProfileId : number;

    constructor(data? : KalturaRemoteStorageResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRemoteStorageResource' },
				storageProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRemoteStorageResource',KalturaRemoteStorageResource);
