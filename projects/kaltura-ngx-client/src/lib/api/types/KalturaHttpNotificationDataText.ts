
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaHttpNotificationData, KalturaHttpNotificationDataArgs } from './KalturaHttpNotificationData';

export interface KalturaHttpNotificationDataTextArgs  extends KalturaHttpNotificationDataArgs {
    content? : KalturaStringValue;
}


export class KalturaHttpNotificationDataText extends KalturaHttpNotificationData {

    content : KalturaStringValue;

    constructor(data? : KalturaHttpNotificationDataTextArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHttpNotificationDataText' },
				content : { type : 'o', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaHttpNotificationDataText'] = KalturaHttpNotificationDataText;