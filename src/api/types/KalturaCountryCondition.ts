
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGeoCoderType } from './KalturaGeoCoderType';
import { KalturaMatchCondition, KalturaMatchConditionArgs } from './KalturaMatchCondition';

export interface KalturaCountryConditionArgs  extends KalturaMatchConditionArgs {
    geoCoderType? : KalturaGeoCoderType;
}


export class KalturaCountryCondition extends KalturaMatchCondition {

    geoCoderType : KalturaGeoCoderType;

    constructor(data? : KalturaCountryConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCountryCondition' },
				geoCoderType : { type : 'es', subTypeConstructor : KalturaGeoCoderType, subType : 'KalturaGeoCoderType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCountryCondition',KalturaCountryCondition);
