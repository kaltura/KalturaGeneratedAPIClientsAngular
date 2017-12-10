
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaString } from './KalturaString';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaESearchHighlightArgs  extends KalturaObjectBaseArgs {
    fieldName? : string;
	hits? : KalturaString[];
}


export class KalturaESearchHighlight extends KalturaObjectBase {

    fieldName : string;
	hits : KalturaString[];

    constructor(data? : KalturaESearchHighlightArgs)
    {
        super(data);
        if (typeof this.hits === 'undefined') this.hits = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchHighlight' },
				fieldName : { type : 's' },
				hits : { type : 'a', subTypeConstructor : KalturaString, subType : 'KalturaString' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchHighlight',KalturaESearchHighlight);
