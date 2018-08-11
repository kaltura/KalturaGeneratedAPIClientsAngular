
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBusinessProcessNotificationTemplateFilter, KalturaBusinessProcessNotificationTemplateFilterArgs } from './KalturaBusinessProcessNotificationTemplateFilter';

export interface KalturaBusinessProcessAbortNotificationTemplateBaseFilterArgs  extends KalturaBusinessProcessNotificationTemplateFilterArgs {
    
}


export class KalturaBusinessProcessAbortNotificationTemplateBaseFilter extends KalturaBusinessProcessNotificationTemplateFilter {

    

    constructor(data? : KalturaBusinessProcessAbortNotificationTemplateBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBusinessProcessAbortNotificationTemplateBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBusinessProcessAbortNotificationTemplateBaseFilter'] = KalturaBusinessProcessAbortNotificationTemplateBaseFilter;