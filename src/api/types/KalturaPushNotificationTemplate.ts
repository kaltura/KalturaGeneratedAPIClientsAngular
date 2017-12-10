
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPushEventNotificationParameter } from './KalturaPushEventNotificationParameter';
import { KalturaResponseType } from './KalturaResponseType';
import { KalturaEventNotificationTemplate, KalturaEventNotificationTemplateArgs } from './KalturaEventNotificationTemplate';

export interface KalturaPushNotificationTemplateArgs  extends KalturaEventNotificationTemplateArgs {
    queueNameParameters? : KalturaPushEventNotificationParameter[];
	queueKeyParameters? : KalturaPushEventNotificationParameter[];
	apiObjectType? : string;
	objectFormat? : KalturaResponseType;
	responseProfileId? : number;
}


export class KalturaPushNotificationTemplate extends KalturaEventNotificationTemplate {

    queueNameParameters : KalturaPushEventNotificationParameter[];
	queueKeyParameters : KalturaPushEventNotificationParameter[];
	apiObjectType : string;
	objectFormat : KalturaResponseType;
	responseProfileId : number;

    constructor(data? : KalturaPushNotificationTemplateArgs)
    {
        super(data);
        if (typeof this.queueNameParameters === 'undefined') this.queueNameParameters = [];
		if (typeof this.queueKeyParameters === 'undefined') this.queueKeyParameters = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPushNotificationTemplate' },
				queueNameParameters : { type : 'a', subTypeConstructor : KalturaPushEventNotificationParameter, subType : 'KalturaPushEventNotificationParameter' },
				queueKeyParameters : { type : 'a', subTypeConstructor : KalturaPushEventNotificationParameter, subType : 'KalturaPushEventNotificationParameter' },
				apiObjectType : { type : 's' },
				objectFormat : { type : 'en', subTypeConstructor : KalturaResponseType, subType : 'KalturaResponseType' },
				responseProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPushNotificationTemplate',KalturaPushNotificationTemplate);
