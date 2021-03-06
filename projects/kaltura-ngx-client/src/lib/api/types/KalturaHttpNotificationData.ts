
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaHttpNotificationDataArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaHttpNotificationData extends KalturaObjectBase {

    

    constructor(data? : KalturaHttpNotificationDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHttpNotificationData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaHttpNotificationData'] = KalturaHttpNotificationData;