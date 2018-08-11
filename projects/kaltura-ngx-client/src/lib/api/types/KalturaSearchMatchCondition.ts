
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchCondition, KalturaSearchConditionArgs } from './KalturaSearchCondition';

export interface KalturaSearchMatchConditionArgs  extends KalturaSearchConditionArgs {
    not? : boolean;
}


export class KalturaSearchMatchCondition extends KalturaSearchCondition {

    not : boolean;

    constructor(data? : KalturaSearchMatchConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchMatchCondition' },
				not : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSearchMatchCondition'] = KalturaSearchMatchCondition;