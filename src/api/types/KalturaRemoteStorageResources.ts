
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRemoteStorageResource } from './KalturaRemoteStorageResource';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';

export interface KalturaRemoteStorageResourcesArgs  extends KalturaContentResourceArgs {
    resources? : KalturaRemoteStorageResource[];
}


export class KalturaRemoteStorageResources extends KalturaContentResource {

    resources : KalturaRemoteStorageResource[];

    constructor(data? : KalturaRemoteStorageResourcesArgs)
    {
        super(data);
        if (typeof this.resources === 'undefined') this.resources = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRemoteStorageResources' },
				resources : { type : 'a', subTypeConstructor : KalturaRemoteStorageResource, subType : 'KalturaRemoteStorageResource' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRemoteStorageResources',KalturaRemoteStorageResources);
