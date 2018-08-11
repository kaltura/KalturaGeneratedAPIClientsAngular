
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryUserFilter } from './KalturaCategoryUserFilter';
import { KalturaEmailNotificationRecipientJobData, KalturaEmailNotificationRecipientJobDataArgs } from './KalturaEmailNotificationRecipientJobData';

export interface KalturaEmailNotificationCategoryRecipientJobDataArgs  extends KalturaEmailNotificationRecipientJobDataArgs {
    categoryUserFilter? : KalturaCategoryUserFilter;
}


export class KalturaEmailNotificationCategoryRecipientJobData extends KalturaEmailNotificationRecipientJobData {

    categoryUserFilter : KalturaCategoryUserFilter;

    constructor(data? : KalturaEmailNotificationCategoryRecipientJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEmailNotificationCategoryRecipientJobData' },
				categoryUserFilter : { type : 'o', subTypeConstructor : KalturaCategoryUserFilter, subType : 'KalturaCategoryUserFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEmailNotificationCategoryRecipientJobData'] = KalturaEmailNotificationCategoryRecipientJobData;