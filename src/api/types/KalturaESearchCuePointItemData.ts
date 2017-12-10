
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchItemData, KalturaESearchItemDataArgs } from './KalturaESearchItemData';

export interface KalturaESearchCuePointItemDataArgs  extends KalturaESearchItemDataArgs {
    cuePointType? : string;
	id? : string;
	name? : string;
	text? : string;
	tags? : string;
	startTime? : string;
	endTime? : string;
	subType? : string;
	question? : string;
	answers? : string;
	hint? : string;
	explanation? : string;
}


export class KalturaESearchCuePointItemData extends KalturaESearchItemData {

    cuePointType : string;
	id : string;
	name : string;
	text : string;
	tags : string;
	startTime : string;
	endTime : string;
	subType : string;
	question : string;
	answers : string;
	hint : string;
	explanation : string;

    constructor(data? : KalturaESearchCuePointItemDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchCuePointItemData' },
				cuePointType : { type : 's' },
				id : { type : 's' },
				name : { type : 's' },
				text : { type : 's' },
				tags : { type : 's' },
				startTime : { type : 's' },
				endTime : { type : 's' },
				subType : { type : 's' },
				question : { type : 's' },
				answers : { type : 's' },
				hint : { type : 's' },
				explanation : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchCuePointItemData',KalturaESearchCuePointItemData);
