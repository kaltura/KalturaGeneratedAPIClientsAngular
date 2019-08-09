
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaEventNotificationScope, KalturaEventNotificationScopeArgs } from './KalturaEventNotificationScope';

export interface KalturaEventNotificationDispatchScopeArgs  extends KalturaEventNotificationScopeArgs {
    dynamicValues? : KalturaKeyValue[];
}


export class KalturaEventNotificationDispatchScope extends KalturaEventNotificationScope {

    dynamicValues : KalturaKeyValue[];

    constructor(data? : KalturaEventNotificationDispatchScopeArgs)
    {
        super(data);
        if (typeof this.dynamicValues === 'undefined') this.dynamicValues = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEventNotificationDispatchScope' },
				dynamicValues : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEventNotificationDispatchScope'] = KalturaEventNotificationDispatchScope;