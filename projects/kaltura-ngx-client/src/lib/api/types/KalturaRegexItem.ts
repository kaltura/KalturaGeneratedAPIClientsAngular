
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRegexItemArgs  extends KalturaObjectBaseArgs {
    regex? : string;
}


export class KalturaRegexItem extends KalturaObjectBase {

    regex : string;

    constructor(data? : KalturaRegexItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRegexItem' },
				regex : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRegexItem'] = KalturaRegexItem;