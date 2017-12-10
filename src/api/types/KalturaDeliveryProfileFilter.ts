
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaDeliveryProfileBaseFilter, KalturaDeliveryProfileBaseFilterArgs } from './KalturaDeliveryProfileBaseFilter';

export interface KalturaDeliveryProfileFilterArgs  extends KalturaDeliveryProfileBaseFilterArgs {
    isLive? : KalturaNullableBoolean;
}


export class KalturaDeliveryProfileFilter extends KalturaDeliveryProfileBaseFilter {

    isLive : KalturaNullableBoolean;

    constructor(data? : KalturaDeliveryProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileFilter' },
				isLive : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeliveryProfileFilter',KalturaDeliveryProfileFilter);
