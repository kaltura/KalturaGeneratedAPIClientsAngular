
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchCuePointFieldName } from './KalturaESearchCuePointFieldName';
import { KalturaCuePointType } from './KalturaCuePointType';
import { KalturaESearchAbstractEntryItem, KalturaESearchAbstractEntryItemArgs } from './KalturaESearchAbstractEntryItem';

export interface KalturaESearchCuePointItemArgs  extends KalturaESearchAbstractEntryItemArgs {
    fieldName? : KalturaESearchCuePointFieldName;
	cuePointType? : KalturaCuePointType;
}


export class KalturaESearchCuePointItem extends KalturaESearchAbstractEntryItem {

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
