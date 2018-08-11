
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEffect } from './KalturaEffect';
import { KalturaOperationAttributes, KalturaOperationAttributesArgs } from './KalturaOperationAttributes';

export interface KalturaClipAttributesArgs  extends KalturaOperationAttributesArgs {
    offset? : number;
	duration? : number;
	globalOffsetInDestination? : number;
	effectArray? : KalturaEffect[];
}


export class KalturaClipAttributes extends KalturaOperationAttributes {

    offset : number;
	duration : number;
	globalOffsetInDestination : number;
	effectArray : KalturaEffect[];

    constructor(data? : KalturaClipAttributesArgs)
    {
        super(data);
        if (typeof this.effectArray === 'undefined') this.effectArray = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaClipAttributes' },
				offset : { type : 'n' },
				duration : { type : 'n' },
				globalOffsetInDestination : { type : 'n' },
				effectArray : { type : 'a', subTypeConstructor : KalturaEffect, subType : 'KalturaEffect' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaClipAttributes'] = KalturaClipAttributes;