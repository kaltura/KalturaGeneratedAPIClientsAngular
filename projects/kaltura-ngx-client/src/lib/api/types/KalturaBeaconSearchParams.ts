
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBeaconSearchParamsArgs  extends KalturaObjectBaseArgs {
    objectId? : string;
}


export class KalturaBeaconSearchParams extends KalturaObjectBase {

    objectId : string;

    constructor(data? : KalturaBeaconSearchParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBeaconSearchParams' },
				objectId : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBeaconSearchParams'] = KalturaBeaconSearchParams;