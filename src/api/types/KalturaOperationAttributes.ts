
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaOperationAttributesArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaOperationAttributes extends KalturaObjectBase {

    

    constructor(data? : KalturaOperationAttributesArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaOperationAttributes' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaOperationAttributes',KalturaOperationAttributes);
