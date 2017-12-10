
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEmailNotificationRecipientArgs  extends KalturaObjectBaseArgs {
    email? : KalturaStringValue;
	name? : KalturaStringValue;
}


export class KalturaEmailNotificationRecipient extends KalturaObjectBase {

    email : KalturaStringValue;
	name : KalturaStringValue;

    constructor(data? : KalturaEmailNotificationRecipientArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEmailNotificationRecipient' },
				email : { type : 'o', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				name : { type : 'o', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEmailNotificationRecipient',KalturaEmailNotificationRecipient);
