
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaConversionAttributeArgs  extends KalturaObjectBaseArgs {
    flavorParamsId? : number;
	name? : string;
	value? : string;
}


export class KalturaConversionAttribute extends KalturaObjectBase {

    flavorParamsId : number;
	name : string;
	value : string;

    constructor(data? : KalturaConversionAttributeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConversionAttribute' },
				flavorParamsId : { type : 'n' },
				name : { type : 's' },
				value : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConversionAttribute',KalturaConversionAttribute);
