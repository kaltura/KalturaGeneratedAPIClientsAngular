
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';

export interface KalturaSearchConditionArgs  extends KalturaSearchItemArgs {
    field? : string;
	value? : string;
}


export class KalturaSearchCondition extends KalturaSearchItem {

    field : string;
	value : string;

    constructor(data? : KalturaSearchConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchCondition' },
				field : { type : 's' },
				value : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSearchCondition'] = KalturaSearchCondition;