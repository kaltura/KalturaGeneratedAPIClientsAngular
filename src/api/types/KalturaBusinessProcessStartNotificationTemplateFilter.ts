
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBusinessProcessStartNotificationTemplateBaseFilter, KalturaBusinessProcessStartNotificationTemplateBaseFilterArgs } from './KalturaBusinessProcessStartNotificationTemplateBaseFilter';

export interface KalturaBusinessProcessStartNotificationTemplateFilterArgs  extends KalturaBusinessProcessStartNotificationTemplateBaseFilterArgs {
    
}


export class KalturaBusinessProcessStartNotificationTemplateFilter extends KalturaBusinessProcessStartNotificationTemplateBaseFilter {

    

    constructor(data? : KalturaBusinessProcessStartNotificationTemplateFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBusinessProcessStartNotificationTemplateFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBusinessProcessStartNotificationTemplateFilter',KalturaBusinessProcessStartNotificationTemplateFilter);
