
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFileSyncDescriptor, KalturaFileSyncDescriptorArgs } from './KalturaFileSyncDescriptor';

export interface KalturaDestFileSyncDescriptorArgs  extends KalturaFileSyncDescriptorArgs {
    
}


export class KalturaDestFileSyncDescriptor extends KalturaFileSyncDescriptor {

    

    constructor(data? : KalturaDestFileSyncDescriptorArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDestFileSyncDescriptor' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDestFileSyncDescriptor'] = KalturaDestFileSyncDescriptor;