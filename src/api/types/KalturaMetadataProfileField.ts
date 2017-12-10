
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMetadataProfileFieldArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaMetadataProfileField extends KalturaObjectBase {

    readonly id : number;
	readonly xPath : string;
	readonly key : string;
	readonly label : string;

    constructor(data? : KalturaMetadataProfileFieldArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMetadataProfileField' },
				id : { type : 'n', readOnly : true },
				xPath : { type : 's', readOnly : true },
				key : { type : 's', readOnly : true },
				label : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetadataProfileField',KalturaMetadataProfileField);
