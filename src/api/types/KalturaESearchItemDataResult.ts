
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchItemData } from './KalturaESearchItemData';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaESearchItemDataResultArgs  extends KalturaObjectBaseArgs {
    totalCount? : number;
	items? : KalturaESearchItemData[];
	itemsType? : string;
}


export class KalturaESearchItemDataResult extends KalturaObjectBase {

    totalCount : number;
	items : KalturaESearchItemData[];
	itemsType : string;

    constructor(data? : KalturaESearchItemDataResultArgs)
    {
        super(data);
        if (typeof this.items === 'undefined') this.items = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchItemDataResult' },
				totalCount : { type : 'n' },
				items : { type : 'a', subTypeConstructor : KalturaESearchItemData, subType : 'KalturaESearchItemData' },
				itemsType : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchItemDataResult',KalturaESearchItemDataResult);
