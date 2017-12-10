
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBusinessProcessNotificationTemplate, KalturaBusinessProcessNotificationTemplateArgs } from './KalturaBusinessProcessNotificationTemplate';

export interface KalturaBusinessProcessSignalNotificationTemplateArgs  extends KalturaBusinessProcessNotificationTemplateArgs {
    message? : string;
	eventId? : string;
}


export class KalturaBusinessProcessSignalNotificationTemplate extends KalturaBusinessProcessNotificationTemplate {

    message : string;
	eventId : string;

    constructor(data? : KalturaBusinessProcessSignalNotificationTemplateArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBusinessProcessSignalNotificationTemplate' },
				message : { type : 's' },
				eventId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBusinessProcessSignalNotificationTemplate',KalturaBusinessProcessSignalNotificationTemplate);
