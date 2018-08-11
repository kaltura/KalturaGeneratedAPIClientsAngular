
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaHttpNotificationData, KalturaHttpNotificationDataArgs } from './KalturaHttpNotificationData';

export interface KalturaHttpNotificationDataFieldsArgs  extends KalturaHttpNotificationDataArgs {
    
}


export class KalturaHttpNotificationDataFields extends KalturaHttpNotificationData {

    

    constructor(data? : KalturaHttpNotificationDataFieldsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHttpNotificationDataFields' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaHttpNotificationDataFields'] = KalturaHttpNotificationDataFields;