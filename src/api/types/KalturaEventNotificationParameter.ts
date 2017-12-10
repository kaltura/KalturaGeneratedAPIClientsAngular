
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEventNotificationParameterArgs  extends KalturaObjectBaseArgs {
    key? : string;
	description? : string;
	value? : KalturaStringValue;
}


export class KalturaEventNotificationParameter extends KalturaObjectBase {

    key : string;
	description : string;
	value : KalturaStringValue;

    constructor(data? : KalturaEventNotificationParameterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEventNotificationParameter' },
				key : { type : 's' },
				description : { type : 's' },
				value : { type : 'o', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEventNotificationParameter',KalturaEventNotificationParameter);
