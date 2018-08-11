
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaConditionType } from './KalturaConditionType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaConditionArgs  extends KalturaObjectBaseArgs {
    description? : string;
	not? : boolean;
}


export class KalturaCondition extends KalturaObjectBase {

    readonly type : KalturaConditionType;
	description : string;
	not : boolean;

    constructor(data? : KalturaConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCondition' },
				type : { type : 'es', readOnly : true, subTypeConstructor : KalturaConditionType, subType : 'KalturaConditionType' },
				description : { type : 's' },
				not : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCondition'] = KalturaCondition;