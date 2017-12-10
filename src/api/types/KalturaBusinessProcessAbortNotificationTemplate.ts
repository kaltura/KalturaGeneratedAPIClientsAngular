
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBusinessProcessNotificationTemplate, KalturaBusinessProcessNotificationTemplateArgs } from './KalturaBusinessProcessNotificationTemplate';

export interface KalturaBusinessProcessAbortNotificationTemplateArgs  extends KalturaBusinessProcessNotificationTemplateArgs {
    
}


export class KalturaBusinessProcessAbortNotificationTemplate extends KalturaBusinessProcessNotificationTemplate {

    

    constructor(data? : KalturaBusinessProcessAbortNotificationTemplateArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBusinessProcessAbortNotificationTemplate' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBusinessProcessAbortNotificationTemplate',KalturaBusinessProcessAbortNotificationTemplate);
