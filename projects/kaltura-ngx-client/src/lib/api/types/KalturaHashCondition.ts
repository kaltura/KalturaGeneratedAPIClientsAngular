
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaHashConditionArgs  extends KalturaConditionArgs {
    hashName? : string;
	hashSecret? : string;
}


export class KalturaHashCondition extends KalturaCondition {

    hashName : string;
	hashSecret : string;

    constructor(data? : KalturaHashConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHashCondition' },
				hashName : { type : 's' },
				hashSecret : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaHashCondition'] = KalturaHashCondition;