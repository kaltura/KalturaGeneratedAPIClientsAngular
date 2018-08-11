
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBusinessProcessNotificationTemplateFilter, KalturaBusinessProcessNotificationTemplateFilterArgs } from './KalturaBusinessProcessNotificationTemplateFilter';

export interface KalturaBusinessProcessSignalNotificationTemplateBaseFilterArgs  extends KalturaBusinessProcessNotificationTemplateFilterArgs {
    
}


export class KalturaBusinessProcessSignalNotificationTemplateBaseFilter extends KalturaBusinessProcessNotificationTemplateFilter {

    

    constructor(data? : KalturaBusinessProcessSignalNotificationTemplateBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBusinessProcessSignalNotificationTemplateBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBusinessProcessSignalNotificationTemplateBaseFilter'] = KalturaBusinessProcessSignalNotificationTemplateBaseFilter;