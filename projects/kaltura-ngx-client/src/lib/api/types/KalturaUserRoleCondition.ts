
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaUserRoleConditionArgs  extends KalturaConditionArgs {
    roleIds? : string;
}


export class KalturaUserRoleCondition extends KalturaCondition {

    roleIds : string;

    constructor(data? : KalturaUserRoleConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserRoleCondition' },
				roleIds : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUserRoleCondition'] = KalturaUserRoleCondition;