
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaFileSyncDescriptorArgs  extends KalturaObjectBaseArgs {
    fileSyncLocalPath? : string;
	fileEncryptionKey? : string;
	fileSyncRemoteUrl? : string;
	fileSyncObjectSubType? : number;
}


export class KalturaFileSyncDescriptor extends KalturaObjectBase {

    fileSyncLocalPath : string;
	fileEncryptionKey : string;
	fileSyncRemoteUrl : string;
	fileSyncObjectSubType : number;

    constructor(data? : KalturaFileSyncDescriptorArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFileSyncDescriptor' },
				fileSyncLocalPath : { type : 's' },
				fileEncryptionKey : { type : 's' },
				fileSyncRemoteUrl : { type : 's' },
				fileSyncObjectSubType : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFileSyncDescriptor',KalturaFileSyncDescriptor);
