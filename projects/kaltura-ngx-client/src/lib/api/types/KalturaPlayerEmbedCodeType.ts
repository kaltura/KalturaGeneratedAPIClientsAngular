
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPlayerEmbedCodeTypeArgs  extends KalturaObjectBaseArgs {
    id? : string;
	label? : string;
	entryOnly? : boolean;
	minVersion? : string;
}


export class KalturaPlayerEmbedCodeType extends KalturaObjectBase {

    id : string;
	label : string;
	entryOnly : boolean;
	minVersion : string;

    constructor(data? : KalturaPlayerEmbedCodeTypeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlayerEmbedCodeType' },
				id : { type : 's' },
				label : { type : 's' },
				entryOnly : { type : 'b' },
				minVersion : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPlayerEmbedCodeType'] = KalturaPlayerEmbedCodeType;