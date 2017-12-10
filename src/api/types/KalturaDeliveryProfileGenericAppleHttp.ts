
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';

export interface KalturaDeliveryProfileGenericAppleHttpArgs  extends KalturaDeliveryProfileArgs {
    pattern? : string;
	rendererClass? : string;
	manifestRedirect? : KalturaNullableBoolean;
}


export class KalturaDeliveryProfileGenericAppleHttp extends KalturaDeliveryProfile {

    pattern : string;
	rendererClass : string;
	manifestRedirect : KalturaNullableBoolean;

    constructor(data? : KalturaDeliveryProfileGenericAppleHttpArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileGenericAppleHttp' },
				pattern : { type : 's' },
				rendererClass : { type : 's' },
				manifestRedirect : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeliveryProfileGenericAppleHttp',KalturaDeliveryProfileGenericAppleHttp);
