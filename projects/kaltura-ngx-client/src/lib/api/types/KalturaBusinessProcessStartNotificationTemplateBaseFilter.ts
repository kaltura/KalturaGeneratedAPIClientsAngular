
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBusinessProcessNotificationTemplateFilter, KalturaBusinessProcessNotificationTemplateFilterArgs } from './KalturaBusinessProcessNotificationTemplateFilter';

export interface KalturaBusinessProcessStartNotificationTemplateBaseFilterArgs  extends KalturaBusinessProcessNotificationTemplateFilterArgs {
    
}


export class KalturaBusinessProcessStartNotificationTemplateBaseFilter extends KalturaBusinessProcessNotificationTemplateFilter {

    

    constructor(data? : KalturaBusinessProcessStartNotificationTemplateBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBusinessProcessStartNotificationTemplateBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBusinessProcessStartNotificationTemplateBaseFilter'] = KalturaBusinessProcessStartNotificationTemplateBaseFilter;