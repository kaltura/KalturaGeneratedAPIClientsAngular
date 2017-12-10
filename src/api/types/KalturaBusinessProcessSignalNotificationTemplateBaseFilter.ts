
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaBusinessProcessSignalNotificationTemplateBaseFilter',KalturaBusinessProcessSignalNotificationTemplateBaseFilter);
