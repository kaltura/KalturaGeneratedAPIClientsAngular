
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRemotePathArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaRemotePath extends KalturaObjectBase {

    readonly storageProfileId : number;
	readonly uri : string;

    constructor(data? : KalturaRemotePathArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRemotePath' },
				storageProfileId : { type : 'n', readOnly : true },
				uri : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRemotePath'] = KalturaRemotePath;