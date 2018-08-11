
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchHighlight } from './KalturaESearchHighlight';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaESearchItemDataArgs  extends KalturaObjectBaseArgs {
    highlight? : KalturaESearchHighlight[];
}


export class KalturaESearchItemData extends KalturaObjectBase {

    highlight : KalturaESearchHighlight[];

    constructor(data? : KalturaESearchItemDataArgs)
    {
        super(data);
        if (typeof this.highlight === 'undefined') this.highlight = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchItemData' },
				highlight : { type : 'a', subTypeConstructor : KalturaESearchHighlight, subType : 'KalturaESearchHighlight' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchItemData'] = KalturaESearchItemData;