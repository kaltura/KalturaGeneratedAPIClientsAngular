
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaStringArgs  extends KalturaObjectBaseArgs {
    value? : string;
}


export class KalturaString extends KalturaObjectBase {

    value : string;

    constructor(data? : KalturaStringArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaString' },
				value : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaString'] = KalturaString;