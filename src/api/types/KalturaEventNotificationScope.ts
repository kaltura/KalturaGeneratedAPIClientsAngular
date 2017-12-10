
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEventNotificationEventObjectType } from './KalturaEventNotificationEventObjectType';
import { KalturaScope, KalturaScopeArgs } from './KalturaScope';

export interface KalturaEventNotificationScopeArgs  extends KalturaScopeArgs {
    objectId? : string;
	scopeObjectType? : KalturaEventNotificationEventObjectType;
}


export class KalturaEventNotificationScope extends KalturaScope {

    objectId : string;
	scopeObjectType : KalturaEventNotificationEventObjectType;

    constructor(data? : KalturaEventNotificationScopeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEventNotificationScope' },
				objectId : { type : 's' },
				scopeObjectType : { type : 'es', subTypeConstructor : KalturaEventNotificationEventObjectType, subType : 'KalturaEventNotificationEventObjectType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEventNotificationScope',KalturaEventNotificationScope);
