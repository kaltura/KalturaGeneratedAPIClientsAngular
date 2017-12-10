
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaOperationAttributes, KalturaOperationAttributesArgs } from './KalturaOperationAttributes';

export interface KalturaClipAttributesArgs  extends KalturaOperationAttributesArgs {
    offset? : number;
	duration? : number;
}


export class KalturaClipAttributes extends KalturaOperationAttributes {

    offset : number;
	duration : number;

    constructor(data? : KalturaClipAttributesArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaClipAttributes' },
				offset : { type : 'n' },
				duration : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaClipAttributes',KalturaClipAttributes);
