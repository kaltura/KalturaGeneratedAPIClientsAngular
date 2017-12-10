
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBusinessProcessNotificationTemplate, KalturaBusinessProcessNotificationTemplateArgs } from './KalturaBusinessProcessNotificationTemplate';

export interface KalturaBusinessProcessStartNotificationTemplateArgs  extends KalturaBusinessProcessNotificationTemplateArgs {
    abortOnDeletion? : boolean;
}


export class KalturaBusinessProcessStartNotificationTemplate extends KalturaBusinessProcessNotificationTemplate {

    abortOnDeletion : boolean;

    constructor(data? : KalturaBusinessProcessStartNotificationTemplateArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBusinessProcessStartNotificationTemplate' },
				abortOnDeletion : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBusinessProcessStartNotificationTemplate',KalturaBusinessProcessStartNotificationTemplate);
