
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEventNotificationTemplate, KalturaEventNotificationTemplateArgs } from './KalturaEventNotificationTemplate';

export interface KalturaBusinessProcessNotificationTemplateArgs  extends KalturaEventNotificationTemplateArgs {
    serverId? : number;
	processId? : string;
	mainObjectCode? : string;
}


export class KalturaBusinessProcessNotificationTemplate extends KalturaEventNotificationTemplate {

    serverId : number;
	processId : string;
	mainObjectCode : string;

    constructor(data? : KalturaBusinessProcessNotificationTemplateArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBusinessProcessNotificationTemplate' },
				serverId : { type : 'n' },
				processId : { type : 's' },
				mainObjectCode : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBusinessProcessNotificationTemplate',KalturaBusinessProcessNotificationTemplate);
