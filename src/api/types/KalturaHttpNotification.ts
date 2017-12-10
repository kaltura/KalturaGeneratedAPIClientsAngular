
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEventNotificationEventObjectType } from './KalturaEventNotificationEventObjectType';
import { KalturaEventNotificationEventType } from './KalturaEventNotificationEventType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaHttpNotificationArgs  extends KalturaObjectBaseArgs {
    object? : KalturaObjectBase;
	eventObjectType? : KalturaEventNotificationEventObjectType;
	eventNotificationJobId? : number;
	templateId? : number;
	templateName? : string;
	templateSystemName? : string;
	eventType? : KalturaEventNotificationEventType;
}


export class KalturaHttpNotification extends KalturaObjectBase {

    object : KalturaObjectBase;
	eventObjectType : KalturaEventNotificationEventObjectType;
	eventNotificationJobId : number;
	templateId : number;
	templateName : string;
	templateSystemName : string;
	eventType : KalturaEventNotificationEventType;

    constructor(data? : KalturaHttpNotificationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHttpNotification' },
				object : { type : 'o', subTypeConstructor : KalturaObjectBase, subType : 'KalturaObjectBase' },
				eventObjectType : { type : 'es', subTypeConstructor : KalturaEventNotificationEventObjectType, subType : 'KalturaEventNotificationEventObjectType' },
				eventNotificationJobId : { type : 'n' },
				templateId : { type : 'n' },
				templateName : { type : 's' },
				templateSystemName : { type : 's' },
				eventType : { type : 'es', subTypeConstructor : KalturaEventNotificationEventType, subType : 'KalturaEventNotificationEventType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHttpNotification',KalturaHttpNotification);
