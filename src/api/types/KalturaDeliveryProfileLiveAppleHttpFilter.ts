
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeliveryProfileLiveAppleHttpBaseFilter, KalturaDeliveryProfileLiveAppleHttpBaseFilterArgs } from './KalturaDeliveryProfileLiveAppleHttpBaseFilter';

export interface KalturaDeliveryProfileLiveAppleHttpFilterArgs  extends KalturaDeliveryProfileLiveAppleHttpBaseFilterArgs {
    
}


export class KalturaDeliveryProfileLiveAppleHttpFilter extends KalturaDeliveryProfileLiveAppleHttpBaseFilter {

    

    constructor(data? : KalturaDeliveryProfileLiveAppleHttpFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileLiveAppleHttpFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeliveryProfileLiveAppleHttpFilter',KalturaDeliveryProfileLiveAppleHttpFilter);
