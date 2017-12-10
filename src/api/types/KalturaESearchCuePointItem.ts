
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchCuePointFieldName } from './KalturaESearchCuePointFieldName';
import { KalturaCuePointType } from './KalturaCuePointType';
import { KalturaESearchItem, KalturaESearchItemArgs } from './KalturaESearchItem';

export interface KalturaESearchCuePointItemArgs  extends KalturaESearchItemArgs {
    fieldName? : KalturaESearchCuePointFieldName;
	cuePointType? : KalturaCuePointType;
}


export class KalturaESearchCuePointItem extends KalturaESearchItem {

    fieldName : KalturaESearchCuePointFieldName;
	cuePointType : KalturaCuePointType;

    constructor(data? : KalturaESearchCuePointItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchCuePointItem' },
				fieldName : { type : 'es', subTypeConstructor : KalturaESearchCuePointFieldName, subType : 'KalturaESearchCuePointFieldName' },
				cuePointType : { type : 'es', subTypeConstructor : KalturaCuePointType, subType : 'KalturaCuePointType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchCuePointItem',KalturaESearchCuePointItem);
