
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectTask, KalturaObjectTaskArgs } from './KalturaObjectTask';

export interface KalturaDispatchEventNotificationObjectTaskArgs  extends KalturaObjectTaskArgs {
    eventNotificationTemplateId? : number;
}


export class KalturaDispatchEventNotificationObjectTask extends KalturaObjectTask {

    eventNotificationTemplateId : number;

    constructor(data? : KalturaDispatchEventNotificationObjectTaskArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDispatchEventNotificationObjectTask' },
				eventNotificationTemplateId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDispatchEventNotificationObjectTask',KalturaDispatchEventNotificationObjectTask);
