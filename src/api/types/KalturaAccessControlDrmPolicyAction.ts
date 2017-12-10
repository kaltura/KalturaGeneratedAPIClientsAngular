
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';

export interface KalturaAccessControlDrmPolicyActionArgs  extends KalturaRuleActionArgs {
    policyId? : number;
}


export class KalturaAccessControlDrmPolicyAction extends KalturaRuleAction {

    policyId : number;

    constructor(data? : KalturaAccessControlDrmPolicyActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAccessControlDrmPolicyAction' },
				policyId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAccessControlDrmPolicyAction',KalturaAccessControlDrmPolicyAction);
