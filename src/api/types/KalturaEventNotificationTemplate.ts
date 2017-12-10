
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEventNotificationTemplateType } from './KalturaEventNotificationTemplateType';
import { KalturaEventNotificationTemplateStatus } from './KalturaEventNotificationTemplateStatus';
import { KalturaEventNotificationEventType } from './KalturaEventNotificationEventType';
import { KalturaEventNotificationEventObjectType } from './KalturaEventNotificationEventObjectType';
import { KalturaCondition } from './KalturaCondition';
import { KalturaEventNotificationParameter } from './KalturaEventNotificationParameter';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEventNotificationTemplateArgs  extends KalturaObjectBaseArgs {
    name? : string;
	systemName? : string;
	description? : string;
	type? : KalturaEventNotificationTemplateType;
	manualDispatchEnabled? : boolean;
	automaticDispatchEnabled? : boolean;
	eventType? : KalturaEventNotificationEventType;
	eventObjectType? : KalturaEventNotificationEventObjectType;
	eventConditions? : KalturaCondition[];
	contentParameters? : KalturaEventNotificationParameter[];
	userParameters? : KalturaEventNotificationParameter[];
}


export class KalturaEventNotificationTemplate extends KalturaObjectBase {

    readonly id : number;
	readonly partnerId : number;
	name : string;
	systemName : string;
	description : string;
	type : KalturaEventNotificationTemplateType;
	readonly status : KalturaEventNotificationTemplateStatus;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	manualDispatchEnabled : boolean;
	automaticDispatchEnabled : boolean;
	eventType : KalturaEventNotificationEventType;
	eventObjectType : KalturaEventNotificationEventObjectType;
	eventConditions : KalturaCondition[];
	contentParameters : KalturaEventNotificationParameter[];
	userParameters : KalturaEventNotificationParameter[];

    constructor(data? : KalturaEventNotificationTemplateArgs)
    {
        super(data);
        if (typeof this.eventConditions === 'undefined') this.eventConditions = [];
		if (typeof this.contentParameters === 'undefined') this.contentParameters = [];
		if (typeof this.userParameters === 'undefined') this.userParameters = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEventNotificationTemplate' },
				id : { type : 'n', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				name : { type : 's' },
				systemName : { type : 's' },
				description : { type : 's' },
				type : { type : 'es', subTypeConstructor : KalturaEventNotificationTemplateType, subType : 'KalturaEventNotificationTemplateType' },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaEventNotificationTemplateStatus, subType : 'KalturaEventNotificationTemplateStatus' },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				manualDispatchEnabled : { type : 'b' },
				automaticDispatchEnabled : { type : 'b' },
				eventType : { type : 'es', subTypeConstructor : KalturaEventNotificationEventType, subType : 'KalturaEventNotificationEventType' },
				eventObjectType : { type : 'es', subTypeConstructor : KalturaEventNotificationEventObjectType, subType : 'KalturaEventNotificationEventObjectType' },
				eventConditions : { type : 'a', subTypeConstructor : KalturaCondition, subType : 'KalturaCondition' },
				contentParameters : { type : 'a', subTypeConstructor : KalturaEventNotificationParameter, subType : 'KalturaEventNotificationParameter' },
				userParameters : { type : 'a', subTypeConstructor : KalturaEventNotificationParameter, subType : 'KalturaEventNotificationParameter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEventNotificationTemplate',KalturaEventNotificationTemplate);
