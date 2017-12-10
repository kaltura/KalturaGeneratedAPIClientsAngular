
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGeoCoderType } from './KalturaGeoCoderType';
import { KalturaMatchCondition, KalturaMatchConditionArgs } from './KalturaMatchCondition';

export interface KalturaAnonymousIPConditionArgs  extends KalturaMatchConditionArgs {
    geoCoderType? : KalturaGeoCoderType;
}


export class KalturaAnonymousIPCondition extends KalturaMatchCondition {

    geoCoderType : KalturaGeoCoderType;

    constructor(data? : KalturaAnonymousIPConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAnonymousIPCondition' },
				geoCoderType : { type : 'es', subTypeConstructor : KalturaGeoCoderType, subType : 'KalturaGeoCoderType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAnonymousIPCondition',KalturaAnonymousIPCondition);
