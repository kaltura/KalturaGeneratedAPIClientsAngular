
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaBusinessProcessServerBaseFilter, KalturaBusinessProcessServerBaseFilterArgs } from './KalturaBusinessProcessServerBaseFilter';

export interface KalturaBusinessProcessServerFilterArgs  extends KalturaBusinessProcessServerBaseFilterArgs {
    currentDcOrExternal? : KalturaNullableBoolean;
	currentDc? : KalturaNullableBoolean;
}


export class KalturaBusinessProcessServerFilter extends KalturaBusinessProcessServerBaseFilter {

    currentDcOrExternal : KalturaNullableBoolean;
	currentDc : KalturaNullableBoolean;

    constructor(data? : KalturaBusinessProcessServerFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBusinessProcessServerFilter' },
				currentDcOrExternal : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				currentDc : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBusinessProcessServerFilter',KalturaBusinessProcessServerFilter);
