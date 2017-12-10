
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';

export interface KalturaAccessControlLimitDeliveryProfilesActionArgs  extends KalturaRuleActionArgs {
    deliveryProfileIds? : string;
	isBlockedList? : boolean;
}


export class KalturaAccessControlLimitDeliveryProfilesAction extends KalturaRuleAction {

    deliveryProfileIds : string;
	isBlockedList : boolean;

    constructor(data? : KalturaAccessControlLimitDeliveryProfilesActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAccessControlLimitDeliveryProfilesAction' },
				deliveryProfileIds : { type : 's' },
				isBlockedList : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAccessControlLimitDeliveryProfilesAction',KalturaAccessControlLimitDeliveryProfilesAction);
