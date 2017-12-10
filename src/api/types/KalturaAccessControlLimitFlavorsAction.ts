
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';

export interface KalturaAccessControlLimitFlavorsActionArgs  extends KalturaRuleActionArgs {
    flavorParamsIds? : string;
	isBlockedList? : boolean;
}


export class KalturaAccessControlLimitFlavorsAction extends KalturaRuleAction {

    flavorParamsIds : string;
	isBlockedList : boolean;

    constructor(data? : KalturaAccessControlLimitFlavorsActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAccessControlLimitFlavorsAction' },
				flavorParamsIds : { type : 's' },
				isBlockedList : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAccessControlLimitFlavorsAction',KalturaAccessControlLimitFlavorsAction);
