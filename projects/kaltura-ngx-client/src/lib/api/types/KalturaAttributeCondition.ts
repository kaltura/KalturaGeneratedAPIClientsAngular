
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';

export interface KalturaAttributeConditionArgs  extends KalturaSearchItemArgs {
    value? : string;
}


export class KalturaAttributeCondition extends KalturaSearchItem {

    value : string;

    constructor(data? : KalturaAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAttributeCondition' },
				value : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAttributeCondition'] = KalturaAttributeCondition;