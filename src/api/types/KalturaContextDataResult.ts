
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaString } from './KalturaString';
import { KalturaRuleAction } from './KalturaRuleAction';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaContextDataResultArgs  extends KalturaObjectBaseArgs {
    messages? : KalturaString[];
	actions? : KalturaRuleAction[];
}


export class KalturaContextDataResult extends KalturaObjectBase {

    messages : KalturaString[];
	actions : KalturaRuleAction[];

    constructor(data? : KalturaContextDataResultArgs)
    {
        super(data);
        if (typeof this.messages === 'undefined') this.messages = [];
		if (typeof this.actions === 'undefined') this.actions = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaContextDataResult' },
				messages : { type : 'a', subTypeConstructor : KalturaString, subType : 'KalturaString' },
				actions : { type : 'a', subTypeConstructor : KalturaRuleAction, subType : 'KalturaRuleAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaContextDataResult',KalturaContextDataResult);
