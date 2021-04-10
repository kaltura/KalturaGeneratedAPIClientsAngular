
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPlayReadyContentKeyArgs  extends KalturaObjectBaseArgs {
    keyId? : string;
	contentKey? : string;
}


export class KalturaPlayReadyContentKey extends KalturaObjectBase {

    keyId : string;
	contentKey : string;

    constructor(data? : KalturaPlayReadyContentKeyArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlayReadyContentKey' },
				keyId : { type : 's' },
				contentKey : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPlayReadyContentKey'] = KalturaPlayReadyContentKey;