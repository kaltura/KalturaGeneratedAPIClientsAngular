
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaString } from './KalturaString';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaEventNotificationParameter, KalturaEventNotificationParameterArgs } from './KalturaEventNotificationParameter';

export interface KalturaEventNotificationArrayParameterArgs  extends KalturaEventNotificationParameterArgs {
    values? : KalturaString[];
	allowedValues? : KalturaStringValue[];
}


export class KalturaEventNotificationArrayParameter extends KalturaEventNotificationParameter {

    values : KalturaString[];
	allowedValues : KalturaStringValue[];

    constructor(data? : KalturaEventNotificationArrayParameterArgs)
    {
        super(data);
        if (typeof this.values === 'undefined') this.values = [];
		if (typeof this.allowedValues === 'undefined') this.allowedValues = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEventNotificationArrayParameter' },
				values : { type : 'a', subTypeConstructor : KalturaString, subType : 'KalturaString' },
				allowedValues : { type : 'a', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEventNotificationArrayParameter',KalturaEventNotificationArrayParameter);
