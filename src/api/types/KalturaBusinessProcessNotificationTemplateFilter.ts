
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBusinessProcessNotificationTemplateBaseFilter, KalturaBusinessProcessNotificationTemplateBaseFilterArgs } from './KalturaBusinessProcessNotificationTemplateBaseFilter';

export interface KalturaBusinessProcessNotificationTemplateFilterArgs  extends KalturaBusinessProcessNotificationTemplateBaseFilterArgs {
    
}


export class KalturaBusinessProcessNotificationTemplateFilter extends KalturaBusinessProcessNotificationTemplateBaseFilter {

    

    constructor(data? : KalturaBusinessProcessNotificationTemplateFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBusinessProcessNotificationTemplateFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBusinessProcessNotificationTemplateFilter',KalturaBusinessProcessNotificationTemplateFilter);
