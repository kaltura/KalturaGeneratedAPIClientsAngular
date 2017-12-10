
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaResponseType } from './KalturaResponseType';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaHttpNotificationData, KalturaHttpNotificationDataArgs } from './KalturaHttpNotificationData';

export interface KalturaHttpNotificationObjectDataArgs  extends KalturaHttpNotificationDataArgs {
    apiObjectType? : string;
	format? : KalturaResponseType;
	ignoreNull? : boolean;
	code? : string;
	dataStringReplacements? : KalturaKeyValue[];
}


export class KalturaHttpNotificationObjectData extends KalturaHttpNotificationData {

    apiObjectType : string;
	format : KalturaResponseType;
	ignoreNull : boolean;
	code : string;
	dataStringReplacements : KalturaKeyValue[];

    constructor(data? : KalturaHttpNotificationObjectDataArgs)
    {
        super(data);
        if (typeof this.dataStringReplacements === 'undefined') this.dataStringReplacements = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHttpNotificationObjectData' },
				apiObjectType : { type : 's' },
				format : { type : 'en', subTypeConstructor : KalturaResponseType, subType : 'KalturaResponseType' },
				ignoreNull : { type : 'b' },
				code : { type : 's' },
				dataStringReplacements : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHttpNotificationObjectData',KalturaHttpNotificationObjectData);
