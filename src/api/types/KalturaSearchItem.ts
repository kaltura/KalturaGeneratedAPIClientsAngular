
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSearchItemArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaSearchItem extends KalturaObjectBase {

    

    constructor(data? : KalturaSearchItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSearchItem',KalturaSearchItem);
