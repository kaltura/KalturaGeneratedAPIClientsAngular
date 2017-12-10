
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRuleActionType } from './KalturaRuleActionType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRuleActionArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaRuleAction extends KalturaObjectBase {

    readonly type : KalturaRuleActionType;

    constructor(data? : KalturaRuleActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRuleAction' },
				type : { type : 'es', readOnly : true, subTypeConstructor : KalturaRuleActionType, subType : 'KalturaRuleActionType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRuleAction',KalturaRuleAction);
