
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaString } from './KalturaString';
import { KalturaESearchItemData, KalturaESearchItemDataArgs } from './KalturaESearchItemData';

export interface KalturaESearchCuePointItemDataArgs  extends KalturaESearchItemDataArgs {
    cuePointType? : string;
	id? : string;
	name? : string;
	text? : string;
	tags? : KalturaString[];
	startTime? : string;
	endTime? : string;
	subType? : string;
	question? : string;
	answers? : KalturaString[];
	hint? : string;
	explanation? : string;
	assetId? : string;
}


export class KalturaESearchCuePointItemData extends KalturaESearchItemData {

    cuePointType : string;
	id : string;
	name : string;
	text : string;
	tags : KalturaString[];
	startTime : string;
	endTime : string;
	subType : string;
	question : string;
	answers : KalturaString[];
	hint : string;
	explanation : string;
	assetId : string;

    constructor(data? : KalturaESearchCuePointItemDataArgs)
    {
        super(data);
        if (typeof this.tags === 'undefined') this.tags = [];
		if (typeof this.answers === 'undefined') this.answers = [];
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
				tags : { type : 'a', subTypeConstructor : KalturaString, subType : 'KalturaString' },
				startTime : { type : 's' },
				endTime : { type : 's' },
				subType : { type : 's' },
				question : { type : 's' },
				answers : { type : 'a', subTypeConstructor : KalturaString, subType : 'KalturaString' },
				hint : { type : 's' },
				explanation : { type : 's' },
				assetId : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchCuePointItemData'] = KalturaESearchCuePointItemData;