
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRuleAction } from './KalturaRuleAction';
import { KalturaCondition } from './KalturaCondition';
import { KalturaContextTypeHolder } from './KalturaContextTypeHolder';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRuleArgs  extends KalturaObjectBaseArgs {
    description? : string;
	ruleData? : string;
	message? : string;
	code? : string;
	actions? : KalturaRuleAction[];
	conditions? : KalturaCondition[];
	contexts? : KalturaContextTypeHolder[];
	stopProcessing? : boolean;
	forceAdminValidation? : KalturaNullableBoolean;
}


export class KalturaRule extends KalturaObjectBase {

    description : string;
	ruleData : string;
	message : string;
	code : string;
	actions : KalturaRuleAction[];
	conditions : KalturaCondition[];
	contexts : KalturaContextTypeHolder[];
	stopProcessing : boolean;
	forceAdminValidation : KalturaNullableBoolean;

    constructor(data? : KalturaRuleArgs)
    {
        super(data);
        if (typeof this.actions === 'undefined') this.actions = [];
		if (typeof this.conditions === 'undefined') this.conditions = [];
		if (typeof this.contexts === 'undefined') this.contexts = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRule' },
				description : { type : 's' },
				ruleData : { type : 's' },
				message : { type : 's' },
				code : { type : 's' },
				actions : { type : 'a', subTypeConstructor : KalturaRuleAction, subType : 'KalturaRuleAction' },
				conditions : { type : 'a', subTypeConstructor : KalturaCondition, subType : 'KalturaCondition' },
				contexts : { type : 'a', subTypeConstructor : KalturaContextTypeHolder, subType : 'KalturaContextTypeHolder' },
				stopProcessing : { type : 'b' },
				forceAdminValidation : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRule',KalturaRule);
